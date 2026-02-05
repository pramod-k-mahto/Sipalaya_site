import { motion } from "framer-motion";

const logos = [...Array(8)];

export default function Clients() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Clients</h2>

        {/* TOP ROW */}
        <div className="overflow-hidden mb-8">
          <div className="marquee marquee-left gap-12">
            {[...logos, ...logos].map((_, i) => (
              <LogoItem key={i} index={i} />
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="overflow-hidden">
          <div className="marquee marquee-right gap-12">
            {[...logos, ...logos].map((_, i) => (
              <LogoItem key={i} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const LogoItem = ({ index }) => (
  <div className="flex items-center justify-center min-w-30 opacity-70 hover:opacity-100 transition">
    {index % 4 === 0 && (
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        alt="Google"
        className="h-8 grayscale hover:grayscale-0 transition"
      />
    )}

    {index % 4 === 1 && (
      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
        P
      </div>
    )}

    {index % 4 === 2 && (
      <div className="flex gap-1">
        <div className="w-2 h-8 bg-red-500" />
        <div className="w-2 h-8 bg-green-500" />
        <div className="w-2 h-8 bg-blue-500" />
        <div className="w-2 h-8 bg-yellow-500" />
      </div>
    )}

    {index % 4 === 3 && (
      <span className="text-slate-800 font-semibold text-lg">Behance</span>
    )}
  </div>
);
