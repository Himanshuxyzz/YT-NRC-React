import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appLevelData";
import { SEARCH_SUGGESTIONS_API } from "../utils/constants";

const Head = () => {

// 56:25 advanced yt clone - 2 from 39:34



  // search query

  const [searchQuery, setSearchQuery] = useState(" ");

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 api calls is < 200ms then decline api calls
    // fetchSearch(searchQuery);

    const intervalId = setTimeout(() => {
      fetchSearch(searchQuery);
    }, 200);

    return () => clearTimeout(intervalId);
  }, [searchQuery]);

  /*
   *
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api calls after 200ms
   *
   * key - ip
   * - destroy the component(useEffect return method)
   * - re-render the component
   * - useEffect()
   * - start timer => make api calls after 200ms
   *
   * setTimeout(200) - is clearing on every re-rendering
   */

  const fetchSearch = async (searchString) => {
    console.log(`Api call with query ${searchQuery}`)
    const res = await fetch(`${SEARCH_SUGGESTIONS_API}${searchString}`);
    const result = await res.json();
    console.log(result[1]);
  };

  // for dispatching an action
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="w-full max-h-[70px] grid justify-between items-center grid-flow-col p-4 mb-4 backdrop-blur-md bg-opacity-50">
      <div className="flex items-center gap-6 col-span-1">
        <img
          className="w-10 h-10 cursor-pointer"
          src="https://vectorified.com/images/hamburger-menu-icon-svg-7.png"
          alt="hamburger menu"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="w-32 h-7"
            src="https://en.wikifur.com/w/images/9/9c/YouTube_logo.png"
            alt="brand logo"
          />
        </a>
      </div>

      <div className="flex col-span-4">
        <input
          className="border border-black font-semibold text-1xl outline-red-300 rounded-l-full w-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
