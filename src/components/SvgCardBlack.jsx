import React from "react";

const SvgBackgroundCard2 = () => {
  return (
    <div className="relative w-64 p-6 rounded-lg text-white  overflow-hidden">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="84"
        viewBox="0 0 180 84"
        fill="none"
        className="inset-0 absolute w-full h-full"
      >
        <g clip-path="url(#clip0_39_451)">
          <g filter="url(#filter0_d_39_451)">
            <path
              d="M10.7912 2.82593C11.1625 2.08334 11.9216 1.61426 12.7518 1.61426H167.593C168.125 1.61426 168.612 1.91481 168.849 2.39062C180.712 26.1141 180.712 54.0379 168.849 77.7615C168.612 78.2373 168.125 78.5379 167.593 78.5379H12.7518C11.9216 78.5379 11.1625 78.0688 10.7912 77.3261C-0.934434 53.8766 -0.934434 26.2754 10.7912 2.82593Z"
              fill="black"
            />
            <path
              d="M167.593 0.807129H12.7518C11.6158 0.807129 10.5773 1.44893 10.0692 2.46497C-1.77001 26.1417 -1.77001 54.0104 10.0692 77.6871C10.5773 78.7031 11.6158 79.345 12.7518 79.345H167.593C168.431 79.345 169.197 78.8717 169.571 78.1224C181.547 54.1716 181.547 25.9804 169.571 2.02965C169.197 1.2804 168.431 0.807129 167.593 0.807129Z"
              stroke="url(#paint0_linear_39_451)"
              stroke-width="1.61435"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_39_451"
            x="0.382629"
            y="-6.10352e-05"
            width="178.978"
            height="83.3188"
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
            <feOffset dy="3.16667" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_39_451"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_39_451"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_39_451"
            x1="24.5392"
            y1="1.61424"
            x2="149.28"
            y2="187.665"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#616161" />
            <stop offset="0.450217" stop-color="#494A4B" />
            <stop offset="0.816297" stop-color="#2B2B2B" />
          </linearGradient>
          <clipPath id="clip0_39_451">
            <rect width="180" height="83.1328" fill="white" />
          </clipPath>
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

export default SvgBackgroundCard2;
