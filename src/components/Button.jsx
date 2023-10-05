import React from "react";

const Button = ({ name }) => {
  return (
    <div className="space-x-3">
      <button className=" text-sm px-4 py-2 bg-gray-200 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
