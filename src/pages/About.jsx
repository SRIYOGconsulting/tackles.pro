import React, { useState, useEffect } from "react";
const aboutImg = "/about/about.png";

import { ShieldCheck, Users, Leaf, Handshake } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About | Tackles Handyman Services";
  }, []);

  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: {
      title: "About Tackles",
      desc:
        "Tackles is an A-grade handyman service company delivering professional solutions for plumbing, painting, air conditioning, flooring, and wall repairs with consistent quality and dependable service standards.",
    },
    mission: {
      title: "Our Mission",
      desc:
        "Our mission is to offer complete repair and maintenance services under one trusted platform, eliminating the need to search multiple providers for different household and commercial requirements.",
    },
    goals: {
      title: "Our Goals",
      desc:
        "We aim to simplify everyday maintenance by delivering efficient plumbing, painting, plastering, and AC services that enhance comfort, reliability, and long-term value for every client.",
    },
    vision: {
      title: "Our Vision",
      desc:
        "Our vision is to build a trusted handyman brand recognized for professionalism, accessibility, and service excellence through long-term client relationships and consistent work quality.",
    },
  };

  return (
    <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 sm:px-12 lg:px-20">

      {/* PAGE TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 mb-4 tracking-wide">
          All About Us
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Hard labour works like plumbing, AC installation, and plastering require not only
          strength but skill. That’s where our team comes in, to take your problems off your shoulders.
        </p>
      </div>

      {/* LEFT SECTIONS + RIGHT IMAGE */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          {Object.keys(sections).map((key) => (
            <div key={key} className="relative">

              <button
                onMouseEnter={() => setActiveSection(key)}
                onClick={() => setActiveSection(key)}
                className={`w-full text-left px-5 py-3 rounded-lg transition-all duration-300 font-semibold text-lg ${
                  activeSection === key
                    ? "bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 text-white shadow-md"
                    : "bg-white border border-emerald-100 text-emerald-900 hover:bg-emerald-50"
                }`}
              >
                {sections[key].title}
              </button>

              {activeSection === key && (
                <div className="mt-3 ml-2 border-l-4 border-emerald-500 pl-4 bg-white rounded-r-xl shadow-sm py-3 px-2 animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {sections[key].desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Tackles"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-emerald-100"
          />
        </div>
      </div>

      {/* CERTIFICATIONS / VALUES */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6">
          Internationally Trusted Certifications
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Tackles follows globally recognized standards to ensure safety, responsibility,
          and professionalism in every service we deliver.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* SAFETY */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-left hover:shadow-md transition">
            <ShieldCheck size={32} className="text-emerald-700 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Safety</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              All services are performed following strict safety protocols to protect clients,
              technicians, and property while maintaining secure and well-organized work environments.
            </p>
          </div>

          {/* COMMUNITY */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-left hover:shadow-md transition">
            <Users size={32} className="text-emerald-700 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Community</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We support communities by providing honest services, generating employment opportunities,
              and building strong relationships based on trust and mutual respect.
            </p>
          </div>

          {/* SUSTAINABILITY */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-left hover:shadow-md transition">
            <Leaf size={32} className="text-emerald-700 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Sustainability</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our work focuses on minimizing waste, extending material life, and applying responsible
              practices that support environmental balance and long-term efficiency.
            </p>
          </div>

          {/* INTEGRITY */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-left hover:shadow-md transition">
            <Handshake size={32} className="text-emerald-700 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Integrity</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We operate with transparency and honesty, ensuring fair pricing, clear communication,
              and ethical service delivery without compromises or hidden conditions.
            </p>
          </div>

        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
