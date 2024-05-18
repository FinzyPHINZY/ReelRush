import React, { useState } from "react";
import "./VideoSidebar.css";
import { FaRegHeart } from "react-icons/fa";
import { MdFavorite, MdMessage } from "react-icons/md";
import { BsFillShareFill } from "react-icons/bs";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {!liked ? (
          <FaRegHeart
            className="sidebar__icon"
            onClick={() => {
              setLiked((prev) => !prev);
            }}
          />
        ) : (
          <MdFavorite
            className="sidebar__icon"
            onClick={() => {
              setLiked((prev) => !prev);
            }}
          />
        )}

        <p>{liked ? Number(likes) + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MdMessage className="sidebar__icon" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <BsFillShareFill className="sidebar__icon" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
