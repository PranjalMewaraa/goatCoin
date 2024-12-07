import React from "react";
import Accordion from "../components/Accordian";
import MarqueeStrip from "../components/Marquee";

const Faq = () => {
  return (
    <>
      <div
        className="w-full h-fit -translate-y-2 scale-110 md:scale-105 rotate-2 flex flex-col items-center gap-4 py-16"
        style={{
          background: "url(/img/bgfaq.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="font-[boldx] text-yellow-500 text-9xl -rotate-2"
          style={{
            textShadow: "4px 5px 0 #000",
            WebkitTextStrokeWidth: "1.3px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          FAQ
        </h1>
        <Accordion />
        <div className="mt-24 mb-40 md:mb-0"> </div>
      </div>
    </>
  );
};

export default Faq;
