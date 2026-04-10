import React, { useEffect } from "react";

export default function Team() {

  useEffect(() => {
    document.title = "Teams | Tackles";
  }, []);

  return (
    <section className="min-h-screen bg-white py-20 px-6 text-gray-900">

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-emerald-900">
          Our Team
        </h1>
        <p className="text-gray-600 text-lg mt-3">
          Meet the experts who deliver excellence every day.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-14">

        {/* MEMBER 1 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/1.png" alt="Raju Khatri" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Rag Longer</h3>
          <p className="text-gray-600 text-sm">Supervisor</p>
        </div>

        {/* MEMBER 2 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/2.png" alt="Pritambar Ghimire" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Timba Rimeg</h3>
          <p className="text-gray-600 text-sm">Electrician</p>
        </div>

        {/* MEMBER 3 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/3.png" alt="Gopak Sinjali Magar" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Singpok Marg</h3>
          <p className="text-gray-600 text-sm">Senior Electrician</p>
        </div>

        {/* MEMBER 4 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/4.png" alt="Dharma Thapa" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Radhm Nikola</h3>
          <p className="text-gray-600 text-sm">Mason</p>
        </div>

        {/* MEMBER 5 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/5.png" alt="Rajendra" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Jendras Hermo</h3>
          <p className="text-gray-600 text-sm">Tile / Mason</p>
        </div>

        {/* MEMBER 6 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/6.png" alt="Jerry Tom" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Jerry Tom</h3>
          <p className="text-gray-600 text-sm">Site Incharge</p>
        </div>

        {/* MEMBER 7 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/7.png" alt="Bishnu Pandey" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Hisng Ralon</h3>
          <p className="text-gray-600 text-sm">Spray Painter</p>
        </div>

        {/* MEMBER 8 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/8.png" alt="Quiyam" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Fiyglo Morris</h3>
          <p className="text-gray-600 text-sm">Supervisor</p>
        </div>

        {/* MEMBER 9 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/9.png" alt="Sunil Kumar" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Bolt Navindran</h3>
          <p className="text-gray-600 text-sm">Tile Mason</p>
        </div>

        {/* MEMBER 10 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/10.png" alt="Anil Sharma" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Anil Sharma</h3>
          <p className="text-gray-600 text-sm">Tile Mason</p>
        </div>

        {/* MEMBER 11 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/11.png" alt="Rajendra" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Rajendra</h3>
          <p className="text-gray-600 text-sm">Tile Mason</p>
        </div>

        {/* MEMBER 12 */}
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl border-4 border-emerald-100">
            <img src="/team/12.png" alt="Bolt Navindran" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-semibold mt-5">Bolt Navindran</h3>
          <p className="text-gray-600 text-sm">Tile Mason</p>
        </div>

      </div>

    </section>
  );
}