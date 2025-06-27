import React from "react";
import { useNavigate } from "react-router-dom";

const PhotoCard = ({ photo }) => {
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer" onClick={() => navigate(`/photo/${photo.id}`)}>
      <img src={photo.url} alt={photo.title} className="rounded-lg shadow-md" />
      <p className="mt-2 text-sm text-center">{photo.title}</p>
    </div>
  );
};

export default PhotoCard;
