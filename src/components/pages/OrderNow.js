import React from "react";
import order1 from "../assets/image 26.jpg";
import order2 from "../assets/image 27.jpg";
import { screen } from "@testing-library/react";

const OrderNow = () => {
  return (
    <div className="flex flex-wrap md:py-10 ">
      <div className="w-full md:w-1/2 md:p-20 p-6  ">
        <h1 className="text-4xl font-bold mb-10 text-yellow-400">
          Your Tast Buds Will Be Transformed.
        </h1>
        <p>
          But be aware slick-carousel has a peer-dependancy on jQuery which you,
          or your colleagues may not like to see in your console output, so you
          can always grab the CSS from there and convert it into any CSS in JS
          solution that you might be using.But be aware slick-carousel has a
          peer-dependancy on jQuery which you, or your colleagues may not like
          to see in your console output, so you can always grab the CSS from
          there and convert it into any CSS in JS solution that you might be
          using.
        </p>
        <button className="h-10 w-28 rounded-full text-white my-10  bg-gray-900 hover:bg-yellow-500">
          Order Now
        </button>
      </div>
      <div className="w-full flex overflow-hidden md:w-1/2  ">
        <img src={order1} className="w-[650px] h-[650px]" alt="order1" />
        <img
          src={order2}
          className="w-[332px] h-[500px] -ml-10 mt-16"
          alt="order2"
        />
      </div>
    </div>
  );
};

export default OrderNow;
