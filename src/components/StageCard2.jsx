import axios from "axios";
import { div } from "framer-motion/client";
import React, { useEffect, useState } from "react";

const StageCard = ({ stage, price, perc }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [currentCampaign, setCurrentCampaign] = useState(null);
  const API_BASE_URL = "https://api.faceafrika.com/api/v1";

  useEffect(() => {
    const fetchStageData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/gotapper/camp`);
        setCampaigns(response.data);
        const active = response.data.find((camp) => camp.status === "active");
        setCurrentCampaign(active);
      } catch (error) {
        console.error("Error fetching stage data:", error);
      }
    };

    fetchStageData();
  }, []);

  let background = "";
  let border = "";

  const currentStage = currentCampaign?.stage || 3;

  if (stage < currentStage) {
    background = "linear-gradient(138deg, #00BABD 0%, #00979A 100%)";
    border = "2px solid #2d3d39;";
  } else if (stage > currentStage) {
    background = "linear-gradient(138deg, #24463D 0%, #030104 100%)";
    border = "2px solid #2d3d39;";
  } else if (stage === currentStage) {
    background = "linear-gradient(147deg, #FFD700 0%, #FF8C00 75.54%)";
    border = "2px solid #2d3d39;";
  }

  const stageCampaign = campaigns.find((camp) => camp.stage === stage);

  return stage === 0 || stage === 14 ? (
    <div className="hidden md:flex md:w-4 h-24 bg-transparent"></div>
  ) : (
    <div
      className={` ${
        stage === currentStage ? "min-w-80 rounded-3xl" : "min-w-72 rounded-2xl"
      } h-fit flex flex-col items-center gap-2 p-4 border-[${border}] hover:scale-105 transition-all ease-out`}
      style={{ background, border }}
    >
      <div
        className="bg-black text-white p-1 font-[nav] px-2 rounded-2xl"
        style={{ textShadow: "2px 2px 0px #000" }}
      >
        {stage > currentStage
          ? "Upcoming"
          : stage < currentStage
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
        Stage {stage}/9
      </p>
      <p
        className="text-white text-6xl tracking-tight font-extrabold"
        style={{
          textShadow: "1px 1px 0 #000",
          WebkitTextStrokeWidth: "1.3px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        ${stageCampaign?.current_price || price}
      </p>
      {stage === currentStage && (
        <div
          className="text-black bg-white rounded-lg w-full shadow-lg flex flex-col p-2 gap-2"
          style={{ boxShadow: "2px 2px 2px 2px #000" }}
        >
          <p>GTPR {Number(stageCampaign?.target_amount).toLocaleString()}</p>
          <p className="text-xs text-gray-400">
            $ {Number(stageCampaign?.raised_amount).toLocaleString()} / ${" "}
            {Number(stageCampaign?.target_amount).toLocaleString()}
          </p>
          <div className="w-full rounded-3xl bg-black h-4 flex items-center">
            <div className="p-1 ml-2 text-yellow-500 border border-white bg-black rounded-md text-xs">
              GTPR
            </div>
          </div>
        </div>
      )}
      {stage > currentStage && (
        <div
          className=" bg-green-800 text-white text-xl font-[boldx] rounded-2xl w-2/3 shadow-lg flex items-center flex-col p-2 gap-2"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          +{stageCampaign?.percentage || perc}%
        </div>
      )}
    </div>
  );
};

export default StageCard;
