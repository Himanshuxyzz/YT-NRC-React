import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="p-2 bg-gray-200 flex items-center gap-4">
      <img
        class="w-10 h-10 col-span-1 font-bold"
        src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
        alt="user icon"
      />
 
      <span className="text-gray-500">{name}</span>

      <span className="text-sm font-semibold">{message}</span>
    </div>
  );
};

export default ChatMessage;
