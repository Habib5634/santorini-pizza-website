import React, { useState } from "react";

import { BiSolidShoppingBag } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import pngfuel from "../assets/pngfuel.png";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="bg-transparent  z-10 top-0 content-center text-indigo-50 h-32 px-5 md:px-20 flex items-center justify-between">
      <header className="flex items-center w-full max-w-6xl mx-auto">
        <div className="flex items-center w-1/4">
          <span className="font-serif text-2xl md:-ml-12 -ml-5 -mb-2 ">
            SANTORINS
          </span>
        </div>

        <ul className="hidden md:flex list-none w-2/4 justify-center space-x-5 font-semibold text-lg text-gray-500">
          <li className="p-2 w-28 menu-item cursor-pointer hover:text-white">
            Home
          </li>
          <li className="p-2 w-28 menu-item cursor-pointer hover:text-white">
            About Us
          </li>
          <li className="p-2 w-28 menu-item cursor-pointer hover:text-white">
            Our Menu
          </li>
          <li className="p-2 w-28 menu-item cursor-pointer hover:text-white">
            Contact Us
          </li>
        </ul>

        <div className="hidden md:flex items-center justify-center w-1/4 relative">
          <button className="bg-yellow-600 rounded-full hover:bg-gray-900 border border-white h-8 w-8 flex items-center justify-center relative z-10">
            <BiSolidShoppingBag className="text-white text-xl" />
          </button>
          <img
            src={pngfuel}
            alt="pngfuel"
            className="rotate-12 absolute h-[321px] w-[345px] top-[px]  left-44 "
          />
        </div>

        <div className="flex items-center justify-end w-1/4 md:hidden ml-auto">
          <button className="text-2xl " onClick={handleToggleSidebar}>
            {showSidebar ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      {showSidebar && (
        <div className="bg-gray-800 w-64 h-full fixed right-0 top-0 shadow-lg transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}">
          <div className=" h-full w-80 p-4 pt-20">
            <ul className="list-none space-y-2 font-semibold text-lg text-gray-500">
              <li className="p-2 menu-item cursor-pointer hover:text-white">
                Home
              </li>
              <li className="p-2 menu-item cursor-pointer hover:text-white">
                About Us
              </li>
              <li className="p-2 menu-item cursor-pointer hover:text-white">
                Our Menu
              </li>
              <li className="p-2 menu-item cursor-pointer hover:text-white">
                Contact Us
              </li>
            </ul>
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={handleToggleSidebar}
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
