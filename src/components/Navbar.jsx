import React from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>BKK REAL</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Areas</li>
        <li>Real Estate</li>
        <li>Booking</li>
        <li>Viewings</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/* hamburger */}

      <div className="md:hidden">
        <HiOutlineMenuAlt4 size={20} />
      </div>

      {/* mobile dropdown menu */}

      <div className="absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col">
        <ul>
          <h1>BKK REAL</h1>
          <li>Home</li>
          <li>Areas</li>
          <li>Real Estate</li>
          <li>Booking</li>
          <li>Viewings</li>
          <div>
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="icon">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
