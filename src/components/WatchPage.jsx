import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appLevelData";
import { useParams, useSearchParams } from "react-router-dom";
import getVideo from "../hooks/getVideo";

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
  //   console.log(data);

  const getTitle = (data, vid) => {
    if (!data) return null;
    // data?.map((item) => {
    //   if (item?.id == vid) {
    //     // console.log("found", item);
    //   }
    // });

    return data?.find((item) => item.id == vid);
  };

  getTitle(data, videoId);
  return (
    <div className="p-4">
      <div className="flex flex-col gap-3">
        <iframe
          width="1000"
          height="455"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>

        <div className="">
          <h2 className="font-bold text-2xl">{data && data[0]?.id}</h2>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
