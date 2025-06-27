import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-4">Feel free to reach out to us through any of the methods below.</p>
          <ul className="space-y-4">
            <li>
              📍 <strong>Address:</strong> 123 Studio Lane, Cityville, India
            </li>
            <li>
              📞 <strong>Phone:</strong>{' '}
              <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                +91 98765 43210
              </a>
            </li>
            <li>
              📧 <strong>Email:</strong>{' '}
              <a href="mailto:hello@shootic.com" className="text-blue-600 hover:underline">
                hello@shootic.com
              </a>
            </li>
            <li>
              💬 <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-medium hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
