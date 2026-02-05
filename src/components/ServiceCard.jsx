export default function ServiceCard({ image, title, desc, extra }) {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-md overflow-hidden 
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-emerald-100 flex flex-col"
    >
      {/* Image Section */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Text Section */}
      <div className="p-6 relative z-10 flex-grow">
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          {desc}
        </p>
      </div>

      {/* Book Button Slot */}
      {extra && (
        <div className="pb-6 flex justify-center">
          {extra}
        </div>
      )}

      {/* Hover Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 
                      bg-gradient-to-r from-lime-500 to-emerald-600 
                      transition-opacity duration-500 rounded-2xl">
      </div>
    </div>
  );
}
