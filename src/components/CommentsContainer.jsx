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

const CommentsList = ({ comments }) => {
  return (
    comments &&
    comments.map((comment, index) => {
      // dont use index for keys
      return (
        <div key={index} className="space-y-1">
          <Comment commentData={comment} />
          <div className="ml-6 border border-l-red-400 space-y-2">
            <CommentsList comments={comment?.replies} />
          </div>
        </div>
      );
    })
  );
};

const CommentsContainer = () => {
  //   console.log(commentsData[0]);
  return (
    <div className="border border-gray-600 m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      {/* <Comment commentData={commentsData[0]} /> */}
      <div className="space-y-3">
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
