"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the basic knowledge required to start trading?",
    answer: "You don’t need a specific degree to join our financial education center ghaziabad. At Share Market Skills Academy, we educate you from scratch and make you eligible and confident for trading.",
  },
  {
    question: "What is the duration of the financial literacy classes ghaziabad?",
    answer: "Each class requires 3 to 4 hours of your time. In this, we teach live trading and all the tricks to buckle up for progress.",
  },
  {
    question: "What else do we provide apart from theory?",
    answer: "At our investment learning center ghaziabad, we teach students about trade live market hours using virtual currency to gain genuine execution experience.",
  },
  {
    question: "Why is our finance training institute ghaziabad the best?",
    answer: "Share Market Skills Academy is the best as our professionals prioritize exclusively on institutional order flow, advanced volume profiles, and psychological discipline training.",
  },
  {
    question: "Do we offer long-term financial literacy classes ghaziabad?",
    answer: "Yes, our investment education institute ghaziabad can also provide long-term sessions for beginners. This way, we maximize your returns and minimize investment risks.",
  },
];

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#7ED321] font-semibold mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Everything you need to know before
            starting your trading journey.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-[#7ED321]">
                  {activeIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
