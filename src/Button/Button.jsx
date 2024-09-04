import React from "react";

const Button = ({ button }) => {
  return (
    <div className="button">
      <button className="w-[8rem] h-[3rem] text-[#f8f8f8] bg-[#FF0000] rounded-md">
        {button}
      </button>
    </div>
  );
};

export default Button;
