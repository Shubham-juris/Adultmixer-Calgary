import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

import Matches from "../Pages/Matches";
import Explores from "../Pages/Explores";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/explore" element={<Explores />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  );
};

export default AppRoutes;
