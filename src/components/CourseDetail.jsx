const CourseDetail = () => {
  const courseDetails = {
    title: "App Development with Flutter",
    price: 20000,
    category: "Non-Coding",
    duration: "3 Months",
    mentor: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzpEkv-vlwrVppb-PQuWArI1sXR9vAYAwNg&s",

    learnings: [
      "Techniques for creating intuitive and visually appealing interfaces",
      "Importance of alignment, color, and text overlays",
      "Strategies for attention architecture and user engagement",
      "Fundamentals of user experience design",
      "Methods for enhancing usability and user profiling",
      "Balancing form and functionality for optimal user satisfaction",
      "Principles of consistency, simplicity, and user-centric design",
    ],

    content: [
      "Understanding Color Theory and Application",
      "Typography Basics",
      "Layout & Spacing Principles",
      "User Interaction Design",
      "Flutter UI Widgets",
      "State Management Basics",
    ],

    requirements: [
      "No prior knowledge needed",
      "Access to a PC or Mac",
      "All required software provided or available for free/demo versions",
    ],
  };

  return (
    <div className="bg-[#44308F] min-h-screen text-xl text-white">
      {/* Header */}
      <div className="text-center py-8">
        <p className="text-sm opacity-80">Course / Course Details</p>
        <h1 className="text-3xl font-bold mt-2">{courseDetails.title}</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 pb-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image */}
          <div className="bg-white rounded-xl p-4">
            <img
              src={courseDetails.image}
              alt={courseDetails.title}
              className="rounded-lg  h-80
               "
            />
          </div>

          {/* What you'll learn */}
          <section title="What you will Learn?">
            <ul className="list-disc list-inside space-y-2 text-sm">
              {courseDetails.learnings.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Course Content */}
          <section title="Course Content  " className="text-sm">
            {courseDetails.content.map((item, i) => (
              <details
                key={i}
                className="bg-purple-600 rounded-lg p-3 mb-2 cursor-pointer"
              >
                <summary className="font-medium">{item}</summary>
              </details>
            ))}
          </section>

          {/* Requirements */}
          <section title="Requirements">
            <ul className="list-disc list-inside   space-y-2 text-md">
              {courseDetails.requirements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <button className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold">
            Enroll Now →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Course Details Card */}
          <div
            title="Course Details "
            className="  border bg-gray-200 rounded-sm p-2 text-black "
          >
            <h1>Course Details </h1>
            <p>💰 {courseDetails.price}</p>
            <p>📂 {courseDetails.category}</p>
            <p>⏳ {courseDetails.duration}</p>
          </div>

          {/* Mentor */}
          <div title="Mentor" className="bg-gray-200 rounded-sm p-2 text-black">
            <h1>Mentor</h1>
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40"
                className="w-10 h-10 rounded-full"
              />
              <span>{courseDetails.mentor}</span>
            </div>
          </div>

          {/* Other Courses */}
          <div title="Other Courses" className=" rounded-sm p-2   bg-gray-200 text-black ">
            <h1>Other Courses </h1>
            <div className="flex gap-x-4   items-center p-2">
              <img
                className="w-14 h-14"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzpEkv-vlwrVppb-PQuWArI1sXR9vAYAwNg&s"
                alt=""
              />
              <div title="Mentor" className=" w-56 space-y-1 ">
                <p className="text-sm">App Development</p>
                <div className="flex items-center gap-2">
                  <img
                    src="https://i.pravatar.cc/40"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm" >{courseDetails.mentor}</span>
                </div>
              </div>
            </div>
            <button className="text-sm underline mt-2">
              View Other Course →
            </button>
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="bg-white text-black py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4 items-center">
          
          <div  className="space-y-10" >
            <div>
            <p  className="text-md font-semibold" > Upcoming New Course</p>
          </div>
            <h2 className="text-6xl  leading-20 font-bold">
              Coming Soon. Learn What’s Next.
            </h2>
            <button className="mt-4 bg-purple-700 text-white px-5 py-2 rounded">
              Enroll Now →
            </button>
          </div>
          <img src="https://www.institutedata.com/wp-content/uploads/2023/06/ux_ui_program_institute-of-data.png" alt="Coming Soon" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
