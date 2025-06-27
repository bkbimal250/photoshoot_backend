import React from "react";
import PhotoCard from "./PhotoCard";

const RelatedPhotos = ({ photos, currentPhotoId }) => {
  if (!photos || !Array.isArray(photos)) return null;

  const related = photos.filter(p => p.id !== currentPhotoId).slice(0, 6);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">More like this</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {related.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </div>
  );
};

export default RelatedPhotos;
