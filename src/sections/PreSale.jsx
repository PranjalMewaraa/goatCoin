import React, { useRef, useEffect } from "react";
import StageCard from "../components/StageCard";
import MarqueeStripBlue from "../components/MarqueeBlue";
const Presale = () => {
  const stage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const middleIndex = Math.floor(stage.length / 2); // Calculate the index of the middle stage

  // Create a reference to the scroll container
  const scrollContainerRef = useRef(null);

  // Calculate the scroll position to center the content
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Calculate the width of a single stage card (Assuming 300px per card, adjust if needed)
      const stageCardWidth = 300;
      // Calculate the initial scroll position (centered)
      const scrollPosition =
        middleIndex * stageCardWidth -
        scrollContainer.offsetWidth / 2 +
        stageCardWidth / 2;
      scrollContainer.scrollLeft = scrollPosition;
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
  const DATA_LIST = [
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
    "PRE SALE IS LIVE",
  ];
  return (
    <div
      className="w-full flex flex-col -rotate-2 scale-110 bg-right -translate-y-10"
      style={{ backgroundImage: "url(/black.webp)" }}
    >
      <div className="overflow-hidden relative  origin-top-right bg-[#00BABD] translate-y-2 w-full h-16 flex items-center">
        <MarqueeStripBlue DATA_LIST={DATA_LIST} />
      </div>
      <div className="w-full h-full min-h-[65vh] gap-16 flex flex-col rotate-2 py-12 p-8 items-center justify-center drop-shadow-md bg-no-repeat bg-cover">
        <div className="flex flex-col md:flex-row gap-4 items-center ">
          <span>
            <p className="text-gray-200">Total Supply</p>
            <p className="text-white text-4xl md:text-5xl font-bold">
              10,000,000,000
            </p>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="59"
            height="71"
            viewBox="0 0 59 71"
            fill="none"
          >
            <g clipPath="url(#clip0_6_1595)">
              <path
                d="M35.2676 1.94043L54.6512 35.6511L35.2676 68.9404"
                stroke="url(#paint0_linear_6_1595)"
                strokeWidth="5.0566"
              />
              {/* Other SVG paths */}
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_6_1595"
                x1="44.9594"
                y1="1.94043"
                x2="44.9594"
                y2="68.9404"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.5" stopColor="white" />
                <stop offset="1" />
              </linearGradient>
              {/* Other gradients */}
            </defs>
          </svg>
          <p className="text-white text-5xl font-bold">60%</p>
          <span className="hidden md:flex text-gray-200">
            Pre <br /> Sale
          </span>
          <span className="md:hidden text-gray-200">Pre Sale</span>
        </div>
        {/* Horizontal scroll container */}
        <div
          className="relative w-full h-fit flex gap-8 p-4  items-center overflow-x-auto scroll-smooth snap-x snap-mandatory"
          ref={scrollContainerRef}
        >
          {stage.map((item, index) => (
            <div key={item} className="flex-shrink-0 snap-center">
              <StageCard stage={item} />
            </div>
          ))}
        </div>
        <div className="flex gap-24 items-center p-4">
          <div className=" transform  z-10">
            <button
              onClick={() => scroll("left")}
              className="bg-yellow-500 text-white p-2 rounded-full shadow-lg"
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
          <div className="transform  z-10">
            <button
              onClick={() => scroll("right")}
              className="bg-yellow-500 text-white p-2 rounded-full shadow-lg"
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
    </div>
  );
};

export default Presale;
