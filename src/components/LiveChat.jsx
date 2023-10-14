import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helpers";

// 01:21:00

const LiveChat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  const [chatMsg, setChatMsg] = useState("");

  // console.log(generateRandom());

  // const { randomName, randomMsg } = generateRandom();

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("Api Polling...");
      dispatch(
        addMessage({
          // name: "Himanshu",
          name: generateRandomName(),
          message: generateRandomMsg(),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col space-y-2">
      <div className="bg-gray-100 border border-gray-300 w-[600px] h-[600px] overflow-y-scroll rounded-lg space-y-2 py-2 px-1 flex flex-col-reverse">
        {/* <ChatMessage name={"test"} message={"Hii!"} /> */}
        {ChatMessages &&
          ChatMessages.map((message, index) => {
            return (
              <ChatMessage
                key={index}
                name={message?.name}
                message={message?.message}
              />
            );
          })}
      </div>

      <form
        className="w-full flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting....", chatMsg);
          dispatch(
            addMessage({
              name: "Himanshu",
              message: chatMsg,
            })
          );
          setChatMsg("");
        }}
      >
        <input
          className="w-[90%] h-full border border-gray-300 rounded-lg text-xl"
          type="text"
          onChange={(e) => setChatMsg(e.target.value)}
          value={chatMsg}
        />
        <button className="border border-gray-300 bg-slate-400 px-3 py-2 rounded-lg font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
