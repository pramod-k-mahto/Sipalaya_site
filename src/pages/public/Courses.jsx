import React from "react";
import courses from "../../components/courses.js";
import CourseCard from "../../components/CourseCard.jsx";
import Navbar from "../../components/Navbar.jsx";

const Courses = () => {
  return (
    <div  className="bg-[#44308F]"  >
        <Navbar />

      <div className=" pt-20  ">
        <div className=" flex  py-20   bg-white   flex-wrap justify-center p-5 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
