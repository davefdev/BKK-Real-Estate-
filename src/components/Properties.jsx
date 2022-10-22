import React from "react";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";
import Pic4 from "../assets/pic4.jpg";
import Pic5 from "../assets/pic5.jpg";

const Properties = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>Affordable to High-End Living</h1>
      <p className="py-5">Living in the majestic paradise of Thailand</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={Pic1}
          alt="pic1"
        />
        <img className="w-full h-full object-cover" src={Pic2} alt="pic2" />
        <img className="w-full h-full object-cover" src={Pic3} alt="pic3" />
        <img className="w-full h-full object-cover" src={Pic4} alt="pic4" />
        <img className="w-full h-full object-cover" src={Pic5} alt="pic5" />
      </div>
    </div>
  );
};

export default Properties;
