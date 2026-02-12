import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext.jsx";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const logo = "/logo/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { location, setLocation } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Lock body scroll and toggle class when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
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

  const handleLocationClick = (loc) => setLocation(loc);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/allservice" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* UPDATE: Clean Top Bar */}
      <div className="bg-emerald-900 text-white py-2 text-xs sm:text-sm font-medium">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-2">

          <div className="flex items-center gap-4 sm:gap-6 opacity-90">
            <a href="tel:055-6185029" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
              <Phone size={14} />
              <span>055-6185029</span>
            </a>
            <a href="mailto:info@tackles.pro" className="flex items-center gap-2 hover:text-emerald-300 transition-colors">
              <Mail size={14} />
              <span>info@tackles.pro</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={14} className="opacity-80" />
            <div className="flex gap-1">
              {["Dubai", "San Francisco", "Sydney"].map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocationClick(loc)}
                  className={`px-2 py-0.5 rounded transition-colors ${location === loc
                    ? "bg-white text-emerald-900 font-bold"
                    : "hover:bg-emerald-800 text-emerald-100"
                    }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* UPDATE: Main Navigation */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-md py-2" : "shadow-sm py-3"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-3 group">
            <img src={logo} alt="Tackles Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-[15px] font-medium transition-all ${isActive
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={() => navigate("/book")}
              className="ml-4 px-5 py-2.5 rounded-lg bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              Book a service
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 text-gray-700 hover:text-emerald-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* UPDATE: Mobile Side Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute top-0 right-0 h-full w-[70%] bg-white shadow-2xl transition-transform duration-300 transform ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="p-5 flex items-center justify-between border-b border-gray-100">
              <span className="font-bold text-lg text-gray-800">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col p-4 gap-2 overflow-y-auto">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="p-5 border-t border-gray-100 bg-gray-50">
              <button
                onClick={() => {
                  navigate("/book");
                  closeMenu();
                }}
                className="w-full py-3.5 rounded-xl bg-emerald-700 text-white font-semibold shadow-md active:scale-95 transition-all text-center"
              >
                Book a service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
