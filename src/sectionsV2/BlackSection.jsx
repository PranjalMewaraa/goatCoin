import React, { useEffect, useRef, useState } from "react";

const BlackSection = () => {
  const stage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
  return (
    <div
      className="w-full h-fit md:min-h-screen bg-right-bottom relative bng-black  flex flex-col items-center gap-4 p-8 bg-no-repeat bg-contain"
      style={{ backgroundImage: "url(/img/black1.png)" }}
    >
      <img src="/dollar.png" alt="" className="h-28 md:h-40" />
      <h1
        className="font-[boldx] text-center text-7xl text-white stroke-black stroke-1"
        style={{
          WebkitTextStrokeWidth: "1.3px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        About <br />{" "}
        <span
          className="text-yellow-300"
          style={{
            background: "linear-gradient(180deg, #F7A600 0%, #FFD319 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GOAT TOKEN
        </span>
      </h1>
      <div className="flex gap-2 items-center justify-center">
        <img src="https://dogen.meme/spyWolf1.svg" alt="" />{" "}
        <div className="h-20 w-[1px] bg-gray-50"></div>
        <img
          src="https://dogen.meme/cyberscope.png"
          className="max-h-36"
          alt=""
        />{" "}
        <div className="h-20 w-[1px] bg-gray-50"></div>
        <img src="https://dogen.meme/smartState1.svg" alt="" />
      </div>

      <p className="text-gray-400 text-center w-full md:w-2/3 text-sm">
        The $GTPR token is currently in the presale and is not listed on any
        CEX/DEX. You can buy the token only on this website. Do not send any
        funds directly to the token's address, as they will be lost permanently.
      </p>
      <div
        className="relative w-full h-fit flex gap-8 p-4 items-center overflow-x-auto scroll-smooth snap-x snap-mandatory"
        ref={scrollContainerRef}
      >
        {stage.map((item, index) => (
          <div key={item} className="flex-shrink-0 snap-center">
            <img src={`/img/${index + 1}.png`} alt="" />
          </div>
        ))}
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
      {/* Left and Right Scroll Buttons */}
    </div>
  );
};

export default BlackSection;
