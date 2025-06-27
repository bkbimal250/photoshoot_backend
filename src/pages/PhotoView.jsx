import React from "react";
import { useParams } from "react-router-dom";
import photos from "../assets/Photos.json";
import PhotoDetail from "../components/gallery/RelatedPhotos";
import RelatedPhotos from "../components/gallery/RelatedPhotos";

const PhotoView = () => {
  const { id } = useParams();
  const photo = photos.find(p => p.id === parseInt(id));

  if (!photo) return <div>Photo not found.</div>;

  return (
    <div className="p-6">
      <PhotoDetail photo={photo} />
      <RelatedPhotos photos={photos} currentPhotoId={photo.id} />
    </div>
  );
};

export default PhotoView;
