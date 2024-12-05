import React from "react";

const Dogenomics = () => {
  return (
    <div
      className="w-full min-h-screen border-t-8 border-black bg-[#BEFEFF]"
      style={{ backgroundImage: "url(/img/before.png)" }}
    >
      <div
        className="w-full h-screen flex justify-start items-center py-16 px-4 md:px-16 bg-right-bottom bg-no-repeat bg-contain"
        style={{ backgroundImage: "url(/image7.png)" }}
      >
        <img
          src="/img/token.png"
          className=" lg:max-h-[550px] 2xl:max-h-[800px] md:h-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Dogenomics;
