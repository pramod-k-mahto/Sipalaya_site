import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

const Guidance = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = ["All", "Designing", "AI/ML", "Programming"];

  const sessions = [
    {
      title: "Python with Data Science: Unlocking Insights with Code",
      thumbnail: "Transform Your Mindset, Skills, and Career in Just 4 Hours!",
      category: "Programming",
      duration: "4 Hours",
    },
    {
      title: "UI/UX Designing Masterclass",
      thumbnail: "Design smarter, not harder",
      category: "Designing",
      duration: "3 Hours",
    },
    {
      title: "AI & Machine Learning Bootcamp",
      thumbnail: "Build intelligent systems",
      category: "AI/ML",
      duration: "5 Hours",
    },
    {
      title: "Advanced React Patterns",
      thumbnail: "Write scalable frontend code",
      category: "Programming",
      duration: "4 Hours",
    },
    {
      title: "Figma to Production",
      thumbnail: "From wireframe to live app",
      category: "Designing",
      duration: "3.5 Hours",
    },
    {
      title: "AI for Developers",
      thumbnail: "Integrate AI into real apps",
      category: "AI/ML",
      duration: "4 Hours",
    },
  ];

  const filteredSessions =
    activeFilter === "All"
      ? sessions
      : sessions.filter((s) => s.category === activeFilter);

  return (

    <div  className="bg-[#44308F] border-2 ">


              <Navbar />

    
    
    <div className="min-h-screen mt-24 bg-[44308F] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm uppercase tracking-widest text-blue-400 font-bold">
              IT Mentorship Revolution
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              CodeYourFuture
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400">
              Transform your career through expert-led online sessions
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition">
                Watch Intro
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition">
                Explore Sessions
              </button>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-1">
              <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center p-10 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold italic text-gray-200">
                  “Transform Your Mindset, Skills, and Career in Just 4 Hours!”
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Discover Online Sessions
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-semibold border transition ${
                  activeFilter === f
                    ? "bg-blue-600 border-blue-500"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* SESSION GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSessions.map((session, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition"
            >
              <div className="aspect-video bg-slate-800 flex items-center justify-center p-6 text-center">
                <h3 className="font-semibold text-lg">
                  {session.thumbnail}
                </h3>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition">
                  {session.title}
                </h4>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span className="hover:text-white transition cursor-pointer">
                    Play Now →
                  </span>
                  <span>{session.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-32 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Ready to take the <span className="text-blue-500 italic">next step?</span>
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Secure your career with cutting-edge resources and expert mentorship.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-10 py-5 bg-blue-600 rounded-full font-bold hover:scale-105 transition">
            Enroll Now
          </button>
          <button className="px-10 py-5 border border-white/20 rounded-full hover:bg-white/10 transition">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 border-t border-white/10 pt-12">
          {[
            ["500+", "Students"],
            ["50+", "Mentors"],
            ["95%", "Success"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-4xl font-bold text-blue-500">{value}</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

        </div>

  );
};

export default Guidance;
