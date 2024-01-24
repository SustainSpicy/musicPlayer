import React from "react";
import { CiHeart } from "react-icons/ci";
import { TiTick } from "react-icons/ti";
import { IoIosShareAlt } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDragIndicator } from "react-icons/md";
import PlayButton from "./utils/PlayButton";
import { useDispatch } from "react-redux";
import { pause, play } from "../redux/slice/playerSlice";
import { FaHeart } from "react-icons/fa";
import ReactionBtn from "./utils/ReactionBt";
import { useAlertContext } from "../providers/AlertProvider";

const SongItem = ({ title, name, id, currentSong, isPlaying }) => {
  // Redux dispatch hook
  const dispatch = useDispatch();

  // Custom alert context hook
  const { showMessage } = useAlertContext();

  // Function to handle play button click
  const handlePlay = (id, currentSong) => {
    // Check if there is a current song and if its id matches the provided id
    if (currentSong && id === currentSong.id) {
      // If the song is already playing, dispatch a pause action
      return dispatch(pause(id));
    }

    // Show a message when playing music
    console.log("Playing music");
    showMessage("Playing music");

    // Dispatch play action for the specified song id
    return dispatch(play(id));
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
      {/* Table cell for drag indicator and play button */}
      <td className="px-6 py-3 flex gap-2 ">
        <MdDragIndicator />{" "}
        <PlayButton
          onClick={() => handlePlay(id, currentSong)}
          isPlaying={currentSong?.id === id}
        />
      </td>
      {/* Table cell for song title */}
      <td
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </td>
      {/* Table cell for artist name */}
      <td className="px-6 py-3 whitespace-nowrap">{name}</td>
      {/* Table cell for song ID */}
      <td className="px-6 py-3">{id}</td>
      {/* Table cell for reaction buttons */}
      <td className="px-6 py-3 flex items-center gap-1">
        {/* Custom ReactionBtn component with heart, tick, share, and dropdown icons */}
        <ReactionBtn
          element1={<FaHeart size={20} style={{ color: "#b91010" }} />}
          element2={<CiHeart size={24} />}
        />
        <TiTick size={24} style={{ color: "#1090b9" }} />
        <IoIosShareAlt size={24} style={{ color: "#10b937" }} />
        <IoMdArrowDropdown size={24} />
      </td>
    </tr>
  );
};

export default SongItem;
