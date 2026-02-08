import ServiceCard from "../components/ServiceCard.jsx";
import { useNavigate } from "react-router-dom";

// 🧰 Service images (from public/services)
const acImg = "/services/ac-service.png";
const electricalImg = "/services/electrical.png";
const plumbingImg = "/services/plumbing.png";
const paintingImg = "/services/painting.png";
const carpentryImg = "/services/carpentry.png";
const flooringImg = "/services/flooring.png";
const gutterImg = "/services/gutter.png";
const pressureImg = "/services/pressure.png";
const smartHomeImg = "/services/smart-home.png";

export default function Services() {
  const navigate = useNavigate();  

  // Book Button
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
    <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 sm:px-12 lg:px-20">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 mb-4 tracking-wide">
          Our Services
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          We provide reliable, professional, and efficient handyman services
          from maintenance and renovation to complete home solutions.
        </p>
      </div>

      {/* 🧰 Indoor Services */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="w-full h-[2px] bg-gradient-to-r from-emerald-700 via-lime-600 to-emerald-700 shadow-md mb-10"></div>

        <h2 className="text-3xl font-bold text-emerald-800 mb-10 text-center tracking-wide">
          Indoor Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={acImg}
            title="AC Maintenance & Servicing"
            desc="Complete air conditioner servicing including filter cleaning, cooling checks, and system performance inspection."
            extra={<BookButton />}
          />

          <ServiceCard
            image={electricalImg}
            title="Electrical Repairs"
            desc="Safe electrical repair services covering wiring issues, lighting fixtures, switches, and power outlet maintenance."
            extra={<BookButton />}
          />

          <ServiceCard
            image={plumbingImg}
            title="Plumbing"
            desc="Professional plumbing solutions for leak repairs, pipe fittings, drainage issues, and bathroom fixture maintenance."
            extra={<BookButton />}
          />
        </div>
      </div>

      {/* 🏡 Home Improvements */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="w-full h-[2px] bg-gradient-to-r from-emerald-700 via-lime-600 to-emerald-700 shadow-md mb-10"></div>

        <h2 className="text-3xl font-bold text-emerald-800 mb-10 text-center tracking-wide">
          Home Improvements
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={paintingImg}
            title="Painting & Decorating"
            desc="Interior and exterior painting services delivering smooth finishes, color precision, and long-lasting protection."
            extra={<BookButton />}
          />

          <ServiceCard
            image={carpentryImg}
            title="Carpentry"
            desc="Expert carpentry services including furniture repair, door fittings, shelving installation, and wood finishing."
            extra={<BookButton />}
          />

          <ServiceCard
            image={flooringImg}
            title="Flooring & Surface Fixes"
            desc="Floor repair and surface restoration services covering tiles, laminates, polishing, and re-grouting work."
            extra={<BookButton />}
          />
        </div>
      </div>

      {/* 🌳 Outdoor & Add-on Services */}
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[2px] bg-gradient-to-r from-emerald-700 via-lime-600 to-emerald-700 shadow-md mb-10"></div>

        <h2 className="text-3xl font-bold text-emerald-800 mb-10 text-center tracking-wide">
          Outdoor & Add-on Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={gutterImg}
            title="Gutter & Roof Cleaning"
            desc="Thorough gutter and roof cleaning services to prevent blockages, leaks, and weather-related damage."
            extra={<BookButton />}
          />

          <ServiceCard
            image={pressureImg}
            title="Pressure Washing"
            desc="High-pressure cleaning services for driveways, patios, walls, and outdoor tiled surface restoration."
            extra={<BookButton />}
          />

          <ServiceCard
            image={smartHomeImg}
            title="Smart Home & Fixture Installations"
            desc="Installation services for smart devices, televisions, CCTV systems, fixtures, and minor electrical fittings."
            extra={<BookButton />}
          />
        </div>
      </div>
    </section>
  );
}
