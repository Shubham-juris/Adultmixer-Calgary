import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500">
            Adultmixer <span className="text-white">Calgary</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            A modern platform to connect, meet, and explore meaningful
            relationships.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Explore</li>
            <li className="hover:text-pink-500 cursor-pointer">Matches</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer">Help Center</li>
            <li className="hover:text-pink-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-pink-500 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-pink-500 cursor-pointer">Safety Tips</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Stay updated with new features & matches.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button className="px-4 py-2 bg-pink-600 text-white rounded-r-lg hover:bg-pink-700 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Adultmixer Calgary — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
