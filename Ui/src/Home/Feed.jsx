import React, { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import DownloadModal from "../app/Modal/Download";
import YTMockup from "../Custom/sitesrc/YouTube_redesign-removebg-preview.png";
import { useToast } from "@chakra-ui/react";

const Feed = () => {
  const Api_uri = process.env.REACT_APP_API_URL;
  const [isDownloadContent, setIsDownloadContent] = useState(null);
  const toast = useToast();

  const showToast = (message, status) => {
    console.log(message);
    toast({
      title: message,
      status: status,
      duration: 2000,
      position: "right-top",
      isClosable: true,
    });
  };

  useEffect(async () => {
    try {
      const response = await fetch(`${Api_uri}`, {
        method: "GET",
      });
      const confirm = await response.json();
      showToast(confirm.message, "success");
    } catch (error) {
      const err = "connection unstable";
      showToast(err, "error");
    }
  }, []);

  const [ytLinkVal, setYtLinkVal] = useState("");
  const ytLink = useRef(null);

  const handleBtnClick = async () => {
    try {
      const response = await fetch(
        `${Api_uri}/digicore/ytdlp?keyword=vid&url=${ytLinkVal}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      if (!response.ok) {
        showToast(data.error, "error");
      } else {
        setIsDownloadContent(data);
      }
    } catch (error) {
      console.error("Error handling button click:", error.message);
    }
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setIsDownloadContent(null);
  };

  return (
    <div className="external h-[57rem] lg:h-[64rem]">
      <section className="bg-[#2B2D40] bgImg w-full h-[45rem] relative">
        <div className="spacebox"></div>
        <div className="top z-10 grid relative w-full">
          <Nav />
          <div className="grid">
            <div className="hero pt-7 flex flex-col items-center">
              <div className="search-space flex flex-col items-center w-full h-[35rem] px-5 sm:px-10 relative">
                <div className="hero-txt text-center w-[90%] md:w-[55rem] pb-4">
                  <h1 className="text-6xl md:text-[5rem] font-extrabold">
                    Download Youtube videos by link!
                  </h1>
                  <span className="flex justify-center items-center gap-10 sm:gap-[5rem]">
                    <div className="">
                      <i
                        className="fa-solid fa-circle-check inline-block"
                        style={{ color: "#ffffff" }}
                      />
                      <p className="text-white inline-block pl-1 sm:pl-1.5">
                        Unlimited Downloads
                      </p>
                    </div>
                    <div>
                      <i
                        className="fa-solid fa-circle-check inline-block"
                        style={{ color: "#ffffff" }}
                      />
                      <p className="text-white inline-block pl-1 sm:pl-1.5">
                        Easy to use
                      </p>
                    </div>
                  </span>
                </div>
                <div className="search flex justify-center items-center pl-2 pr-2 sm:pr-4 rounded-2xl border border-[#2B2D40] bg-[#000] h-[5rem] w-full">
                  <input
                    ref={ytLink}
                    value={ytLinkVal}
                    onChange={(e) => setYtLinkVal(e.target.value)}
                    type="text"
                    placeholder="paste your url"
                    className="border-none outline-none text-[#f8f8f8] bg-transparent w-full h-full pl-4"
                  />
                  <Button
                    compClick={handleBtnClick}
                    content={"Download"}
                    className={"text-sm"}
                  />
                </div>
                {isDownloadContent && (
                  <DownloadModal
                    data={isDownloadContent}
                    onClose={closeModal}
                  />
                )}
              </div>
            </div>
            <div className="YT-mockup self-center grid w-full h-full justify-self-center relative">
              <img
                src={YTMockup}
                alt="YT mockup"
                className="justify-self-center top-[-5rem] sm:top-[-14rem] absolute lg:w-[60rem] sm:w-[50rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feed;
