import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  // All your FAQ data
  const faqData = [
    {
      q: "What Payment Methods Are Available?",
      a: "You can either give a check to our craftsman at the end of the job or you can pay by cash and you can also use a credit card.",
    },
    {
      q: "Why can't you give an estimate over phone?",
      a: "First, we need to view the project to give you a proper estimate.",
    },
    {
      q: "Do I buy the materials?",
      a: "You don't need to worry; we select and bring the best product you need to get your job done.",
    },
    {
      q: "How long does the project take?",
      a: "It depends, but we will do our best to get you back to your home or business as soon as possible.",
    },
    {
      q: "If I have questions, where can I find answers?",
      a: "You can use our website's live chat option, or you can contact us from our contact page.",
    },
    {
      q: "Do I have to commit to a contract?",
      a: "Yes, you have to commit to a contract or you can quit at the beginning by discussing with us.",
    },
    {
      q: "Are you licensed?",
      a: "Yes, we are licensed.",
    },
  ];

  // Track which index is open
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white min-h-screen py-20 px-6">
      <Helmet>
        <title>FAQ | Tackles Handyman Services</title>
        <link rel="icon" type="image/png" href="/tackles.png" />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-14 text-center w-full">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-800 w-full">
            Frequently Asked Questions
          </h1>
        </div>

        {/* FAQ BOXES */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-emerald-300 rounded-2xl bg-white shadow-md overflow-hidden transition-all duration-300"
            >
              {/* QUESTION BLOCK */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-emerald-50 transition-colors group"
              >
                <span className="text-xl font-semibold text-emerald-800 group-hover:text-emerald-900">
                  {item.q}
                </span>
                <span className="text-emerald-600 transition-transform duration-300">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>

              {/* ANSWER BLOCK - Task 12B: Separate block with background, padding, and border radius */}
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fadeIn">
                  <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 shadow-inner">
                    <p className="text-black text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
