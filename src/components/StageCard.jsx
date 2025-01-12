import axios from "axios";
import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const StageCard = ({ stage }) => {
  const [stageData, setStageData] = useState([]);
  let background = "";
  let border = "";
  const API_BASE_URL = "https://api.faceafrika.com/api/v1";

  useEffect(() => {
    const fetchStageData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/gotapper/update-campaigns`
        );

        const data = response?.data[0];

        console.log(data);

        setStageData(data);
      } catch (error) {
        console.error("Error fetching stage data:", error);
      }
    };

    fetchStageData();
  }, []);
  if (stageData?.[0].stage < 7) {
    background = "linear-gradient(138deg, #00BABD 0%, #00979A 100%)";
    border = "2px solid #2d3d39;";
  } else if (stageData?.[0].stage > 7) {
    background = "linear-gradient(138deg, #24463D 0%, #030104 100%)";
    border = "2px solid #2d3d39;";
  } else if (stageData?.[0].stage === 7) {
    background = "linear-gradient(147deg, #FFFF32 0%, #FFD319 75.54%)";
    border = "2px solid #2d3d39;";
  }

  return stageData?.[0].stage === 0 || stageData?.[0].stage === 14 ? (
    <div className="w-8 h-24 bg-transparent"></div>
  ) : (
    <div
      className={` ${
        stageData?.[0].stage === 7
          ? "min-w-80 rounded-3xl"
          : "min-w-72 rounded-2xl"
      } h-fit flex flex-col items-center gap-2 p-4 border-[${border}] hover:scale-105 transition-all ease-out`}
      style={{ background, border }}
    >
      <div
        className="bg-black text-white p-1 font-[nav] px-2 rounded-2xl"
        style={{ textShadow: "2px 2px 0px #000" }}
      >
        {stageData?.[0].stage > 7
          ? "Upcoming"
          : stageData?.[0].stage < 7
          ? "Sold Out"
          : "Live Now"}
      </div>
      <p
        className="font-[boldx] text-2xl text-white"
        style={{
          textShadow: "1px 1px 0 #000",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        Stage {stageData?.[0].stage}/13
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
      {stageData?.[0].stage == 7 && (
        <div
          className="text-black bg-white rounded-lg w-full shadow-lg flex flex-col p-2 gap-2"
          style={{ boxShadow: "2px 2px 2px 2px #000" }}
        >
          <p>GTPR 33,333,333 GOAT</p>
          <p className="text-xs text-gray-400">
            GTPR 230,265.62 / GTPR 33,333,333.00
          </p>
          <div className="w-full rounded-3xl bg-black h-4 flex items-center">
            <div className="p-1 ml-2 text-yellow-500 border border-white bg-black rounded-md text-xs">
              GOAT
            </div>
          </div>
        </div>
      )}
      {stageData?.[0].stage > 7 && (
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
