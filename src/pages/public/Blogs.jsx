import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Designing", "AI/ML", "Programming"];

  const blogPosts = [
    {
      id: 1,
      title: "Python with Data Science: Unlocking Insights with Code",
      description:
        "Introduction: Why Python for Data Science? Python has become the leading language...",
      category: "Programming",
    },
    {
      id: 2,
      title: "Python with Data Science: Unlocking Insights with Code",
      description:
        "Introduction: Why Python for Data Science? Python has become the leading language...",
      category: "Programming",
    },
    {
      id: 3,
      title: "Python with Data Science: Unlocking Insights with Code",
      description:
        "Introduction: Why Python for Data Science? Python has become the leading language...",
      category: "AI/ML",
    },
    {
      id: 4,
      title: "Python with Data Science: Unlocking Insights with Code",
      description:
        "Introduction: Why Python for Data Science? Python has become the leading language...",
      category: "Designing",
    },
  ];

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  return (

    <div  className="bg-[#44308F] border-2 ">

          <Navbar />

    
    
    <div className="  bg-[#44308F] mt-24 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero */}
      <section className="  bg-[#44308F] text-white px-4 py-16 sm:py-20 md:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-snug">
          Gain the ideas and knowledge
          <br className="hidden sm:block" />
          to take the next step.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Gain job-ready skills with our IT courses in Nepal. Elevate your career
          prospects today!
        </p>
      </section>

      {/* Blogs */}
      <section className="   bg-[#44308F] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl text-white sm:text-4xl md:text-5xl font-bold mb-6">
            Blogs
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-white border border-gray-200 hover:border-indigo-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="  bg-[#44308F]   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="h-44 sm:h-52 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-xl">
                  BLOG
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-indigo-900 group-hover:text-indigo-600 transition line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.description}
                </p>

                <button className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  View Details
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>

        </div>

  );
};

export default Blogs;
