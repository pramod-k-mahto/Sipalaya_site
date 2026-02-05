import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ------------------ DATA ------------------ */
const testimonials = [
  {
    text: "Sipalaya helped me transition into tech with confidence. The mentors and hands-on projects made all the difference.",
    name: "Aayush Shrestha",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    text: "The career guidance and real-world exposure helped me land my first job within months.",
    name: "Sneha Karki",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=500&fit=crop",
  },
];

/* ------------------ CUSTOM ARROWS ------------------ */
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute bottom-2 left-1/2 -translate-x-14
      z-10 w-10 h-10 rounded-full
      bg-white shadow-md
      flex items-center justify-center
      text-[#44308F]
      hover:bg-[#44308F] hover:text-white
      transition
    "
    aria-label="Previous slide"
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute bottom-2 left-1/2 translate-x-4
      z-10 w-10 h-10 rounded-full
      bg-white shadow-md
      flex items-center justify-center
      text-[#44308F]
      hover:bg-[#44308F] hover:text-white
      transition
    "
    aria-label="Next slide"
  >
    <ChevronRight size={20} />
  </button>
);

/* ------------------ SLIDER SETTINGS ------------------ */
const sliderSettings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

/* ------------------ COMPONENT ------------------ */
export default function CareerShowcase() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 lg:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-medium text-[#44308F]">
            Seize the future
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Careers launched <br /> from Sipalaya
          </h2>

          <p className="mt-6 text-slate-600 max-w-md">
            Learn industry-ready skills, build real projects, and start a career
            you’re proud of.
          </p>

          <button
            onClick={() => navigate("/enroll")}
            className="
              mt-8 inline-flex items-center
              px-6 py-3 rounded-lg
              bg-[#44308F] text-white font-medium
              hover:bg-indigo-700 transition
            "
          >
            Enroll Now
          </button>
        </div>

        {/* RIGHT SLIDER */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden relative">
          <Slider {...sliderSettings}>
            {testimonials.map((item, i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row">
                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-1/3 h-full md:h-auto object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-slate-700 leading-relaxed mb-6">
                      “{item.text}”
                    </p>

                    <h4 className="font-semibold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#44308F]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
