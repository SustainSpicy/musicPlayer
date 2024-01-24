import { createSlice } from "@reduxjs/toolkit";
import { songData } from "../../constants";

const loadPlayerFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem("player");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    return [];
  }
};

const savePlayerToLocalStorage = (player) => {
  localStorage.setItem("player", JSON.stringify(player));
};

const initialState = {
  items: loadPlayerFromLocalStorage(),
};

const playerSlice = createSlice({
  name: "player",
  initialState: {
    songs: [],
    searchList: [],
    isPlaying: false,
    currentSong: null,
  },
  reducers: {
    loadList: (state) => {
      state.songs = songData;
    },
    play: (state, action) => {
      const id = action.payload;

      state.isPlaying = true;

      state.currentSong = songData.find((song) => song.id === id);
      console.log("Playing music " + id);
    },
    pause: (state) => {
      state.isPlaying = false;

      state.currentSong = null;
    },
    updateList: (state, action) => {
      const { title, name } = action.payload;
      state.songs.push({
        id: state.songs.length + 1,
        title,
        name,
      });
    },
    searchSong: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      const filteredSongs = state.songs.filter(
        (song) =>
          song.id.toString() === searchQuery ||
          song.title.toLowerCase().includes(searchQuery) ||
          song.name.toLowerCase().includes(searchQuery)
      );

      state.searchList = [...filteredSongs];
    },
  },
});

export const { play, pause, loadList, updateList, searchSong } =
  playerSlice.actions;

export default playerSlice.reducer;
