import React, { useEffect, useState } from "react";

export default function Feedback() {
  useEffect(() => {
    document.title = "Share Your Feedback | Tackles Handyman Services";
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    country: "",
    place: "",
    workDone: "",
    message: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      country: "",
      place: "",
      workDone: "",
      message: "",
      photo: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Simulate frontend-only submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-emerald-800 mb-3">
            Share Your Feedback
          </h1>
          <p className="text-gray-600">
            We value your experience. Please take a moment to share your feedback.
          </p>
        </header>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 rounded-xl border border-emerald-300 bg-emerald-50 p-6 text-center">
            <h2 className="text-xl font-semibold text-emerald-800">
              Thank you for your feedback
            </h2>
            <p className="text-gray-700 mt-2">
              Your response has been successfully submitted.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 rounded-2xl border border-emerald-300 bg-white p-8 shadow-sm sm:grid-cols-2 sm:gap-6"
          noValidate
        >
          {/* Name */}
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={submitted}
              className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Country */}
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <input
              list="countries"
              name="country"
              value={form.country}
              onChange={handleChange}
              required
              disabled={submitted}
              className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
            />
            <datalist id="countries">
              <option value="UAE" />
              <option value="USA" />
              <option value="Australia" />
            </datalist>
          </div>

          {/* Place */}
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City / Place
            </label>
            <input
              list="places"
              name="place"
              value={form.place}
              onChange={handleChange}
              required
              disabled={submitted}
              className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
            />
            <datalist id="places">
              <option value="Dubai" />
              <option value="San Francisco" />
              <option value="Sydney" />
            </datalist>
          </div>

          {/* Service */}
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Provided
            </label>
            <input
              list="services"
              name="workDone"
              value={form.workDone}
              onChange={handleChange}
              required
              disabled={submitted}
              className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
            />
            <datalist id="services">
              <option value="AC Maintenance & Servicing" />
              <option value="Electrical Repairs" />
              <option value="Plumbing" />
              <option value="Painting & Decorating" />
              <option value="Carpentry" />
              <option value="Flooring & Surface Fixes" />
              <option value="Gutter & Roof Cleaning" />
              <option value="Pressure Washing" />
              <option value="Smart Home & Fixture Installations" />
            </datalist>
          </div>

          {/* Feedback Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Feedback
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              disabled={submitted}
              className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Photo Upload */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Photo
            </label>
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-emerald-300 p-5 text-center hover:bg-emerald-50 transition">
              <span className="text-emerald-700 font-medium">
                Click to upload image
              </span>
              <span className="text-xs text-gray-500 mt-1">
                JPG, PNG — max 5MB
              </span>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                required
                disabled={submitted}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className={`rounded-lg p-3 font-semibold text-white transition w-full ${
                submitted
                  ? "bg-emerald-500 cursor-not-allowed"
                  : "bg-emerald-700 hover:bg-emerald-800"
              }`}
            >
              {isSubmitting
                ? "Submitting..."
                : submitted
                ? "Submitted"
                : "Submit Feedback"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
