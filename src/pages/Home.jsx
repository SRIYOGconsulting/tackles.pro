import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext";

// 🌆 Background / section images
const aboutImg = "/about/about.png";
const dubaiImg = "/animationpicture/dubai.png";
const sanfranciscoImg = "/animationpicture/sanfrancisco.avif";
const sydneyImg = "/animationpicture/sydney.avif";
const acBgImg = "/animationpicture/ac.png";
const paintImg = "/animationpicture/paint.jpg";

// 🧰 Service images (from public/services)
const acImg = "/services/ac-service.png";
const electricalImg = "/services/electrical.png";
const plumbingImg = "/services/plumbing.png";

// 🌐 Icons (from public/floatingicons)
const whatsappIcon = "/floatingicons/whatsapp.png";
const facebookIcon = "/floatingicons/facebook.png";

// ⭐ NEW REPLACEMENT PNG BUTTONS (from public/appdownload)
const playstoreBtn = "/appdownload/playstore.png";
const appleBtn = "/appdownload/apple.png";

// 👤 Testimonial images (from public/hometestimonials)
const sameerImg = "/hometestimonials/sameer.png";
const jaxonImg = "/hometestimonials/jaxon.png";
const joaoImg = "/hometestimonials/joao.png";

// 🧱 Component
import ServiceCard from "../components/ServiceCard.jsx";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const { location } = useLocation();
  const [activeSection, setActiveSection] = useState("about");

 

  const displayLocation =
    location === "San Francisco" ? "San Francisco" : location || "Dubai";

  // 🌇 Slides
  const slides = [
    {
      id: 1,
      title: `Hire a Plumber in ${displayLocation}`,
      subtitle: "Professional service marketplace",
      image:
        location === "Dubai"
          ? dubaiImg
          : location === "San Francisco"
          ? sanfranciscoImg
          : sydneyImg,
    },
    {
      id: 2,
      title: `AC Maintenance in ${displayLocation}`,
      subtitle: "Repair, Shifting & Cleaning",
      image: acBgImg,
    },
    {
      id: 3,
      title: `Painting Services in ${displayLocation}`,
      subtitle: "Color Therapy for your space",
      image: paintImg,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // 🧭 About Section
  const sections = {
    about: {
      title: "About Tackles",
      desc: "Tackles is a leading A-grade handyman company. Any repair or decoration work whether it be Plumbing, Painting, Air Conditioning, Floor and Wall fixing. Tackles is there for you.",
    },
    mission: {
      title: "Our Mission",
      desc: "We want to provide every repair, decoration, and design service so you don’t have to search different places for different needs.",
    },
    goals: {
      title: "Our Goals",
      desc: "Tackles focuses on providing the best service possible to make clients’ lives convenient and comfortable. Any work related to plumbing, painting, plastering, or AC installation is our responsibility.",
    },
    vision: {
      title: "Our Vision",
      desc: "To redefine home and commercial maintenance by creating a reliable, modern, and accessible service network that brings convenience and quality workmanship to every customer’s doorstep.",
    },
  };

  // 💬 Testimonials
  const testimonials = [
    {
      name: "Sameer Azeem Shadid",
      image: sameerImg,
      feedback:
        "TACKLES did an exceptional job with the painting in our office. The finish was flawless, and they completed the work ahead of schedule. Highly recommended for any painting needs!",
    },
    {
      name: "Jaxon De Garis",
      image: jaxonImg,
      feedback:
        "The team at TACKLES provided outstanding service for our air conditioning and filtration systems. Their expertise and prompt service ensured our system is running efficiently. Fantastic job!",
    },
    {
      name: "João Santos Dias",
      image: joaoImg,
      feedback:
        "I’m very pleased with the plaster and cladding work done by TACKLES. The attention to detail and quality of materials used were top-notch. Our home looks fantastic!",
    },
  ];

  // ⭐ Book Button Component
  const BookButton = () => (
    <button
      onClick={() => navigate("/book")}
      className="mt-4 px-4 py-1 text-emerald-700 border border-emerald-700 rounded-full bg-white 
      text-sm font-semibold transition-transform duration-200 hover:scale-105"
    >
      Book a Service
    </button>
  );

  return (
    <>
      {/* 🌆 HERO SECTION */}
      <section className="w-full bg-white text-emerald-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* LEFT */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="uppercase tracking-[0.25em] text-emerald-900 text-xs sm:text-sm">
              Handyman Services · {displayLocation}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-emerald-900">
              {slides[current].title}
            </h1>

            <p className="text-base sm:text-lg text-emerald-900 font-medium">
              {slides[current].subtitle}
            </p>

            <p className="text-sm sm:text-base text-gray-900 max-w-md">
              From urgent repairs to planned upgrades, our verified
              professionals in{" "}
              <span className="font-semibold text-emerald-900">
                {displayLocation}
              </span>{" "}
              handle it all on time with clean finishing and clear pricing.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => navigate("/book")}
                className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700
                  text-emerald-50 font-semibold px-6 sm:px-8 py-2.5 rounded-full 
                  shadow-lg hover:shadow-emerald-400/60 transition-all duration-300
                  hover:-translate-y-[1px] animate-pulse-soft"
              >
                Book a Service
              </button>

              <button
                onClick={() => navigate("/services")}
                className="border border-emerald-700 text-emerald-900 font-medium 
                  px-6 sm:px-7 py-2.5 rounded-full hover:bg-emerald-50 
                  hover:shadow-md transition-all duration-300"
              >
                More Services
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2">
            <div className="group relative w-full h-64 sm:h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-emerald-100 bg-emerald-50">
              <div
                key={slides[current].id}
                className="w-full h-full bg-cover bg-center animate-slideFade"
                style={{ backgroundImage: `url(${slides[current].image})` }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <button
                onClick={() => navigate("/book")}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 
                  px-6 sm:px-8 py-2.5 rounded-full text-sm sm:text-base font-semibold 
                  bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700
                  text-emerald-50 shadow-lg hover:shadow-emerald-300/60
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Book a Service
              </button>
            </div>
          </div>
        </div>

        {/* Floating Social Icons */}
        <div className="fixed right-6 bottom-[5%] flex flex-col items-center gap-3 z-50">
          <a href="https://wa.me/971551234567" target="_blank">
            <img
              src={whatsappIcon}
              className="w-8 h-8 sm:w-9 sm:h-9 hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]"
            />
          </a>
          <a href="https://www.facebook.com/YourPageName" target="_blank">
            <img
              src={facebookIcon}
              className="w-7 h-7 sm:w-8 sm:h-8 hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(59,89,152,0.8)]"
            />
          </a>
        </div>
      </section>

      {/* ⭐ UPDATED APP DOWNLOAD SECTION */}
      <div className="w-full bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-20 flex justify-center">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 mb-3">
            Download Our App
          </h2>

          <p className="text-gray-700 mb-8 text-base sm:text-lg">
            Book services faster, track professionals, and manage everything in
            one place.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 px-10 py-8 rounded-3xl shadow-lg transition-all duration-300">
            {/* PLAY STORE */}
            <a
              href="#"
              target="_blank"
              className="group bg-white p-3 rounded-[28px] shadow-md hover:scale-[1.06] hover:shadow-xl transition-all duration-300"
            >
              <img
                src={playstoreBtn}
                alt="Download on Play Store"
                className="h-14 sm:h-16 w-auto rounded-[20px] ring-2 ring-emerald-300 group-hover:ring-emerald-500 transition-all duration-300"
              />
            </a>

            {/* APP STORE */}
            <a
              href="#"
              target="_blank"
              className="group bg-white p-3 rounded-[28px] shadow-md hover:scale-[1.06] hover:shadow-xl transition-all duration-300"
            >
              <img
                src={appleBtn}
                alt="Download on App Store"
                className="h-14 sm:h-16 w-auto rounded-[20px] ring-2 ring-emerald-300 group-hover:ring-emerald-500 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES SECTION — UPDATED WITH UNIFORM DESCRIPTIONS */}
      <section className="bg-white py-20 px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-emerald-900 mb-4">
          What Can We Do?
        </h2>

        <p className="text-gray-700 text-lg mb-12">
          Our top services : quick, professional, and trusted across everywhere.
        </p>

        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={acImg}
            title="AC Maintenance & Servicing"
            desc="Complete AC servicing including cleaning, gas refilling, and system performance checks."
            extra={<BookButton />}
          />

          <ServiceCard
            image={electricalImg}
            title="Electrical Repairs"
            desc="Professional electrical repair covering switches, wiring, fixtures, and safety inspections."
            extra={<BookButton />}
          />

          <ServiceCard
            image={plumbingImg}
            title="Plumbing"
            desc="Reliable plumbing service for leak repairs, pipe maintenance, and smooth water flow."
            extra={<BookButton />}
          />
        </div>

        <div className="mt-16">
          <button
            onClick={() => navigate("/services")}
            className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700
      hover:via-emerald-900 text-white px-8 py-3 rounded-lg shadow-lg 
      hover:shadow-emerald-400/40 transition-all duration-300 text-lg font-semibold"
          >
            View All Services
          </button>
        </div>
      </section>

      {/* ALL ABOUT US */}
      <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 mb-4 tracking-wide">
            All About Us
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Hard labour works like plumbing, AC installation, and plastering
            require not only strength but skill. That’s where our team comes in,
            to take your problems off your shoulders.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {Object.keys(sections).map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveSection(key)}
              >
                <button
                  className={`w-full text-left px-5 py-3 rounded-lg transition-all duration-300 font-semibold text-lg ${
                    activeSection === key
                      ? "bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700 text-white shadow-md"
                      : "bg-white border border-emerald-100 text-emerald-900 hover:bg-emerald-50"
                  }`}
                >
                  {sections[key].title}
                </button>

                {activeSection === key && (
                  <div className="mt-3 ml-2 border-l-4 border-emerald-600 pl-4 bg-white rounded-r-xl shadow-sm py-3 px-2 animate-fadeIn">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {sections[key].desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About Tackles"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-emerald-100"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-20 px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-emerald-900 mb-10">
          What People Say?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 border border-emerald-100"
            >
              <div className="w-24 h-24 mb-4 rounded-full bg-gray-100 overflow-hidden shadow-md ring-4 ring-emerald-200">
                <img src={t.image} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “{t.feedback}”
              </p>
              <h4 className="text-emerald-800 font-bold text-lg">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-in-out;
          }

          @keyframes pulse-soft {
            0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(6,95,70,0.6); }
            50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(6,95,70,0.9); }
          }
          .animate-pulse-soft {
            animation: pulse-soft 2.2s ease-in-out infinite;
          }

          @keyframes slideFade {
            from { opacity: 0; transform: scale(0.97); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-slideFade {
            animation: slideFade 0.9s ease-out;
          } 
        `}
      </style>
    </>
  );
};

export default Home;
