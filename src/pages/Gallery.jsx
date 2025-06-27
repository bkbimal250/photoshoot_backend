import React from "react";
import GalleryCard from "../components/gallery/GalleryCard";
import gallery from "../assets/gallery.json";

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {gallery.map((item, index) => (
          <GalleryCard key={index} gallery={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
