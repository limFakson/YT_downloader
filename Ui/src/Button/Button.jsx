import React from "react";

const Button = ({ compClick, className, content }) => {
  return (
    <div className="button">
      <button
        onClick={compClick}
        className={`w-[6rem] sm:w-[8rem] h-[3rem] text-[#f8f8f8] bg-[#FF0000] rounded-md ${className}`}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
