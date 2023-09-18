import React from "react";
import img1 from "../assets/Rectangle 50.png";
import img2 from "../assets/Rectangle 51.png";
import img3 from "../assets/Rectangle 52.png";
import img4 from "../assets/Rectangle 53.png";
import img5 from "../assets/Rectangle 54.png";
import img6 from "../assets/Rectangle 55.png";
import { AiFillInstagram } from "react-icons/ai";

const FollowUs = () => {
  return (
    <div className="w-3/4 h-3/4  mx-auto relative overflow-hidden">
      <div className="flex justify-center  opacity-50  items-center ">
        <img
          src={img1}
          className="mr-2 mb-1 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          alt="img1"
        />
        <img
          src={img2}
          className="mx-2 mb-1 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          alt="img2"
        />
        <img
          src={img3}
          className="ml-2 mb-1 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          alt="img3"
        />
      </div>
      <div className="flex justify-center opacity-50 items-center">
        <img
          src={img4}
          className="mr-2 mt-1 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          alt="img4"
        />
        <img
          src={img5}
          className="mx-2 mt-1 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          alt="img5"
        />
        <img
          src={img6}
          className="ml-2 mt-1 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          alt="img6"
        />
      </div>
      <div className="absolute inset-0 flex  justify-center items-center">
        <div className="w-full md:w-1/2 h-1/4 md:h-1/4 rounded-2xl bg-yellow-400  text-center p-1 md:p-4">
          <h1 className="text-white text-center md:text-lg lg:text-2xl xl:text-3xl">
            Follow Us On Instagram To See Pictures Taken By Our Customers
          </h1>
          <span className="text-white flex text-center justify-center items-center md:text-lg lg:text-xl pt-2">
            <AiFillInstagram className="text-center md:text-lg lg:text-2xl xl:text-3xl" />
            :@santorins
          </span>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
