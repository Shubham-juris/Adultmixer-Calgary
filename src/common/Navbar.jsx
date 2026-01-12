import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-pink-600"
    }`;

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-600 tracking-wide">
          Adultmixer <span className="text-gray-800">Calgary</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/explore" className={linkClass}>
            Explore
          </NavLink>
          <NavLink to="/matches" className={linkClass}>
            Matches
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 text-lg font-medium">
          
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/explore" className={linkClass} onClick={() => setOpen(false)}>
            Explore
          </NavLink>
          <NavLink to="/matches" className={linkClass} onClick={() => setOpen(false)}>
            Matches
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
