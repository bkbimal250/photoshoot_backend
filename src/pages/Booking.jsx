import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    phone: "",
    location: "",
    shootType: "",
    request: "",
  });

  const shootTypes = ["Family", "Baby", "Product", "Portrait", "Event"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate API here
    console.log("Booking Data:", formData);
    alert("Booking submitted successfully!");
    setFormData({
      name: "",
      date: "",
      time: "",
      phone: "",
      location: "",
      shootType: "",
      request: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Book Your Photo Shoot
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition text-gray-900 placeholder-gray-400"
          />

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="px-5 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition text-gray-900 placeholder-gray-400"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="px-5 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            pattern="[0-9]{10,15}"
            title="Enter a valid phone number"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition text-gray-900 placeholder-gray-400"
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Location (e.g., 123 Street Name, City)"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition text-gray-900 placeholder-gray-400"
          />

          {/* Shoot Type */}
          <select
            name="shootType"
            value={formData.shootType}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition text-gray-900"
          >
            <option value="" disabled>
              Select Shoot Type
            </option>
            {shootTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* Special Request */}
          <textarea
            name="request"
            value={formData.request}
            onChange={handleChange}
            placeholder="Special Requests (optional)"
            rows={4}
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition text-gray-900 placeholder-gray-400 resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gray-800 hover:bg-gray-700 text-white font-extrabold rounded-xl shadow-lg transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
