import { useState } from "react";
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
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

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

      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* mobile dropdown menu */}

      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>BKK REAL</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Areas</li>
          <li className="border-b">Real Estate</li>
          <li className="border-b">Booking</li>
          <li className="border-b">Viewings</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icons" />
            <FaTwitter className="icons" />
            <FaInstagram className="icons" />
            <FaPinterest className="icons" />
            <FaYoutube className="icons" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
