import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helpers";

// 01:15:11

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Api Polling...");
      dispatch(
        addMessage({
          // name: "Himanshu",
          name: generateRandomName(),
          message: "Heyy!!!!!👋",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-100 border border-gray-300 w-[600px] h-[600px] overflow-y-scroll rounded-lg space-y-1 py-2 px-1">
      {/* <ChatMessage name={"test"} message={"Hii!"} /> */}
      {ChatMessages &&
        ChatMessages.map((message, index) => {
          return (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          );
        })}
    </div>
  );
};

export default LiveChat;
