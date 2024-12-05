import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
  };

  const questionsAndAnswers = [
    {
      question: "What is Goat??",
      answer:
        "Goat is a meme token on the Solana network. Goat is the one and only alpha dog and a devoted degen who never misses an opportunity to make gains. If you’re into stunning women, luxury watches, fine cigars, flashy cars, sunny beaches, and sparkling seas, then join the Goat Army!",
    },
    {
      question: "How do I buy Goat??",
      answer:
        "You can buy $Goat using multiple currencies and blockchains, all you need to do is connect your wallet to the presale widget!",
    },
    {
      question: "I bought $GTPR in the presale. How do I receive my tokens?",
      answer:
        "You will be able to claim your tokens once the presale is over by connecting the wallet you used to purchase $GTPR. Full instructions and details will be announced before the end of the presale.",
    },
    {
      question: "Where can i find the whitepaper?",
      answer: "Here is a link to the Whitepaper.!",
    },
    {
      question: "How do i contact the Marketing team??",
      answer:
        "To contact GTPR’s marketing team, please reach out at t.me/@goattapper or join our official Telegram group @goattapper. Our team will assist you with any inquiries, collaborations, or promotional activities.",
    },
    {
      question: "How many stages does the presale have?",
      answer: "The presale is divided into 13 stages.",
    },
  ];

  return (
    <div className="max-w-[1190px] w-3/5 mt-10 -rotate-2">
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
            <span className="text-3xl font-semibold">{item.question}</span>
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
