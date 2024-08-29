Video Streaming Project
This project is a simple video streaming application built with React, React Router, and Video.js. The application allows users to browse through video thumbnails and click on them to watch the corresponding videos. It includes features such as resuming video playback from where the user left off and preventing fast-forwarding to ensure videos are watched in their entirety.

Table of Contents
Features
Technologies Used
Getting Started
Installation
Running the Application
Project Structure

Features
Video Playback: Watch videos directly in the application.
Resume Playback: Videos resume from where you left off, ensuring continuity.
Prevent Fast-Forwarding: Custom logic ensures videos cannot be skipped or fast-forwarded, promoting full viewing.
Responsive Design: The video player is responsive and adapts to different screen sizes.
Technologies Used
React: JavaScript library for building user interfaces.
React Router: Library for handling navigation and routing in React applications.
Video.js: HTML5 video player library used for handling video playback.
Cloudinary: Cloud-based media management service used for hosting video files.
Getting Started
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/sKush-1/video-streaming-asssignment.git
cd video-streaming-project
Install dependencies:

bash
Copy code
npm install
Running the Application
Start the development server:
Copy code
npm run dev


bash
Copy code
npm run dev
Open the application in your browser:

Navigate to http://localhost:5173 in your browser to view the application.

Project Structure
src/components/VideoThumbnail.jsx: Displays video thumbnails with links to the video player.
src/components/PlayVideo.jsx: Handles video playback with custom controls and resume functionality.
src/App.jsx: Main component that manages the routing and state of the application.
src/index.js: Entry point for the React application.
Usage
Add Videos:

Video data is passed as props to the VideoThumbnail component, which renders the video details (e.g., name, link).
Browse and Play Videos:

On the home page, users see a list of video thumbnails. Clicking on a thumbnail navigates to the video player page, where the selected video is played.
Playback Controls:

The video player includes standard playback controls. The video will start from where it was last stopped, and users are prevented from skipping ahead.

