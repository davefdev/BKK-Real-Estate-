import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const carouselData = [
  {
    url: "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1572529593091-6c05c37cacc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Carousel = () => {
  const [slide, setslide] = useState(0);
  const length = carouselData.length;

  const prevSlide = () => {
    setslide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setslide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {carouselData.map((image, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img className="w-full rounded-md" src={image.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
