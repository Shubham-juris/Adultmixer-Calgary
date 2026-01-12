import React from "react";
import HeroSection from "../components/homeComponents/HeroSection";
import FeaturesSection from "../components/homeComponents/FeaturesSection";
import CallToAction from "../components/homeComponents/CallToAction";
import SignUp from "../Pages/SignUp";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <SignUp />
    </div>
  );
};

export default Home;
