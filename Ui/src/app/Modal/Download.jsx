import { useEffect } from "react";
import React from "react";
import YoutubeThumbnail from "../../Custom/sitesrc/youtube_thumbenail_demo.jpeg";

const Download = () => {
  const isModalOpen = true;
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);
  return (
    <div className="dwn-modal fixed left-0 top-0 w-full h-full z-50 overflow-hidden">
      <div className="relative w-full pt-8 h-screen flex justify-center items-center bg-[#ffffff30]">
        <div className="relative modal-details bg-[#2b2d40] w-[85%] rounded-lg p-8">
          <span className="text-right">
            <i className="fa-regular fa-circle-xmark text-red-500"></i>
          </span>
          <div className="yt-details pt-8 pl-6 flex justify-start items-center gap-2">
            <img
              src={YoutubeThumbnail}
              className="w-full max-w-[150px] rounded"
              alt=""
            />
            <span className="yt-filename text-white">
              ✨Perfect World EP 180 [MULTI SUB]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
