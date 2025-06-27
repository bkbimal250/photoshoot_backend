import React from "react";
import { useParams, Link } from "react-router-dom";
import galleryData from "../assets/gallery.json"; // Make sure this contains your full dataset

const GalleryPage = () => {
  const { id } = useParams(); // Get the ID from URL
  const galleryItem = galleryData.find(item => item.id === parseInt(id));

  if (!galleryItem) {
    return <div className="text-center text-red-500 py-10">Gallery not found</div>;
  }

  const { title,createdby, price, photos_number, Gallery ,created_at} = galleryItem;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link to="/gallery" className="text-blue-500 hover:underline">&larr; Back to Gallery</Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600">Added by: <strong>{createdby}</strong> Photos:{photos_number} | Price: ₹{price} Posted_at:{created_at}</p>
        
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Gallery.map((image, index) => (
          <div key={index} className="overflow-hidden rounded shadow-md">
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
