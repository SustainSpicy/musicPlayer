import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./slice/playerSlice";

const store = configureStore({
  reducer: { player: playerSlice },
});

export default store;
