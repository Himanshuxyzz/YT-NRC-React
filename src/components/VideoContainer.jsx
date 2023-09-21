import { useCallback, useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);

  // using memoization

  const getVideos = useCallback(async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log("fetching.....");
    // console.log(json);
    setVideos(json?.items);
  }, [videos]);

  // without memoization

  // const getVideos = async () => {
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   const json = await data.json();
  //   console.log("fetching");
  //   console.log(json);
  //   setVideos(json?.items);
  // };

  return (
    <div className="p-4 flex flex-wrap gap-3">
      {videos &&
        videos?.map((video) => <VideoCard key={video.id} data={video} />)}
    </div>
  );
};

export default VideoContainer;
