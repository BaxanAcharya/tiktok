import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
function VideoFooter({ channel, desc, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h4>@{channel}</h4>
        <p>{desc}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="No found"
      />
    </div>
  );
}

export default VideoFooter;
