import React, { useEffect, useState } from "react";
const contactImg = "/contact/contact.png";

// Placeholder SVG icons
const VisitIcon = () => (
  <svg
    width="27"
    height="26"
    fill="none"
    stroke="#064E3B"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:-translate-y-1"
  >
    <path d="M12 2C7 2 3 6 3 11c0 7 9 13 9 13s9-6 9-13c0-5-4-9-9-9z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="26"
    height="26"
    fill="none"
    stroke="#064E3B"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:-translate-y-1"
  >
    <rect x="3" y="6" width="18" height="14" rx="2" ry="2" />
    <path d="M3 8l9 6 9-6" />
  </svg>
);

const CallIcon = () => (
  <svg
    width="26"
    height="26"
    fill="none"
    stroke="#064E3B"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:-translate-y-1"
  >
    <path d="M22 17.5v3a2 2 0 01-2.2 2 19.9 19.9 0 01-8.7-3.2 19.5 19.5 0 01-6.2-6.2A19.9 19.9 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7 12.3 12.3 0 00.7 2.7 2 2 0 01-.5 2.1l-1.3 1.3a1 1 0 000 1.4c1.2 2.5 3.1 4.4 5.6 5.6a1 1 0 001.4 0l1.3-1.3a2 2 0 012.1-.5 12.3 12.3 0 002.7.7A2 2 0 0122 17.5z" />
  </svg>
);

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Tackles Handyman Services ";
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // FRONTEND-ONLY submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.message) {
      alert("Full Name and Message are required!");
      return;
    }

    alert("Thank you! Your message has been noted.");
    setForm({ fullName: "", email: "", city: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6 flex flex-col items-center text-gray-800">

      {/* HEADER */}
      <div className="max-w-6xl w-full text-center mb-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-emerald-900 tracking-tight mb-3 drop-shadow-sm">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Contact us, we're always here to help you out.
        </p>
        <div className="w-full flex justify-center mb-10">
          <div className="w-full max-w-xl h-[3px] bg-emerald-300 rounded-full shadow-[0_0_12px_rgba(6,95,70,0.35)]"></div>
        </div>
      </div>

      {/* FORM + IMAGE */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center mb-20">

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-[0_0_28px_rgba(6,95,70,0.28)]
                        border border-emerald-200 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center">
            Get in Touch
          </h2>

          <form className="grid gap-5" onSubmit={handleSubmit}>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="border border-emerald-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-600 shadow-inner"
              placeholder="Full Name"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="border border-emerald-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-600 shadow-inner"
              placeholder="Email Address"
            />
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              className="border border-emerald-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-600 shadow-inner"
              placeholder="City (Dubai / Sydney / San Francisco)"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="border border-emerald-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-600 shadow-inner"
              rows="4"
              placeholder="Service needed & message"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669]
              hover:from-[#036A48] hover:via-[#047B5A] hover:to-[#06A272]
              text-white px-8 py-3 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-500"
            >
              Send Message ✉️
            </button>
          </form>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={contactImg}
            className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      {/* LOCATION SECTION */}
      <div className="w-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50 py-16 rounded-2xl shadow-inner">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4">

          <div>
            <h2 className="text-4xl font-extrabold text-emerald-900 mb-5">
              Our Location
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Visit our <span className="text-emerald-700 font-semibold">Business Bay</span> office…
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(6,95,70,0.35)] border border-emerald-400 h-[420px]">
            <iframe
              src="https://maps.google.com/maps?q=G%2001%20Ontario%20Tower%20Business%20Bay&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" className="border-0"
            />
          </div>
        </div>

        {/* CONTACT BUTTONS (with SVGs, smaller size, green border, animations) */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 mt-16 px-4">

          {/* VISIT */}
          <div className="group bg-white rounded-xl p-4 text-center border-2 border-emerald-900 shadow-md 
                          hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div className="flex justify-center mb-2"><VisitIcon /></div>
            <h2 className="text-lg font-semibold text-emerald-900 mb-1">Visit Us</h2>
            <p className="text-sm leading-relaxed">G 01 Ontario Tower<br />Business Bay</p>
          </div>

          {/* EMAIL */}
          <a href="mailto:info@tackles.pro"
            className="group bg-white rounded-xl p-4 text-center border-2 border-emerald-900 shadow-md 
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div className="flex justify-center mb-2"><EmailIcon /></div>
            <h2 className="text-lg font-semibold text-emerald-900 mb-1">Email Us</h2>
            <p className="text-sm leading-relaxed">info@tackles.pro</p>
          </a>

          {/* CALL */}
          <a href="tel:+971556165029"
            className="group bg-white rounded-xl p-4 text-center border-2 border-emerald-900 shadow-md 
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            <div className="flex justify-center mb-2"><CallIcon /></div>
            <h2 className="text-lg font-semibold text-emerald-900 mb-1">Call Us</h2>
            <p className="text-sm leading-relaxed">+971-55-6165029</p>
          </a>

        </div>
      </div>
    </section>
  );
}
