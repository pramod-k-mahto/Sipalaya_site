import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="group w-85 h-110 bg-white rounded-2xl border-2 border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative h-44 bg-slate-50">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-[#44308F]">
            {course.category}
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-slate-200 text-slate-700">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-lg font-semibold text-slate-900 line-clamp-2">
          {course.title}
        </h3>

        <p className="mt-1 text-sm text-slate-600 line-clamp-2">
          {course.description}
        </p>

        {/* Meta */}
        <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
          <span>⭐ {course.rating}</span>
        </div>

        <p className="mt-3 text-xl font-bold text-[#44308F]">
          Rs. {course.price}
        </p>

        <div className="flex-1" />

        {/* Instructor */}
        <div className="flex items-center gap-3 text-sm text-slate-600 mb-4">
          <img
            src={course.instructorImage}
            alt={course.instructor}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{course.instructor}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate("/enroll")}
            className="px-4 py-2 rounded-lg bg-[#44308F] text-white text-sm font-medium hover:bg-[#44308F] transition"
          >
            Enroll
          </button>

          <button
            onClick={() => navigate("/courseDetail")}
            className="text-sm font-medium text-[#44308F] hover:underline"
          >
            Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
