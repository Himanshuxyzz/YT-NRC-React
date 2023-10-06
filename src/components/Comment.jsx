import React from "react";

//2:15:06

const Comment = ({ commentData }) => {
  const { name, text, replies } = commentData;
  return (
    <div className="flex bg-gray-100 p-2 rounded-md">
      <img
        className="w-9 h-9 col-span-1 font-bold"
        src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
        alt="user image"
      />

      <div className="px-4">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
