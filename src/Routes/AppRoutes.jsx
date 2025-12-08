import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Explore from "../Pages/Explore.JSX";
import Matches from "../Pages/Matches";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  );
};

export default AppRoutes;
