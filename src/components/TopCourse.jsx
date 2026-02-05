import CourseCard from "./CourseCard";
import courses from "../components/courses.js";
import { NavLink } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

function TopCourse() {
  return (
    <div className="bg-gray-200   py-12 px-4 md:px-8 lg:px-12">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl">
          Top Courses
        </h1>
      </div>

      {/* Courses Grid */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center">
        <NavLink
          to="/courses"
          className="inline-flex items-center gap-2 border-2 border-[#44308F] rounded-lg px-6 py-3 text-[#44308F] md:text-lg font-semibold hover:bg-[#44308F] hover:text-white transition-colors"
        >
          View All Courses
          <MdArrowRightAlt size={25} />
        </NavLink>
      </div>
    </div>
  );
}

export default TopCourse;
