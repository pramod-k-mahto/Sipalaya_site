import React from "react";
import logo from "../assets/images/logo.png";
import esewa from "../assets/images/esewa.png";
import connectIps from "../assets/images/connectIps.png";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const navLinks = [
    { path: "/courses", label: "Courses" },
    { path: "/career-opportunity", label: "Career Opportunity" },
    { path: "/blogs", label: "Blogs" },
    { path: "/guidance", label: "Seeking Guidance" },
    { path: "/contact", label: "Contact Us" },
    { path: "/about", label: "About Us" },
    { path: "/event", label: "Event" },
    { path: "/achievements", label: "Achievements" },
    { path: "/successStories", label: "Success Stories" },
  ];

  return (
    <footer className="bg-[#44308F] py-6 md:py-8 px-4 md:px-6 lg:px-8">
      <div className="bg-[#FFFFFF33] p-6 md:p-10 lg:p-12 text-base md:text-lg  text-[#E3E0EF] rounded-xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Company Logo" className="w-40 md:w-48" />
            <p className="text-sm md:text-base ">
              At Sipalaya, we're here to help you thrive. Learn in-demand
              skills, get hired, and advance your career with us. Join today and
              start your journey to success.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl md:text-2xl ">Links</p>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(0, 3).map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-[#F4F4F4] hover:text-white transition-colors text-sm md:text-base "
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl md:text-2xl ">More Links</p>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(3).map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-[#F4F4F4] hover:text-white transition-colors text-sm md:text-base "
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Payment Partners */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl md:text-2xl ">Payment Powered By</p>
            <div className="flex flex-col gap-4">
              <img src={esewa} alt="eSewa" className="w-32 md:w-36" />
              <img
                src={connectIps}
                alt="Connect IPS"
                className="w-32 md:w-36"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-4 md:gap-6 bg-[#FFFFFF33] py-4 px-4 md:px-6 lg:px-12 rounded-2xl text-sm md:text-base ">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>9851344071 | 9806393939</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>infotech@sipalaya.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>Narephat, Koteshwor, Kathmandu</span>
          </div>
        </div>
      </div>

      {/* Copyright & Social */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-[#E3E0EF] text-sm md:text-base">
        <p>&copy; All rights reserved.</p>

        <div className="flex gap-5">
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
