import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-gray-400 rounded-full hover:bg-gray-600"></div>
    ),
  };

  const cards = [
    { title: "Card 1", description: "This is card 1" },
    { title: "Card 2", description: "This is card 2" },
    { title: "Card 3", description: "This is card 3" },
    { title: "Card 4", description: "This is card 4" },
    { title: "Card 5", description: "This is card 5" },
  ];

  return (
    <div className="w-full h-full mx-auto mt-8">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const Card = ({ title, description }) => (
  <div className="p-6 bg-white shadow-md rounded-md">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default Carousel;
