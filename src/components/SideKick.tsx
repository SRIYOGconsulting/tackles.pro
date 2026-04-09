import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Floating: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
     {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-6 z-50 mb-12">
        {/* Call Button */}
        <a
          href="tel:+9779852025735"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-200 animate-ringing"
          aria-label="Call Us"
        >
          <FaPhoneAlt size={24} />
        </a>

        {/* WhatsApp Button */}
        <a
          href=" https://d.sriyog.com/gSewa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-secondary transition duration-200 animate-bounce mt-2"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default Floating;
