import React from "react";

const Head = () => {
  return (
    <div className="w-full h-[70px] grid justify-between items-center grid-flow-col p-4 mb-4 backdrop-blur-md bg-opacity-50">
      <div className="flex items-center gap-10">
        <img
          className="w-10 h-10"
          src="https://vectorified.com/images/hamburger-menu-icon-svg-7.png"
          alt="hamburger menu"
        />

        <img
          className="w-32 h-7"
          src="https://en.wikifur.com/w/images/9/9c/YouTube_logo.png"
          alt="brand logo"
        />
      </div>

      <div className="flex gap-3">
        <input
          className="border border-black font-semibold text-1xl outline-red-300 rounded-md"
          type="text"
        />
        <button className="border py-2 px-4 rounded-md">search</button>
      </div>

      <div>
        <img
          className="w-10 h-10"
          src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
