import React from "react";

const VideoDetails = ({ video }) => {
  return !video ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div className="ui embed">
        <iframe
          width="350"
          height="120"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          data-source="youtube"
          data-id={video.id.videoId}
          data-placeholder={video}
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <h5>{video.snippet.channelTitle}</h5>
        <p>{video.snippet.description}</p>
      </div>
      <br />
    </div>
  );
};

export default VideoDetails;
