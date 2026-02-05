import React, { useState } from "react";
import Hero from "../../components/Hero";
import TopCourse from "../../components/TopCourse";
import { Cpu, BadgeCheck, Presentation } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const navigate = useNavigate();
  const testimonials = [
    {
      text: "I gained valuable skills and hands-on experience through this institute. The guidance and support from the trainers made all the difference in my career journey. Supportive mentors and excellent placement guidance. I gained confidence and the skills I needed to succeed.",
      role: "Sr.Backend Developer",
      name: "John Doe",
    },
  ];

  const team = [
    { role: "Sr.Frontend Developer", name: "John Doe" },
    { role: "Lead HR", name: "John Doe" },
    { role: "Sr.Backend Developer", name: "John Doe" },
    { role: "Sr.UI/UX Designer", name: "John Doe" },
  ];

  return (
    <div className="relative">
                  <Navbar />

      <div className="relative">
        <Hero />
        <TopCourse />
      </div>

      <div>
        <section className="bg-[#f6f5fb]">
          {/* Top Section */}
          <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block bg-white px-4 py-1 rounded-full text-sm text-gray-600 mb-6 shadow">
                Seize the future
              </span>

              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Why choose <br /> Sipalaya?
              </h1>

              <p className="mt-6 text-gray-600 max-w-md">
                Secure your career with Sipalaya's cutting-edge resources and
                transformative learning experiences.
              </p>

              <button
                className="mt-8 inline-flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition"
                onClick={() => {
                  navigate("/enroll");
                }}
              >
                Enroll Now →
              </button>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center">
              <div className="grid grid-cols-2 gap-8 relative">
                {/* IT Training */}
                <div className="row-span-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                    <Cpu size={36} className="text-purple-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">IT Training</h3>
                  </div>
                </div>

                {/* Certificate */}
                <div className="mt-16">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                    <BadgeCheck size={36} className="text-purple-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">
                      Certificate Preparation
                    </h3>
                  </div>
                </div>

                {/* Corporate */}
                <div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                    <Presentation size={36} className="text-purple-600 mb-4" />
                    <h3 className="font-semibold text-gray-900">
                      Corporate Workshop
                    </h3>
                  </div>
                </div>

                {/* Connector Lines */}
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                  <div className="w-40 h-40 border-l-4 border-r-4 border-purple-600 opacity-30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS SECTION */}
          <div className="bg-[#e9e7f1] py-10">
            <div className="max-w-7xl text-md space-x-5 p-5 font-semibold mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center px-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-purple-600">5K+</h1>
                <h1 className="text-gray-700">Student Graduated</h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-purple-600">30+</h1>
                <h1 className="text-gray-700">Industry Mentors</h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-purple-600">500+</h1>
                <h1 className="text-gray-700">Interview Coding Questions</h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-purple-600">1:1</h1>
                <h1 className="text-gray-700">Career Support</h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-purple-600">50+</h1>
                <h1 className="text-gray-700">Hiring Partners</h1>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Placement Support Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
              alt="Professional woman"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 pb-8">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-8"
              />
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-8 bg-red-500"></div>
                <div className="w-2 h-8 bg-green-500"></div>
                <div className="w-2 h-8 bg-blue-500"></div>
                <div className="w-2 h-8 bg-yellow-500"></div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-600 mb-4">Placement Support</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Guiding You from Learning to Employment
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Secure your career with Sipalaya's cutting-edge resources and
              transformative learning experiences.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-10"
              />
              <span className="text-blue-600 font-bold text-2xl">Behance</span>
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-10"
              />
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-10 bg-red-500"></div>
                <div className="w-3 h-10 bg-green-500"></div>
                <div className="w-3 h-10 bg-blue-500"></div>
                <div className="w-3 h-10 bg-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Promo Section */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-900 rounded-lg flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">SiPALAYA</p>
                    <p className="text-gray-500 text-sm">INFOTECH</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded"></div>
                  <div className="w-8 h-8 bg-yellow-400 rounded"></div>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                PYTHON DATA
              </h3>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">SCIENCE</h3>

              <p className="text-yellow-500 text-xl font-bold mb-6">
                20% off then regular price
              </p>

              <button
                className="bg-indigo-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition"
                onClick={() => {
                  navigate("/enroll");
                }}
              >
                Enroll Now
              </button>

              <div className="absolute bottom-0 right-0 w-64 h-64">
                <div className="relative">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
                    alt="Student learning"
                    className="absolute bottom-0 right-0 w-48 h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-20 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Meet the Minds Behind the Work
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Secure your career with Sipalaya's cutting-edge resources and
            transformative learning experiences.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-indigo-700 font-bold text-lg mb-1">
                    {member.role}
                  </h3>
                  <p className="text-gray-600">{member.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition inline-flex items-center gap-2">
              See More... <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Clients</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex justify-center">
                {i % 4 === 0 && (
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="h-8"
                  />
                )}
                {i % 4 === 1 && (
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                )}
                {i % 4 === 2 && (
                  <div className="flex gap-1">
                    <div className="w-2 h-8 bg-red-500"></div>
                    <div className="w-2 h-8 bg-green-500"></div>
                    <div className="w-2 h-8 bg-blue-500"></div>
                    <div className="w-2 h-8 bg-yellow-500"></div>
                  </div>
                )}
                {i % 4 === 3 && (
                  <span className="text-blue-600 font-bold text-xl">
                    Behance
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex justify-center">
                {i % 4 === 0 && (
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="h-8"
                  />
                )}
                {i % 4 === 1 && (
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                )}
                {i % 4 === 2 && (
                  <div className="flex gap-1">
                    <div className="w-2 h-8 bg-red-500"></div>
                    <div className="w-2 h-8 bg-green-500"></div>
                    <div className="w-2 h-8 bg-blue-500"></div>
                    <div className="w-2 h-8 bg-yellow-500"></div>
                  </div>
                )}
                {i % 4 === 3 && (
                  <span className="text-blue-600 font-bold text-xl">
                    Behance
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 lg:px-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 mb-4">Seize the future</p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Showcasing Careers Launched from Our Institute
              </h2>
              <p className="text-gray-600 mb-8">
                Secure your career with Sipalaya's cutting-edge resources and
                transformative learning experiences.
              </p>
              <button
                className="bg-indigo-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition"
                onClick={() => {
                  navigate("/enroll");
                }}
              >
                Enroll Now
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                  alt="Testimonial"
                  className="w-1/3 object-cover"
                />
                <div className="p-8 bg-purple-50 flex-1">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <h3 className="text-indigo-700 font-bold text-lg mb-1">
                    {testimonials[currentTestimonial].role}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].name}
                  </p>
                </div>
              </div>
              <div className="flex justify-center gap-4 py-6 bg-white">
                <button
                  onClick={() =>
                    setCurrentTestimonial(Math.max(0, currentTestimonial - 1))
                  }
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    setCurrentTestimonial(
                      Math.min(testimonials.length - 1, currentTestimonial + 1),
                    )
                  }
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
