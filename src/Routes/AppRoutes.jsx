import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

import Matches from "../Pages/Matches";
import Explores from "../Pages/Explores";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Chat from "../Pages/Chat";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/explore" element={<Explores />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/chat/:id" element={<Chat />} />
    </Routes>
  );
};

export default AppRoutes;
