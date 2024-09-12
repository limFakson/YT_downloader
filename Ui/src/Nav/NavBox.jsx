import React, { useRef, useState } from "react";

const NavBox = ({ className }) => {
  return (
    <div className={`${className}  absolute z-10`}>
      <div className="drop-down">
        <ul className="">
          <li className="text-[#f8f8f8] pl-4 pr-6  py-3 nav-box-list text-base font-light cursor-pointer">
            X downloader
          </li>
          <li className="text-[#f8f8f8] pl-4 pr-6  py-3 nav-box-list text-base font-light cursor-pointer">
            IG downloader
          </li>
          <li className="text-[#f8f8f8] pl-4 pr-6  py-3 nav-box-list text-base font-light cursor-pointer">
            FB downloader
          </li>
          <li className="text-[#f8f8f8] pl-4 pr-6  py-3 nav-box-list text-base font-light cursor-pointer">
            URL Shortener
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBox;
