import React from "react";

const photographers = [
  {
    id: 1,
    name: "Anjali Mehta",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Specializes in family and portrait shoots with over 5 years of experience.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Creative eye for product photography and lifestyle shots.",
  },
  {
    id: 3,
    name: "Priya Nair",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    bio: "Passionate about capturing newborn and baby milestones.",
  },
  {
    id: 4,
    name: "Amit Verma",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "Event and candid photography expert, known for storytelling.",
  },
];

const PhotographerProfiles = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Photographers</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photographers.map((photographer) => (
          <div
            key={photographer.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={photographer.photo}
              alt={photographer.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{photographer.name}</h3>
              <p className="text-gray-600 text-sm">{photographer.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographerProfiles;
