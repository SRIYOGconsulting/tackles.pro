import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Tackles";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TITLE SECTION */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-emerald-900 tracking-wide">
            Privacy Policy
          </h1>
          <div className="h-1 w-full bg-emerald-700 rounded-full mt-3 shadow-sm"></div>
        </div>

        {/* SECTION CARD COMPONENT */}
        <div className="space-y-10">

          {/* CARD 1 — INTRO */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Introduction</h2>
            <p className="leading-relaxed">
              This Privacy Policy explains how Tackles collects, uses, and protects your
              information when you visit{" "}
              <span className="font-semibold text-emerald-800">tackles.ae</span>.
            </p>
            <p className="mt-3 leading-relaxed">
              We value your trust and are committed to keeping your personal data safe. 
              If you have questions, feel free to reach out anytime.
            </p>
          </div>

          {/* CARD 2 — LOG FILES */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Log Files</h2>
            <p className="leading-relaxed">
              Tackles follows standard procedures of using log files, which record visitors 
              when they browse the website. This includes IP addresses, browser type,
              Internet Service Provider, time stamps, referring pages, and number of clicks.
            </p>
            <p className="mt-3 leading-relaxed">
              None of this data is personally identifiable. It's used purely for analytics, 
              site management, and tracking user engagement.
            </p>
          </div>

          {/* CARD 3 — COOKIES */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Cookies & Web Beacons</h2>
            <p className="leading-relaxed">
              Tackles uses cookies to store visitor preferences and to improve your browsing 
              experience. These cookies help tailor website content based on your browser 
              type or previous interactions.
            </p>
          </div>

          {/* CARD 4 — GOOGLE COOKIE */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Google DoubleClick DART Cookie
            </h2>
            <p className="leading-relaxed">
              Google uses DART cookies to serve ads based on your browsing behaviour across 
              various websites. You can opt out by visiting Google's Ads Privacy Policy page.
            </p>
          </div>

          {/* CARD 5 — THIRD PARTY TECH */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Third-Party Tracking Technologies
            </h2>
            <p className="leading-relaxed">
              Third-party advertisers may use cookies, JavaScript, or tracking pixels. These 
              tools automatically receive your IP address and help measure ad performance.
            </p>
            <p className="mt-3 leading-relaxed">
              Tackles has no access to or control over these external technologies.
            </p>
          </div>

          {/* CARD 6 — THIRD PARTY POLICIES */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Third-Party Privacy Policies
            </h2>
            <p className="leading-relaxed">
              Our Privacy Policy does not apply to other websites or advertisers. We 
              recommend reviewing their individual privacy policies to understand their 
              data handling practices.
            </p>
            <p className="mt-3 leading-relaxed">
              You may disable cookies through your browser settings. Each browser offers 
              different configuration options.
            </p>
          </div>

          {/* CARD 7 — CHILDREN */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Children’s Information
            </h2>
            <p className="leading-relaxed">
              Tackles does not knowingly collect personal information from children under 
              the age of 13. If you believe such information has been shared with us, please 
              contact us immediately and we will remove it promptly.
            </p>
          </div>

          {/* CARD 8 — ONLINE POLICY */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Online Privacy Policy Only
            </h2>
            <p className="leading-relaxed">
              This Privacy Policy applies only to information collected through our 
              website and does not apply to offline or non-website interactions.
            </p>
          </div>

          {/* CARD 9 — CONSENT */}
          <div className="bg-white shadow-md border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Consent</h2>
            <p className="leading-relaxed">
              By using our website, you consent to our Privacy Policy and agree to its 
              terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
