import React from 'react'

function SuccessStories() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Sr.Backend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      testimonial: "I gained valuable skills and hands-on experience through this institute. The guidance and support from the trainers made all the difference in my career journey. Supportive mentors and excellent placement guidance. I gained confidence and the skills I needed to succeed."
    },
    {
      name: "John Doe",
      role: "Sr.Backend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      testimonial: "I gained valuable skills and hands-on experience through this institute. The guidance and support from the trainers made all the difference in my career journey. Supportive mentors and excellent placement guidance. I gained confidence and the skills I needed to succeed."
    },
    {
      name: "John Doe",
      role: "Sr.Backend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      testimonial: "I gained valuable skills and hands-on experience through this institute. The guidance and support from the trainers made all the difference in my career journey. Supportive mentors and excellent placement guidance. I gained confidence and the skills I needed to succeed."
    },
    {
      name: "John Doe",
      role: "Sr.Backend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      testimonial: "I gained valuable skills and hands-on experience through this institute. The guidance and support from the trainers made all the difference in my career journey. Supportive mentors and excellent placement guidance. I gained confidence and the skills I needed to succeed."
    }
  ];

  const highlights = [
    "Knowing what job they can get after learning.",
    "Working on real projects, not just theory.",
    "Certificates, achievements, and progress milestones."
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Showcasing Careers Launched from Our Institute
              </h1>
              <p className="text-gray-400 text-lg">
                Secure your career with Sipalaya's cutting-edge resources<br />
                and transformative learning experiences.
              </p>
            </div>

            {/* Right Image with Floating Cards */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" 
                  alt="Student Success"
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Floating Cards */}
                <div className="absolute top-8 right-0 bg-gray-800 rounded-lg px-4 py-3 text-sm max-w-[200px] shadow-xl">
                  Knowing what job they can get after learning.
                </div>
                
                <div className="absolute top-1/3 right-0 bg-gray-800 rounded-lg px-4 py-3 text-sm max-w-[200px] shadow-xl">
                  Working on real projects, not just theory.
                </div>
                
                <div className="absolute bottom-20 left-0 bg-gray-800 rounded-lg px-4 py-3 text-sm max-w-[220px] shadow-xl">
                  Certificates, achievements, and progress milestones.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                  <h3 className="text-indigo-600 font-bold text-lg">
                    {testimonial.role}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 mx-auto">
              See More... <span className="text-xl">↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Found the confidence to take the next step.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Secure your career with Sipalaya's cutting-edge resources<br />
            and transformative learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2">
              Upload CV <span className="text-lg">📄</span>
            </button>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 font-semibold">
              Enroll Now <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SuccessStories