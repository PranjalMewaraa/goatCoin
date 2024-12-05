import React from "react";

const GetStrong = () => {
  return (
    <div
      className="mt-2 relative h-screen overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/img/gs/bggs.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src="/gtb.png"
        alt=""
        className="bottom-0 h-5/6 aspect-square md:h-full absolute"
      />
    </div>
  );
};

export default GetStrong;
