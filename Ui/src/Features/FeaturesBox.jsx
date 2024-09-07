import React from "react";

const FeaturesBox = ({ count, title, content, feaClassName }) => {
  return (
    <div
      className={`features-box rounded-3xl bg-[#2B2D40] h-auto w-[80%] sm:h-[280px] md:h-[330px] lg:h-[290px] sm:w-[calc(100%/2.3)] md:w-[calc(100%/3.3)] flex flex-col justify-center items-start m-2 px-8 md:px-6 lg:px-8 py-8 ${feaClassName}`}
    >
      <div className="features-count bg-[#f8f8f8] flex items-center justify-center border w-12 h-12 rounded-full mt-3">
        <span className="text-xl text-center align-middle block">{count}</span>
      </div>
      <div className="features-content pt-4 pl-2">
        <span className="features-title">
          <h4 className="text-[#f8f8f8] text-2xl font-semibold my-4">
            {title}
          </h4>
        </span>
        <span className="features-text">
          <p className="text-[#f8f8f8] text-base font-light my-3">{content}</p>
        </span>
      </div>
    </div>
  );
};

export default FeaturesBox;
