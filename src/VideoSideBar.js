import React, { useState } from "react";
import "./VideoSideBar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderedIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
function VideoSideBar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon
            className="videoSidebar__icon"
            fontSize="large"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteBorderedIcon
            className="videoSidebar__icon"
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon className="videoSidebar__icon" fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon className="videoSidebar__icon" fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
