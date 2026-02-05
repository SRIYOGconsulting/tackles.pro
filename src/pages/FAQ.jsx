import React, { useEffect, useState } from "react";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | Tackles Handyman Services";
  }, []);

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

  return (
    <section className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-800">
            Frequently Asked Questions
          </h1>

          
        </div>

        {/* FAQ BOXES */}
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setOpenIndex(index)}
              className="border border-emerald-300 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* QUESTION */}
              <p className="text-xl font-semibold text-emerald-800">
                {item.q}
              </p>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-3 text-black text-base leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
