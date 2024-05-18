import React from "react";
import "./VideoFooter.css";
import { MdAudiotrack } from "react-icons/md";
import Marquee from "react-fast-marquee";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MdAudiotrack className="videoFooter__icon" />
          <Marquee className="marquee" pauseOnHover={true}>
            {song}
          </Marquee>
        </div>
      </div>
      <img
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
        className="videoFooter__record"
      />
    </div>
  );
};

export default VideoFooter;
