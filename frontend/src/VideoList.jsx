import React, { useEffect, useState } from "react";
import VideoThumbnail from "./VideoThumnail";
import api from "./api";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(()=> {
    const getVideos = async () => {
      try {
      const response = await api.get("api/v1/get-videos ");
        setVideos(response.data.videos);
      } catch (error) {
        console.log("Failed to fetch videos", error);
      }
      setLoading(false);
    };
    getVideos();
  }, []);
  
  return (
    <>
      <h1>Video Library</h1>
      <div className="videos-container">
        {videos?.map((video) => (
          <VideoThumbnail key={video._id} video={video} />
        ))}
      </div>
    </>
  );
};

export default VideoList;
