import React from "react";
import {
  FaEnvelope,
  FaHouseDamage,
  FaPhone,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex flex-wrap bg-gray-900 mt-10">
      <div className="w-full md:w-1/2 lg:w-1/3  p-4">
        <h2 className="text-2xl text-white font-bold">SANTORINS</h2>
        <p className="text-white pt-2">
          Copyright @ 2020. Logolpsom. All rights
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3  p-4">
        <div className="text-white">
          <ul>
            <li className="pb-2 cursor-pointer hover:text-red-500">Services</li>
            <li className="pb-2 cursor-pointer hover:text-red-500">
              Email Marketing
            </li>
            <li className="pb-2 cursor-pointer hover:text-red-500">
              Compaigns
            </li>
            <li className="pb-2 cursor-pointer hover:text-red-500">Branding</li>
            <li className="pb-2 cursor-pointer hover:text-red-500">Offline</li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
        <div className="text-white">
          <ul>
            <li className="pb-2 cursor-pointer hover:text-red-500">About Us</li>
            <li className="pb-2 cursor-pointer hover:text-red-500">
              Our Story
            </li>
            <li className="pb-2 cursor-pointer hover:text-red-500">Benefite</li>
            <li className="pb-2 cursor-pointer hover:text-red-500">Team</li>
            <li className="pb-2 cursor-pointer hover:text-red-500">Careers</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-wrap overflow-hidden">
        <div className="flex-col w-full md:w-1/2 mr-10 p-4">
          <h1 className="text-white text-lg">Subscribe to our newsletter</h1>
          <div className="">
            <input
              type="text"
              className="border-b-2  border-gray-500 bg-gray-900 p-2 rounded-l"
              placeholder="Your email"
            />
            <button className="bg-gray-500 h-10 text-white p-2 rounded-r">
              <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="flex justify-end items-end text-white w-full md:w-1/2 pr-10 pb-10 gap-4 text-2xl pt-2 ">
          <FaFacebookSquare className="cursor-pointer hover:text-red-500" />
          <FaTwitterSquare className="cursor-pointer hover:text-red-500" />
          <FaLinkedin className="cursor-pointer hover:text-red-500" />
          <FaInstagram className="cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

// <div className="w-full">
// <div className="w-full px-8 md:px-20 py-4 lg:px-28 bg-gray-800">
//   <div className="text-white">
//     <h2 className="text-2xl  font-bold">About Company</h2>
//     <p className="text-white pt-2">
//       KprShooter is a photography website that hosts photo contests for
//       photography enthusiasts. Join the contest, vote for your favorite
//       entries, and showcase your photography skills.
//     </p>
//     <div className="flex gap-4 text-2xl pt-2 ">
//       <FaFacebookSquare className="cursor-pointer hover:text-red-500" />
//       <FaTwitterSquare className="cursor-pointer hover:text-red-500" />
//       <FaLinkedin className="cursor-pointer hover:text-red-500" />
//       <FaInstagram className="cursor-pointer hover:text-red-500" />
//     </div>
//   </div>
//   <div className="text-white">
//     <h2 className=" text-2xl pb-2 font-bold">Photo Contest</h2>
//     <ul>
//       <li className="pb-2 cursor-pointer hover:text-red-500">
//         Shop Integrated
//       </li>
//       <li className="pb-2 cursor-pointer hover:text-red-500">
//         Photo Captured
//       </li>
//       <li className="pb-2 cursor-pointer hover:text-red-500">
//         Images Upload
//       </li>
//       <li className="pb-2 cursor-pointer hover:text-red-500">
//         Photo Branding
//       </li>
//       <li className="pb-2 cursor-pointer hover:text-red-500">
//         Photo Editing{" "}
//       </li>
//       <li className="cursor-pointer hover:text-red-500">
//         Photo Collection
//       </li>
//     </ul>
//   </div>
//   <div className="text-white">
//     <h2 className=" text-2xl  font-bold">Contact</h2>
//     <ul>
//       <li className="py-2 flex cursor-pointer hover:text-red-500">
//         <FaHouseDamage className="mr-2 mt-1" />
//         Pakistan, KPK ,Abbottabad
//       </li>
//       <li className="pb-2 flex cursor-pointer hover:text-red-500">
//         <FaEnvelope className="mr-2 mt-1" />
//         hero5276311@gmail.com
//       </li>
//       <li className=" flex cursor-pointer hover:text-red-500">
//         {" "}
//         <FaPhone className="mr-2 mt-1" /> +923068969592
//       </li>
//     </ul>
//   </div>
// </div>
// <div className="bg-gray-900 p-3 text-center text-white">
//   <p>@ 2023 CopyRioght: All Right Reserved</p>
// </div>
// </div>
