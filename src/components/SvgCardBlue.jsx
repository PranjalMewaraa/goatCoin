import React from "react";

const SvgBackgroundCard = () => {
  return (
    <div className="relative w-64 p-6 rounded-lg  text-white  overflow-hidden">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="85"
        viewBox="0 0 180 85"
        fill="none"
        className="absolute inset-0 w-full h-full"
      >
        <g filter="url(#filter0_d_39_439)">
          <path
            d="M10.3688 3.19265C10.741 2.44817 11.5019 1.97791 12.3343 1.97791H167.562C168.095 1.97791 168.583 2.27922 168.821 2.75623C180.714 26.5398 180.714 54.5343 168.821 78.3178C168.583 78.7949 168.095 79.0962 167.562 79.0962H12.3343C11.5019 79.0962 10.741 78.6259 10.3688 77.8814C-1.38615 54.3726 -1.38615 26.7015 10.3688 3.19265Z"
            fill="#3961FB"
          />
          <path
            d="M12.3344 1.23621C11.221 1.23621 10.2032 1.8652 9.7053 2.86097C-2.15401 26.5786 -2.15401 54.4955 9.7053 78.2132C10.2032 79.2089 11.221 79.8379 12.3344 79.8379H167.562C168.376 79.8379 169.121 79.3779 169.485 78.6496C181.482 54.6572 181.482 26.417 169.485 2.42455C169.121 1.69626 168.376 1.23621 167.562 1.23621H12.3344Z"
            stroke="url(#paint0_linear_39_439)"
            stroke-width="1.48352"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_39_439"
            x="0.0690613"
            y="0.494446"
            width="179.155"
            height="82.6845"
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
            <feOffset dy="2.59928" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_39_439"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_39_439"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_39_439"
            x1="24.1511"
            y1="1.97792"
            x2="149.209"
            y2="188.496"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6F8DFF" />
            <stop offset="0.227981" stop-color="#274EE6" />
            <stop offset="0.661713" stop-color="#1D3FC5" />
          </linearGradient>
        </defs>
      </svg>
      {/* Card Content */}
      <div className="relative p-4 z-10">
        <h2 className="text-lg font-bold mb-2">Card Title</h2>
        <p className="text-sm">
          This is an example of a card with an SVG background.
        </p>
      </div>
    </div>
  );
};

export default SvgBackgroundCard;
