import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import bkkVid from "../assets/bkkVid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <video
        className="w-full h-full object-cover"
        src={bkkVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 ">
        <h1>Premium Real Estate</h1>
        <h2>Best Cando Location in BKK</h2>
        <form>
          <div>
            <input type="text" placeholder="Property type" />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className="icons" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
