import React, { useState, useEffect, useRef } from "react";

const FutureListing = () => {
  const stage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
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
      className="w-full h-fit  flex gap-24 md:gap-16 justify-center items-center flex-col overflow-hidden pt-[80px] pb-[60px] md:pt-[80px] md:pb-42 relative"
      style={{
        backgroundImage: "url(d1.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="font-[boldx] text-center text-white text-7xl md:text-5xl"
        style={{
          textShadow: "4px 5px 0 #000",
          WebkitTextStrokeWidth: "1.3px",
          WebkitTextStrokeColor: "#000",
        }}
      >
        Future Listing
      </h1>
      <div
        className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory relative"
        ref={scrollContainerRef}
      >
        <img
          src="/img/fl/slider2.svg"
          alt="fr"
          style={{
            maxWidth: "max-content",
            // Adjusting value based on slider state
          }}
          className="relative transition-all flex-shrink-0 snap-center ease-in"
        />
      </div>
      <div className="flex gap-16 items-center">
        <div
          className="py-1 px-2 rounded-full bg-yellow-500 cursor-pointer"
          onClick={() => scroll("left")}
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
        </div>

        {/* {currentSlideArray.map((item, index) => {
          return (
            <div
              className={`${
                item === currentSlideArray[slider]
                  ? "p-2 bg-white"
                  : "p-1 bg-gray-300"
              } rounded-full border border-black`}
              key={index}
            ></div>
          );
        })} */}

        <div
          className="py-1 px-2 rounded-full bg-yellow-500 cursor-pointer"
          onClick={() => scroll("right")}
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
        </div>
      </div>
    </div>
  );
};

export default FutureListing;
