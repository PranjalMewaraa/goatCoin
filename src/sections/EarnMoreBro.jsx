import { motion } from "framer-motion";
import React from "react";
import MarqueeStrip from "../components/Marquee";

const EarnMore = () => {
  const DATA_LIST = [
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
    { text: "EARN WITH YOUR BROS " },
  ];
  return (
    <div className="w-full  h-fit flex flex-col pb-16 mt-1 md:rotate-2  translate-y-16 md:scale-105 md:-translate-y-10">
      <div className="overflow-hidden relative bg-black w-full h-20 hidden md:flex items-center">
        <MarqueeStrip DATA_LIST={DATA_LIST} />
      </div>

      <div
        style={{ backgroundImage: "url(/img/yellow.png)" }}
        className="w-full bg-right-bottom bg-no-repeat bg-contain bg-[#FFC000] relative px-12 py-12 md:py-24 pb-16 md:pb-1 md:px-24 md:h-[100vh] hidden md:flex flex-col  "
      >
        <div className="md:-rotate-3 flex flex-col gap-8">
          <div
            className=" uppercase text-white  font-[boldx] text-6xl "
            style={{
              textShadow: "6.345px 7.614px 0px #000",
              WebkitTextStrokeWidth: "1.3px",
              WebkitTextStrokeColor: "#000",
            }}
          >
            Ready to
            <br />
            Earn More
          </div>
          <p className="text-black font-semibold text-xl">
            Get income from your friends' purchases—and their friends' too, up{" "}
            to three levels! <br /> Build your own GOAT army!
          </p>
          <div className="flex gap-4">
            <div className="p-4 max-w-96 text-white font-bold border-b-8 border-r-4 border-black rounded-md border-l border-t bg-[#019697]">
              Connect Your Wallet to Copy Code
            </div>
            <div className="p-4 max-w-48 font-bold border-b-8 border-r-4 border-black rounded-md border-l border-t bg-white text-black">
              Whitepaper
            </div>
          </div>
          <div className="flex gap-4 items-end">
            <div className="w-64 bg-white rounded-2xl border-r-4 border-b-8 border-black p-4 flex flex-col gap-4 items-center">
              <p className="bg-black px-2 py-1 rounded-xl text-white">
                1 Level
              </p>

              <h1
                className="font-[boldx] flex gap-4 items-center text-yellow-400 text-4xl"
                style={{
                  textShadow: "4px 5px 0 #000",
                  WebkitTextStrokeWidth: "1.3px",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                {/* <span>
                  <img
                    className="h-10"
                    src="https://dogen.meme/_next/static/media/firstLvlItem.67dfe229.png"
                    alt=""
                  />
                </span> */}
                TapAway
                {/* <span>
                  <img
                    className="h-10 transform scale-x-[-1]"
                    src="https://dogen.meme/_next/static/media/firstLvlItem.67dfe229.png"
                    alt=""
                  />
                </span> */}
              </h1>
              <p className="text-center">
                Play GoatTapper to earn points and start your journey toward
                exclusive rewards.
              </p>
              <h1
                className="font-[boldx] text-yellow-400 text-3xl"
                style={{
                  textShadow: "4px 5px 0 #000",
                  WebkitTextStrokeWidth: "1.3px",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                +20% $GOAT
              </h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="71"
              viewBox="0 0 59 71"
              fill="none"
              className="mb-12"
            >
              <g clip-path="url(#clip0_6_1595)">
                <path
                  d="M35.2676 1.94043L54.6512 35.6511L35.2676 68.9404"
                  stroke="url(#paint0_linear_6_1595)"
                  stroke-width="5.0566"
                />
                <path
                  opacity="0.6"
                  d="M19.2549 1.94043L38.6385 35.6511L19.2549 68.9404"
                  stroke="url(#paint1_linear_6_1595)"
                  stroke-width="5.0566"
                />
                <path
                  opacity="0.2"
                  d="M3.24219 1.94043L22.6258 35.6511L3.24219 68.9404"
                  stroke="url(#paint2_linear_6_1595)"
                  stroke-width="5.0566"
                />
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
                  <stop offset="0.5" stop-color="white" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_6_1595"
                  x1="28.9467"
                  y1="1.94043"
                  x2="28.9467"
                  y2="68.9404"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.5" stop-color="white" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_6_1595"
                  x1="12.934"
                  y1="1.94043"
                  x2="12.934"
                  y2="68.9404"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.5" stop-color="white" />
                  <stop offset="1" />
                </linearGradient>
                <clipPath id="clip0_6_1595">
                  <rect
                    width="58"
                    height="70"
                    fill="white"
                    transform="translate(0.242188 0.554688)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="w-64 bg-white h-fit rounded-2xl border-r-4 border-b-8 border-black p-4 flex flex-col gap-4 items-center">
              <p className="bg-black px-2 py-1 rounded-xl text-white">
                2 Level
              </p>
              <h1
                className="font-[boldx] flex gap-4 items-center text-transparent bg-clip-text text-center text-3xl"
                style={{
                  filter: "drop-shadow(3px 4px 0 #000)",

                  background:
                    "Linear-gradient(110.03deg, #f9f9f9 3.68%, #bdcdd6 31.34%, #a9beca 72.2%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                Boost Your Chances!
              </h1>
              <p className="mb-4 text-center">
                Complete fun and simple tasks like sharing, following, and
                referring to 3x your in- airdrop points and secure a better spot
                in the auction.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="71"
              viewBox="0 0 59 71"
              fill="none"
              className="mb-12"
            >
              <g clip-path="url(#clip0_6_1595)">
                <path
                  d="M35.2676 1.94043L54.6512 35.6511L35.2676 68.9404"
                  stroke="url(#paint0_linear_6_1595)"
                  stroke-width="5.0566"
                />
                <path
                  opacity="0.6"
                  d="M19.2549 1.94043L38.6385 35.6511L19.2549 68.9404"
                  stroke="url(#paint1_linear_6_1595)"
                  stroke-width="5.0566"
                />
                <path
                  opacity="0.2"
                  d="M3.24219 1.94043L22.6258 35.6511L3.24219 68.9404"
                  stroke="url(#paint2_linear_6_1595)"
                  stroke-width="5.0566"
                />
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
                  <stop offset="0.5" stop-color="white" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_6_1595"
                  x1="28.9467"
                  y1="1.94043"
                  x2="28.9467"
                  y2="68.9404"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.5" stop-color="white" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_6_1595"
                  x1="12.934"
                  y1="1.94043"
                  x2="12.934"
                  y2="68.9404"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.5" stop-color="white" />
                  <stop offset="1" />
                </linearGradient>
                <clipPath id="clip0_6_1595">
                  <rect
                    width="58"
                    height="70"
                    fill="white"
                    transform="translate(0.242188 0.554688)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="w-64 bg-white h-fit rounded-2xl border-r-4 border-b-8 border-black p-4 flex flex-col gap-4 items-center">
              <p className="bg-black px-2 py-1 rounded-xl text-white">
                3 Level
              </p>

              <h1
                className="font-[boldx] text-center flex gap-4 items-center text-transparent text-3xl"
                style={{
                  background:
                    "linear-gradient(110.03deg, #fff 3.68%, #e0a786 29.15%, #cc6c35 72.2%)",
                  WebkitBackgroundClip: "text",
                  filter: "drop-shadow(3px 4px 0 #000)",
                }}
              >
                Win a Piece of Reality!
              </h1>
              <p className="text-center">
                Compete in the House Drop auction and win a real-world tokenized
                property—your gateway to Blockchain-Powered ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full scale-105 bg-yellow-400 relative px-12 py-12 md:py-24 pb-16 md:pb-1 md:px-24 md:h-[100vh] flex md:hidden flex-col  bg-cover bg-no-repeat">
        <div className="md:-rotate-3 flex flex-col gap-8">
          <div
            className=" uppercase text-white  font-[boldx] text-6xl "
            style={{
              textShadow: "6.345px 7.614px 0px #000",
              WebkitTextStrokeWidth: "1.3px",
              WebkitTextStrokeColor: "#000",
            }}
          >
            Ready to
            <br />
            Earn More
          </div>
          <p className="text-black font-semibold text-xl">
            Get income from your friends' purchases—and their friends' too, up{" "}
            to three levels! <br /> Build your own DOGEN army!
          </p>
          <div className="flex gap-4">
            <div className="p-4 max-w-96 text-white font-bold border-b-8 border-r-4 border-black rounded-md border-l border-t bg-[#019697]">
              Connect Your Wallet to Copy Code
            </div>
            <div className="p-4 max-w-48 font-bold border-b-8 border-r-4 border-black rounded-md border-l border-t bg-white text-black">
              Know More
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 overflow-x-scroll items-center pb-10">
            <div className="w-64 bg-white rounded-2xl border-r-4 border-b-8 border-black p-4 flex flex-col gap-4 items-center">
              <p className="bg-black px-2 py-1 rounded-xl text-white">
                1 Level
              </p>

              <h1
                className="font-[boldx] flex gap-4 items-center text-yellow-400 text-4xl"
                style={{
                  textShadow: "4px 5px 0 #000",
                  WebkitTextStrokeWidth: "1.3px",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                {/* <span>
                  <img
                    className="h-10"
                    src="https://dogen.meme/_next/static/media/firstLvlItem.67dfe229.png"
                    alt=""
                  />
                </span> */}
                TapAway
                {/* <span>
                  <img
                    className="h-10 transform scale-x-[-1]"
                    src="https://dogen.meme/_next/static/media/firstLvlItem.67dfe229.png"
                    alt=""
                  />
                </span> */}
              </h1>
              <p className="text-center">
                Play GoatTapper to earn points and start your journey toward
                exclusive rewards.
              </p>
              <h1
                className="font-[boldx] text-yellow-400 text-3xl"
                style={{
                  textShadow: "4px 5px 0 #000",
                  WebkitTextStrokeWidth: "1.3px",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                +20% $GOAT
              </h1>
            </div>

            <div className="w-64 bg-white h-fit rounded-2xl border-r-4 border-b-8 border-black p-4 flex flex-col gap-4 items-center">
              <p className="bg-black px-2 py-1 rounded-xl text-white">
                2 Level
              </p>
              <h1
                className="font-[boldx] flex gap-4 items-center text-transparent bg-clip-text text-center text-3xl"
                style={{
                  filter: "drop-shadow(3px 4px 0 #000)",

                  background:
                    "Linear-gradient(110.03deg, #f9f9f9 3.68%, #bdcdd6 31.34%, #a9beca 72.2%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                Boost Your Chances!
              </h1>
              <p className="mb-4 text-center">
                Complete fun and simple tasks like sharing, following, and
                referring to 3x your in- airdrop points and secure a better spot
                in the auction.
              </p>
            </div>

            <div className="w-64 bg-white h-fit rounded-2xl border-r-4 border-b-8 border-black p-4 flex flex-col gap-4 items-center">
              <p className="bg-black px-2 py-1 rounded-xl text-white">
                3 Level
              </p>

              <h1
                className="font-[boldx] text-center flex gap-4 items-center text-transparent text-3xl"
                style={{
                  background:
                    "linear-gradient(110.03deg, #fff 3.68%, #e0a786 29.15%, #cc6c35 72.2%)",
                  WebkitBackgroundClip: "text",
                  filter: "drop-shadow(3px 4px 0 #000)",
                }}
              >
                Win a Piece of Reality!
              </h1>
              <p className="text-center">
                Compete in the House Drop auction and win a real-world tokenized
                property—your gateway to Blockchain-Powered ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnMore;
