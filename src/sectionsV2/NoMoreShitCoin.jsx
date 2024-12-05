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
        className="w-full h-[85vh] flex flex-col justify-evenly drop-shadow-md bg-center bg-no-repeat bg-cover"
        style={{
          background: "url(/ad.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "center",
        }}
      >
        {/* <div
          className=" uppercase text-white text-center font-[boldx] text-4xl -rotate-3"
          style={{
            textShadow: "6.345px 7.614px 0px #000",
            WebkitTextStrokeWidth: "1.3px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          Keep Calm & <br />
          Wait For The
        </div> */}
        <div
          className="uppercase font-[boldx] text-[#faaa39] text-6xl text-center mt-auto mb-20 md:mb-10  md:text-9xl -rotate-3"
          style={{
            textAlign: "center",
            textShadow: "3.908px 4.69px 0 #000",
            WebkitTextStrokeWidth: "0.8568549156188965px",
            WebkitTextStrokeColor: "#000",
            textTransform: "uppercase",
          }}
        >
          Biggest <br />
          Airdrop
        </div>
      </div>
    </div>
  );
};

export default NoMoreShitCoin;
