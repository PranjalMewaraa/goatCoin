import React from "react";

import Convertor from "../components/Convertor";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
const Hero = () => {
  const handleViewPdf = () => {
    window.open("/whitepaper.pdf", "_blank");
  };
  return (
    <>
      <div
        className="w-full h-fit  bg-no-repeat bg-cover flex flex-col items-center"
        style={{ backgroundImage: "url(/bg-hero.webp)" }}
      >
        <div className="max-w-[1560px] w-full flex flex-col gap-4 h-[100vh] overflow-hidden md:pt-20 md:px-16 bg-no-repeat relative bg-cover">
          <div id="bottom_layer" className="md:absolute">
            <div className="w-full scale-75 md:scale-100 2xl:scale-110 flex gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="292"
                height="254"
                viewBox="0 0 292 254"
                fill="none"
              >
                <g filter="url(#filter0_d_37_394)">
                  <path
                    d="M70.2129 126.562C70.2129 151.875 88.1601 177.315 110.2 177.315H213.473V146.423H119.396L105.478 99.7185H284V243H105.478C47.2284 243 0 188.397 0 121.5C0 54.241 47.2284 0 105.478 0H284V68.7479H105.478C83.4382 68.7479 70.2129 101.25 70.2129 126.562Z"
                    fill="url(#paint0_linear_37_394)"
                  />
                  <path
                    d="M213.473 177.815H213.973V177.315V146.423V145.923H213.473H119.769L106.148 100.218H283.5V242.5H105.478C47.5691 242.5 0.5 188.19 0.5 121.5C0.5 54.4489 47.5682 0.5 105.478 0.5H283.5V68.2479H105.478C94.183 68.2479 85.2347 76.5744 79.1399 87.9264C73.0361 99.2951 69.7129 113.831 69.7129 126.562C69.7129 139.33 74.237 152.124 81.5434 161.734C88.8478 171.34 98.9776 177.815 110.2 177.815H213.473Z"
                    stroke="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_37_394"
                    x="0"
                    y="0"
                    width="292"
                    height="254"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="8" dy="11" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_37_394"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_37_394"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_37_394"
                    x1="142"
                    y1="43"
                    x2="142"
                    y2="243"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F7A600" />
                    <stop offset="1" stop-color="#FFE781" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="293"
                height="262"
                viewBox="0 0 293 262"
                fill="none"
              >
                <g filter="url(#filter0_d_37_393)">
                  <path
                    d="M142.5 -6.22886e-06C221.384 -2.78075e-06 285 43.6775 285 97.838L285 153.163C285 207.322 221.384 251 142.5 251C63.616 251 -1.5188e-05 207.322 -1.28207e-05 153.163L-1.04023e-05 97.838C-8.03489e-06 43.6775 63.616 -9.677e-06 142.5 -6.22886e-06ZM142.076 64.934C114.085 64.934 91.1833 80.6578 91.1833 99.8766L91.1833 151.124C91.1833 170.342 114.085 185.775 142.076 185.775C170.067 185.775 192.969 170.342 192.969 151.124L192.969 99.8766C192.969 80.6578 170.067 64.934 142.076 64.934Z"
                    fill="url(#paint0_linear_37_393)"
                  />
                  <path
                    d="M142.5 0.499994C181.855 0.499995 217.378 11.396 243.049 29.021C268.721 46.6473 284.5 70.9694 284.5 97.838L284.5 153.163C284.5 180.031 268.721 204.353 243.049 221.979C217.378 239.604 181.855 250.5 142.5 250.5C103.146 250.5 67.6223 239.604 41.9516 221.979C16.279 204.353 0.499992 180.031 0.499993 153.163L0.499996 97.838C0.499997 70.9694 16.279 46.6473 41.9516 29.021C67.6223 11.396 103.146 0.499992 142.5 0.499994ZM142.076 64.434C127.991 64.434 115.167 68.389 105.85 74.7861C96.5359 81.181 90.6833 90.0536 90.6833 99.8766L90.6833 151.124C90.6833 160.948 96.5372 169.748 105.852 176.07C115.17 182.394 127.993 186.275 142.076 186.275C156.158 186.275 168.982 182.394 178.3 176.07C187.615 169.748 193.469 160.948 193.469 151.124L193.469 99.8766C193.469 90.0536 187.616 81.181 178.302 74.7861C168.985 68.389 156.16 64.434 142.076 64.434Z"
                    stroke="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_37_393"
                    x="0"
                    y="0"
                    width="293"
                    height="262"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="8" dy="11" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_37_393"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_37_393"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_37_393"
                    x1="142.5"
                    y1="-6.22887e-06"
                    x2="142.5"
                    y2="251"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F7A600" />
                    <stop offset="1" stop-color="#FFE781" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="319"
                height="262"
                viewBox="0 0 319 262"
                fill="none"
              >
                <g filter="url(#filter0_d_37_392)">
                  <path
                    d="M-8.07057e-06 65.8669C-9.65228e-06 29.6816 69.4196 0.500014 155.5 0.50001C241.117 0.500006 311 29.6816 311 65.8669L311 174.422L311 250.5L259.166 250.5L207.332 250.5L207.332 174.422L90.2455 174.422L90.2455 250.5L45.1227 250.5L0.000407527 250.5L-3.32547e-06 174.422L-8.07057e-06 65.8669ZM207.332 68.5903C207.332 54.9725 181.416 43.8833 149.021 43.8833C116.625 43.8833 90.2455 54.9725 90.2455 68.5903L90.2455 131.039L207.332 131.039L207.332 68.5903Z"
                    fill="url(#paint0_linear_37_392)"
                  />
                  <path
                    d="M89.7455 131.039L89.7455 131.539L90.2455 131.539L207.332 131.539L207.832 131.539L207.832 131.039L207.832 68.5903C207.832 65.0156 206.13 61.6496 203.132 58.6324C200.136 55.6172 195.822 52.9229 190.52 50.6699C179.916 46.1632 165.269 43.3833 149.021 43.3833C132.772 43.3833 118.01 46.1632 107.291 50.6692C101.932 52.9217 97.5608 55.6154 94.5214 58.6298C91.4801 61.6459 89.7455 65.0126 89.7455 68.5903L89.7455 131.039ZM90.2455 173.922L89.7455 173.922L89.7455 174.422L89.7455 250L45.1227 250L0.500405 250L0.499997 174.422L0.499992 65.8669C0.499992 56.9924 4.75412 48.5039 12.5447 40.7418C20.3373 32.9777 31.6427 25.9688 45.6635 20.0749C73.7032 8.28793 112.509 1.00001 155.5 1.00001C198.258 1.00001 237.065 8.28783 265.163 20.075C279.213 25.969 290.562 32.9782 298.391 40.7426C306.218 48.5052 310.5 56.9934 310.5 65.8669L310.5 174.422L310.5 250L259.166 250L207.832 250L207.832 174.422L207.832 173.922L207.332 173.922L90.2455 173.922Z"
                    stroke="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_37_392"
                    x="0"
                    y="0.500015"
                    width="319"
                    height="261"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="8" dy="11" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_37_392"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_37_392"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_37_392"
                    x1="155.5"
                    y1="0.500008"
                    x2="155.5"
                    y2="250.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F7A600" />
                    <stop offset="1" stop-color="#FFE781" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="338"
                height="256"
                viewBox="0 0 338 256"
                fill="none"
              >
                <g filter="url(#filter0_d_37_396)">
                  <path
                    d="M226.311 219.211L226.311 245L105.492 245L105.492 227.807L105.492 181.981L105.492 81.5L-3.56248e-06 81.5L0 -1.44248e-05L330 0V81.5L226.311 81.5L226.311 181.981L226.311 219.211Z"
                    fill="url(#paint0_linear_37_396)"
                  />
                  <path
                    d="M225.811 219.211L225.811 244.5L105.992 244.5L105.992 227.807L105.992 181.981L105.992 81.5L105.992 81L105.492 81L0.499996 81L0.5 0.499986L329.5 0.5L329.5 81L226.311 81L225.811 81L225.811 81.5L225.811 181.981L225.811 219.211Z"
                    stroke="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_37_396"
                    x="0"
                    y="-1.52588e-05"
                    width="338"
                    height="256"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="8" dy="11" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_37_396"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_37_396"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_37_396"
                    x1="165"
                    y1="-116.5"
                    x2="165"
                    y2="245"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F7A600" />
                    <stop offset="1" stop-color="#FFE781" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <button
              aria-label="whitepaper"
              name="herowhitepaper"
              onClick={handleViewPdf}
              className="bg-white md:hidden font-bold uppercase text-xl flex items-center gap-4 text-black py-4 px-8 border-t-4 border-x-4 border-black rounded-tr-3xl"
            >
              Whitepaper{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
            <div className="bg-white h-fit w-96 border-4 border-black p-4 text-2xl font-semibold">
              <span className="flex flex-col gap-4 ">
                <span className="w-1/2 flex gap-6">
                  {" "}
                  <span
                    className=" bg-black hover:bg-yellow-400 cursor-pointer h-12 w-12 aspect-square rounded-full"
                    onClick={() => {
                      window.location.href = "https://t.me/goattapper";
                    }}
                  >
                    <img
                      src="/telegram.png"
                      className="bg-white hover:bg-yellow-400 rounded-full cursor-pointer"
                      alt="tg"
                    />
                  </span>
                  <span
                    className=" bg-black hover:bg-yellow-400 h-12 cursor-pointer w-12 aspect-square rounded-full"
                    onClick={() => {
                      window.location.href = "https://x.com/TapperGoat";
                    }}
                  >
                    <img
                      src="/twitter.webp"
                      className="bg-white hover:bg-yellow-400 rounded-full cursor-pointer"
                      alt="xx"
                    />
                  </span>
                </span>
                <span className="w-1/2 flex gap-6">
                  <span
                    className=" bg-black hover:bg-yellow-400 h-12 cursor-pointer w-12 aspect-square rounded-full"
                    onClick={() => {
                      window.location.href =
                        "https://www.youtube.com/@GoatTapper";
                    }}
                  >
                    <img
                      src="/youtube.webp"
                      className="bg-white hover:bg-yellow-400 rounded-full cursor-pointer"
                      alt="yt"
                    />
                  </span>
                  <span
                    className=" bg-black hover:bg-yellow-400 h-12 cursor-pointer w-12 aspect-square rounded-full"
                    onClick={() => {
                      window.location.href = "https://discord.gg/tK8rvVzrWf";
                    }}
                  >
                    <img
                      className="rounded-full hover:bg-yellow-400 cursor-pointer bg-white"
                      src="/discord-min.webp"
                      alt="disc"
                    />
                  </span>
                </span>
              </span>
            </div>
            <button
              aria-label="whitepaper"
              onClick={handleViewPdf}
              name="whitepaper"
              className="bg-white hidden md:flex font-bold uppercase text-xl  items-center gap-4 text-black py-4 px-8 border-b-4 border-x-4 border-black rounded-br-3xl"
            >
              Whitepaper{" "}
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
          <div
            id="middle_right_layer"
            className="lg:flex hidden absolute right-20 top-28 2xl:top-64 z-50"
          >
            <Convertor />
          </div>
          <div
            id="middle_left_layer"
            className="absolute left-8 md:left-56 bottom-0 md:bottom z-10"
          >
            <img
              src="/image2.webp"
              className="max-h-[600px] 2xl:max-h-[800px]"
              alt="2"
            />
          </div>
          <div className="absolute overflow-x-scroll bottom-4 md:bottom-10 z-10 hidden md:flex flex-wrap md:gap-2">
            <img src="/spywolf.png" alt="sw" />
            <img src="/smartstake.png" alt="ss" />
          </div>
        </div>
      </div>

      <div className="w-full flex lg:hidden justify-center items-center">
        <Convertor />
      </div>
    </>
  );
};

export default Hero;
