import React from "react";

const Dogenomics = () => {
  return (
    <div
      className="w-full min-h-screen border-t-8 border-black bg-[#BEFEFF]"
      style={{ backgroundImage: "url(/before.webp)" }}
    >
      <div
        className="w-full h-screen flex justify-center items-start md:items-center py-16 px-4 md:px-16 bg-right-bottom bg-no-repeat bg-contain"
        style={{ backgroundImage: "url(/.png)" }}
      >
        <img
          src="/token.svg"
          className=" lg:max-h-[550px] 2xl:max-h-[800px] md:h-auto"
          alt="tokenomicds"
        />
      </div>
    </div>
  );
};

export default Dogenomics;
