import { useEffect, useRef, useState } from "react";
import React from "react";
import YoutubeThumbnail from "../../Custom/sitesrc/youtube_thumbenail_demo.jpeg";

const Download = ({ data, type, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const heightRef = useRef(null);

  useEffect(() => {
    const maxHeight = window.innerHeight * 0.87;

    const restrictHeight = () => {
      if (heightRef.current) {
        if (heightRef.current.clientHeight > maxHeight) {
          heightRef.current.style.height = `${maxHeight}px`;
          heightRef.current.style.overflowY = "auto";
        } else {
          heightRef.current.style.height = "auto";
          heightRef.current.style.overflowY = "auto";
        }
      }
    };

    const resizeObserver = new ResizeObserver(restrictHeight);

    if (heightRef.current) {
      resizeObserver.observe(heightRef.current);
    }

    return () => {
      if (heightRef.current) {
        resizeObserver.unobserve(heightRef.current);
      }
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (data) {
      if (data.error != null) {
        setIsModalOpen(false);
      } else {
        setIsModalOpen(true);
        setModalContent(data);
      }
    }
  }, [data]);

  const closeDownloadModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const handleDownload = (e) => {
    const link = e.target.getAttribute("data-url");

    window.open(link, "_blank").focus();

    onClose();
  };

  return (
    <div className="dwn-modal fixed left-0 top-0 w-full h-full z-50 overflow-hidden">
      <div className="relative w-full pt-8 h-screen flex justify-center items-center bg-[#ffffff30]">
        <div
          className="relative grid modal-details bg-[#2b2d40] h-auto w-[75%] max-sm:w-[80%] rounded-lg p-4"
          ref={heightRef}
        >
          <div className="flex justify-between items-center">
            <span className="text-[#f4f4f4] text-lg">{type}</span>
            <span
              className="text-right pr-2 cursor-pointer"
              onClick={closeDownloadModal}
            >
              <i className="fa-regular fa-circle-xmark text-xl text-red-500"></i>
            </span>
          </div>
          {isModalOpen ? (
            <div className="mt-4 overflow-y-scroll">
              {modalContent.map((ytContent) => (
                <div className="yt-details rounded-lg mt-3 p-4 flex max-md:flex-wrap justify-between items-center gap-2 pl-2 pr-6">
                  <div className="yt-thumbnail flex items-center justify-start gap-2 md:w-[45%] min-[900px]:w-[45%] min-[1200px]:w-[50%]">
                    <img
                      src={ytContent.thumbnail}
                      className="w-full max-w-[150px] rounded"
                      alt=""
                    />
                    <span className="yt-filename max-sm:text-base text-white">
                      {ytContent.filename.split(".")[0]}
                    </span>
                  </div>
                  <div className="flex max-sm:flex-wrap max-md:w-full items-center justify-start">
                    <div className="yt-features max-sm:mt-2 sm:pr-4 min-[900px]:pr-0 min-[1200px]:pr-4">
                      <span className="fea-bullet text-[#f4f4f4] border-[#FF0000] border text-xs sm:text-sm p-2 sm:p-3 mx-2 cursor-default rounded-3xl font-light">
                        {ytContent.mime_type}
                      </span>
                      <span className="fea-bullet text-[#f4f4f4] border-[#FF0000] border text-xs sm:text-sm p-2 sm:p-3 mx-2 cursor-default rounded-3xl font-light">
                        {ytContent.file_ext + " " + ytContent.quality}
                      </span>
                      <span className="fea-bullet text-[#f4f4f4] border-[#FF0000] border text-xs sm:text-sm p-2 sm:p-3 mx-2 cursor-default rounded-3xl font-light">
                        {ytContent.filesize + " " + "Mb"}
                      </span>
                    </div>
                    <button
                      onClick={handleDownload}
                      data-url={ytContent.url}
                      className="w-24 h-10 max-sm:h-12 max-sm:w-full max-md:w-[8rem] max-sm:mt-4 dwn-btn bg-[#FF0000] rounded-md"
                    >
                      <i class="fa-solid fa-download"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 overflow-y-scroll"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Download;
