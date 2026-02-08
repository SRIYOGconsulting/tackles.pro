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
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
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

  const handleLocationClick = (loc) => setLocation(loc);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-emerald-700 text-white py-2.5 text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="tel:055-6185029" className="flex items-center gap-2 hover:text-emerald-100">
              <img src={phoneIcon} alt="" className="w-4 h-4" />
              <span className="font-medium">055-6185029</span>
            </a>

            <a href="mailto:info@tackles.pro" className="flex items-center gap-2 hover:text-emerald-100">
              <img src={mailIcon} alt="" className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">info@tackles.pro</span>
              <span className="font-medium sm:hidden">Email</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            {["Dubai", "San Francisco", "Sydney"].map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocationClick(loc)}
                className={`px-3 py-1 rounded-md text-xs font-medium ${
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
      <header className={`sticky top-0 z-40 bg-white ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={handleLogoClick} className="flex items-center gap-2">
              <img src={logo} alt="Tackles Handyman Services" className="h-10 w-auto" />
              <span className="hidden sm:block font-semibold text-gray-800 text-lg">
                Tackles Handyman
              </span>
            </button>

            <nav className="hidden md:flex gap-1">
              <NavLink to="/" className={link}>Home</NavLink>
              <NavLink to="/about" className={link}>About</NavLink>
              <NavLink to="/services" className={link}>Services</NavLink>
              <NavLink to="/gallery" className={link}>Gallery</NavLink>
              <NavLink to="/contact" className={link}>Contact</NavLink>
            </nav>

            <button
              onClick={() => navigate("/book")}
              className="hidden md:inline-block px-5 py-2 rounded-md text-white bg-emerald-700 hover:bg-emerald-800"
            >
              Book a Service
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={closeMenu} />

          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-3">Menu</h2>

              {/* DIVIDER */}
              <div className="h-px bg-gray-200 mb-4" />

              <nav className="flex flex-col">
                {[
                  ["/", "Home"],
                  ["/about", "About"],
                  ["/services", "Services"],
                  ["/gallery", "Gallery"],
                  ["/contact", "Contact"],
                ].map(([path, label]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `px-4 py-3 text-base font-medium border-l-4 ${
                        isActive
                          ? "text-emerald-700 border-emerald-700 bg-emerald-50"
                          : "text-gray-700 border-transparent hover:bg-gray-100"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}

                {/* DIVIDER */}
                <div className="h-px bg-gray-200 my-4" />

                <button
                  onClick={() => {
                    navigate("/book");
                    closeMenu();
                  }}
                  className="w-full px-4 py-3 rounded-md text-white bg-emerald-700 hover:bg-emerald-800"
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
