import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };
  const questionsAndAnswers = [
    {
      question: "What is GoatTapper?",
      answer:
        "GoatTapper is a gamified blockchain project that combines a tap-to-earn Telegram game with real-world financial opportunities. Players accumulate in-game points through gameplay, which can be used in tokenized real estate-backed asset auctions. Rewards include airdrops of GTPR tokens based on auction results.",
    },
    {
      question: "What is GTPR, and how is it used?",
      answer:
        "GTPR is the utility token of the GoatTapper ecosystem with the following uses:\n" +
        "• In-Game Purchases: Buy boosters and other in-game assets to enhance gameplay.\n" +
        "• Auctions: Participate in House Drop auctions using in-game points, with rewards distributed in GTPR.\n" +
        "• Airdrops: Receive GTPR tokens as rewards based on auction participation and results.",
    },
    {
      question: "How does the House Drop auction work?",
      answer:
        "The House Drop auction is an event where players use their accumulated in-game points to bid on tokenized real estate-backed assets. After the auction:\n" +
        "• Winners receive fractional ownership of the asset (as an NFT).\n" +
        "• Participants are rewarded with GTPR tokens as airdrops proportional to their auction results.",
    },
    {
      question: "How can I earn GTPR tokens?",
      answer:
        "You can earn GTPR tokens through the following:\n" +
        "1. Purchase: Buy GTPR during the presale on the website or within the game.\n" +
        "2. Auctions: Participate in House Drop auctions using in-game points and receive GTPR airdrops based on your performance.",
    },
    {
      question: "When will GTPR be available on exchanges?",
      answer:
        "GTPR will be listed on decentralized (DEX) and centralized exchanges (CEX) after the first House Drop auction, scheduled for February 28, 2025. This ensures that the token gains utility and demand before entering the open market.",
    },
    {
      question: "How does the token presale work?",
      answer:
        "The presale is conducted in five phases on the GoatTapper website, with prices increasing incrementally in each phase. Early participants benefit from lower prices and potential bonuses. The presale allows users to acquire GTPR tokens before they are publicly listed on exchanges.",
    },
    {
      question: "What makes GoatTapper unique?",
      answer:
        "GoatTapper uniquely combines gamified earning with real-world asset ownership:\n" +
        "• Players use in-game points to participate in auctions for tokenized real estate-backed assets.\n" +
        "• GTPR tokens serve as rewards and enable users to enhance gameplay and participate in future events.\n" +
        "• A robust ecosystem drives token demand and user engagement, ensuring long-term sustainability.",
    },
    {
      question: "How do I get started with GoatTapper?",
      answer:
        "1. Join the Game: Start playing the Telegram-based tap-to-earn game to accumulate in-game points.\n" +
        "2. Buy GTPR Tokens: Purchase GTPR during the presale or within the game to buy boosters or other assets.\n" +
        "3. Participate in Auctions: Use your in-game points in the House Drop auction and earn GTPR rewards.\n" +
        "Stay updated through our website and social media for the latest developments and events.",
    },
  ];

  return (
    <div className="max-w-[1190px] scale-[.85] md:scale-100 z-50 m-6 md:w-3/5 mt-10 -rotate-2">
      {questionsAndAnswers.map((item, index) => (
        <div
          key={index}
          className="w-full relative"
          onClick={() => toggleAccordion(index)}
        >
          <div
            className={`p-6 min-w-3xl shadow-xl ${
              index % 2 === 0 ? "bg-sky-200" : "bg-gray-200"
            } rounded-2xl cursor-pointer flex justify-between items-center`}
          >
            <span className="text-xl font-semibold uppercase">
              {item.question}
            </span>
            <span className="text-white bg-yellow-500 rounded-full">
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          {openIndex === index && (
            <div
              className={`absolute p-6 z-50 font-bold text-gray-500 min-h-24 h-fit rounded-b-2xl rounded-t-md w-full  ${
                index % 2 === 0 ? "bg-sky-200" : "bg-gray-200"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
