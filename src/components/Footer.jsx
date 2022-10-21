import React from "react";

const Footer = () => {
  return (
    <div className="border max-w-[1240px] mx-auto px-16 py-16 flex justify-between items-center font-medium">
      <div className="left border">
        <h1> BKK REAL</h1>
        <div className="border flex list-none">
          <li className="">Home</li>
          <li className="">Areas</li>
          <li className="">Real Estate</li>
          <li className="">Booking</li>
          <li className="">Viewings</li>
        </div>
      </div>
      <div className="right border ">
        right
        <div className="border flex list-none font-medium">
          <li className="">Home</li>
          <li className="">Areas</li>
          <li className="">Real Estate</li>
          <li className="">Booking</li>
          <li className="">Viewings</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
