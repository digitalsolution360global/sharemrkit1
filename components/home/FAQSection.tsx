"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "What makes this the best stock market course for beginners in Ghaziabad in 2026?",
    answer:
      "Our procedures are always effective and productive for students to balance the current market with the latest and modern trends. Here, students can get live market practice, including risk management tracking, and comprehensive journey.",
  },
  {
    question:
      "Do you provide advisory tips or direct account management services?",
    answer:
      "No, students only get the best knowledge to work seamlessly in live market practice. Here, we empower you with independent trading skills.",
  },
  {
    question:
      "Can I balance these classes with a full-time professional job?",
    answer:
      "Yes, the weekend batches are the best choice for working professionals. They can learn all about the share market through our Stock Market Coaching Ghaziabad.",
  },
  {
    question:
      "Do I get any certification after completing the Advanced Stock Market Training?",
    answer:
      "Yes, certification is a must. With the course, you do not just receive the certification but the education that works for your benefit in trading.",
  },
  {
    question:
      "Can I take the Cryptocurrency Trading Course alongside the stock market modules?",
    answer:
      "Yes, you can. At Share Market Skills Academy, we offer a Crypto Investment Course and a Stock Market Course for Beginners side by side.",
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
