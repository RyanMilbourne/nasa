import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../sections/homepage/Homepage";
import useScrollToTop from "../hooks/useScrollToTop";

const HomeRoute = () => {
  useScrollToTop();
  return (
    <section className="content-section">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </section>
  );
};

export default HomeRoute;
