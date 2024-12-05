import { div } from "framer-motion/client";
import React from "react";
import MarqueeStrip from "../components/Marquee";

const Footer = () => {
  const DATA_LIST = [
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
    { text: "BECOME A GOAT " },
  ];
  return (
    <div className="flex flex-col bg-black w-full h-fit min-h-[60vh]">
      <div className="overflow-hidden  rotate-[2.2deg] origin-top-left bg-[#00BABD] scale-105 w-full z-40 h-20 flex items-center">
        <MarqueeStrip DATA_LIST={DATA_LIST} />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center ">
        <div
          style={{
            background: "linear-gradient(180deg, #F7A600 0%, #FFD319 100%)",
          }}
          className="md:h-[110px] mt-20 bg-[#FFD319] z-10 md:rounded-[15px_77px_77px_15px] flex p-[6px] md:pl-[32px] max-w-[950px] gap-4 justify-between md:gap-[40px] flex-col md:flex-row m-auto rounded-[15px] h-auto md:p-[15px] mx-[10px]"
        >
          <div class="flex w-full md:w-1/3 font-semibold text-center md:text-justify  items-center flex-shrink-0 gap-[10px]">
            <p class="w-fit  md:px-[20px] text-[18px]">
              Join our App Whitelist to be among the first alpha G.O.A.T
              explorers
            </p>
            <svg
              width="37"
              height="45"
              viewBox="0 0 37 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="hidden md:flex"
            >
              <path
                d="M22.3145 1.08691L34.6101 22.4706L22.3145 43.5869"
                stroke="url(#paint0_linear_2002_2281)"
                stroke-width="3.20755"
              ></path>
              <path
                opacity="0.6"
                d="M12.1572 1.08691L24.4528 22.4706L12.1572 43.5869"
                stroke="url(#paint1_linear_2002_2281)"
                stroke-width="3.20755"
              ></path>
              <path
                opacity="0.2"
                d="M2 1.08691L14.2956 22.4706L2 43.5869"
                stroke="url(#paint2_linear_2002_2281)"
                stroke-width="3.20755"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_2002_2281"
                  x1="28.4623"
                  y1="1.08691"
                  x2="28.4623"
                  y2="43.5869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD319"></stop>
                  <stop offset="0.5" stop-color="white"></stop>
                  <stop offset="1" stop-color="#FFD319"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2002_2281"
                  x1="18.305"
                  y1="1.08691"
                  x2="18.305"
                  y2="43.5869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD319"></stop>
                  <stop offset="0.5" stop-color="white"></stop>
                  <stop offset="1" stop-color="#FFD319"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2002_2281"
                  x1="8.1478"
                  y1="1.08691"
                  x2="8.1478"
                  y2="43.5869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD319"></stop>
                  <stop offset="0.5" stop-color="white"></stop>
                  <stop offset="1" stop-color="#FFD319"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="md:rounded-[65px] bg-white flex justify-between w-full  p-[15px] pl-[32px] rounded-[15px] md:flex-row flex-col md:items-center items-center md:gap-[20px] md:px-[19px]">
            <div class="flex flex-col items-center text-center gap-[5px]">
              <input
                placeholder="Goat_explorer@"
                class="text-[20px] uppercase outline-none"
              />
            </div>
            <button class="bg-black rounded-[78px] px-[35px] md:h-[69px] uppercase md:text-[18px] text-white hover:text-[#FFD319] transition-all md:w-full h-[54px] text-[15px]">
              Join Whitelist
            </button>
          </div>
        </div>
        <img
          className="w-3/5 h-fit bg-cover  z-0 bg-no-repeat"
          src="/image4.png"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
