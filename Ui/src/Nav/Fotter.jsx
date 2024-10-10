import React from "react";
import SiteLogo from "../Custom/sitesrc/Asset_4figma2.png";

const Fotter = () => {
  return (
    <div>
      <div className="bottom-footer flex justify-between gap-4 items-start bg-[#2b2d40] mt-6 px-14 py-8">
        <div className="site-logo w-[50%]">
          <a href="/" className="flex items-center gap-2 w-auto">
            <img className="img w-12 h-12" src={SiteLogo} alt="" />
            <span className="text-white font-semibold text-2xl">
              YT Downloader
            </span>
          </a>
        </div>
        <div className="other w-[25%]">
          <span className="pb-2 block">
            <strong>Other</strong>
          </span>
          <ul>
            <a href="https://digiurl.vercel.app" target="_blank">
              <li>URL Shortener</li>
            </a>
            <a href="/">
              <li>IG Downloader</li>
            </a>
            <a href="/">
              <li>IG Downloader</li>
            </a>
            <a href="/">
              <li>IG Downloader</li>
            </a>
          </ul>
        </div>
        <div className="about w-[25%]">
          <span className="block pb-2">
            <strong>About Us</strong>
          </span>
          <ul>
            <a href="#fea-sec">
              <li>Learn More</li>
            </a>
            <a href="https://digiurl.vercel.app/Qzl7M" target="_blank">
              <li>Github</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center pt-2 pb-4 bg-[#2b2d40]">
        <span className="text-[#f4f4f4] text-center">
          Made with ❤ by limfakson
        </span>
      </div>
    </div>
  );
};

export default Fotter;
