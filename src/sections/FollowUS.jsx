import React, { useState } from "react";

const FutureListing2 = () => {
  return (
    <div
      className="w-full mt-2 flex gap-24 justify-center items-center flex-col overflow-hidden pt-[180px] pb-[60px] md:pt-[80px] md:pb-[40px] relative "
      style={{
        backgroundImage: "url(/flbg.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="font-[boldx] text-white text-center text-6xl md:text-9xl"
        style={{
          textShadow: "4px 5px 0 #000",
          WebkitTextStrokeWidth: "1.3px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        Follow Us here
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <span className="flex gap-2 items-center">
          <img
            className="p-2 w-12 aspect-square text-black rounded-lg bg-black"
            src="/img/hero/twitter.png"
            alt="x"
          />
          <p className="font-[nav] text-3xl">TWITTER</p>
        </span>
        <span className="flex gap-2 items-center">
          <img
            className="p-2 text-black w-12 aspect-square rounded-lg bg-black"
            src="/img/hero/telegram.png"
            alt="tg"
          />
          <p className="font-[nav] text-3xl">TELEGRAM</p>
        </span>
      </div>
    </div>
  );
};

export default FutureListing2;
