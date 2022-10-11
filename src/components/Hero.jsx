import React from "react";
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
    </div>
  );
};

export default Hero;
