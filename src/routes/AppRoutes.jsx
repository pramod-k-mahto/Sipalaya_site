import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import CourseDetail from "../components/CourseDetail";
import Enroll from "../pages/public/Enroll";
import Event from "../pages/public/Event";
import About from "../pages/public/About";
import SuccessStories from "../pages/public/SuccessStories";
import Achievements from "../pages/public/Achievements";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/public/Home"));
const Courses = lazy(() => import("../pages/public/Courses"));
const Career = lazy(() => import("../pages/public/Career"));
const Blogs = lazy(() => import("../pages/public/Blogs"));
const Guidance = lazy(() => import("../pages/public/Guidance"));
const Contact = lazy(() => import("../pages/public/Contact"));
const NotFound = lazy(() => import("../pages/public/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/career-opportunity" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/guidance" element={<Guidance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/event" element={<Event />} />
          <Route path="/successStories" element={<SuccessStories />} />
          <Route path="/achievements" element={<Achievements />} />
        </Route>
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
