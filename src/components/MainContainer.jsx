import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" border border-black grid-cols-10 w-full">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
