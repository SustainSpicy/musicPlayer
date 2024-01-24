import React from "react";
import SongItem from "./SongItem";
import { useDispatch, useSelector } from "react-redux";

const SongList = ({ songData }) => {
  // Redux state selector to get the playing status and current song
  const { isPlaying, currentSong } = useSelector((state) => state.player);

  return (
    <section className="container relative mx-auto shadow-lg mt-2 overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 min-w-[550px]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {/* Empty header cell for spacing */}
            <th scope="col" className="px-6 py-3"></th>
            {/* Header cells for Song Title, Artist Name, Track Number, and Action button */}
            <th scope="col" className="px-6 py-3">
              Song Title
            </th>
            <th scope="col" className="px-6 py-3">
              Artist Name
            </th>
            <th scope="col" className="px-6 py-3">
              Track number
            </th>
            <th scope="col" className="px-6 py-3">
              Action button
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Map through songData and render a SongItem component for each song */}
          {songData.map((song) => {
            return (
              <SongItem
                key={song.id}
                {...song}
                currentSong={currentSong}
                isPlaying={isPlaying}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default SongList;
