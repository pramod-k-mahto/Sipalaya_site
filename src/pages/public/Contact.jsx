import React, { useState } from "react";
import Navbar from "../../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How can I contact Sipalaya?",
      answer:
        "You can contact us via phone, email, or by submitting the contact form. Our team will respond as soon as possible.",
    },
    {
      id: 2,
      question: "Do you provide career guidance?",
      answer:
        "Yes, we provide professional career guidance and mentorship to help you choose the right IT path.",
    },
    {
      id: 3,
      question: "Where is Sipalaya located?",
      answer:
        "We are located at Narephat, Koteshwor, Kathmandu. You can also find us on Google Maps.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#44308F] border-2 ">
      <Navbar />

      <div className="  bg-[#44308F] mt-20 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* ================= CONTACT SECTION ================= */}
        <section className=" bg-[#44308F] text-white py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
            {/* LEFT INFO */}
            <div className="space-y-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Get In Touch With Us
              </h1>

              <div className="space-y-6">
                {[
                  { text: "9851344071 | 9806393939", icon: "📞" },
                  { text: "infotech@sipalaya.com", icon: "✉️" },
                  { text: "Narephat, Koteshwor, Kathmandu", icon: "📍" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/80 backdrop-blur rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
              </div>

              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className="input"
                required
              >
                <option value="">Purpose</option>
                <option>Admission</option>
                <option>Career</option>
                <option>Support</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="input resize-none"
                required
              />

              <button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* ================= FAQ & MAP ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* FAQ */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Your Queries Answered</h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border rounded-xl overflow-hidden bg-white"
                  >
                    <button
                      onClick={() =>
                        setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                      }
                      className="w-full flex justify-between items-center px-6 py-5 font-semibold text-left"
                    >
                      {faq.question}
                      <span
                        className={`transition-transform ${
                          expandedFAQ === faq.id ? "rotate-180" : ""
                        }`}
                      >
                        ⌄
                      </span>
                    </button>

                    {expandedFAQ === faq.id && (
                      <div className="px-6 py-4 text-gray-600 border-t">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* MAP */}
            <div className="lg:sticky lg:top-24 space-y-6">
              <iframe
                title="Sipalaya Location"
                src="https://www.google.com/maps?q=Koteshwor%20Kathmandu&output=embed"
                className="w-full h-[400px] rounded-2xl border"
                loading="lazy"
              />
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-1">Our Location</h3>
                <p className="text-gray-600">Narephat, Koteshwor, Kathmandu</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tailwind reusable input */}
        <style>{`
        .input {
          width: 100%;
          padding: 1rem;
          border-radius: 0.5rem;
          background: #e5e7eb;
          color: #111827;
          outline: none;
        }
        .input:focus {
          ring: 2px solid black;
        }
      `}</style>
      </div>
    </div>
  );
};

export default Contact;
