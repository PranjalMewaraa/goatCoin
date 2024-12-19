import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  return (
    <div className="w-full pb-24 p-8 text-white  gap-6 flex   flex-col md:flex-row justify-evenly">
      <div className="flex flex-col w-full md:w-1/3 gap-4">
        <p className="text-sm text-justify">
          Trading cryptocurrencies is highly speculative, carries a high level
          of risk, and may not be suitable for all investors. You may lose some
          or all of your invested capital; therefore, you should not speculate
          with capital that you cannot afford to lose. The content on this site
          should not be considered investment advice. Investing is speculative.
          When investing, your capital is at risk. <br /> We do not allow users
          from the following countries to participate in the presale:
          Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq,
          Syria, USA, and Vatican City. The information on this site is not
          intended for residents of these countries or for use by any person in
          any country or jurisdiction where such distribution or use would be
          contrary to local laws or regulations. <br /> The 'Future Listings'
          section displays exchanges with which we are discussing potential
          listings. This is for informational purposes only and does not
          guarantee the listing of $GTPR on any particular exchange or platform.
          We reserve the right to update this information at any time without
          prior notice.
        </p>
        <p className="text-xl flex gap-6 font-extrabold">
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
          <Link to={"/terms-and-conditions"}>Terms and Regulations</Link>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-extrabold text-gray-400 text-xl">Follow us on</p>
        <ul className="flex flex-col gap-4">
          <l1
            className="flex gap-2 cursor-pointer text-2xl font-black items-center"
            onClick={() => {
              window.location.href = "https://t.me/goattapper";
            }}
          >
            <span className="p-2  bg-[#F7A600] rounded-full">
              {" "}
              <img
                width={24}
                src="https://cdn-icons-png.flaticon.com/128/4423/4423446.png"
                alt="ict"
              />
            </span>
            Telegram
          </l1>
          <l1
            className="flex gap-2 cursor-pointer text-2xl font-black items-center"
            onClick={() => {
              window.location.href = "https://x.com/TapperGoat";
            }}
          >
            <span className="p-2  bg-[#F7A600] rounded-full">
              {" "}
              <img
                width={24}
                src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
                alt="x"
              />
            </span>
            Twitter
          </l1>
          <l1
            className="flex gap-2 cursor-pointer text-2xl font-black items-center"
            onClick={() => {
              window.location.href = "https://discord.gg/tK8rvVzrWf";
            }}
          >
            <span className="p-2  bg-[#F7A600] rounded-full">
              {" "}
              <img
                width={24}
                src="https://cdn-icons-png.flaticon.com/128/4945/4945914.png"
                alt="discord"
              />
            </span>
            Discord
          </l1>
          <l1
            className="flex gap-2 cursor-pointer text-2xl font-black items-center"
            onClick={() => {
              window.location.href = "https://www.youtube.com/@GoatTapper";
            }}
          >
            <span className="p-2  bg-[#F7A600] rounded-full">
              {" "}
              <img
                width={24}
                src="https://cdn-icons-png.flaticon.com/128/152/152810.png"
                alt="yt"
              />
            </span>
            Youtube
          </l1>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div
          onClick={scrollToTop}
          className="py-4 px-6 flex flex-col text-black font-bold justify-center items-center bg-[#F7A600] rounded-full w-fit"
        >
          <img src="/Frame.svg" alt="fr" />
          <p>To to Top</p>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
