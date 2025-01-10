import React from "react";
import Accordion from "../components/Accordian";
import MarqueeStrip from "../components/Marquee";

const Faq = () => {
  return (
    <>
      <div
        className="w-full  h-fit -translate-y-2 -translate-x-1 scale-110 scale-x-125 md:scale-105 rotate-2 flex flex-col items-center gap-4 py-16"
        style={{
          backgroundImage: "url(/d1.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="font-[boldx] text-green-500 scale-90 md:scale-100 text-9xl -rotate-2"
          style={{
            textShadow: "4px 5px 0 #E1FF00",
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
