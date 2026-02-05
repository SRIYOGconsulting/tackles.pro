import React, { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | Tackles";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-emerald-900 tracking-wide">
            Terms & Conditions
          </h1>
          <div className="h-1 w-full bg-emerald-700 rounded-full mt-3 shadow-sm"></div>
        </div>

        {/* PAGE CONTENT */}
        <div className="space-y-10">

          {/* SECTION CARD */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Welcome to Tackles
            </h2>
            <p className="leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of 
              Tackles’s website, located at <span className="font-semibold text-emerald-800">tackles.ae</span>.
            </p>
            <p className="mt-3 leading-relaxed">
              By accessing this website, we assume you accept these terms and conditions. 
              Do not continue to use Tackles if you do not agree with any of the terms 
              stated on this page.
            </p>
          </div>

          {/* TERMINOLOGY */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Terminology
            </h2>
            <p className="leading-relaxed">
              The following terminology applies to these Terms and Conditions, Privacy 
              Statement, Disclaimer Notice and all Agreements: “Client”, “You” and “Your” 
              refer to you, the user. “The Company”, “Ourselves”, “We”, “Our” and “Us”, 
              refer to our Company. “Party”, “Parties”, or “Us”, refers to both the Client 
              and ourselves.
            </p>
            <p className="mt-3 leading-relaxed">
              Any use of singular, plural, capitalization, or gender-specific words are 
              interchangeable and refer to the same.
            </p>
          </div>

          {/* COOKIES */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Cookies</h2>
            <p className="leading-relaxed">
              We employ the use of cookies. By accessing Tackles, you agreed to use cookies 
              in agreement with Tackles’s Privacy Policy. Cookies help provide functionality 
              and enhance the user experience.
            </p>
          </div>

          {/* LICENSE */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">License</h2>
            <p className="leading-relaxed">
              Unless otherwise stated, Tackles and/or its licensors own all intellectual 
              property rights for material on the website. You may access it for personal 
              use, subject to restrictions.
            </p>

            <ul className="list-disc ml-6 mt-4 leading-relaxed">
              <li>Republish material from Tackles</li>
              <li>Sell, rent, or sub-license material</li>
              <li>Reproduce or copy material</li>
              <li>Redistribute content</li>
            </ul>

            <p className="mt-4 leading-relaxed">
              Tackles does not moderate comments posted by users but reserves the right to 
              remove any content deemed inappropriate or offensive.
            </p>
          </div>

          {/* YOUR RESPONSIBILITY */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">User Responsibility</h2>
            <p className="leading-relaxed">
              By posting Comments, you warrant and represent that:
            </p>

            <ul className="list-disc ml-6 mt-4 leading-relaxed">
              <li>You have all necessary rights and licenses to post the content</li>
              <li>No third-party intellectual property rights are violated</li>
              <li>Comments do not contain offensive, unlawful, or harmful material</li>
              <li>Comments are not used for unlawful promotions or activities</li>
            </ul>
          </div>

          {/* HYPERLINKING */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Hyperlinking to Our Website
            </h2>
            <p className="leading-relaxed">
              Certain organizations may link to our website without prior approval:
            </p>

            <ul className="list-disc ml-6 mt-4 leading-relaxed">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>Online directory distributors</li>
              <li>Accredited businesses (excluding non-profits and fundraising groups)</li>
            </ul>

            <p className="mt-4 leading-relaxed">
              Additional organizations may request linking approval via email.
            </p>
          </div>

          {/* IFRAMES */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">iFrames</h2>
            <p className="leading-relaxed">
              You may not create frames around our webpages without written permission. 
              Such frames may alter our website’s appearance.
            </p>
          </div>

          {/* CONTENT LIABILITY */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Content Liability</h2>
            <p className="leading-relaxed">
              We are not responsible for content appearing on external websites. You agree 
              to defend us against all claims arising from your website.
            </p>
          </div>

          {/* DISCLAIMER */}
          <div className="bg-white border border-emerald-200 shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">Disclaimer</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, we exclude all warranties and 
              representations regarding this website. Nothing in this disclaimer will limit 
              liabilities that cannot be limited under applicable law.
            </p>
            <p className="mt-3 leading-relaxed">
              As long as the website and its services are provided free of charge, we are 
              not liable for any loss or damage of any nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
