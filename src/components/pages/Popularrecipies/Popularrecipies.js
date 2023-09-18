import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardData from "./CardData";
import Card from "./Card";

const Popularrecipies = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" h-fit bg-white overflow-hidden">
      <div className="mx-auto items-center justify-center ">
        <h1 className="text-3xl font-bold mb-4 text-center pt-28">
          Popular Recipes
        </h1>
        <br />
        <div className="flex flex-row items-center justify-center space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-500 text-black w-24 rounded-full font-bold py-2 px-4  mb-2">
            Pizza
          </button>
          <button className="bg-gray-200 hover:bg-yellow-500 text-black w-24 rounded-full font-bold py-2 px-4  mb-2">
            Sides
          </button>
          <button className="bg-gray-200 hover:bg-yellow-500 text-black w-24 rounded-full font-bold py-2 px-4  mb-2">
            Chicken
          </button>
          <button className="bg-gray-200 hover:bg-yellow-500 text-black w-24 rounded-full font-bold py-2 px-4  mb-2">
            Deserts
          </button>
          <button className="bg-gray-200 hover:bg-yellow-500 text-black w-24 rounded-full font-bold py-2 px-4  mb-2">
            Drinks
          </button>
        </div>
      </div>

      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="flex justify-center space-x-1">
            <Card
              id={card.id}
              cardImage={card.cardImage}
              cardTitle={card.cardTitle}
              time={card.time}
              description={card.description}
              price={card.price}
            />
          </div>
        ))}
      </Slider>
      <div className="flex items-center pt-12">
        <hr className="w-3/4 border-t-4 border-gray-900" />
        <button className="w-52 px-4 py-2 bg-gray-900 text-white rounded-full">
          View All Recipies
        </button>
      </div>
    </div>
  );
};

export default Popularrecipies;
