"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export const metadata = {
  title: "Top-Rated Share Market Course in Ghaziabad | SMSA Trading Academy",
  description:
    "Join SMSA, the leading trading academy in Ghaziabad, for expert-led share market courses. Master technical analysis, options trading, and investment strategies with practical, live-market training designed for beginners and pros alike.",
};

const faqs = [
  {
    question: "Is the course fee for the investment course in Ghaziabad affordable?",
    answer:
      "Yes, we pride ourselves on offering an affordable trading course in Ghaziabad that provides maximum value through high-quality mentorship.",
  },
  {
    question: "Do you teach mobile trading or only desktop-based trading?",
    answer:
      "We provide a share market course in Ghaziabad on both platforms, ensuring you can manage your trades and analyze charts using professional mobile apps and advanced desktop software.",
  },
  {
    question: "What makes SMSA the best share market institute in Ghaziabad?",
    answer:
      "SMSA provides a unique investment course in Ghaziabad, composed of 100% practical live-market training and a curriculum updated for 2026's AI-driven trading environment.",
  },
  {
    question: "Will I get a certificate after completing the trading course in Ghaziabad?",
    answer:
      "Yes, every student receives a professional certification from ShareMarket Skills Academy.",
  },
  {
    question: "Do you offer online or offline trading courses in Ghaziabad?",
    answer:
      "We offer both flexible modes, including interactive offline classroom sessions at our Ghaziabad center and online live classes.",
  },
];

export default function ServicesDetailPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-black">
      {/* ================= BANNER ================= */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">Home</Link> / Services
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Best Share Market Course in <span className="text-[#7ED321]">Ghaziabad</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Reliable financial services designed for growth, stability & security.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Financial <span className="text-[#7ED321]">Solutions</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            We offer a complete range of investment and financial services tailored to help you build long-term wealth with confidence.
            Our expert-driven approach focuses on safety, consistency, and informed decision-making.
          </p>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="text-green-500 font-semibold mb-2">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions? We’ve got answers. Everything you need to know before starting your trading journey.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6"
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
    </div>
  );
}
