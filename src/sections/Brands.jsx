import React from "react";
import MarqueeStrip from "../components/MarqueeIMg";

const Brands = () => {
  const DATA_LIST = [
    { imgUrl: "https://dogen.meme/_next/static/media/partner3.0cde7d1b.png" },
    { imgUrl: "https://dogen.meme/_next/static/media/partner2.db0cef38.png " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner1.4d8179ca.svg " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner4.0dde5ff4.svg " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner5.4ae0682c.png " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner3.0cde7d1b.png" },
    { imgUrl: "https://dogen.meme/_next/static/media/partner2.db0cef38.png " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner1.4d8179ca.svg " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner4.0dde5ff4.svg " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner5.4ae0682c.png " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner3.0cde7d1b.png" },
    { imgUrl: "https://dogen.meme/_next/static/media/partner2.db0cef38.png " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner1.4d8179ca.svg " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner4.0dde5ff4.svg " },
    { imgUrl: "https://dogen.meme/_next/static/media/partner5.4ae0682c.png " },
  ];
  return (
    <div className="overflow-hidden relative z-50 w-full h-20 flex items-center">
      <MarqueeStrip DATA_LIST={DATA_LIST} />
    </div>
  );
};

export default Brands;
