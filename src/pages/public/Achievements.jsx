import React from 'react'

function Achievements() {
  const otherAchievements = [
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
      title: "Recognition from Stand Up World Cup Nepal"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
      title: "Recognition from Stand Up World Cup Nepal"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
      title: "Recognition from Stand Up World Cup Nepal"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
      title: "Recognition from Stand Up World Cup Nepal"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
      title: "Recognition from Stand Up World Cup Nepal"
    },
    {
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
      title: "Recognition from Stand Up World Cup Nepal"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Achievement Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Achievement from Stand Up World Cup Nepal Program
              </h1>
              <p className="text-gray-600 text-lg">
                Recognized for active involvement and meaningful contribution<br />
                in the Stand Up World Cup Nepal program
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop" 
                alt="Achievement Ceremony"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Notable Achievements Section */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Other Notable Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {otherAchievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-gray-900 font-semibold text-lg">
                    {achievement.title}
                  </h3>
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
  )
}

export default Achievements