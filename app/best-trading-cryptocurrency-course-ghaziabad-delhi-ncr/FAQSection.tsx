"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of the cryptocurrency course in Ghaziabad for beginners?",
    answer:
      "We teach you from the start and make you eligible. The time we take to complete the course is 4 to 6 weeks.",
  },
  {
    question: "Can I join the online trading classes if I live outside Delhi NCR?",
    answer:
      "Yes, you can. At Share Market Skills Academy, we provide Online Trading Classes in India. For offline classes, we do have our centers in Ghaziabad.",
  },
  {
    question: "Do I need a high-end computer to start learning technical analysis?",
    answer:
      "To learn trading in cryptocurrency or the share market, there was no requirement for a high-end PC in earlier days. A simple laptop or a smartphone can do it.",
  },
  {
    question: "How does the academy help beginners manage trading risks?",
    answer:
      "We are here to teach you from top to bottom about “Risk Management”. That’s why we are here. We give you the disciplined approach that ensures you never take unnecessary losses.",
  },
  {
    question: "I lost a lot of money in intraday trading before. Can this institute help me recover my losses?",
    answer:
      "We are unable to recover your past losses, but ensure that those mistakes won't happen again and teach you discipline.",
  },
];


export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-green-500 font-semibold mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We’ve got answers. Everything you need to know before
            starting your trading journey.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
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

                <span className="text-green-500">
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
