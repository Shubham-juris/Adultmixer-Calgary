import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-pink-600 to-red-500 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Match
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Meet amazing people around you. Connect, chat & start something
          beautiful.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-black/20 text-white font-semibold rounded-xl backdrop-blur-md hover:bg-black/30 transition">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
