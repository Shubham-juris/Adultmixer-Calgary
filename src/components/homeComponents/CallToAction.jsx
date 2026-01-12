import React from "react";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  const handleclick = () => {
navigate("/contact")
  }
  return (
    <>
      {/* Call to Action */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Join Adultmixer Calgary today & explore amazing connections waiting
          for you.
        </p>
        <button onClick={handleclick} className="px-8 py-3 bg-pink-600 text-white rounded-xl text-lg font-semibold hover:bg-pink-700 transition">
          Join Now
        </button>
      </section>
    </>
  );
};

export default CallToAction;
