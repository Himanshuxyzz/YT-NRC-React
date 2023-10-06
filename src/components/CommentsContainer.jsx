import React from "react";
import Comment from "./comment";

const commentsData = [
  {
    name: "Himanshu",
    text: "Hey!!",
    replies: [],
  },
  {
    name: "Himanshu",
    text: "Hey!!",
    replies: [
      {
        name: "Himanshu",
        text: "Hey!!",
        replies: [
          {
            name: "Himanshu",
            text: "Hey!!",
            replies: [
              {
                name: "Himanshu",
                text: "Hey!!",
                replies: [],
              },
              {
                name: "Himanshu",
                text: "Hey!!",
                replies: [],
              },
              {
                name: "Himanshu",
                text: "Hey!!",
                replies: [],
              },
            ],
          },
          {
            name: "Himanshu",
            text: "Hey!!",
            replies: [],
          },
          {
            name: "Himanshu",
            text: "Hey!!",
            replies: [],
          },
        ],
      },
      {
        name: "Himanshu",
        text: "Hey!!",
        replies: [],
      },
      {
        name: "Himanshu",
        text: "Hey!!",
        replies: [],
      },
    ],
  },
  {
    name: "Himanshu",
    text: "Hey!!",
    replies: [],
  },
];

const CommentsContainer = () => {
  console.log(commentsData[0]);
  return (
    <div className="border border-gray-600 m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <Comment commentData={commentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
