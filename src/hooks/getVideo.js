import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const videoData = async () => {
  const data = await fetch(YOUTUBE_VIDEOS_API);
  const res = await data.json();
  return res.items;
};

const getVideo = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await videoData();
      setData(res);
    };
    fetchVideo();
  }, []);

  return data;
};

export default getVideo;
