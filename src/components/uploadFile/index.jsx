import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { RiFileAddFill } from "react-icons/ri";
import "./file.css";

const FileUploadButton = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Pass the selected file to the parent component
    onFileSelect(file);
  };

  return (
    <div>
      <label htmlFor="file-upload" className="custom-file-upload">
        Upload File
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".jpg, .jpeg, .png, .pdf" // Define the accepted file types
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUploadButton;
