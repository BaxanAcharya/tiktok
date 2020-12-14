import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";
function VideoCard({ url, desc, channel, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPres = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <video
        className="videoCard__player"
        loop
        onClick={onVideoPres}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} desc={desc} song={song} />
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default VideoCard;
