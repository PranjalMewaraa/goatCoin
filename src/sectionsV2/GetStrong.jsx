import React from "react";

const GetStrong = () => {
  return (
    <div
      className="mt-2 relative mb-4 min-h-screen h-fit md:h-screen flex md:flex-row items-center flex-col overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/bggs.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <img
          src="/gtb-min.webp"
          className="bottom-0 absolute w-2/3 md:w-1/3"
          alt="gtb"
        />
      </div>
      <div className="w-full p-8 md:p-1 flex flex-col gap-4 md:w-1/2 right-0 absolute">
        <h1
          className="font-[boldx] text-5xl md:text-7xl text-white"
          style={{
            textShadow: "4px 5px 0 #000",
            WebkitTextStrokeWidth: "1.3px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          Why GTPR ?
        </h1>
        <h6
          className="text-justify pr-10 text-xl md:text-3xl font-black"
          style={{
            WebkitTextStrokeWidth: ".75ßpx",
            WebkitTextStrokeColor: "#F0B90B",
          }}
        >
          GoatTapper (GTPR) is a community-driven, gamified blockchain project
          combining fun and financial opportunities through a tap-to-earn game
          integrated with real world value. The <strong>House-Drop</strong>{" "}
          initiative includes tokenized realestate assets in to the ecosystem,
          allowing user to participate in auction and own property backed NFTs.
          GTPR is utility token that powers the ecosystem, enabling players,
          investors, and partners to engage meaningfully with the project.
        </h6>
      </div>
    </div>
  );
};

export default GetStrong;
