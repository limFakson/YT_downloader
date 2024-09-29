import React from "react";
import "./Custom/input.css";
import "./Custom/custom.css";
import Feed from "./Home/Feed";
import Feature from "./Home/More";
import Footer from "./Home/Footer";
import { ChakraProvider } from "@chakra-ui/react";

const YT = () => {
  return (
    <ChakraProvider>
      <main className="main backdrop-blur-xl bg-[#f8f8f8]">
        <Feed />
        <Feature />
        <Footer />
      </main>
    </ChakraProvider>
  );
};

export default YT;
