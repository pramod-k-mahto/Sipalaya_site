import { ArrowRight } from "lucide-react";
import hero from "../assets/images/hero.png";
import heroBg from "../assets/images/bg.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "1px -900px ",
      }}
      className=" bg-[#5E3AE3] h-[630px]  flex flex-col"
    >
      <div
        className="flex
    bg-no-repeat
    flex-col lg:flex-row 
    justify-between items-center bg-gradient-to-r
      p-6 md:p-12 lg:p-20 h-[554px]"
      >
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-[#F4F4F4] mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold mb-4 leading-tight">
            Learn Skills That Matter
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto lg:mx-0">
            Gain job-ready skills with our IT courses in Nepal. Elevate your
            career prospects today!
          </p>
          <button
            onClick={() => {
              navigate("/courses");
            }}
            className="flex items-center gap-2 bg-[#E8BB0E] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#d4a80d] transition-colors mx-auto lg:mx-0"
          >
            Explore Courses <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full  mt-96 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={hero}
            alt="hero"
            className="w-full max-w-md lg:max-w-lg xl:w-127 object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
