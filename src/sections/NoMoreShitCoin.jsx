import React from "react";
import MarqueeStrip from "../components/Marquee";

const NoMoreShitCoin = () => {
  const DATA_LIST = [
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
    { text: "APP COMING SOON " },
  ];
  return (
    <div className="w-full flex flex-col mt-1 rotate-2 scale-105 -translate-y-10">
      <div className="overflow-hidden relative rotate scale-105 md:scale-100 bg-black w-full h-20 flex items-center">
        <MarqueeStrip DATA_LIST={DATA_LIST} />
      </div>
      <div
        className="w-full h-[85vh] flex flex-col justify-evenly drop-shadow-md bg-no-repeat bg-cover"
        style={{
          background: "url(/Pranjal/2.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className=" uppercase text-white text-center font-[boldx] text-4xl -rotate-3"
          style={{
            textShadow: "6.345px 7.614px 0px #000",
            WebkitTextStrokeWidth: "1.3px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          No More <br />
          Shit Coin
        </div>
        <div
          className=" uppercase text-yellow-400 font-[boldx] text-center text-5xl md:text-9xl -rotate-3"
          style={{
            textShadow: "6.345px 7.614px 0px #000",
            WebkitTextStrokeWidth: "1.3px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          Only <br />
          $Goat Coin
        </div>
      </div>
    </div>
  );
};

export default NoMoreShitCoin;
