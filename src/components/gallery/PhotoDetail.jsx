import React from "react";

const PhotoDetail = ({ photo }) => (
  <div className="flex justify-center py-10">

    <img src={photo.url} alt={photo.title} className="max-w-full rounded-lg shadow-xl" />

    

  </div>
);

export default PhotoDetail;
