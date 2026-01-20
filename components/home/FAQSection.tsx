"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is this stock market course suitable for complete beginners?",
    answer:
      "Yes. Our stock market courses start from the basics and gradually move towards advanced trading and investing strategies, making them ideal for complete beginners.",
  },
  {
    question: "Do you provide crypto trading courses in Ghaziabad?",
    answer:
      "Yes. We offer crypto trading courses in Ghaziabad along with online cryptocurrency training programs for learners across India.",
  },
  {
    question: "Is cryptocurrency trading legal in India?",
    answer:
      "Cryptocurrency trading is not illegal in India. Our courses focus on proper education, compliance awareness, and effective risk management strategies.",
  },
  {
    question: "Are online classes available?",
    answer:
      "Yes. We provide online stock market and crypto trading courses that can be accessed from anywhere in India.",
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
