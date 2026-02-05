import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const Career = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJob, setExpandedJob] = useState(null);

  const jobListings = [
    {
      id: 1,
      title: "App Developer",
      company: "Sipalaya Info Tech",
      location: "Kathmandu, Nepal",
      email: "infotech@sipalaya.com",
      type: ["Remote", "Full-time", "Mid-level"],
      postedOn: "2025/01/02",
      dueDate: "2025/01/02",
      description:
        "We are seeking a talented App Developer to join our growing team...",
    },
    {
      id: 2,
      title: "App Developer",
      company: "Sipalaya Info Tech",
      location: "Kathmandu, Nepal",
      email: "infotech@sipalaya.com",
      type: ["Remote", "Full-time", "Mid-level"],
      postedOn: "2025/01/02",
      dueDate: "2025/01/02",
      description:
        "We are seeking a talented App Developer to join our growing team...",
    },
  ];

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className=" border border-white  bg-[#44308F]">
      <Navbar />

      <div className="min-h-screen  mt-24 bg-gradient-to-br  from-gray-50 to-blue-50">
        {/* CTA */}
        <section className="bg-[#44308F] text-white px-4 py-16 sm:py-20 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-snug">
            Want to join us and contribute your skills and ideas?
          </h1>

          <button className="w-full sm:w-auto border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all">
            Upload CV
          </button>
        </section>

        {/* Jobs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-4 order-1 lg:order-none">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                More Job <br className="hidden sm:block" /> Opportunities
              </h2>

              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Explore opportunities that align with your skills and career
                goals.
              </p>

              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Job Cards */}
            <div className="lg:col-span-8 space-y-5">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow hover:shadow-lg transition"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.type.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs sm:text-sm px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-2">
                    {job.title}
                  </h3>

                  <p className="font-semibold text-sm sm:text-base">
                    {job.company}
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm">
                    {job.location}
                  </p>

                  <p className="text-gray-600 text-xs sm:text-sm break-all">
                    {job.email}
                  </p>

                  {/* Dates */}
                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500 mt-3">
                    <span>Posted: {job.postedOn}</span>
                    <span>Due: {job.dueDate}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-4">
                    <button className="w-full sm:w-auto bg-indigo-700 text-white px-6 py-2 rounded-lg hover:bg-indigo-800 transition">
                      Apply Now
                    </button>

                    <button
                      onClick={() =>
                        setExpandedJob(expandedJob === job.id ? null : job.id)
                      }
                      className="text-indigo-700 font-semibold flex items-center justify-center sm:justify-start gap-1"
                    >
                      View Details
                      <span
                        className={`transition-transform ${
                          expandedJob === job.id ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                  </div>

                  {/* Expand */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedJob === job.id
                        ? "max-h-40 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 text-sm sm:text-base">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
