import React, { useState } from 'react';
import './Upload.css';
import * as XLSX from 'xlsx';

const Upload = () => {
    const [fileData, setFileData] = useState(null);
    const [fileName, setFileName] = useState('');
    const [dragOver, setDragOver] = useState(false);
    const [error, setError] = useState('');

    const handleFileUpload = (file) => {
        // Reset error message
        setError('');

        // Check for supported file type
        const validExtensions = ['xlsx'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (!validExtensions.includes(fileExtension)) {
            setError('Unsupported file type. Please upload a .xlsx file.');
            return;
        }

        setFileName(file.name); // Set the file name
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
                    <p className="file-name">Uploaded File: <span>{fileName}</span></p>
                ) : (
                    <>
                        <span className="plus-sign">+</span>
                        <p>Click or Drag a file here to upload</p>
                    </>
                )}
            </div>
            {fileData && (
                <div className="file-data">
                    <h2>Preview: Parsed Data</h2>
                    <pre>{JSON.stringify(fileData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Upload;
