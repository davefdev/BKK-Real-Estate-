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
        <h2 className="py-4">Best Cando Locations in BKK</h2>
        <form className="flex justify-between items-center max-w-[500px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              type="text"
              placeholder="Property type"
              className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icons"
                style={{ color: "#ffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
