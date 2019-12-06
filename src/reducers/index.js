import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Playing Games", time: "3:01" },
    { title: "Come Thru", time: "3:46" },
    { title: "Normal Girl", time: "4:12" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
