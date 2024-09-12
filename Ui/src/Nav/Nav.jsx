import React, { useState, useRef, useEffect } from "react";
import Button from "../Button/Button";
import NavBox from "./NavBox";
import NavSlide from "../app/Modal/SlideNav";

import SiteLogo from "../Custom/sitesrc/Asset_4figma2.png";

const Nav = () => {
  // declaration
  const [isOpen, setIsOpen] = useState(false);
  const [isSlide, setIsSlide] = useState(false);
  const clsBtn = useRef(null);
  const slideItem = React.createRef(null);

  // set clsBtn to display none & add class ls to queryselector
  useEffect(() => {
    if (isSlide == false) {
      clsBtn.current.style.display = "none";
      clsBtn.current.classList.remove("clsbtn");
    }

    if (isSlide && document.querySelector(".nav-slide")) {
      document.querySelector(".nav-slide").classList.add("open");
    } else if (document.querySelector(".nav-slide")) {
      document.querySelector(".nav-slide").classList.remove("open");
    }
  }, [isSlide]);

  // onload setting if slideitem is changed
  useEffect(() => {
    if (isSlide === true) {
      const slideItems = slideItem.current.children;

      // Loop through each slide item
      Array.prototype.forEach.call(slideItems, (item) => {
        if (item.textContent.trim() !== "Other") {
          item.addEventListener("click", () => {
            setIsSlide(!isSlide);
          });
        }
      });

      // Clean up event listeners when component unmounts or effect is re-triggered
      return () => {
        Array.prototype.forEach.call(slideItems, (item) => {
          if (item.textContent.trim() !== "Other") {
            item.removeEventListener("click", () => {
              setIsSlide(!isSlide);
            });
          }
        });
      };
    }
  }, [isSlide, slideItem]);

  // sub menu dropdown func
  function handleNavBox() {
    setIsOpen(!isOpen);
  }

  // handle functions of slider bar
  function handleNavSlide() {
    setIsSlide(!isSlide);
    clsBtn.current.style.display = "block";
    clsBtn.current.classList.add("clsbtn");
  }
  const closeNavSlide = () => {
    setIsSlide(!isSlide);
  };

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
        <div
          ref={clsBtn}
          onClick={closeNavSlide}
          className="fixed z-20 left-6 cursor-pointer top-10 p-[0.13rem] text-center w-10 h-10 border border-[#f8f8f8] rounded close-slide"
        >
          <i class="fa-solid fa-xmark text-[#f8f8f8] text-2xl"></i>
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
      <NavBox
        className={`${
          isOpen ? "open" : "closed"
        } top-[5rem] right-[34.7rem] nav-box`}
      />
      {isSlide && <NavSlide ref={slideItem} className={"nav-slide"} />}
    </div>
  );
};

export default Nav;
