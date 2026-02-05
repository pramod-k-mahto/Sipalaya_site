import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  PlayCircle,
  ChevronDown,
} from "lucide-react";

const Event = () => {
  const eventCards = Array.from({ length: 6 }, () => ({
    title: "Recognition from Stand Up World Cup Nepal",
    img: "https://images.unsplash.com/photo-1523240715639-99f84d3e8188?auto=format&fit=crop&w=400",
  }));

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* ================= HERO ================= */}
      <section className="bg-[#4D3E97] text-white pt-14 sm:pt-16 pb-24 sm:pb-32 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Explore our events designed to boost <br className="hidden sm:block" />
          productivity and growth.
        </h1>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm opacity-80 mb-10 sm:mb-12">
          Participate in our carefully curated events designed to enhance your
          skills, boost productivity, and support your personal and professional
          growth.
        </p>

        <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200"
            alt="Team working"
            className="w-full h-[220px] sm:h-[350px] md:h-[450px] object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="w-2.5 h-2.5 bg-white rounded-full" />
            <span className="w-2.5 h-2.5 bg-white/40 rounded-full" />
            <span className="w-2.5 h-2.5 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENT ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2D2D2D] mb-4 leading-snug">
            Achievement from <br /> Stand Up World Cup <br /> Nepal Program
          </h2>
          <p className="text-gray-500 text-sm">
            Recognized for active involvement and meaningful contribution in the
            Stand Up World Cup Nepal program.
          </p>
        </div>

        <div className="relative group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800"
            className="rounded-xl w-full"
            alt="Award Ceremony"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle
              className="text-white w-14 h-14 sm:w-16 sm:h-16 opacity-80 group-hover:opacity-100 transition"
              fill="rgba(0,0,0,0.35)"
            />
          </div>
        </div>
      </section>

      {/* ================= EVENT GALLERY ================= */}
      <section className="bg-[#4D3E97] py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
          See More Events
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <img
                src={card.img}
                alt="Recognition"
                className="w-full h-56 object-cover"
              />
              <div className="p-4 bg-slate-100">
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button className="text-white border border-white/30 px-6 py-2 rounded-lg flex items-center gap-2 mx-auto hover:bg-white/10 transition">
            See More <ChevronDown size={18} />
          </button>
        </div>
      </section>

      {/* ================= UPCOMING CTA ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="max-w-md text-center md:text-left">
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
            Upcoming New Event
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2D2D2D] mt-2 mb-6">
            Coming Soon. See What's Next.
          </h2>
          <button className="bg-[#4D3E97] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D2E77] transition">
            Enroll Now
          </button>
        </div>

        <div className="bg-[#E9F0FF] p-6 sm:p-10 rounded-3xl flex items-center gap-6 w-full md:w-auto justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1A2E5B] text-center md:text-left">
            Java With Spring <br /> & Hibernate
          </h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
            className="w-20 sm:w-24 opacity-80"
            alt="Tech stack"
          />
        </div>
      </section>

    </div>
  );
};

export default Event;
