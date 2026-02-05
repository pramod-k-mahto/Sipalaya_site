import React from "react";
import courses from "../../components/courses.js";
import CourseCard from "../../components/CourseCard.jsx";
import Navbar from "../../components/Navbar.jsx";

const Courses = () => {
  return (
    <div className="bg-[#44308F] min-h-screen">
      <Navbar />

      {/* Page Content */}
      <div className="pt-24">
        {/* Header */}
        <div className="text-center text-white mb-12 px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Our Courses</h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Industry-focused courses designed to help you gain real-world skills
            and build strong career foundations.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="bg-white rounded-t-3xl px-6 py-16">
          <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
