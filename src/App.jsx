import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SongList from "./components/SongList";
import { loadList } from "./redux/slice/playerSlice";
import { useEffect } from "react";
import { Dropdown } from "flowbite-react";
import AlertProvider from "./providers/AlertProvider";

function App() {
  const dispatch = useDispatch();
  const { searchList, songs } = useSelector((state) => state.player);

  useEffect(() => {
    dispatch(loadList());
  }, []);

  return (
    <>
      <Navbar />

      <SongList songData={searchList.length > 0 ? searchList : songs} />
    </>
  );
}

export default App;
