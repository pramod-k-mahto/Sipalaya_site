import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const navLinks = [
  { path: "/courses", label: "Courses" },
  { path: "/career-opportunity", label: "Career Opportunity" },
  { path: "/blogs", label: "Blogs" },
  { path: "/guidance", label: "Seeking Guidance" },
  { path: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" absolute w-full  z-50 text-md ">
      <div className="flex justify-between py-5 px-4 md:px-8 lg:px-12 items-center">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 md:w-32 lg:w-34 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex gap-6 xl:gap-9"
          aria-label="Main Navigation"
        >
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className="text-base xl:text-[22px] text-[#F4F4F4] hover:text-white transition-colors"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex text-base xl:text-[22px] gap-2.5 items-center">
          <NavLink
            to="/enroll"
            className="border py-2 px-4 xl:px-5 rounded-lg border-[#FFFFFF] text-[#FFFFFF] whitespace-nowrap hover:bg-white hover:text-[#5E3AE3] transition-colors"
          >
            Enroll Now
          </NavLink>
          <button className="border py-2 px-4 xl:px-5 rounded-lg bg-[#E8BB0E] text-[#FFFFFF] whitespace-nowrap hover:bg-[#d4a80d] transition-colors">
            Start Projects
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#44308F] px-4 py-4 space-y-3">
          <nav
            className="flex flex-col space-y-3"
            aria-label="Mobile Navigation"
          >
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className="text-lg text-[#F4F4F4] py-2 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-3 border-t border-[#5E3AE3]">
            <NavLink
              to="/enroll"
              className="text-center border py-2 px-4 rounded-lg border-[#FFFFFF] text-[#FFFFFF] hover:bg-white hover:text-[#5E3AE3] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enroll Now
            </NavLink>
            <button
              className="border py-2 px-4 rounded-lg bg-[#E8BB0E] text-[#FFFFFF] hover:bg-[#d4a80d] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
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
