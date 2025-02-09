import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="p-2 m-3 rounded-lg bg-gray-200 font-semibold">
        {name}
      </button>
    </div>
  );
};

export default Button;
