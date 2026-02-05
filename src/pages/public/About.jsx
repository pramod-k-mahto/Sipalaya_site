import React from 'react'
import Navbar from '../../components/Navbar';

function About() {
  const missionItems = [
    {
      icon: "🎯",
      title: "Our Mission",
      description: "Provide high-quality, comprehensive IT training and development programs. Empower professionals and students to advance their careers and achieve their goals."
    },
    {
      icon: "👁️",
      title: "Our Vision",
      description: "Become the leading provider of IT training and development programs. Recognized for our commitment to excellence and helping students succeed in the tech industry."
    }
  ];

  const teamMembers = [
    { name: "John Doe", role: "Sr.Frontend Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "John Doe", role: "Sr.Frontend Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "John Doe", role: "Lead HR", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "John Doe", role: "Lead HR", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "John Doe", role: "Sr.Backend Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "John Doe", role: "Sr.Backend Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "John Doe", role: "Sr.UI/UX Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "John Doe", role: "Sr.UI/UX Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" }
  ];

  return (
    <>
    

    
    <div className="min-h-screen bg-white">
      {/* History Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">History</h1>
          
          <p className="text-center text-gray-300 text-lg mb-12 leading-relaxed">
            Sipalaya empowers professionals and students in the tech industry with tailored, top-notch training programs.
            Our expert instructors, with extensive industry experience, provide personalized support. Offering interactive,
            hands-on courses covering the latest technologies, we've helped countless individuals elevate their careers. Join
            us to achieve your goals confidently.
          </p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {missionItems.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl p-8 flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <p className="text-gray-700 text-base leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop" 
                alt="CEO John Doe"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                At our institute, we believe learning should be practical, relevant, and career-focused. Our goal is to empower
                students with the right skills, confidence, and guidance to succeed in today's evolving IT industry. We are committed to
                quality education, continuous innovation, and supporting every learner on their journey toward a successful career.
              </p>
              
              <div className="border-t border-gray-300 pt-6">
                <h3 className="text-indigo-600 font-bold text-xl mb-1">CEO</h3>
                <p className="text-gray-800 text-lg font-semibold">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Meet the Minds Behind the Work</h2>
          <p className="text-center text-gray-400 mb-12">
            Secure your career with Sipalaya's cutting-edge resources<br />
            and transformative learning experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-indigo-600 font-bold text-lg mb-1">{member.role}</h3>
                  <p className="text-gray-600 font-medium">{member.name}</p>
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
      
    </div>

        </>

  )
}

export default About