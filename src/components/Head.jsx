import React from "react";

const Head = () => {
  return (
    <div className="w-full max-h-[70px] grid justify-between items-center grid-flow-col p-4 mb-4 backdrop-blur-md bg-opacity-50">
      <div className="flex items-center gap-6 col-span-1">
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

      <div className="flex col-span-4 ">
        <input
          className="border border-black font-semibold text-1xl outline-red-300 rounded-l-full w-full"
          type="text"
        />
        <button className="border border-black py-2 px-4 rounded-r-full font-semibold bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </button>
      </div>

      <div>
        <img
          className="w-10 h-10 col-span-1 font-bold"
          src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
