import React, { useRef } from "react";
import Features from "../Features/FeaturesBox";

const More = () => {
  return (
    <section id="fea-sec" className="features_sec my-8">
      <div className="secton-features pt-14">
        <div className="section-body flex sm:flex-row flex-wrap px-2 sm:px-1 lg:px-12 flex-col items-center justify-center">
          <Features
            count="1"
            content="You can download all the content you want without limits."
            title="No Download Limit"
          />
          <Features
            count="2"
            content="You can convert Video and Audio content and download it for free here."
            title="Downloads At No Cost"
          />
          <Features
            count="3"
            content="You can convert and download content using our tool with a few clicks."
            title="Easy to Use"
          />
          <Features
            count="4"
            content="Our website is very well secured. We have developed this website with user security in mind. So there will be no problem with security."
            title="Well Secured"
          />
          <Features
            feaClassName={"hidden sm:block"}
            count="5"
            content="Our platform converts Audio and Video in seconds."
            title="The Best Speeds"
          />
          <Features
            feaClassName={"hidden sm:block"}
            count="6"
            content="Since our tool is online, you can use it without having to install anything on your device."
            title="No Need For Apps"
          />
        </div>
      </div>
    </section>
  );
};

export default More;
