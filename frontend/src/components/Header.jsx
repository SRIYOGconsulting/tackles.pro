import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext.jsx";

const logo = "/logo/logo.png";
const phoneIcon = "/icons/phone.svg";
const mailIcon = "/icons/mail.svg";

const link = ({ isActive }) =>
  `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
    isActive
      ? "text-emerald-700 bg-emerald-50"
      : "text-gray-700 hover:text-emerald-700 hover:bg-gray-50"
  }`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { location, setLocation } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const resetMenu = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", resetMenu);
    return () => window.removeEventListener("resize", resetMenu);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!location) return;
    document.title = `Tackles Handyman Services ${location}`;
  }, [location]);

  const handleLocationClick = (loc) => {
    setLocation(loc);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-emerald-700 text-white py-2.5 text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* CONTACT */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:055-6185029"
              className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
            >
              <img src={phoneIcon} alt="" className="w-4 h-4" />
              <span className="font-medium">055-6185029</span>
            </a>

            <a
              href="mailto:info@tackles.pro"
              className="flex items-center gap-2 hover:text-emerald-100 transition-colors"
            >
              <img src={mailIcon} alt="" className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">
                info@tackles.pro
              </span>
              <span className="font-medium sm:hidden">Email</span>
            </a>
          </div>

          {/* LOCATION BUTTONS */}
          <div className="flex items-center gap-2">
            {["Dubai", "San Francisco", "Sydney"].map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocationClick(loc)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                  location === loc
                    ? "bg-white text-emerald-700"
                    : "text-white hover:bg-emerald-600 border border-white/30"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Tackles Handyman Services"
                className="h-10 w-auto"
              />
              <span className="hidden sm:block font-semibold text-gray-800 text-lg">
                Tackles Handyman
              </span>
            </button>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/" className={link} onClick={() => window.scrollTo(0, 0)}>
                Home
              </NavLink>
              <NavLink to="/about" className={link} onClick={() => window.scrollTo(0, 0)}>
                About
              </NavLink>
              <NavLink to="/services" className={link} onClick={() => window.scrollTo(0, 0)}>
                Services
              </NavLink>
              <NavLink to="/gallery" className={link} onClick={() => window.scrollTo(0, 0)}>
                Gallery
              </NavLink>
              <NavLink to="/contact" className={link} onClick={() => window.scrollTo(0, 0)}>
                Contact
              </NavLink>
            </nav>

            {/* DESKTOP BOOK BUTTON */}
            <button
              onClick={() => {
                navigate("/book");
                window.scrollTo(0, 0);
              }}
              className="hidden md:inline-block px-5 py-2 rounded-md font-medium text-white bg-emerald-700 hover:bg-emerald-800 transition-colors"
            >
              Book a Service
            </button>

            {/* HAMBURGER MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />

          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl z-50 md:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-2">
                <NavLink to="/" className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? "text-white bg-emerald-700" : "text-gray-700 hover:bg-gray-100"
                  }`
                } onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                  Home
                </NavLink>

                <NavLink to="/about" className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? "text-white bg-emerald-700" : "text-gray-700 hover:bg-gray-100"
                  }`
                } onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                  About
                </NavLink>

                <NavLink to="/services" className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? "text-white bg-emerald-700" : "text-gray-700 hover:bg-gray-100"
                  }`
                } onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                  Services
                </NavLink>

                <NavLink to="/gallery" className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? "text-white bg-emerald-700" : "text-gray-700 hover:bg-gray-100"
                  }`
                } onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                  Gallery
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive ? "text-white bg-emerald-700" : "text-gray-700 hover:bg-gray-100"
                  }`
                } onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                  Contact
                </NavLink>

                <button
                  onClick={() => {
                    navigate("/book");
                    closeMenu();
                    window.scrollTo(0, 0);
                  }}
                  className="mt-4 w-full px-4 py-3 rounded-md font-medium text-white bg-emerald-700 hover:bg-emerald-800 transition-colors"
                >
                  Book a Service
                </button>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
