import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    heading: false,
    items: ["Home", "Shorts", "Subscriptions"],
    paths: ["/", "/shorts", "/subscriptions"],
  },
  {
    heading: false,
    items: ["Library", "History", "Watch later", "Liked videos"],
    paths: ["/library", "/history", "/watchLater", "/Liked"],
  },
  {
    heading: "Explore",
    items: [
      "Trending",
      "Shopping",
      "Music",
      "Movies",
      "Live",
      "Gaming",
      "News",
      "Sports",
      "Learning",
      "Fashion & Beauty",
    ],
    paths: [
      "/trending",
      "/shopping",
      "/music",
      "/movies",
      "/live",
      "/gaming",
      "/news",
      "/sports",
      "/learning",
      "/fashionBeauty",
    ],
  },
];

const SideMenuItems = ({ data }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="border-0 border-b-2 border-b-gray-500 p-2 transition ease-in-out">
      {data.heading && (
        <h1 className="font-bold text-2xl pl-2">{data.heading}</h1>
      )}
      <ul className="px-4  font-medium text-1xl space-y-2">
        {data?.items?.map((item, index) => {
          return (
            <li className="hover:bg-gray-400 px-5 py-3 rounded-lg" key={item}>
              <Link to={`${data?.paths[index]}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="space-y-4 grid-cols-1 min-w-[220px] max-w-[220px] overflow-scroll">
      <SideMenuItems data={MenuItems[0]} />
      <SideMenuItems data={MenuItems[1]} />
      <SideMenuItems data={MenuItems[2]} />
    </div>
  );
};

export default Sidebar;
