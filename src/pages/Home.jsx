import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext";

// 🌆 Background / section images
const aboutImg = "/about/about.png";
const sanfranciscoImg = "/home/hero/electrician.jpg";
const acBgImg = "/home/hero/carpenter.jpg";
const paintImg = "/home/hero/cleaner.jpg";

// 🧰 Service images
const acImg = "/services/ac-service.png";
const electricalImg = "/home/hero/electrician.jpg";
const plumbingImg = "/services/plumbing.png";

// ⭐ App download buttons
const playstoreBtn = "/appdownload/playstore.png";
const appleBtn = "/appdownload/apple.png";

// 👤 Testimonial images
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

  const displayLocation = "San Francisco";

  // 🌇 Slides (San Francisco only)
  const slides = [
    {
      id: 1,
      title: `Hire an Electrician in ${displayLocation}`,
      subtitle: "Insured & Certified Electricians.",
    },
    {
      id: 2,
      title: `Hire a Carpenter in ${displayLocation}`,
      subtitle: "Expert carpentry services for furniture repair, woodwork, installation and custom design.",
      image: acBgImg,
    },
    {
      id: 3,
      title: `Hire a Cleaner in ${displayLocation}`,
      subtitle: " Certified Cleaners - Sparkling Results",
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
      text-sm font-semibold transition-transform duration-200 hover:scale-105 cursor-pointer"
    >
      Book a Service
    </button>
  );

  return (
    <>
      <Helmet>
        <title>Tackles Handyman Services | San Francisco</title>
        <meta
          name="description"
          content="Professional handyman services in San Francisco. AC maintenance, plumbing, painting, electrical, and more. Reliable and fast."
        />
        <link rel="canonical" href="https://www.tackles.pro/" />

        {/* Open Graph */}
        <meta property="og:title" content="Tackles - Professional Handyman Services in San Francisco" />
        <meta
          property="og:description"
          content="Reliable handyman services in San Francisco. AC, plumbing, painting, electrical and more."
        />
        <meta property="og:image" content="https://www.tackles.pro/logo/logo.png" />
        <meta property="og:url" content="https://www.tackles.pro/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tackles - Handyman Services in San Francisco" />
        <meta name="twitter:description" content="Professional handyman services in San Francisco. Book now!" />
        <meta name="twitter:image" content="https://www.tackles.pro/logo/logo.png" />
      </Helmet>

      {/* 🌆 HERO SECTION */}
      <section className="w-full bg-white text-emerald-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* LEFT */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="uppercase tracking-[0.25em] text-emerald-900 text-xs sm:text-sm">
              Handyman Services · San Francisco
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-emerald-900">
              {slides[current].title}
            </h1>

            <p className="text-base sm:text-lg text-emerald-900 font-medium">
              {slides[current].subtitle}
            </p>

            <p className="text-sm sm:text-base text-gray-900 max-w-md">
              Certified electricians for wiring, repair, installation and emergency electrical services{" "}
              <span className="font-semibold text-emerald-900">
                {displayLocation}
              </span>{" "}
              emergency electrical services.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => navigate("/book")}
                className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-700
                  text-emerald-50 font-semibold px-6 sm:px-8 py-2.5 rounded-full 
                  shadow-lg hover:shadow-emerald-400/60 transition-all duration-300
                  hover:-translate-y-[1px] animate-pulse-soft cursor-pointer"
              >
                Book a Service
              </button>

              <button
                onClick={() => navigate("/services")}
                className="border border-emerald-700 text-emerald-900 font-medium 
                  px-6 sm:px-7 py-2.5 rounded-full hover:bg-emerald-50 
                  hover:shadow-md transition-all duration-300 cursor-pointer"
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
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                Book a Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ APP DOWNLOAD SECTION */}
      <div className="w-full bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-20 flex justify-center">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-900 mb-3">
            Download Our App
          </h2>

          <p className="text-gray-700 mb-8 text-base sm:text-lg">
            Book services faster, track professionals, and manage everything in one place.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 px-10 py-8 rounded-3xl shadow-lg transition-all duration-300">
            <a
              href="#"
              target="_blank"
              className="group bg-white p-3 rounded-[28px] shadow-md hover:scale-[1.06] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={playstoreBtn}
                alt="Download on Play Store"
                className="h-14 sm:h-16 w-auto rounded-[20px] ring-2 ring-emerald-300 group-hover:ring-emerald-500 transition-all duration-300"
              />
            </a>

            <a
              href="#"
              target="_blank"
              className="group bg-white p-3 rounded-[28px] shadow-md hover:scale-[1.06] hover:shadow-xl transition-all duration-300 cursor-pointer"
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

      {/* SERVICES SECTION */}
      <section className="bg-white py-20 px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-emerald-900 mb-4">
          What Can We Do?
        </h2>

        <p className="text-gray-700 text-lg mb-12">
          Our top services : quick, professional, and trusted across San Francisco.
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
              hover:shadow-emerald-400/40 transition-all duration-300 text-lg font-semibold cursor-pointer"
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
                  className={`w-full text-left px-5 py-3 rounded-lg transition-all duration-300 font-semibold text-lg cursor-pointer ${
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
                <img src={t.image} className="w-full h-full object-cover" alt={t.name} />
              </div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                “{t.feedback}”
              </p>
              <h4 className="text-emerald-800 font-bold text-lg">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Social Icons */}
        <div className="floating-socials fixed right-6 bottom-[5%] flex flex-col items-center gap-3 z-50">
          <a href="https://.com/gSewa" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-green-400/60"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/sriyog" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-blue-400/60"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
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