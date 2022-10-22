import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 w-full mx-auto py-16 ">
      <div className="max-w-[1240px] mx-auto flex flex-col px-5">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="mx-4"> BKK REAL</h1>
          <div className="flex justify-between w-full my-5 sm:max-w-[280px]">
            <FaFacebook className="icons" />
            <FaTwitter className="icons" />
            <FaInstagram className="icons" />
            <FaPinterest className="icons" />
            <FaYoutube className="icons" />
          </div>
        </div>
        <div>
          <div className="flex justify-between font-medium">
            <ul className="lg:flex">
              <li className="">Home</li>
              <li className="">Areas</li>
              <li className="">Real Estate</li>
              <li className="">Booking</li>
              <li className="">Viewings</li>
            </ul>
            <ul className="text-right lg:flex">
              <li className="">Home</li>
              <li className="">Areas</li>
              <li className="">Real Estate</li>
              <li className="">Booking</li>
              <li className="">Viewings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
