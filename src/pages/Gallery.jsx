import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";

const image1 = "/gallery/image1.png";
const image2 = "/gallery/image2.png";
const image3 = "/gallery/image3.png";
const image4 = "/gallery/image4.png";
const image5 = "/gallery/image5.png";
const image6 = "/gallery/image6.png";
const image7 = "/gallery/image7.png";
const image8 = "/gallery/image8.png";
const image9 = "/gallery/image9.png";
const image10 = "/gallery/image10.png";
const image11 = "/gallery/image11.png";
const image12 = "/gallery/image12.png";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    { src: image1, desc: "Fresh flooring and white paint paired with natural sunlight and cozy sofa setup." },
    { src: image2, desc: "Professional plumbing services including pipe fitting, leakage repair, and sanitary installations." },
    { src: image3, desc: "Aesthetic wall designs with color-matched panels and decorative accents." },
    { src: image4, desc: "Modern wooden kitchen with quality cabinetry, lighting design, and interior architecture." },
    { src: image5, desc: "Expert wall painting services delivering smooth finishes, clean edges, and long-lasting quality." },
    { src: image6, desc: "AC cleaning and servicing performed by trained professionals." },
    { src: image7, desc: "Smooth paint finishing with polished flooring and clean touch-ups." },
    { src: image8, desc: "Reliable electrician services including wiring, lighting installation, and electrical maintenance." },
    { src: image9, desc: "Open indoor space with ceiling fixtures and clean interior finishing." },
    { src: image10, desc: "Indoor living area featuring ocean view, modern furniture, and premium flooring." },
    { src: image11, desc: "Skilled carpentry work including furniture making, wood finishing, and custom installations." },
    { src: image12, desc: "Relaxing indoor setup with indoor plants, soft lighting, and stylish sofas." },
  ];

  const handleOpen = (index) => {
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleClose = useCallback(() => {
    setCurrentIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, handleNext, handlePrev, handleClose]);

  return (
    <section className="min-h-screen bg-white py-16 px-6 text-gray-800 flex flex-col items-center">
      <Helmet>
        <title>Gallery | Tackles</title>
        <link rel="icon" type="image/png" href="/tackles.png" />
      </Helmet>

      {/* Header */}
      <div className="max-w-5xl text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 mb-4 tracking-tight">
          Our Works
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          You can view our working quality and decide for yourselves whether
          we are best for you. All the repair and decoration work people
          find difficult comes naturally to our professionals.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {images.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white border border-emerald-100 
            shadow-[0_0_20px_rgba(6,95,70,0.12)] hover:shadow-[0_0_32px_rgba(6,95,70,0.22)]
            transform hover:scale-[1.02] transition-all duration-500 group cursor-pointer"
            onClick={() => handleOpen(index)}
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/3]">
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />

              {/* DESCRIPTION BAR */}
              <div
                className="absolute bottom-0 left-0 w-full px-5 py-4 
                bg-gradient-to-t from-emerald-900/95 via-emerald-800/80 to-transparent
                text-white text-sm opacity-0 group-hover:opacity-100 
                translate-y-3 group-hover:translate-y-0
                transition-all duration-300"
              >
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CUSTOM FULL-SCREEN MODAL */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[10000] p-2"
            onClick={handleClose}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all z-[10000] p-4 group"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            <svg className="w-10 h-10 sm:w-12 sm:h-12 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all z-[10000] p-4 group"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <svg className="w-10 h-10 sm:w-12 sm:h-12 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Container designed to prevent layout shifts */}
          <div
            className="flex items-center justify-center w-full h-full p-4 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 
              Force consistent visual area:
              - Use key={currentIndex} to trigger animation on image swap
              - Use width: 90vw and height: 90vh to force upscaling/downscaling
              - Use object-fit: contain to maintain aspect ratio
            */}
            <img
              key={currentIndex}
              src={images[currentIndex].src}
              alt="Gallery Full View"
              className="object-contain shadow-2xl animate-imageZoom"
              style={{
                width: '90vw',
                height: '90vh',
                display: 'block'
              }}
            />

            {/* Modal Description */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-center bg-black/60 px-6 py-2 rounded-full backdrop-blur-md text-sm sm:text-base max-w-[80vw] pointer-events-none">
              {images[currentIndex].desc}
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes imageZoom {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          .animate-imageZoom {
            animation: imageZoom 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>
    </section>
  );
}
