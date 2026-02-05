import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-85 bg-purple-50   rounded-2xl shadow-lg overflow-hidden hover:-translate-y-3 transition-transform duration-300
 "
    >
      {/* Top Section */}
      <div className="relative bg-white p-4">
        {/* Tags */}
        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 text-sm  border border-purple-500 text-purple-600 rounded-full ">
            {course?.category}
          </span>
          <span className="px-3 border py-1 text-sm  border-purple-500 text-purple-600 rounded-full">
            {course?.duration}
          </span>
        </div>

        {/* Title */}

        {/* Image */}
        <div className="flex relative h-32   justify-center mt-4">
          <h3 className="font-bold  absolute z-50  text-center  w-40 -right-5 text-lg text-gray-900">
            {course?.title}
          </h3>
          <img
            src={course?.image}
            alt="Flutter App"
            className="w-full hover:scale-105 transition-transform duration-300 "
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" h-64 flex flex-col gap-5  p-3   ">
        <div className="h-28 space-y-3">
          <h2 className="text-2xl font-bold text-purple-700">
            {course?.title}
          </h2>

          <p className="text-xl font-semibold text-gray-800 ">
            Rs.{course?.price}
          </p>
        </div>

        {/* Instructor */}
        <div className="flex h-12  items-center gap-3">
          <img
            src={course?.instructorImage}
            alt="Instructor"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-700">{course?.instructor}</span>
        </div>

        {/* Buttons */}
        <div className="flex    items-center justify-between ">
          <button
            className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-800 transition"
            onClick={() => {
              navigate("/enroll");
            }}
          >
            Enroll Now
          </button>
          <button
            onClick={() => {
              navigate("/courseDetail");
            }}
            className="text-purple-700 font-medium flex items-center gap-1 hover:underline"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
