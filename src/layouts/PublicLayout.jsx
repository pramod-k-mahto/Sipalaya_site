import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <Outlet />

      <Footer />
    </div>
  );
};

export default PublicLayout;
