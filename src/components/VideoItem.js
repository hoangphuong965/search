import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="ui items video-item">
      <div className="item">
        <div className="image">
          <img
            className=""
            src={video.snippet.thumbnails.medium.url}
            alt="thumbnails"
          />
        </div>
        <div className="content">
          <div className="header">{video.snippet.title}</div>
          <div className="meta">
            <span>{video.snippet.channelTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
