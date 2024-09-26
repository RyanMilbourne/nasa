import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../sections/homepage/Homepage";
import useScrollToTop from "../hooks/useScrollToTop";
import About from "../sections/about/About";
import Contact from "../sections/contact/Contact";

const HomeRoute = () => {
  useScrollToTop();
  return (
    <section className="content-section">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </section>
  );
};

export default HomeRoute;
