import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ShooticHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path);
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo & Left Section */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Shootic
          </Link>

          <div className="relative">
            <select
              onChange={handleCategoryChange}
              defaultValue=""
              aria-label="Select category"
              className="text-sm bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 font-medium text-gray-700 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="/gallery">Photos</option>
              <option value="/videos">Videos</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          <div className="relative w-72 md:w-96">
            <input
              type="search"
              placeholder="Search stunning photos..."
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Search photos"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center gap-6">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((open) => !open)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              className="flex items-center text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Explore <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {dropdownOpen && (
              <nav className="absolute top-full right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-56 z-50">
                <ul className="py-2 text-sm text-gray-700">
                  {[
                    { label: 'Home', to: '/' },
                    { label: 'About', to: '/about' },
                    { label: 'Contact', to: '/contact' },
                    { label: 'Pricing', to: '/pricing' },
                    { label: 'Booking', to: '/booking' },
                    { label: 'Gallery', to: '/gallery' },
                    { label: 'Photographer', to: '/photographer' },
                  ].map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <Link
            to="/gallery"
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Gallery
          </Link>

          <Link
            to="/login"
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ShooticHeader;
