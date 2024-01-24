import React, { useState } from "react";
import { FaCloudUploadAlt, FaPause, FaPlay, FaPlus } from "react-icons/fa";
import { PiArrowsDownUpBold } from "react-icons/pi";
import UploadForm from "./UploadForm";
import {
  pause,
  play,
  searchSong,
  updateList,
} from "../redux/slice/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ title: "", name: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlayAll = () => {
    if (isPlaying) return dispatch(pause());
    console.log("Playing All Music");
    return dispatch(play(1));
  };
  const handleAddAllToQueue = () => {
    console.log("All music added to queue");
  };

  const handleChange = (e) => {
    e.preventDefault();

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleUpload = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setTimeout(() => {
      setOpenDropdown(false);
      dispatch(updateList(formData));
      setIsLoading(false);
    }, 3000);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchSong(query));
  };

  return (
    <nav className="w-full">
      <div className=" container relative bg-gray-100 min-w-2  flex flex-wrap items-center justify-between mx-auto p-1">
        <div className="w-full flex justify-between ">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="text-black bg-gray-100 hover:bg-gray-200 border border-gray-400 focus:ring-2 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5    focus:outline-none "
              onClick={handlePlayAll}
            >
              {isPlaying ? (
                <FaPause size={16} style={{ display: "inline" }} />
              ) : (
                <FaPlay size={16} style={{ display: "inline" }} />
              )}

              <span className="hidden md:inline"> Play All</span>
            </button>

            <button
              type="button"
              className="text-black bg-gray-100 hover:bg-gray-200 border border-gray-400 focus:ring-2 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5    focus:outline-none "
              onClick={handleAddAllToQueue}
            >
              <FaPlus size={16} style={{ display: "inline" }} />
              <span className="hidden md:inline"> Add All</span>
            </button>
          </div>
          <div className="relative flex items-center gap-2">
            <button
              type="button"
              className="relative text-black bg-gray-100 hover:bg-gray-200 border border-gray-400 focus:ring-2 focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              onClick={(e) => {
                e.stopPropagation();
                setOpenDropdown(!openDropdown);
                e.stopPropagation();
              }}
            >
              <FaCloudUploadAlt size={16} style={{ display: "inline" }} />
              <span className="hidden md:inline"> Upload </span>
            </button>
            {openDropdown && (
              <UploadForm
                isLoading={isLoading}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleUpload}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            )}
            {/* <form> */}
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="music-search"
                className="block w-full h-10 p-4 ps-10 text-sm text-gray-700 border border-gray-500 rounded-3xl bg-gray-200 focus:ring-gray-500 focus:border-gray-500 "
                placeholder="Filter"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
