import React from "react";
import { render, screen } from "@testing-library/react";
import SongList from "../components/SongList";

test("renders SongList correctly", () => {
  const songs = [
    { id: 1, title: "Song 1", name: "Artist 1" },
    { id: 2, title: "Song 2", name: "Artist 2" },
  ];

  render(<SongList songData={songs} />);

  const song1Title = screen.getByText(/Song 1/i);
  const song2Title = screen.getByText(/Song 2/i);

  expect(song1Title).toBeInTheDocument();
  expect(song2Title).toBeInTheDocument();
});
