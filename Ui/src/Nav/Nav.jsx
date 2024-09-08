import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import NavBox from "./NavBox";
import NavSlide from "../app/Modal/SlideNav";

import SiteLogo from "../Custom/sitesrc/Asset_4figma2.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSlide, setIsSlide] = useState(false);

  function handleNavBox() {
    setIsOpen(!isOpen);
  }

  function handleNavSlide() {
    setIsSlide(!isSlide);
  }

  return (
    <div>
      <div className="nav menu pr-8 pl-8 sm:px-10 py-8 flex justify-start sm:justify-between items-center">
        <div className="menu-icon cursor-pointer flex gap-3 items-center sm:hidden pr-4">
          <span onClick={handleNavSlide}>
            <i
              class="fa-solid fa-bars text-lg"
              style={{ color: "#ffffff" }}
            ></i>
          </span>
          <span className="block border-[#f8f8f8] border-r-2 h-6"></span>
        </div>
        <div className="logo flex gap-2 items-center justify-center">
          <div className="img w-10 h-10">
            <img src={SiteLogo} alt="site logo" />
          </div>
          <h3 className="text-white font-semibold text-2xl">YT Downloader</h3>
        </div>
        <div className="nav-list sm:block hidden">
          <ul className=" font-normal text-lg">
            <a href="/">
              <li className="text-white nav-list-item cursor-pointer inline-block mx-2 p-2">
                Home
              </li>
            </a>
            <a href="#fea-sec">
              <li className="text-white nav-list-item cursor-pointer inline-block mx-2 p-2">
                Features
              </li>
            </a>
            <li
              onClick={handleNavBox}
              className="text-white nav-list-item cursor-pointer inline-block mx-2 p-2"
            >
              Other
              <i class="fa-solid fa-caret-down pl-3 text-sm text-[#f8f8f8]"></i>
            </li>
            <li className="text-white nav-list-item cursor-pointer inline-block mx-2 p-2">
              Github
            </li>
          </ul>
        </div>
        <Button className={"hidden md:block"} content={"learn More"} />
      </div>
      <NavBox className={`${isOpen ? "open" : "closed"}`} />
      {isSlide && <NavSlide />}
    </div>
  );
};

export default Nav;
