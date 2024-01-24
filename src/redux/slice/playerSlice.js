// Importing necessary dependencies
import { createSlice } from "@reduxjs/toolkit";
import { songData } from "../../constants";

// Helper function to load player data from local storage
const loadPlayerFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem("player");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    return [];
  }
};

// Helper function to save player data to local storage
const savePlayerToLocalStorage = (player) => {
  localStorage.setItem("player", JSON.stringify(player));
};

// Initial state for the player reducer
const initialState = {
  items: loadPlayerFromLocalStorage(),
};

// Creating the player slice using createSlice from Redux Toolkit
const playerSlice = createSlice({
  name: "player",
  initialState: {
    songs: [],
    searchList: [],
    isPlaying: false,
    currentSong: null,
  },
  reducers: {
    // Action to load the list of songs
    loadList: (state) => {
      state.songs = songData;
    },
    // Action to play a specific song
    play: (state, action) => {
      const id = action.payload;

      state.currentSong = songData.find((song) => song.id === id);
      state.isPlaying = true;
      console.log("Playing music " + id);
    },
    // Action to pause the currently playing song
    pause: (state) => {
      state.isPlaying = false;
      state.currentSong = null;
      console.log("Song paused");
    },
    // Action to update the list of songs with a new entry
    updateList: (state, action) => {
      const { title, name } = action.payload;
      state.songs.push({
        id: state.songs.length + 1,
        title,
        name,
      });
    },
    // Action to search for a song based on a query
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

// Exporting individual actions from the player slice
export const { play, pause, loadList, updateList, searchSong } =
  playerSlice.actions;

// Exporting the player reducer
export default playerSlice.reducer;
