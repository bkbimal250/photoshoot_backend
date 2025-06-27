import React from "react";
import { Link } from "react-router-dom";

const GalleryCard = ({ gallery }) => {
  const { id,thumbnails, title, image, link } = gallery;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <Link to={`/gallery/${id}`} className="block">
        <img
          src={thumbnails}
          alt={title}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;
