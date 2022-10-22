import React from "react";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";
import Pic4 from "../assets/pic4.jpg";
import Pic5 from "../assets/pic5.jpg";
import Pic6 from "../assets/pic6.jpg";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 px-4 py-16 gap-5">
      <GalleryCard bg={Pic1} text="Sukhumvit" />
      <GalleryCard bg={Pic2} text="Saraburi" />
      <GalleryCard bg={Pic3} text="Nonthaburi" />
      <GalleryCard bg={Pic4} text="Ekkamai" />
      <GalleryCard bg={Pic5} text="Tonglor" />
      <GalleryCard bg={Pic6} text="JJ Mall" />
    </div>
  );
};

export default Gallery;
