import React from "react";
import ChatMessage from "./ChatMessage";

// 57:12

const LiveChat = () => {
  return (
    <div className="bg-gray-100 border border-gray-300 w-[600px] h-[600px] overflow-y-scroll rounded-lg space-y-1 py-2 px-1">
      <ChatMessage name={"test"} message={"Hii!"} />
      <ChatMessage name={"test"} message={"Hii!"} />
    </div>
  );
};

export default LiveChat;
