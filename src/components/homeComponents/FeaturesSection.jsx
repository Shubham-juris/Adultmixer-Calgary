import React from "react";

const FeaturesSection = () => {
  return (
    <>
      {/* Features Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-bold text-pink-600 mb-2">
            Easy Matching
          </h3>
          <p className="text-gray-600">
            Smart AI-based matching helps you find profiles that fit your
            preferences.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-bold text-pink-600 mb-2">
            Verified Profiles
          </h3>
          <p className="text-gray-600">
            Every user profile is checked for authenticity & safety.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-bold text-pink-600 mb-2">Instant Chat</h3>
          <p className="text-gray-600">
            Chat instantly with matches using our fast & secure messaging
            system.
          </p>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
