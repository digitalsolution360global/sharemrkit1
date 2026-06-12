"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I study the Indian stock market online for free?",
    answer:
      "Yes, you can go through the learning of basic terminologies. But for advanced learning, we recommend joining our classes at Share Market Skills Academy.",
  },
  {
    question: "How much initial money do I need to start investing in India?",
    answer:
      "It is suitable to start investing with as little as ₹100. For beginners, it can build confidence before scaling up capital.",
  },
  {
    question: "What is the main difference between Nifty and Sensex?",
    answer:
      "Both are primary benchmarks of market health. The Nifty represents the top 50 flagship stocks, and the Sensex tracks the top 30 liquid stocks.",
  },
  {
    question: "Is intraday trading safe for complete beginners?",
    answer:
      "Intraday trading may carry unsafe factors for beginners to understand. So, they should focus on long-term investing before exploring fast-paced trading strategies.",
  },
  {
    question: "How long does it take to learn stock market trading professionally?",
    answer:
      "A beginner can grasp the professional concepts within 2 to 3 months. Also, practice and market exposure make you more certain and a long-term player.",
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
