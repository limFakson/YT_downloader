import React, { useRef, useState } from "react";

const NavBox = ({ className }) => {
  const navBox = useRef();
  function handleListBg() {}

  return (
    <div
      className={`${className} nav-box absolute top-[5rem] right-[34.7rem] z-10`}
    >
      <div className="drop-down">
        <ul className="">
          <li
            ref={navBox}
            onMouseOver={handleListBg}
            className="text-[#f8f8f8] pl-4 pr-6  py-2 nav-box-list text-base font-light cursor-pointer"
          >
            X downloader
          </li>
          <li
            ref={navBox}
            onMouseOver={handleListBg}
            className="text-[#f8f8f8] pl-4 pr-6  py-2 nav-box-list text-base font-light cursor-pointer"
          >
            IG downloader
          </li>
          <li
            ref={navBox}
            onMouseOver={handleListBg}
            className="text-[#f8f8f8] pl-4 pr-6  py-2 nav-box-list text-base font-light cursor-pointer"
          >
            FB downloader
          </li>
          <li
            ref={navBox}
            onMouseOver={handleListBg}
            className="text-[#f8f8f8] pl-4 pr-6  py-2 nav-box-list text-base font-light cursor-pointer"
          >
            URL Shortener
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBox;
