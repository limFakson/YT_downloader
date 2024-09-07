import React, { Component } from "react";
import Button from "../Button/Button";

import SiteLogo from "../Custom/sitesrc/Asset_4figma2.png";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="nav menu pr-8 pl-10 sm:px-10 py-8 flex justify-between items-center">
          <div className="logo flex gap-2 items-center justify-center">
            <div className="img w-10 h-10">
              <img src={SiteLogo} alt="site logo" />
            </div>
            <h3 className="text-white font-semibold text-2xl">YT Downloader</h3>
          </div>
          <div className="nav-list sm:block hidden">
            <ul className=" font-normal text-lg">
              <li className="text-white cursor-pointer inline-block mx-4">
                Home
              </li>
              <li className="text-white cursor-pointer inline-block px-4">
                Features
              </li>
              <li className="text-white cursor-pointer inline-block px-4">
                Other
              </li>
              <li className="text-white cursor-pointer inline-block px-4">
                Github
              </li>
            </ul>
          </div>
          <Button className={"hidden sm:block"} button={"learn More"} />
        </div>
      </div>
    );
  }
}
