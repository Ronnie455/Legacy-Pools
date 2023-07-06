import React from 'react';
import ReactPlayer from 'react-player';
import Animatedbackground from './assets/Animatedbackground.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background">
    <ReactPlayer
      url={Animatedbackground}
      playing={true}
      loop={true}
      muted={true}
      className="video-content"
      width={"85%"}
      height="85%"
    />
  </div>
  )
}

export default VideoBackground;
