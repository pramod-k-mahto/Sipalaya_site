import { createContext, useEffect, useState } from "react";
export const CourseContext = createContext();
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const getCourse = async () => {
    let course = await fetch(
      "https://siplayabackend.onrender.com/api/course/getAllCourses",
    );
    course = await course.json();
    console.log(course);
    setCourses(course);
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
};
