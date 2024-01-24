import React from "react";
import Dropzone from "./Dropzone";
import Modal from "./utils/Modal";

import Progress from "./utils/Progress";

const UploadForm = ({
  selectedFile,
  setSelectedFile,
  isLoading,
  formData,
  handleChange,
  handleSubmit,
}) => {
  const { title, name } = formData;

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute overflow-hidden flex flex-col gap-2 text-left max-w-[17rem] pt-5 pb-2 px-1 top-16 left-[-4rem] z-10 text-white bg-gray-600 rounded-lg shadow-lg "
    >
      {/* Song Title input */}
      <div>
        <label
          htmlFor="small-input"
          className="block text-sm font-medium text-gray-300"
        >
          Song Title
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="block w-full h-10 p-4 text-sm text-gray-300 border border-gray-500 rounded-lg bg-gray-700 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          required
        />
      </div>

      {/* Artist Name input */}
      <div>
        <label
          htmlFor="small-input"
          className="block text-sm font-medium text-gray-300"
        >
          Artist Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="block w-full h-10 p-4 text-sm text-gray-300 border border-gray-500 rounded-lg bg-gray-700 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          required
        />
      </div>

      {/* Dropzone for file selection */}
      <Dropzone
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        maxSizeInBytes={10485760}
      />

      {/* Upload button */}
      <button
        type="submit"
        className="relative text-black bg-gray-100 disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none "
        disabled={!selectedFile}
      >
        <span>Upload</span>
      </button>

      {/* Loader and progress during upload */}
      <span className="">
        {isLoading && (
          <Modal>
            <Progress />
            <p>Uploading...</p>
          </Modal>
        )}
      </span>
    </form>
  );
};

export default UploadForm;
