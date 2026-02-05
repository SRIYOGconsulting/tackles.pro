import React, { useEffect } from "react";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Disclaimer | Tackles  Handyman Services";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-emerald-900 tracking-wide">
            Disclaimer
          </h1>
          <div className="h-1 w-full bg-emerald-700 rounded-full mt-3 shadow-sm"></div>
        </div>

        {/* CONTENT WRAPPER */}
        <div className="space-y-10">

          {/* CARD 1 — General Information */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              General Information
            </h2>
            <p className="leading-relaxed">
              The information provided on this website (tackles.ae) is for general 
              informational purposes only. While we make every effort to keep the 
              information accurate, up to date, and reliable, Tackles does not make 
              any guarantees of completeness, accuracy, or suitability of the content.
            </p>
          </div>

          {/* CARD 2 — Professional Advice */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              No Professional Advice
            </h2>
            <p className="leading-relaxed">
              All content on this website is provided for general understanding and 
              convenience. Nothing on this site should be considered professional 
              technical advice. For specific guidance, inspection, or repair 
              requirements, please consult directly with our certified technicians or 
              relevant professionals.
            </p>
          </div>

          {/* CARD 3 — External Links */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              External Links Disclaimer
            </h2>
            <p className="leading-relaxed">
              Our website may contain links to external websites that are not 
              provided or maintained by Tackles. We do not guarantee the accuracy, 
              relevance, or completeness of any information found on these external 
              platforms.
            </p>
          </div>

          {/* CARD 4 — Errors & Omissions */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Errors & Omissions
            </h2>
            <p className="leading-relaxed">
              Although we strive to ensure the reliability of all content, unintentional 
              mistakes or outdated information may occur. Tackles is not responsible for 
              any errors, omissions, or inconsistencies present on the website.
            </p>
          </div>

          {/* CARD 5 — Liability Disclaimer */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              Tackles shall not be held liable for any damages—direct, indirect, 
              incidental, or consequential—arising from the use or inability to use our 
              website, services, or information. All actions taken based on our content 
              are at the user’s own risk.
            </p>
          </div>

          {/* CARD 6 — Service Availability */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Service Availability
            </h2>
            <p className="leading-relaxed">
              Although we aim to keep the website running smoothly, Tackles does not 
              guarantee uninterrupted access. Technical issues, updates, or server 
              downtime may temporarily disrupt access to the site.
            </p>
          </div>

          {/* CARD 7 — Updates to Disclaimer */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Updates to This Disclaimer
            </h2>
            <p className="leading-relaxed">
              Tackles reserves the right to update, modify, or replace this Disclaimer 
              at any time without prior notice. Users are encouraged to review this page 
              periodically to stay informed of any changes.
            </p>
          </div>

          {/* CARD 8 — Contact */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions regarding this Disclaimer, feel free to contact us 
              through our official email or contact section on the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
