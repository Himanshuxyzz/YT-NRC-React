import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appLevelData";
import { useParams, useSearchParams } from "react-router-dom";
import getVideo from "../hooks/getVideo";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

// 02:20:00

const WatchPage = () => {
  const dipatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams.get("v"));
  const videoId = searchParams.get("v");

  useEffect(() => {
    dipatch(closeMenu());
  }, []);

  const data = getVideo();

  const getTitle = (data, vid) => {
    if (!data) return null;
    const res = data.find((item) => item.id == vid);
    return res?.snippet?.title;
  };
  return (
    <div className="w-full p-4 space-y-5">
      <div className="flex gap-5 w-full">
        <iframe
          width="1000"
          height="455"
          className="w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <div className="">
        <h2 className="font-bold text-3xl">{getTitle(data, videoId)}</h2>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
