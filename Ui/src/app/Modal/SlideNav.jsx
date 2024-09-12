import React, { useEffect, useState, useRef } from "react";
import Button from "../../Button/Button";
import SubNav from "../../Nav/NavBox";

const SlideNav = React.forwardRef((props, ref) => {
  const [dropList, setDropList] = useState(false);
  const subList = useRef(null);

  useEffect(() => {
    if (dropList == false) {
      subList.current.style.display = "none";
      document.querySelector(".fa-angle-up").style.display = "none";
      document.querySelector(".fa-angle-down").style.display = "block";
    } else {
      subList.current.style.display = "block";
      document.querySelector(".fa-angle-up").style.display = "block";
      document.querySelector(".fa-angle-down").style.display = "none";
      subList.current.children[0].classList.add("open");
    }
  }, [dropList]);

  function handleSubListDrop() {
    setDropList(!dropList);
  }

  return (
    <div
      className={`nav-slide sm:hidden w-full bg-[rgba(0,0,0,0.8)] fixed left-0 h-svh overscroll-contain top-0 z-10 ${props.className}`}
    >
      <div className="pt-8 pb-16 flex flex-col items-start justify-around bg-[#2B2D40] h-svh w-[85%] fixed z-10">
        <ul
          ref={ref}
          className="pb-6 slide-item font-normal w-full flex flex-col h-auto text-lg"
        >
          <a href="/" className=" mb-4 border-b border-[#f8f8f8]">
            <li className="text-white nav-list-item cursor-pointer py-6 pl-8 block p-2">
              Home
            </li>
          </a>
          <a href="#fea-sec" className=" mb-4 border-b border-[#f8f8f8]">
            <li className="text-white nav-list-item cursor-pointer py-6 pl-8 block p-2">
              Features
            </li>
          </a>
          <li
            onClick={handleSubListDrop}
            className=" mb-4 text-white nav-list-item cursor-pointer border-b border-[#f8f8f8] py-6 pr-6 pl-8 flex items-center justify-between p-2"
          >
            Other
            <i class="fa-solid fa-angle-up pr-2 text-right text-lg text-[#f8f8f8]"></i>
            <i class="fa-solid fa-angle-down pr-2 text-right text-lg text-[#f8f8f8]"></i>
          </li>
          <div ref={subList} className="mb-2 sub-list pl-8">
            {dropList && (
              <SubNav className="sub-list-slide relative top-0 right-0" />
            )}
          </div>
          <li className=" mb-4 text-white border-b border-[#f8f8f8] nav-list-item cursor-pointer py-6 pl-8 block p-2">
            Github
          </li>
        </ul>
        <Button className={"w-[18rem] ml-8"} content={"Learn more"} />
      </div>
    </div>
  );
});

export default SlideNav;
