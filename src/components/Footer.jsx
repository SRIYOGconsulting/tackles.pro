import React from "react";
// Images from public folder
const logo = "/logo/logo.png";

// SVG Icons from public/icons
const iconFacebook = "/icons/facebook.svg";
const iconLinkedIn = "/icons/linkedin.svg";
const iconYouTube = "/icons/youtube.svg";
const iconGithub = "/icons/github.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-900 text-gray-200 pt-16 pb-12">

      {/* MAIN GRID */}
      <div
        className="
        max-w-7xl mx-auto px-6 
        grid 
        lg:grid-cols-[1fr_1fr] 
        md:grid-cols-2 
        grid-cols-1 
        gap-10
      "
      >

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between">

          {/* LOGO ONLY */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-2 rounded-md shadow-sm">
              <img src={logo} alt="Tackles Logo" className="h-12 w-auto" />
            </div>
          </div>

          {/* SEO-OPTIMIZED DESCRIPTION */}
          <div
            className="
            text-[15px] 
            leading-relaxed 
            text-gray-300 
            max-w-lg 
            space-y-4 
            mb-6
          "
          >
            <p>
              Professional handyman and maintenance services designed for residential and commercial spaces. 
              Skilled technicians deliver reliable repair solutions with clean execution, clear communication, 
              and efficient service management for stress free property maintenance.
            </p>

            <p>
              Services include air conditioning maintenance, electrical repairs, plumbing solutions, painting, 
              flooring, plastering, and routine upkeep. Every task is handled with safety, precision, and 
              long term performance in mind.
            </p>
          </div>

          {/* SOCIAL ICONS (UPDATED) */}
          <div className="flex items-center gap-4 flex-wrap">
            {[iconFacebook, iconLinkedIn, iconYouTube, iconGithub].map(
              (icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 shadow-sm transition"
                >
                  <img src={icon} className="w-5 h-5" />
                </a>
              )
            )}
          </div>

        </div>

        {/* RIGHT GRID */}
        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          gap-10
        "
        >

          {/* BROWSE MORE */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Browse More</h4>
            <ul className="space-y-2">
              {[
                { name: "Team", href: "/team" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "FAQs", href: "/faq" },
                { name: "Privacy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Disclaimer", href: "/disclaimer" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                      block text-sm px-2 py-1 
                      rounded-md text-gray-300 
                      hover:bg-white/10 hover:text-white 
                      transition
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Air Conditioning",
                "Air Filtration",
                "Electromechanical Equipment",
                "Carpentry & Flooring",
                "Engraving & Ornamentation",
                "Plaster & Cladding",
              ].map((service) => (
                <li key={service}>
                  <span
                    className="
                      block text-sm px-2 py-1 
                      rounded-md text-gray-300 
                      hover:bg-white/10 hover:text-white 
                      transition cursor-default
                    "
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div
            className="
            col-span-2 
            mt-4 
            flex 
            flex-col 
            sm:flex-row 
            items-center 
            gap-3
          "
          >
            <input
              type="email"
              placeholder="Enter your eMail address"
              className="
                bg-white text-gray-700 
                text-sm px-4 py-2 
                rounded-md w-full 
                outline-none
              "
            />
            <button
              className="
              px-5 py-2 
              bg-white text-emerald-900 
              font-semibold rounded-md 
              hover:bg-emerald-100 
              transition
              w-full sm:w-auto
            "
            >
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-emerald-800 mt-12 mb-6 mx-6 opacity-60"></div>

      {/* COPYRIGHT */}
      <div
        className="
        max-w-6xl mx-auto px-6 
        flex flex-col sm:flex-row 
        justify-between items-center 
        text-sm text-gray-400 
        text-center sm:text-left
      "
      >
        <p className="leading-relaxed">
          © 2018 - 2026 Tackles Technical. All Rights Reserved.
        </p>

        <p className="mt-2 sm:mt-0 leading-relaxed">
          Built with :{" "}
          <span className="text-emerald-300 font-semibold tracking-wide">
            BroadPress
          </span>
        </p>
      </div>

    </footer>
  );
}
