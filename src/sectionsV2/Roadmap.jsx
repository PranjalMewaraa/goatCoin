import { div } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";

const Roadmap = () => {
  const roadmap = [
    {
      month: "August",
      year: 2024,
      arrayforpoints: [
        "Conceptualized GoatTapper and its integration with gamified blockchain elements.",
        "Established partnerships with a real estate company for tokenized assets.",
        "Designed the GTPR token utility and game mechanics.",
      ],
      currentPhaseNumber: 1,
    },
    {
      month: "September",
      year: 2024,
      arrayforpoints: [
        "Began development of the Telegram-based game.",
        "Finalized the tokenomics, including presale phases and auction models.",
        "Initiated smart contract development for the GTPR token.",
      ],
      currentPhaseNumber: 1,
    },
    {
      month: "October",
      year: 2024,
      arrayforpoints: [
        "Completed testing of game mechanics and GTPR token smart contracts.",
        "Launched social media channels and began engaging with the community.",
        "Conducted beta testing for the game with a small group of users.",
      ],
      currentPhaseNumber: 2,
    },
    {
      month: "November",
      year: 2024,
      arrayforpoints: [
        "Finalized the in-game points accumulation system.",
        "Created the presale structure (Phase-1 to Phase-5) with incremental pricing.",
      ],
      currentPhaseNumber: 2,
    },
    {
      month: "December",
      year: 2024,
      arrayforpoints: [
        "Official game launch: Users start playing and accumulating in-game points.",
        "GTPR tokens become available for purchase within the game for in-game assets (e.g., boosters).",
        "Presale Phase-1: GTPR token is available for purchase on the website at the lowest price tier.",
        "Conducted initial airdrop campaigns to attract early adopters.",
      ],
      currentPhaseNumber: 3,
    },
    {
      month: "January",
      year: 2025,
      arrayforpoints: [
        "Presale Phases 2-3: Incremental pricing introduces a sense of urgency for buyers.",
        "Continued marketing to grow the user base and awareness of the upcoming auction.",
      ],
      currentPhaseNumber: 3,
    },
    {
      month: "February",
      year: 2025,
      arrayforpoints: [
        "Presale Phases 4-5: Final phases before token sale closes.",
        "First auction preparation:",
        "Announce tokenized assets available for bidding in the first house-drop event.",
        "Share detailed guides for participants on how to use GTPR for the auction.",
      ],
      currentPhaseNumber: 3,
    },
    {
      month: "February 28",
      year: 2025,
      arrayforpoints: [
        "First House-Drop Auction:",
        "Conduct the first tokenized real estate asset auction using GTPR tokens.",
        "Distribute fractions of tokenized assets and GTPR airdrops to participants based on auction results.",
      ],
      currentPhaseNumber: 4,
    },
    {
      month: "March",
      year: 2025,
      arrayforpoints: [
        "Token Listing on Exchanges:",
        "GTPR token becomes tradable on DEXs and CEXs, providing liquidity and price discovery.",
        "Announce Next House-Drop Season:",
        "Share details about the next auction and enable users to start accumulating points for the upcoming season.",
      ],
      currentPhaseNumber: 4,
    },
  ];

  const stage = [1, 2, 3, 4, 5, 6, 7];
  const middleIndex = Math.floor(stage.length / 2); // Calculate the index of the middle stage

  // Create a reference to the scroll container
  const scrollContainerRef = useRef(null);

  // Calculate the scroll position to center the content
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Set scroll position to the start (left)
      scrollContainer.scrollLeft = 0;
    }
  }, []);

  const scroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Adjust the scroll position based on the direction
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust the scroll amount as needed
      scrollContainer.scrollLeft += scrollAmount;
    }
  };

  const phaseColors = {
    1: "text-cyan-400", // Phase 1 color
    2: "text-green-400", // Phase 2 color
    3: "text-cyan-700", // Phase 3 color
    4: "text-green-700", // Phase 4 color
  };
  const phases = [
    { name: "Inception and Planning", color: "bg-cyan-400" },
    {
      name: "Game Development and Early Community Building",
      color: "bg-green-400",
    },
    { name: "Game Launch and Presale", color: "bg-cyan-700" },
    { name: "First Auction and Airdrop", color: "bg-green-700" },
  ];

  return (
    <div
      className="w-full h-fit pb-16 min-h-screen mt-2 bg-cover bg-no-repeat"
      style={{
        background: "url(/image5.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="font-[boldx] text-center mt-8 text-yellow-500 text-7xl md:text-9xl"
        style={{
          textShadow: "4px 8px 0 #000",
          WebkitTextStrokeWidth: "1.3px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        Roadmap
      </h1>
      <div className="flex w-full flex-col md:flex-row px-8 justify-between  gap-2">
        {phases.map((item) => {
          return (
            <div className="flex h-fit items-center bg-white py-1 px-2 rounded font-black gap-2">
              <span
                className={`w-4 h-4 border-1 border-black ${item.color}`}
              ></span>
              {item.name}
            </div>
          );
        })}
      </div>
      <div
        className="flex md:flex-row w-screen overflow-x-scroll scroll-smooth snap-x snap-mandatory flex-col h-fit md:gap-4 p-8"
        ref={scrollContainerRef}
      >
        {roadmap.map(({ month, year, arrayforpoints, currentPhaseNumber }) => {
          return (
            <div className="flex flex-col gap-2 p-4 border-8 border-black w-full md:min-w-[400px] bg-white">
              <p
                className={`${phaseColors[currentPhaseNumber]} text-shadow-[2px_2px_0px_#000] font-inter text-4xl italic font-extrabold uppercase leading-normal`}
              >
                {month.toUpperCase()} <br /> {year}
              </p>
              <ul className="list-disc pl-2 font-semibold">
                {arrayforpoints.map((point) => (
                  <li>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center p-4 gap-24">
        <div className=" mb-2 left-1/3 transform  z-10">
          <button
            onClick={() => scroll("left")}
            className="bg-yellow-500 text-white border-2 border-white p-2 rounded-full shadow-lg"
          >
            <svg
              width="15"
              height="22"
              viewBox="0 0 15 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="rotate-[180deg]"
            >
              <path
                d="M14.4138 10.6207L1.13793 22L-1.98962e-07 17.4483L10.2414 10.6207L-8.12429e-07 3.41379L2.27586 -9.94811e-08L14.4138 10.6207Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
        <div className=" mb-2 right-1/3 transform  z-10">
          <button
            onClick={() => scroll("right")}
            className="bg-yellow-500 text-white border-2 border-white p-2 rounded-full shadow-lg"
          >
            <svg
              width="15"
              height="22"
              viewBox="0 0 15 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="shadow-swiper"
            >
              <path
                d="M14.4138 10.6207L1.13793 22L-1.98962e-07 17.4483L10.2414 10.6207L-8.12429e-07 3.41379L2.27586 -9.94811e-08L14.4138 10.6207Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
