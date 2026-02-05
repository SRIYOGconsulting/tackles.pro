import React, { useEffect } from "react";

// 👉 Replace these with your actual images
// 👥 Team images (from public/teams)
const raju = "/team/raju.png";
const pritambar = "/team/pritambar.png";
const gopak = "/team/gopak.png";
const dharma = "/team/dharma.png";
const rajendra = "/team/rajendra.png";
const tom = "/team/tom.png";
const bishnu = "/team/bishnu.png";
const quiyam = "/team/quiyam.png";
const sunil = "/team/sunil.png";

 
// Real icons
const Facebook = () => (
  <i className="fa-brands fa-facebook-f text-white text-lg hover:text-emerald-200"></i>
);
const XIcon = () => (
  <i className="fa-brands fa-x-twitter text-white text-lg hover:text-emerald-200"></i>
);
const LinkedIn = () => (
  <i className="fa-brands fa-linkedin-in text-white text-lg hover:text-emerald-200"></i>
);

export default function Team() {

  // ⭐ Set tab title
  useEffect(() => {
    document.title = "Teams | Tackles";
  }, []);

  const members = [
    { name: "Raju Khatri", role: "Founder", img: raju },
    { name: "Pritambar Ghimire", role: "Electrician", img: pritambar },
    { name: "Gopak Sinjali Magar", role: "Senior Electrician", img: gopak },
    { name: "Dharma Thapa", role: "Mason", img: dharma },
    { name: "Rajendra", role: "Tile / Mason", img: rajendra },
    { name: "Tom Lal Pandey", role: "Site Incharge", img: tom },
    { name: "Bishnu Pandey", role: "Spray Painter", img: bishnu },
    { name: "Quiyam", role: "Supervisor", img: quiyam },
    { name: "Sunil Kumar", role: "Tile Mason", img: sunil },
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-emerald-900 tracking-wide">
          Our Team
        </h1>
        <p className="text-gray-600 text-lg mt-3">
          Meet the experts who deliver excellence every day.
        </p>
      </div>

      {/* TEAM GRID */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex flex-col items-center group"
          >
            {/* IMAGE WRAPPER */}
            <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100 group-hover:border-emerald-300 transition-all duration-300">

              {/* IMAGE */}
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />

              {/* HOVER SOCIALS BELOW */}
              <div
                className="absolute bottom-0 left-0 w-full py-3 bg-gradient-to-t 
                from-emerald-800 via-emerald-700 to-transparent 
                flex justify-center gap-6 opacity-0 group-hover:opacity-100 
                transition-all duration-300"
              >
                <a href="#" className="hover:scale-110 transition-all">
                  <Facebook />
                </a>
                <a href="#" className="hover:scale-110 transition-all">
                  <XIcon />
                </a>
                <a href="#" className="hover:scale-110 transition-all">
                  <LinkedIn />
                </a>
              </div>
            </div>

            {/* NAME + ROLE */}
            <h3 className="text-xl font-semibold text-emerald-900 mt-5">
              {m.name}
            </h3>
            <p className="text-gray-600 text-sm">{m.role}</p>
          </div>
        ))}
      </div>

      {/* Add FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
    </section>
  );
}
