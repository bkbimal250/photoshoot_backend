import React from "react";
import { Routes, Route } from "react-router-dom";

// Page Components
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound"; // Optional: create this page for 404
import Pricing from "../pages/Pricing";
import Booking from "../pages/Booking";
import Gallery from "../pages/Gallery";
import PhotographerProfiles from "../pages/PhotographerProfiles";
import PhotoView from "../pages/PhotoView";
import LoginPage from "../components/common/LoginPage";
import RegistrationPage from "../components/common/RegistrationPage";
import GalleryPage from "../pages/GalleryPage";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/photographer" element={<PhotographerProfiles />} />
      <Route path="/login" element={<LoginPage /> } />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/gallery/:id" element={<GalleryPage />} />


      <Route path="/photo/:id" element={<PhotoView />} />

      {/* Fallback for unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
