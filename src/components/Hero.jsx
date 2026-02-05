import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-emerald-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-5xl font-bold text-emerald-900">
          Your Trusted Handyman Professionals
        </h1>
        <p className="mt-4 max-w-2xl text-gray-700">
          Fast, reliable repairs and improvements in Dubai, Sydney & San Francisco.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/contact" className="bg-emerald-700 text-white px-4 py-2 rounded-md">Book a Handyman</Link>
          <Link to="/pricing" className="border border-emerald-700 text-emerald-700 px-4 py-2 rounded-md">Get a Free Quote</Link>
        </div>
      </div>
    </section>
  );
}
