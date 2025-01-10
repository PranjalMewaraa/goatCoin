import React from "react";

const GetStrong = () => {
  return (
    <div
      className="mt-2 relative mb-4 min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/try.jpeg)",
      }}
    >
      <div className="w-full p-8 lg:p-12 flex flex-col gap-6 lg:w-2/3">
        <h1
          className="font-[boldx] text-3xl md:text-6xl text-white"
          style={{
            textShadow: "4px 5px 0 #000",
            WebkitTextStroke: "1.3px #000",
          }}
        >
          Why GTPR ?
        </h1>
        <h2
          className="text-justify p-4 md:p-6 text-base bg-white md:text-lg font-black text-black"
          style={{
            WebkitTextStroke: "0.5px #F0B90B",
            filter: "drop-shadow(5px 5px 0px #000)",
          }}
        >
          GoatTapper (GTPR) is a community-driven, gamified blockchain project
          combining fun and financial opportunities through a tap-to-earn game
          integrated with real world value. The <strong>House-Drop</strong>{" "}
          initiative includes tokenized real estate assets in the ecosystem,
          allowing users to participate in auctions and own property-backed
          NFTs. GTPR is a utility token that powers the ecosystem, enabling
          players, investors, and partners to engage meaningfully with the
          project.
        </h2>
        <GTPRCards />
      </div>
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-end ">
        <img
          src="/gtb-min.webp"
          className="absolute hidden md:flex bottom-0 w-2/3 md:w-1/2 lg:w-2/3 max-w-xs lg:max-w-sm"
          alt="gtb"
        />
      </div>
    </div>
  );
};

const GTPRCards = () => {
  const cards = [
    {
      title: "Zero Gas Fee",
      description: "Cost-free transactions for micro and bulk transfers.",
    },
    {
      title: "Asset Tokenization",
      description:
        "AI-driven tokenization for liquidity and fractional ownership.",
    },
    {
      title: "AI Market Makers",
      description: "Ensuring liquidity and efficient price discovery.",
    },
    { title: "Gasless", description: "No transaction fees." },
    {
      title: "Secure",
      description: "Blockchain transparency & smart contracts.",
    },
    { title: "AI-Powered", description: "Smart agents for liquidity." },
    {
      title: "Flexible Payments",
      description: "Accepts multiple cryptocurrencies.",
    },
    {
      title: "Fast Transactions",
      description: "Instant settlements for seamless trading experience.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-6 border rounded-lg shadow-lg bg-white"
          style={{ filter: "drop-shadow(5px 5px 0px #000)" }}
        >
          <h3
            className="text-xl font-[boldx] text-white"
            style={{
              textShadow: "4px 1px 0 #000",
              WebkitTextStroke: "1.3px #000",
            }}
          >
            {card.title}
          </h3>
          <p className="mt-2 text-gray-700 italic">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GetStrong;
