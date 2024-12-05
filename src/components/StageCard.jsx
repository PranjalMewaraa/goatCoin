import { div } from "framer-motion/client";
import React from "react";

const StageCard = ({ stage }) => {
  let background = "";
  let border = "";

  if (stage < 7) {
    background = "linear-gradient(138deg, #00BABD 0%, #00979A 100%)";
    border = "2px solid #2d3d39;";
  } else if (stage > 7) {
    background = "linear-gradient(138deg, #24463D 0%, #030104 100%)";
    border = "2px solid #2d3d39;";
  } else if (stage === 7) {
    background = "linear-gradient(147deg, #FFFF32 0%, #FFD319 75.54%)";
    border = "2px solid #2d3d39;";
  }

  return stage === 0 || stage === 14 ? (
    <div className="w-8 h-24 bg-transparent"></div>
  ) : (
    <div
      className={` ${
        stage === 7 ? "min-w-80 rounded-3xl" : "min-w-72 rounded-2xl"
      } h-fit flex flex-col items-center gap-2 p-4 border-[${border}] hover:scale-105 transition-all ease-out`}
      style={{ background, border }}
    >
      <div
        className="bg-black text-white p-1 font-[nav] px-2 rounded-2xl"
        style={{ textShadow: "2px 2px 0px #000" }}
      >
        {stage > 7 ? "Upcoming" : stage < 7 ? "Sold Out" : "Live Now"}
      </div>
      <p
        className="font-[boldx] text-2xl text-white"
        style={{
          textShadow: "1px 1px 0 #000",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        Stage {stage}/13
      </p>
      <p
        className="text-white text-6xl tracking-tight font-extrabold"
        style={{
          textShadow: "1px 1px 0 #000",
          WebkitTextStrokeWidth: "1.3px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        ${1000}
      </p>
      {stage == 7 && (
        <div
          className="text-black bg-white rounded-lg w-full shadow-lg flex flex-col p-2 gap-2"
          style={{ boxShadow: "2px 2px 2px 2px #000" }}
        >
          <p>$250000 GOAT</p>
          <p className="text-xs text-gray-400">$230,265.62 / $250,000.00</p>
          <div className="w-full rounded-3xl bg-black h-4 flex items-center">
            <div className="p-1 ml-2 text-yellow-500 border border-white bg-black rounded-md text-xs">
              GOAT
            </div>
          </div>
        </div>
      )}
      {stage > 7 && (
        <div
          className=" bg-green-800 text-white text-xl font-[boldx] rounded-2xl w-2/3 shadow-lg flex items-center flex-col p-2 gap-2"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          22.7%
        </div>
      )}
    </div>
  );
};

export default StageCard;
