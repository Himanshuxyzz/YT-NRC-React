import React, { useEffect, useState } from "react";
import { formatViewCount, getMonthsAgo } from "../utils/helpers";
// 01:53:33
const VideoCard = ({ data }) => {
  // if (!data) return <h1>Loading....</h1>;
  const { id, snippet, statistics } = data;
  const { title, channelTitle, tags, thumbnails, publishedAt } = snippet;
  const { viewCount, likeCount } = statistics;
  return (
    data && (
      <>
        <div className="w-[350px] max-w-[360px] min-h-[320px] flex-grow">
          <div className="p-4 w-full h-full flex flex-col  gap-1">
            <img
              className="object-cover rounded-b-md"
              src={thumbnails?.medium?.url}
              alt="thumbnail"
            ></img>
            <p className="font-bold text-1xl">{title}</p>
            <p className="font-semibold text-gray-600">{channelTitle}</p>
            <div className="flex gap-1">
              <p className="font-semibold text-gray-600">
                {formatViewCount(viewCount)}
              </p>
              <p className="font-semibold text-gray-600">
                {getMonthsAgo(`${publishedAt}`)}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default VideoCard;
