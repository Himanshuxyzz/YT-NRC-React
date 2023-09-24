import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appLevelData";

// 02:02:39

const WatchPage = () => {
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(closeMenu());
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
