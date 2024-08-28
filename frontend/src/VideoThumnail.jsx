import React from 'react';
import {Link} from 'react-router-dom'


const VideoThumbnail = ({video}) => {
  return (
    <div>
      <Link to="/play-video"
        state={{ videoLink: video.link }}  
        >
        <div className="video-card">
          <img
            src={video.thumbnail}
            width={250}
            height={250}
            className="video-image"
          />
          <p className="video-name">{video.name}</p>
        </div>
      </Link>
    </div>
  )
}

export default VideoThumbnail