import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";

test("renders Navbar correctly", () => {
  render(<Navbar />);

  const playAllButton = screen.getByText(/play all/i);
  const uploadButton = screen.getByText(/upload/i);

  expect(playAllButton).toBeInTheDocument();
  expect(uploadButton).toBeInTheDocument();
});
