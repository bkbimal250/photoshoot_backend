import React from 'react';
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Globe } from "lucide-react";


const ShooticFooter = () => {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Where stories come together.</h2>
          <div className="flex space-x-4 mb-4">
            <button className="bg-gray-100 px-4 py-2 rounded-md font-medium">Download on iOS</button>
            <button className="bg-gray-100 px-4 py-2 rounded-md font-medium">Download on Android</button>
          </div>
          <div className="flex items-center space-x-4 text-2xl">
            <FaInstagram />
            <FaSpotify />
            <FaYoutube />
            <FaTiktok />
            <FaLinkedin />
            <FaTwitter /> {/* ✅ fixed */}
          </div>

        </div>

        {/* Center Columns */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Shootic</h3>
          <ul className="space-y-2 text-sm">
            <li>Free Stock Photos</li>
            <li>Free Videos</li>
            <li>Popular Searches</li>
            <li>Collections</li>
            <li>Challenges</li>
            <li>Leaderboard</li>
            <li>Plugins & Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Report Content</li>
            <li>Become a Hero</li>
            <li>Partner with Shootic</li>
            <li>API Access</li>
            <li>Sign Up</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 uppercase mb-2">Free Stock Photos</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Black and white photography',
              'Happy birthday images',
              'Free business videos',
              'Cool wallpapers',
              'Best HD wallpapers',
              'Galaxy wallpaper',
              'iPhone wallpaper',
              '4K wallpaper',
              'Samsung wallpaper',
              'Lock screen wallpaper',
              'Love wallpaper',
              'Mobile wallpaper',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm border border-gray-200 rounded-full hover:bg-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2025 Shootic</p>
          <div className="flex space-x-4">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>License</span>
            <span>Imprint</span>
            <span>Cookies Policy</span>
          </div>
          <button className="flex items-center gap-1 border border-gray-200 rounded-md px-3 py-1">
            <Globe className="w-4 h-4" />
            <span>English</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ShooticFooter;
