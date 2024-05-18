import React, { useEffect, useState } from "react";
import Video from "./components/Video";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://reel-rush.onrender.com/api/posts");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchPosts();
  }, []);

  console.log(videos);

  const videoElements = videos.map(
    ({ url, channel, description, song, likes, messages, shares }, i) => (
      <Video
        key={url}
        url={url}
        channel={channel}
        description={description}
        song={song}
        likes={likes}
        messages={messages}
        shares={shares}
      />
    )
  );
  console.log(videoElements);
  return (
    <div className="app">
      <div className="app__videos">{videoElements}</div>
    </div>
  );
};

export default App;
