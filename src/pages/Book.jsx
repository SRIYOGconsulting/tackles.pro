import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Images from public folder
const bookingImg = "/booking/booking.png";

// Flag icons from public/icons/flags
const flagUAE = "/icons/flags/uae.svg";
const flagUSA = "/icons/flags/usa.svg";
const flagAUS = "/icons/flags/australia.svg";


export default function Book() {
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  const locationRef = useRef();
  const phoneRef = useRef();
  const serviceRef = useRef();

  useEffect(() => {
    document.title = "Book a Service | Tackles Handyman Services";

    const handleClickOutside = (e) => {
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setShowLocationFlags(false);
      }
      if (phoneRef.current && !phoneRef.current.contains(e.target)) {
        setShowPhoneFlags(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    startDate: "",
    endDate: "",
    shifts: "",
    priority: "",
    location: "",
    requiredService: "",
    phone: "",
    budgetCurrency: "AED",
    budget: "",
    description: "",
    locationFlag: flagUAE,
    phoneFlag: flagUAE,
  });

  const [loading, setLoading] = useState(false);

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showLocationFlags, setShowLocationFlags] = useState(false);
  const [showPhoneFlags, setShowPhoneFlags] = useState(false);

  const flagOptions = [
    { name: "UAE", icon: flagUAE },
    { name: "USA", icon: flagUSA },
    { name: "Australia", icon: flagAUS },
  ];

  const currencyOptions = [
    { code: "AED", symbol: "د.إ" },
    { code: "USD", symbol: "$" },
    { code: "AUD", symbol: "A$" },
  ];

  const servicesList = [
    "AC Maintenance & Servicing",
    "Electrical Repairs",
    "Plumbing",
    "Painting & Decorating",
    "Carpentry",
    "Flooring & Surface Fixes",
    "Gutter & Roof Cleaning",
    "Pressure Washing",
    "Smart Home & Fixture Installations",
  ];

  const filteredServices = form.requiredService
    ? servicesList.filter((s) =>
        s.toLowerCase().includes(form.requiredService.toLowerCase())
      )
    : servicesList;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const selectService = (service) => {
    setForm({ ...form, requiredService: service });
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.startDate ||
      !form.endDate ||
      !form.shifts ||
      !form.priority ||
      !form.location ||
      !form.requiredService ||
      !form.phone ||
      !form.budget
    ) {
      alert("Please fill all required fields!");
      return;
    }

    alert("Thank you! Your booking has been noted.");
    setForm({
      fullName: "",
      email: "",
      startDate: "",
      endDate: "",
      shifts: "",
      priority: "",
      location: "",
      requiredService: "",
      phone: "",
      budgetCurrency: "AED",
      budget: "",
      description: "",
      locationFlag: flagUAE,
      phoneFlag: flagUAE,
    });

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700 flex flex-col items-center justify-center py-20 px-6">
      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          position: absolute;
          right: 0.5rem;
          cursor: pointer;
        }
      `}</style>

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl mb-10">
        <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight">
            Book a Service
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base mt-3 max-w-md">
            Schedule your service at your convenience, fast, reliable, and
            professional.
          </p>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={bookingImg}
            alt="Book Appointment"
            className="w-64 sm:w-80 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-5xl w-full bg-white/95 rounded-2xl shadow-2xl p-8 sm:p-10 border border-emerald-200 backdrop-blur-md">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              placeholder="example@email.com"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Start Date *
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 appearance-none relative"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              End Date *
            </label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 appearance-none relative"
            />
          </div>

          {/* Shifts */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Shifts *
            </label>
            <select
              name="shifts"
              value={form.shifts}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 appearance-none bg-white"
              style={{
                paddingRight: "2.5rem",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="">Select shift</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Priority *
            </label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 appearance-none bg-white"
              style={{
                paddingRight: "2.5rem",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="">Select priority</option>
              <option>Normal</option>
              <option>Urgent</option>
              <option>Emergency</option>
            </select>
          </div>

          {/* LOCATION WITH FLAG */}
          <div ref={locationRef}>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Location *
            </label>
            <div className="flex items-stretch gap-3 relative">
              <button
                type="button"
                onClick={() => setShowLocationFlags(!showLocationFlags)}
                className="border border-emerald-300 rounded-lg px-3 py-2.5 bg-white flex items-center justify-center gap-1.5 shadow-sm hover:bg-emerald-50 min-h-[42px]"
              >
                <img
                  src={form.locationFlag}
                  className="w-6 h-6"
                  alt="Location flag"
                />
                <svg
                  className="w-3.5 h-3.5 text-emerald-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showLocationFlags && (
                <div className="absolute top-12 left-0 z-30 bg-white border border-emerald-200 rounded-lg shadow-md w-40">
                  {flagOptions.map((item) => (
                    <div
                      key={item.name}
                      onMouseDown={() => {
                        setForm({ ...form, locationFlag: item.icon });
                        setShowLocationFlags(false);
                      }}
                      className="px-3 py-2 hover:bg-emerald-50 cursor-pointer flex items-center gap-2 text-sm"
                    >
                      <img src={item.icon} className="w-5 h-5" />
                      {item.name}
                    </div>
                  ))}
                </div>
              )}

              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                placeholder="Enter your location"
                className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* REQUIRED SERVICE */}
          <div className="relative" ref={serviceRef}>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Required Service *
            </label>
            <div className="flex items-center gap-3 relative">
              <input
                type="text"
                name="requiredService"
                value={form.requiredService}
                onChange={(e) => {
                  handleChange(e);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Type or choose a service"
                required
                className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="button"
                onClick={() => setShowSuggestions(!showSuggestions)}
                className="border border-emerald-300 rounded-lg px-3 py-2 bg-white shadow-sm hover:bg-emerald-50"
              >
                <svg
                  className="w-4 h-4 text-emerald-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {showSuggestions && (
              <div className="absolute z-20 w-full bg-white border border-emerald-200 rounded-lg shadow-md mt-1 max-h-48 overflow-y-auto">
                {filteredServices.map((service, i) => (
                  <div
                    key={i}
                    onMouseDown={() => selectService(service)}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-emerald-50"
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PHONE WITH FLAG */}
          <div ref={phoneRef}>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Phone Number *
            </label>
            <div className="flex items-stretch gap-3 relative">
              <button
                type="button"
                onClick={() => setShowPhoneFlags(!showPhoneFlags)}
                className="border border-emerald-300 rounded-lg px-3 py-2.5 bg-white flex items-center justify-center gap-1.5 shadow-sm hover:bg-emerald-50 min-h-[42px]"
              >
                <img
                  src={form.phoneFlag}
                  className="w-6 h-6"
                  alt="Phone flag"
                />
                <svg
                  className="w-3.5 h-3.5 text-emerald-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showPhoneFlags && (
                <div className="absolute top-12 left-0 z-30 bg-white border border-emerald-200 rounded-lg shadow-md w-40">
                  {flagOptions.map((item) => (
                    <div
                      key={item.name}
                      onMouseDown={() => {
                        setForm({ ...form, phoneFlag: item.icon });
                        setShowPhoneFlags(false);
                      }}
                      className="px-3 py-2 hover:bg-emerald-50 cursor-pointer flex items-center gap-2 text-sm"
                    >
                      <img src={item.icon} className="w-5 h-5" />
                      {item.name}
                    </div>
                  ))}
                </div>
              )}

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
                className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* BUDGET */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Budget *
            </label>
            <div className="flex gap-3">
              <select
                name="budgetCurrency"
                value={form.budgetCurrency}
                onChange={handleChange}
                className="border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                {currencyOptions.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                placeholder="Enter amount"
                className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              placeholder="Write about your requirement or special note..."
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          
          {/* Submit */}
          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-700 via-green-700 to-lime-600 hover:from-emerald-800 hover:via-green-800 hover:to-lime-700 text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
