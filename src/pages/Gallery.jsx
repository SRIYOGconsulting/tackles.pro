import React, { useEffect } from "react";
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

  // ⭐ Set tab title
  useEffect(() => {
    document.title = "Gallery | Tackles";
  }, []);

  const images = [
    {
      src: image1,
      desc:
        "Fresh flooring and white paint paired with natural sunlight and cozy sofa setup.",
    },
    {
      src: image2,
      desc:
        "Professional plumbing services including pipe fitting, leakage repair, and sanitary installations.",
    },
    {
      src: image3,
      desc:
        "Aesthetic wall designs with color-matched panels and decorative accents.",
    },
    {
      src: image4,
      desc:
        "Modern wooden kitchen with quality cabinetry, lighting design, and interior architecture.",
    },
    {
      src: image5,
      desc:
        "Expert wall painting services delivering smooth finishes, clean edges, and long-lasting quality.",
    },
    {
      src: image6,
      desc:
        "AC cleaning and servicing performed by trained professionals.",
    },
    {
      src: image7,
      desc:
        "Smooth paint finishing with polished flooring and clean touch-ups.",
    },
    {
      src: image8,
      desc:
        "Reliable electrician services including wiring, lighting installation, and electrical maintenance.",
    },
    {
      src: image9,
      desc:
        "Open indoor space with ceiling fixtures and clean interior finishing.",
    },
    {
      src: image10,
      desc:
        "Indoor living area featuring ocean view, modern furniture, and premium flooring.",
    },
    {
      src: image11,
      desc:
        "Skilled carpentry work including furniture making, wood finishing, and custom installations.",
    },
    {
      src: image12,
      desc:
        "Relaxing indoor setup with indoor plants, soft lighting, and stylish sofas.",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6 text-gray-800 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-5xl text-center mb-14">
        <h1 className="text-5xl font-extrabold text-emerald-900 mb-4 tracking-tight">
          Our Works
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          You can view our working quality and decide for yourselves whether
          we are best for you. All the repair and decoration work people
          find difficult comes naturally to our professionals.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {images.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white border border-emerald-200 
            shadow-[0_0_20px_rgba(6,95,70,0.18)] hover:shadow-[0_0_32px_rgba(6,95,70,0.28)]
            transform hover:scale-[1.03] transition-all duration-500 group"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-all duration-300 group-hover:opacity-90"
              />

              {/* DESCRIPTION BAR */}
              <div
                className="absolute bottom-0 left-0 w-full px-5 py-3 
                bg-gradient-to-t from-emerald-900 via-emerald-800/90 to-transparent
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
    </section>
  );
}
