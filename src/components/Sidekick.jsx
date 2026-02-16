import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, CalendarCheck, Phone, HelpCircle } from "lucide-react";

export default function Sidekick() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const links = [
        { label: "Book a Service", icon: <CalendarCheck size={16} />, path: "/book" },
        { label: "Contact Us", icon: <Phone size={16} />, path: "/contact" },
        { label: "FAQs", icon: <HelpCircle size={16} />, path: "/faq" },
    ];

    return (
        <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
            {/* Expanded Menu */}
            {open && (
                <div className="bg-white rounded-xl shadow-2xl border border-emerald-200 p-3 mb-2 animate-fadeInUp">
                    <p className="text-xs font-semibold text-emerald-800 mb-2 px-1">Quick Links</p>
                    {links.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => {
                                navigate(link.path);
                                setOpen(false);
                            }}
                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 rounded-lg transition-colors"
                        >
                            {link.icon}
                            {link.label}
                        </button>
                    ))}
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setOpen(!open)}
                className={`p-3 rounded-full shadow-lg transition-all duration-300 ${open
                        ? "bg-gray-600 hover:bg-gray-700 text-white"
                        : "bg-emerald-700 hover:bg-emerald-800 text-white hover:shadow-xl"
                    }`}
                aria-label={open ? "Close sidekick" : "Open sidekick"}
            >
                {open ? <X size={20} /> : <MessageCircle size={20} />}
            </button>

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.25s ease-out;
        }
      `}</style>
        </div>
    );
}
