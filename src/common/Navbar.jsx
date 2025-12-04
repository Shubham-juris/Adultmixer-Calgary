import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-600 tracking-wide">
          Adultmixer <span className="text-gray-800">Calgary</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
          <li>
            <Link className="hover:text-pink-600 transition" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-pink-600 transition" to="/explore">
              Explore
            </Link>
          </li>
          <li>
            <Link className="hover:text-pink-600 transition" to="/matches">
              Matches
            </Link>
          </li>
          <li>
            <Link className="hover:text-pink-600 transition" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition">
            Login
          </button>
          <button className="px-4 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 text-lg font-medium text-gray-700">
          <Link
            className="block hover:text-pink-600"
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block hover:text-pink-600"
            to="/explore"
            onClick={() => setOpen(false)}
          >
            Explore
          </Link>
          <Link
            className="block hover:text-pink-600"
            to="/matches"
            onClick={() => setOpen(false)}
          >
            Matches
          </Link>
          <Link
            className="block hover:text-pink-600"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <button className="w-full px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition">
            Login
          </button>
          <button className="w-full px-4 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
