import React from "react";

const SlideNav = () => {
  return (
    <div className="sm:hidden absolute left-0 top-0">
      <div className="flex bg-[#f8f8f8] h-svh w-80% z-10">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Button />
      </div>
    </div>
  );
};

export default SlideNav;
