import { useEffect, useState, useCallback } from "react";

const RoadBlock = () => {
  const today = new Date();
  const monthNames = [
    "january","february","march","april","may","june",
    "july","august","september","october","november","december"
  ];
  const month = monthNames[today.getMonth()]; // lowercase month folder
  const day = String(today.getDate()); // "1", "2", ..., "31" - must match your file names

  const [showRoadBlock, setShowRoadBlock] = useState(false);
  const [imgSrc, setImgSrc] = useState(`/roadblock/${month}/${day}.jpg`);

  const onClose = useCallback(() => {
    document.body.classList.remove("hideScroll");
    document.body.classList.add("showScroll");
    setShowRoadBlock(false);
  }, []);

  // Show roadblock once per session
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("roadblock_seen");
    if (!hasSeen) {
      setShowRoadBlock(true);
      sessionStorage.setItem("roadblock_seen", "true");
    }
  }, []);

  // Auto-close roadblock after 10 seconds
  useEffect(() => {
    if (showRoadBlock) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [showRoadBlock, onClose]);

  // Hide scroll while roadblock is visible
  useEffect(() => {
    if (showRoadBlock) document.body.classList.add("hideScroll");
    return () => {
      document.body.style.overflow = "";
    };
  }, [showRoadBlock]);

  // Image error handler: fallback to default
  const handleImageError = () => {
    // If the current src is not the default, fallback
    if (!imgSrc.includes("default.jpg")) {
      setImgSrc("/roadblock/default/default.jpg");
    } else {
      // If default is missing, just close
      onClose();
    }
  };

  return (
    <>
      {showRoadBlock && (
        <div className="fixed inset-0 bg-[#D0D0D0] z-[9999] flex items-center justify-center">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute -top-2.5 -right-2.5 w-10 h-10 rounded-full bg-[#055d59] text-white text-xl font-bold border-none cursor-pointer hover:bg-[#044a47] transition-colors duration-200 shadow-lg"
            >
              X
            </button>

            <img
              src={imgSrc}
              onError={handleImageError}
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