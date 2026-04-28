"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Which is the best share market academy in ghaziabad?",
    answer: "Share Market Skills Academy is famous in Ghaziabad for providing top-class trading classes and expertise with professional guidance.",
  },
  {
    question: "Do you provide share market coaching in Ghaziabad for working professionals?",
    answer: "Yes, we have weekend classes to educate working professionals about the share market in Ghaziabad.",
  },
  {
    question: "What is the fee structure for the top trading institute in Ghaziabad?",
    answer: "At Share Market Skills Academy, you get the most competitive pricing in Ghaziabad with EMI options available.",
  },
  {
    question: "Can I learn intraday trading at your trading academy in Ghaziabad?",
    answer: "Yes, we are focusing on momentum trading and scalp strategies. Here, we teach you to identify high-probability setups within the first hour of the market opening.",
  },
  {
    question: "Is live market training included in the course?",
    answer: "Yes, we do provide. Apart from theoretical sessions, we also offer live marketing tricks under the expert guidance.",
  },
];

// Type for FAQ item
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