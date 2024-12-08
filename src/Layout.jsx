import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="w-full h-24 p-4 font-[boldx] flex justify-between absolute z-50"
      style={{
        textShadow: "4px 5px 0 #000",
        WebkitTextStrokeWidth: "1.3px",
        WebkitTextStrokeColor: "#000",
      }}
    >
      <Link to={"/"} className="h-full flex gap-1 items-center">
        <img
          src="/img/navbar/coin.png"
          className="h-full aspect-square"
          alt=""
        />
        <h1
          className="text-white font-bold text-2xl stroke-black"
          style={{
            WebkitTextStrokeWidth: "1.3px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          GOATTAPPER
        </h1>
      </Link>
    </div>
  );
};

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className="flex flex-col h-screen relative">
      <Navbar />
      <div className="h-fit w-full absolute z-0 flex flex-col overflow-y-auto overflow-x-hidden">
        {children}
      </div>
      <div
        className={`w-screen z-50 min-h-20 h-fit md:gap-96 bottom-0 fixed bg-gray-300 opacity-85 flex items-center pr-4 md:pr-8 pl-4 md:pl-16 transition-transform duration-300 ${
          isVisible ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <p className="text-black w-1/2 font-bold text-base md:text-2xl">
          Start Building your legacy with $GTPR today!
        </p>
        <button className=" md:my-2 rounded-full bg-blue-400 opacity-100 font-bold text-white text-2xl px-4 md:px-16 py-2 md:py-5">
          {" "}
          Buy $GTPR
        </button>
      </div>
    </div>
  );
};
export default Layout;
