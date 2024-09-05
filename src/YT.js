import React from "react";
import "./Custom/output.css";
import "./Custom/custom.css";
import Feed from "./Home/Feed";
import Feature from "./Home/More";

const YT = () => {
  return (
    <>
      <main className="main bg-[#f8f8f8]">
        <Feed />
        <Feature />
      </main>
    </>
  );
};

export default YT;
