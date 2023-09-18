import React from "react";
import karolina from "../assets/karolina.png";
import redchilli from "../assets/redchilli.png";
import tomato from "../assets/tomato.png";
import pnghut_ind from "../assets/pnghut_india.png";
import "./homepage.css";
import Header from "./Header";
import bgtexturewood from "../assets/bg-texture-wood4.png";
import olive1 from "../assets/black-olive-topping-trottos 2.png";
import olive2 from "../assets/black-olive-topping-trottos 3.png";
import peppers1 from "../assets/red-peppers (1).png";
import peparoni from "../assets/pepperoni 4.png";
import chicken from "../assets/ShreddedChicken_New_1.png";
import beaf from "../assets/meatballs.png";
import peppers2 from "../assets/red-peppers.png";
import circle from "../assets/Ellipse 1.png";
import circle2 from "../assets/image 26 (1).png";
import dot from "../assets/Ellipse 10.png";

const HomePage = () => {
  return (
    <div
      className="bg-gray-900 h-fit"
      style={{ backgroundImage: `url(${bgtexturewood})`, overflow: "hidden" }}
    >
      <Header />
      <div className="mx-auto pt-4 items-center justify-center  w-[203px]">
        <span className="text-xl text-white mr-2">SELECT YOUR SIZE</span>
        <div className="flex items-center">
          <span className="border mx-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-2xl text-white">S</span>
          </span>
          <span className="border border-gray bg-white rounded-full w-10 h-10 flex items-center justify-center mx-2">
            <span className="text-2xl text-gray-900">M</span>
          </span>
          <span className="border mx-2 border-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-2xl text-white">L</span>
          </span>
        </div>
      </div>
      <div className="redchilli p-10 ml-44 -mt-10 hidden sm:hidden md:hidden lg:inline xl:inline">
        <img
          src={redchilli}
          className="w-[133px] h-[90px] redchilli"
          alt="red chilli"
        />
      </div>
      <div className="flex justify-end self-end mr-20 -mt-20 ">
        <img src={tomato} className=" tomato" alt="tomato" />
      </div>

      <div className="-mt-20">
        <img src={pnghut_ind} className=" pnghut " alt="png hut ind" />
      </div>

      <div className="-mt-20">
        <img
          src={karolina}
          className="w-[265px] h-[265px] karolina "
          alt="png hut ind"
        />
      </div>

      <div className="flex items-center justify-center relative">
        <img src={circle2} alt="Pizza 1" className=" pizza1 " />

        <img src={circle} alt="ircle" className="circle1" />
        <img src={circle} alt="ircle" className="circle2" />

        <img src={dot} alt="dot" className="dot1 " />
        <img src={dot} alt="dot" className="dot2 " />
        <img src={dot} alt="dot" className="dot3 " />
        <img src={dot} alt="dot" className="dot4 " />

        <img src={dot} alt="dot" className="dot5" />

        <img src={dot} alt="dot" className="dot6 " />

        <img src={dot} alt="dot" className="dot7" />

        <img src={olive1} alt="olive1" className="olive1 " />
        <p className="olive1text text-white">Olive</p>
        <img src={olive2} alt="olive2" className="olive2 " />
        <p className="olive2text text-white">Sausage</p>
        <img src={peppers1} alt="peppers1" className="peppers1 " />
        <p className="peppers1text text-white">Pepper</p>
        <img src={peppers2} alt="peppers2" className="peppers2 " />
        <p className="peppers2text text-white">Bacon</p>
        <img src={peparoni} alt="peparoni" className="paparoni" />
        <p className="paparonitext text-white">Papparoni</p>
        <img src={chicken} alt="chicken" className="chicken " />
        <p className="chickentext text-white">Chicken</p>
        <img src={beaf} alt="beaf" className="beaf" />
        <p className="beaftext text-white">Beaf</p>
      </div>
    </div>
  );
};

export default HomePage;
