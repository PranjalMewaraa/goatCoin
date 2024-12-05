import React from "react";

const Roadmap = () => {
  return (
    <div
      className="w-full h-full pb-8 min-h-screen mt-2 bg-cover bg-no-repeat"
      style={{
        background: "url(/Pranjal/4.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="font-[boldx] text-center mt-8 text-yellow-400 text-7xl md:text-9xl"
        style={{
          textShadow: "4px 5px 0 #000",
          WebkitTextStrokeWidth: "1.3px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        Roadmap
      </h1>
      <div className="flex md:flex-row flex-col md:gap-4 p-8">
        <div className="flex flex-col gap-2 p-4 border-8 border-black w-full md:w-1/4 bg-white">
          <p className="text-[#00BABD] text-shadow-[2px_2px_0px_#000] font-inter text-4xl italic font-extrabold uppercase leading-normal">
            OCTOBER <br /> 2024
          </p>
          <ul className="list-disc pl-2 font-semibold">
            <li>Referal System</li>
            <li>LVL Rating</li>
            <li>Daily Rewards</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 p-4 border-8 border-black w-full md:w-1/4 bg-white">
          <p className="text-[#00BABD] text-shadow-[2px_2px_0px_#000] font-inter text-4xl italic font-extrabold uppercase leading-normal">
            NOVEMBER <br /> 2024
          </p>
          <ul className="list-disc pl-2 font-semibold">
            <li>Special Cards</li>
            <li>Daily combo</li>
            <li>TON Blockchain Announcemnet</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 p-4 border-8 border-black w-full md:w-1/4 bg-white">
          <p className="text-[#00BABD] text-shadow-[2px_2px_0px_#000] font-inter text-4xl italic font-extrabold uppercase leading-normal">
            DECEMBER <br />
            2024
          </p>
          <ul className="list-disc pl-2 font-semibold">
            <li>On Chain Infrastructure development</li>
            <li>In Game Wallet</li>
            <li>Web 3 Peer Listing Quests</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 p-4 border-8 border-black w-full md:w-1/4 bg-white">
          <p className="text-[#00BABD] text-shadow-[2px_2px_0px_#000] font-inter text-4xl italic font-extrabold uppercase leading-normal">
            January <br /> 2025
          </p>
          <ul className="list-disc pl-2 font-semibold">
            <li>Characters and Skins</li>
            <li>Largest Ever Airdrop</li>
            <li>Third Party Game Integration MVP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
