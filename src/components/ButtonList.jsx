import React from "react";
import Button from "./Button";

const btnFilterItems = [
  "All",
  "Shark Tank",
  "Music",
  "Tarak Mehta Ka Oolta Chasma",
  "Cooking Shows",
  "Live",
  "Arijit Singh",
  "Comdey Club",
  "Lofi",
  "Apple",
  "Computer Science",
  "Indian Pop Music",
  // "Movie Musicals",
  // "Bhajan Music",
  // "News",
];

// 01:32:25

const ButtonList = () => {
  return (
    <div className="p-4 border flex gap-3">
      {btnFilterItems?.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
