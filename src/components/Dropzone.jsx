import { useState } from "react";

const Dropzone = ({ selectedFile, setSelectedFile, maxSizeInBytes }) => {
  const [msg, setMsg] = useState("No file selected");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (file) {
      // Check if the file size is within the allowed limit
      if (file.size <= maxSizeInBytes) {
        setSelectedFile(file);
      } else {
        // File size exceeds the allowed limit
        console.log("Error file selected");
        setMsg("File size exceeds the allowed limit.");
      }
    }
  };

  return (
    <div className="flex flex-col items-start text-gray-300 justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-700"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">.MP3 .WAV</p>
        </div>

        <input
          id="dropzone-file"
          type="file"
          name="dropzone"
          onChange={handleFileChange}
          className="hidden"
          accept=".mp3, .wav, audio/*"
        />
        <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full">
          {selectedFile ? selectedFile.name : msg}
        </p>
      </label>
    </div>
  );
};

export default Dropzone;
