import React, { useState } from 'react';
import './Upload.css';
import * as XLSX from 'xlsx';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AWS from 'aws-sdk';
import { auth } from '../services/firebaseConfig'; 

// Register the JSON syntax
SyntaxHighlighter.registerLanguage('json', json);

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_AWS_REGION,
});

const s3 = new AWS.S3();
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const Upload = () => {
  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [jsonSize, setJsonSize] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');


  const userUid = auth.currentUser.uid;
  const handleFileUpload = (file) => {
    setError(''); // Reset error message
    const validExtensions = ['xlsx', 'xls', 'numbers'];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!validExtensions.includes(fileExtension)) {
      setError('Unsupported file type. Please upload a .xlsx/.xls/.numbers file.');
      return;
    }

    setFileName(file.name); // Set the file name
    setFileSize(file.size); // Set the file size
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetsData = {};
      workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName];
        sheetsData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
      });

      setFileData(sheetsData);
      setJsonSize(new Blob([JSON.stringify(sheetsData)]).size); // Set the JSON size

      // Upload JSON to S3
      const jsonBlob = new Blob([JSON.stringify(sheetsData)], { type: 'application/json' });
      const s3Params = {
        Bucket: 'userfileuploadjson', // Replace with your S3 bucket name
        Key: `${userUid}/${file.name}.json`,
        Body: jsonBlob,
        ContentType: 'application/json',
      };

      s3.upload(s3Params, async (err, data) => {
        if (err) {
          setError('Error uploading file to S3:\n' + err.message);
          console.error(err);
          return;
        }

        // Retrieve existing file locations from DynamoDB
        const getParams = {
          TableName: 'UserFiles',
          Key: { uid: userUid },
        };

        try {
          const result = await dynamoDB.get(getParams).promise();
          const existingFiles = result.Item ? result.Item.fileLocations : [];

          // Append new file location to the array
          const updatedFiles = [...existingFiles, data.Location];

          // Store updated file locations in DynamoDB
          const updateParams = {
            TableName: 'UserFiles',
            Key: { uid: userUid },
            UpdateExpression: 'set fileLocations = :fileLocations',
            ExpressionAttributeValues: {
              ':fileLocations': updatedFiles,
            },
          };

          await dynamoDB.update(updateParams).promise();
          console.log('File metadata stored in DynamoDB');
        } catch (dynamoErr) {
          if (dynamoErr.code === 'ValidationException') {
            // Handle validation exception
            setError('Validation error: The provided key element does not match the schema.');
          } else {
            setError('Error storing file metadata in DynamoDB');
          }
          console.error(dynamoErr);
        }
      });
    };

    reader.readAsArrayBuffer(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (file) handleFileUpload(file);
  };


  return (
    <div className="upload-container">
      <h1>Upload Your Emissions Data</h1>
      <h3>We will evaluate the data and get back to you with your customized scenario modelling.</h3>
      {error && <p className="error-message">{error}</p>}
      <div
        className={`file-drop-area ${dragOver ? 'drag-over' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput').click()}
      >
        <input
          type="file"
          id="fileInput"
          onChange={handleInputChange}
          style={{ display: 'none' }}
        />
        {fileName ? (
          <p className="file-name">Uploaded File: <span>{fileName}</span> ({(fileSize / 1024).toFixed(2)} KB)</p>
        ) : (
          <>
            <span className="plus-sign">+</span>
            <p>Click or Drag a file here to upload</p>
          </>
        )}
      </div>

      {fileData && (
        <>
          <hr className="divider" /> {/* Divider */}
          <div className="file-data">
            <h3>Thank you! We'll evaluate your data shortly. You can preview the parsed data below.</h3>
            {/* TODO: In production, comment out next two lines */}
            {/* <p>JSON Size: {(jsonSize / 1024).toFixed(2)} KB</p>
            <p>Space Saved: {((fileSize - jsonSize) / 1024).toFixed(2)} KB ({((1 - jsonSize / fileSize) * 100).toFixed(2)}%)</p> */}
            <div className="scrollable-preview">
              <SyntaxHighlighter
                language="json"
                style={tomorrowNight}
                customStyle={{
                  fontSize: '14px',
                  width: '100%',
                }}
              >
                {JSON.stringify(fileData, null, 2)}
              </SyntaxHighlighter>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Upload;
