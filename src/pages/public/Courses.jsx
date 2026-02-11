import React, { useState } from "react";
import courses from "../../components/courses.js";
import CourseCard from "../../components/CourseCard.jsx";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sortType, setSortType] = useState("");

  // 🔹 Filter + Search + Sort logic
  const filteredCourses = courses
    .filter((course) => {
      const matchesCategory =
        activeCategory === "ALL" || course.category === activeCategory;

      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortType === "az") return a.title.localeCompare(b.title);
      if (sortType === "za") return b.title.localeCompare(a.title);
      if (sortType === "latest") return new Date(b.date) - new Date(a.date);
      if (sortType === "oldest") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  return (
    <div className="bg-[#44308F] min-h-screen ">
      <div className="pt-24">
        {/* Header */}
        <div className="text-center text-white mb-12 px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Our Courses</h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Industry-focused courses designed to help you gain real-world
            skills.
          </p>
        </div>

        {/* Filters */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["ALL", "Designing", "AI/ML"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition duration-300
          ${
            activeCategory === cat
              ? "bg-white text-[#44308F] shadow-md"
              : "bg-white/20 text-white hover:bg-white hover:text-[#44308F]"
          }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort + Search */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="px-4 py-2 rounded-lg  bg-white/20 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-white flex-1"
            >
              <option value="">Sort</option>
              <option value="latest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="az">Title (A–Z)</option>
              <option value="za">Title (Z–A)</option>
            </select>

            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 flex-4 rounded-lg bg-white/20 text-white placeholder:text-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white flex-1"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="bg-white rounded-t-3xl px-6 py-16 mt-10">
          <div className=" flex justify-center gap-20 flex-wrap">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No courses found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
