import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const navLinks = [
  { path: "/courses", label: "Courses" },
  { path: "/career-opportunity", label: "Career" },
  { path: "/blogs", label: "Blogs" },
  { path: "/guidance", label: "Guidance" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 🔹 Background change after scroll
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 🔹 Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      ${isScrolled ? "bg-[#44308F] shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-28 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-base transition ${
                  isActive
                    ? "text-orange-400"
                    : "text-white/70 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLink
            to="/enroll"
            className="px-4 py-2 rounded-lg border border-white/70 text-white text-sm hover:bg-white hover:text-[#5E3AE3] transition"
          >
            Enroll Now
          </NavLink>

          <button className="px-4 py-2 rounded-lg bg-[#E8BB0E] text-white text-sm hover:bg-[#d4a80d] transition">
            Start Projects
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeWidth={2}
                strokeLinecap="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeWidth={2}
                strokeLinecap="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#4B35C8] px-6 py-6 space-y-4">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block text-white/90 text-lg hover:text-white"
            >
              {label}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-white/20 space-y-3">
            <NavLink
              to="/enroll"
              onClick={() => setIsOpen(false)}
              className="block text-center border border-white text-white py-2 rounded-lg hover:bg-white hover:text-[#5E3AE3] transition"
            >
              Enroll Now
            </NavLink>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-2 rounded-lg bg-[#E8BB0E] text-white hover:bg-[#d4a80d] transition"
            >
              Start Projects
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
