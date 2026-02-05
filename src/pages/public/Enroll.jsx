import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function Enroll() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-[#44308F]  border-2 ">
      <Navbar />

      <div className="min-h-screen mt-24  bg-white font-sans text-slate-800 px-4 py-10 sm:px-8 lg:px-16">
        {/* Progress Stepper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative flex justify-between items-center">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10" />

            {["Basic Info", "Course Info", "Payment Info"].map((label, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className={`hidden sm:block text-sm font-semibold mb-4 ${
                    step === i + 1 ? "text-indigo-800" : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
                <div
                  className={`w-4 h-4 rounded-full ring-4 ring-white ${
                    step >= i + 1 ? "bg-indigo-800" : "bg-gray-200"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-indigo-900 mb-6 leading-tight">
              Enroll <br /> Now
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-md">
              Gain job-ready skills with our IT courses in Nepal. Elevate your
              career prospects today!
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-8">
              {step === 1 && "Basic Information"}
              {step === 2 && "Course Information"}
              {step === 3 && "Payment Information"}
            </h2>

            {/* STEP 1 */}
            {step === 1 && (
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="input" placeholder="Full Name" />
                  <input className="input" placeholder="Phone Number" />
                </div>
                <input className="input" placeholder="Email Address" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="input" placeholder="Address" />
                  <select className="input">
                    <option>Level of Education</option>
                    <option>High School</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-primary"
                >
                  Continue
                </button>
              </form>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <form className="space-y-4">
                <select className="input">
                  <option>Select Course</option>
                  <option>MERN Stack</option>
                  <option>UI / UX Design</option>
                  <option>Python with Data Science</option>
                </select>
                <select className="input">
                  <option>Preferred Batch</option>
                  <option>Morning</option>
                  <option>Day</option>
                  <option>Evening</option>
                </select>

                <div className="flex justify-between">
                  <button onClick={() => setStep(1)} className="btn-secondary">
                    Back
                  </button>
                  <button onClick={() => setStep(3)} className="btn-primary">
                    Continue
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="text-2xl font-bold text-indigo-800">
                    Rs. 25,000
                  </p>
                </div>

                <button className="btn-primary w-full">
                  Proceed to Payment
                </button>

                <button
                  onClick={() => setStep(2)}
                  className="btn-secondary w-full"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tailwind reusable styles */}
        <style jsx>{`
          .input {
            width: 100%;
            padding: 1rem;
            border-radius: 0.75rem;
            background: #e2e8f0;
            outline: none;
          }
          .btn-primary {
            background: #3730a3;
            color: white;
            padding: 0.75rem 2.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
            width: 100%;
          }
          .btn-secondary {
            border: 1px solid #c7d2fe;
            padding: 0.75rem 2.5rem;
            border-radius: 0.75rem;
            font-weight: 600;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Enroll;
