import { ArrowRight } from "lucide-react";
import hero from "../assets/images/hero.png";
import heroBg from "../assets/images/bg.png";
import python from "../assets/images/python.png";
import webdev from "../assets/images/webdev.png";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center",
      }}
      className="bg-[#44308F] min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learn Skills That Matter
          </h1>

          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto lg:mx-0">
            Gain job-ready skills with industry-focused IT courses and level up
            your career.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/courses")}
            className="mt-8 inline-flex items-center gap-2 bg-[#E8BB0E] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#d4a80d] transition"
          >
            Explore Courses <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.img
            src={hero}
            alt="hero"
            className="w-full max-w-md lg:max-w-lg object-contain"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Icons */}
          <motion.img
            src={python}
            alt="python"
            className="absolute w-24 top-24 left-6 opacity-80"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <motion.img
            src={webdev}
            alt="webdev"
            className="absolute w-28 top-0 right-6 opacity-80"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
