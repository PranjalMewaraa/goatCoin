import React from "react";
import Accordion from "../components/Accordian";
import MarqueeStrip from "../components/Marquee";

const Faq = () => {
  return (
    <>
      <div
        className="w-full h-fit  scale-110 md:scale-110 rotate-2 flex flex-col items-center gap-4 py-16"
        style={{
          background: "url(/img/bgfaq.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="font-[boldx] text-yellow-500 text-9xl -rotate-2"
          style={{
            WebkitTextStrokeWidth: "1.3px",
            WebkitTextStrokeColor: "#000",
            background: "linear-gradient(180deg, #F7A600 0%, #FFD319 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FAQ
        </h1>
        <Accordion />
        <div className="mt-16"> </div>
      </div>
    </>
  );
};

export default Faq;
