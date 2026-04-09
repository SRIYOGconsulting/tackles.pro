import { useEffect, useState, useCallback } from "react";

const RoadBlock = () => {
  const today = new Date();
  const monthNames = [
    "january","february","march","april","may","june",
    "july","august","september","october","november","december"
  ];
  const month = monthNames[today.getMonth()];
  const day = String(today.getDate());

  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [imgSrc, setImgSrc] = useState(`/roadblock/${month}/${day}.jpg`);
  const [imgLoaded, setImgLoaded] = useState(false);

  const [countdown, setCountdown] = useState(12);
  const [showClose, setShowClose] = useState(false);

  const onClose = useCallback(() => {
    document.body.classList.remove("hideScroll");
    document.body.classList.add("showScroll");
    setShowRoadBlock(false);
  }, []);

  // Preload image
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("roadblock_seen");
    if (hasSeen) return;

    const img = new Image();
    img.src = imgSrc;

    img.onload = () => {
      setImgLoaded(true);
      setShowRoadBlock(true);
      sessionStorage.setItem("roadblock_seen", "true");
    };

    img.onerror = () => {
      const fallback = new Image();
      fallback.src = "/roadblock/default/default.jpg";

      fallback.onload = () => {
        setImgSrc("/roadblock/default/default.jpg");
        setImgLoaded(true);
        setShowRoadBlock(true);
        sessionStorage.setItem("roadblock_seen", "true");
      };

      fallback.onerror = () => {
        onClose();
      };
    };
  }, [imgSrc, onClose]);

  // Countdown first (12s)
  useEffect(() => {
    if (!showRoadBlock || showClose) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowClose(true); // show close button after 12s
    }
  }, [countdown, showRoadBlock, showClose]);

  // After close button shows → auto close after 10s
  useEffect(() => {
    if (showClose) {
      const timer = setTimeout(onClose, 10000);
      return () => clearTimeout(timer);
    }
  }, [showClose, onClose]);

  // Hide scroll
  useEffect(() => {
    if (showRoadBlock) document.body.classList.add("hideScroll");
    return () => {
      document.body.style.overflow = "";
    };
  }, [showRoadBlock]);

  return (
    <>
      {showRoadBlock && imgLoaded && (
        <div className="fixed inset-0 bg-[#D0D0D0] z-[9999] flex items-center justify-center">
          <div className="relative">

            {/* Countdown (before close button) */}
            {!showClose && (
              <div className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded text-sm">
                {countdown}
              </div>
            )}

            {/* Close Button (after countdown) */}
            {showClose && (
              <button
                onClick={onClose}
                className="absolute -top-2.5 -right-2.5 w-10 h-10 rounded-full bg-[#055d59] text-white text-xl font-bold border-none cursor-pointer hover:bg-[#044a47] transition-colors duration-200 shadow-lg"
              >
                X
              </button>
            )}

            <img
              src={imgSrc}
              alt="Roadblock"
              className="w-[550px] h-[550px] object-contain rounded-[3%]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default RoadBlock;