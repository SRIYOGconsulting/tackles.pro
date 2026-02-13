import { useState, useEffect, useCallback } from "react";

export default function ExitPopup() {
    const [show, setShow] = useState(false);

    const handleMouseLeave = useCallback((e) => {
        // Only trigger when mouse moves to top of viewport (exit intent)
        if (e.clientY <= 5 && !sessionStorage.getItem("exit_popup_shown")) {
            setShow(true);
            sessionStorage.setItem("exit_popup_shown", "true");
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [handleMouseLeave]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeInScale">
                {/* Close button */}
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 flex items-center justify-center transition-colors"
                >
                    ✕
                </button>

                {/* Content */}
                <div className="text-center">
                    <div className="text-4xl mb-4">👋</div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-3">
                        Wait! Before You Go...
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Get <span className="font-bold text-emerald-700">10% off</span> your first
                        handyman service booking. Don't miss out on professional, reliable maintenance!
                    </p>

                    <a
                        href="/book"
                        className="inline-block w-full bg-gradient-to-r from-emerald-800 to-emerald-600 
              text-white font-semibold py-3 px-6 rounded-lg 
              hover:from-emerald-900 hover:to-emerald-700 
              transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Book Now & Save 10%
                    </a>

                    <button
                        onClick={() => setShow(false)}
                        className="mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        No thanks, I'll pay full price
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
