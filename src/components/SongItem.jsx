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

const SongItem = ({ title, name, id, currentSong, isPlaying }) => {
  const dispatch = useDispatch();

  const handlePlay = (id) => {
    if (isPlaying) return dispatch(pause());
    return dispatch(play(id));
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-3 flex gap-2 ">
        <MdDragIndicator />{" "}
        <PlayButton
          onClick={() => handlePlay(id)}
          isPlaying={currentSong?.id === id}
        />
      </td>
      <td
        scope="row"
        className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </td>
      <td className="px-6 py-3 whitespace-nowrap">{name}</td>
      <td className="px-6 py-3">{id}</td>
      <td className="px-6 py-3 flex items-center gap-1">
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
