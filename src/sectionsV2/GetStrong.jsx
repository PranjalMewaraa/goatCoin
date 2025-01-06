import React from "react";

const GetStrong = () => {
  return (
    <div
      className="mt-2 relative mb-4 min-h-screen h-fit md:h-screen flex lg:flex-row items-center flex-col overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/bggs.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full p-8 lg:p-1 flex flex-col gap-4 lg:w-1/2 left-4 absolute">
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
        <h2
          className="text-justify pr-4 md:pr-10 text-base md:text-base font-black"
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
        </h2>
        <ul class="font-semibold">
          <li>
            <span class="font-bold">Zero Gas Fee:</span> Cost-free transactions
            for micro and bulk transfers.
          </li>
          <li>
            <span class="font-bold">Asset Tokenization:</span> AI-driven
            tokenization for liquidity and fractional ownership.
          </li>
          <li>
            <span class="font-bold">AI Market Makers:</span> Ensuring liquidity
            and efficient price discovery.
          </li>
          <li>
            <span class="font-bold">Why GTPR Tokens?</span>
            <ul>
              <li>
                <span class="font-bold">Gasless:</span> No transaction fees.
              </li>
              <li>
                <span class="font-bold">Secure:</span> Blockchain transparency &
                smart contracts.
              </li>
              <li>
                <span class="font-bold">AI-Powered:</span> Smart agents for
                liquidity.
              </li>
              <li>
                <span class="font-bold">Flexible Payments:</span> Accepts
                multiple cryptocurrencies.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="relative w-full h-full">
        <img
          src="/gtb-min.webp"
          className="bottom-0 right-0 absolute w-2/3 md:w-1/3 md:hidden"
          alt="gtb"
        />
      </div>
    </div>
  );
};

export default GetStrong;
