import React from "react";

const GalleryCard = (props) => {
  return (
    <div className="relative">
      <img src={props.bg} alt="pic1" className="w-full h-full object-cover" />
      <div className="bg-gray-800/30 absolute top-0 left-0 w-full h-full ">
        <p className="left-4 bottom-4 text-3xl absolute text-white font-bold">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
