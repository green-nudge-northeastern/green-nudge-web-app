import React from 'react';
import './Upload.css';
import { useState } from 'react';
import * as XLSX from 'xlsx';

const Upload = () => {
    const [fileData, setFileData] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];

            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setFileData(jsonData);
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="upload-container">
            <h1>Upload Your Bill</h1>
            <h6>It will be parsed and saved into the database.</h6>
            <input type="file" onChange={handleFileUpload} />
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
