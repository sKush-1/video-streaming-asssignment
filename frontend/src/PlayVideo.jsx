import './App.css'
import VideoPlayer from './VideoPlayer'
import { useRef } from 'react'
import "video.js/dist/video-js.css";
import { useLocation } from 'react-router-dom';



function PlayVideo() {
  const playerRef = useRef(null);
  const location = useLocation();
  const videoLink = location.state?.videoLink; 

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,

    sources: [
      {
        src: videoLink,
        type: "video/mp4"
      }
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    const savedTime = localStorage.getItem("video-playback-time");

    player.on("loadedmetadata", () => {
      if (savedTime) {
        player.currentTime(savedTime);
      }
    });

    let lastTime = savedTime || 0;

    player.on("timeupdate", () => {
      // Save the current playback time to localStorage
      const currentTime = player.currentTime();
      localStorage.setItem("video-playback-time", currentTime);

      // Custom logic to prevent fast-forwarding
      if (currentTime > lastTime + 0.5) {
        player.currentTime(lastTime);
      } else {
        lastTime = currentTime;
      }
    });

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>
     <div className='video-player'>
     <VideoPlayer
        options={videoPlayerOptions} 
        onReady={handlePlayerReady} 
      />  
     </div>
    </>
  );
}

export default PlayVideo;
