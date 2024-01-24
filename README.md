# React Music Player App

## Overview

This React application is a simple music player that allows users to view a list of songs, play them, and add new songs to the playlist. The application is structured with various components responsible for different functionalities.

### Component Structure

- **App**: The main component responsible for rendering the Navbar and SongList components. It utilizes Redux for state management.

- **Navbar**: The navigation bar component with play, add, and upload functionality. It includes a search feature to filter songs.

- **SongList**: Displays a table of songs with columns for title, artist name, track number, and action buttons. Utilizes the SongItem component for each song.

- **SongItem**: Represents each individual song in the list. It includes a play button, song details, and action buttons for reactions.

- **UploadForm**: A form component within the Navbar for uploading new songs. It includes a Dropzone for file selection and displays a loading modal during the upload process.

- **Filter music**: A form component within the Navbar for searching specific songs. it can filter based on track number, song name or artist name

## State Management

The application uses Redux for state management. The main state is handled by the `playerSlice`, which includes information about the list of songs, current playing status, and the current song being played.

The popup alerts are managed by React context, a powerful state management feature that allows data to be shared and accessed across components in a React application.

## Local Development

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-music-player.git
   cd react-music-player

    npm install

    npm run dev
   ```
