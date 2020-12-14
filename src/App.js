import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard.js";
import "./App.css";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videoCard">
        {videos.map((video, index = 0) => (
          <>
            <VideoCard
              key={index + 1}
              url={video.url}
              channel={video.channel}
              song={video.song}
              desc={video.desc}
              likes={video.likes}
              messages={video.messages}
              shares={video.shares}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
