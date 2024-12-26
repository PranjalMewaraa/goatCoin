import React from "react";

const Dogenomics = () => {
  return (
    <div
      className="w-full min-h-screen border-t-8 border-black bg-[#BEFEFF]"
      style={{ backgroundImage: "url(/before.webp)" }}
    >
      <div
        className="w-full h-fit md:h-screen flex justify-start items-center py-16 px-4 md:px-16 bg-right-bottom bg-no-repeat bg-contain"
        style={{ backgroundImage: "url(/img/Withou.png)" }}
      >
        <img
          src="/img/a.png"
          className=" lg:max-h-[550px] 2xl:max-h-[800px] md:h-auto"
          alt="a"
        />
      </div>
    </div>
  );
};

export default Dogenomics;
