import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaChild,
  FaHandsHelping,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-pink-100 to-pink-300 shadow-xl fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold text-pink-800 flex items-center gap-2"
        >
          🍼 Baby Hope
        </Link>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-800 text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex space-x-6 text-pink-900 font-medium text-sm">
          <Link to="/" className="flex items-center gap-1 hover:text-pink-700 transition-all">
            <FaHome /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-1 hover:text-pink-700 transition-all">
            <FaInfoCircle /> About
          </Link>
          <Link to="/kids" className="flex items-center gap-1 hover:text-pink-700 transition-all">
            <FaChild /> Meet the Kids
          </Link>
          <Link to="/help" className="flex items-center gap-1 hover:text-pink-700 transition-all">
            <FaHandsHelping /> How to Help
          </Link>
          <Link to="/contact" className="flex items-center gap-1 hover:text-pink-700 transition-all">
            <FaEnvelope /> Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-pink-100 px-6 pb-4 space-y-4 text-pink-900 font-medium text-sm">
          <Link to="/" onClick={closeMenu} className="block flex items-center gap-2">
            <FaHome /> Home
          </Link>
          <Link to="/about" onClick={closeMenu} className="block flex items-center gap-2">
            <FaInfoCircle /> About
          </Link>
          <Link to="/kids" onClick={closeMenu} className="block flex items-center gap-2">
            <FaChild /> Meet the Kids
          </Link>
          <Link to="/help" onClick={closeMenu} className="block flex items-center gap-2">
            <FaHandsHelping /> How to Help
          </Link>
          <Link to="/contact" onClick={closeMenu} className="block flex items-center gap-2">
            <FaEnvelope /> Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
