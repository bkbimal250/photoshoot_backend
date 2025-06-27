import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Shootic</h2>
          <p className="text-gray-700 text-lg mb-6">
            Shootic is a modern photography service designed to bring professional photo shoots to the comfort of your home. Whether you're looking for a family portrait, baby shoot, product showcase, or special occasion memories, we bring the studio to you.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            To make professional photography accessible, easy, and enjoyable for everyone, anywhere.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            We envision a world where booking a high-quality photo shoot is as simple as ordering food online — fast, personalized, and convenient.
          </p>
        </div>

        {/* Image / Visual */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
            alt="Shootic in action"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
