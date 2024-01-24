import { FaPause, FaPlay } from "react-icons/fa";

const PlayButton = ({ isPlaying, onClick }) => {
  if (isPlaying) return <FaPause onClick={onClick} size={16} />;
  return <FaPlay onClick={onClick} size={16} />;
};

export default PlayButton;
