"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import EnquiryForm from "@/components/layouts/EnquiryForm";
import { useState } from "react";

const faqs = [
  {
    q: "Is a commerce course mandatory to learn trading?",
    a: "No, anyone from any field can join our course and get the perfect education about complex market dynamics through simple analogies from our professionals.",
  },
  {
    q: "Is it okay to have a job and learn trading at Share Market Skills Academy?",
    a: "Yes, we provide a completely new schedule for working professionals. Therefore, we have weekend and evening batches. Here, we accommodate students and busy corporate professionals.",
  },
  {
    q: "What is the ideal amount to invest first?",
    a: "For new people, we insist on investing as little as ₹1,000–₹5,000. Through this minor investment, they can learn how to scale up the capital and grow their confidence during the live practice.",
  },
  {
    q: "Do I get certification after the beginner course?",
    a: "Yes, after the completion of the stock market course for beginners ghaziabad, our officials will assign the certificate to you.",
  },
  {
    q: "What are the unique features we provide at Share Market Skills Academy?",
    a: "From our end, we offer exclusive access to live market community rooms and weekly mentor review sessions. These are the best ways to analyze and fix your bad trades.",
  },
];

export default function BeginnerStockMarketCourseGhaziabad() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="bg-white text-black">
      {/* ================= BANNER ================= */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#7ED321] mb-4 transition"
          >
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Kickstart Your Wealth Journey: Master the{" "}
            <span className="text-[#7ED321]">Ultimate Stock Market Course</span>{" "}

            for Beginners Ghaziabad
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none text-gray-700 leading-relaxed text-lg space-y-8">

                {/* Intro */}
                <p className="text-gray-700 leading-relaxed">
                  For new people, the financial world and trading ideology feel like a completely foreign language. That's why you need professionals to give you the right ideas, starting with reading stock charts and tracking volatile price fluctuations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Time to give a perfect start, as we bridge the void between pure academic theory and real-time live market implementation. We help you establish a resilient passive income source. The comprehensive{" "}
                  <Link
                    href="https://www.sharemarketskills.in/stock-market-training"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    stock market course for beginners ghaziabad
                  </Link>{" "}
                  offered by{" "}
                  <Link
                    href="https://www.sharemarketskills.in/contact"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share Market Skills Academy Beginners
                  </Link>{" "}
                  will dismantle your trading anxieties.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This is the right platform and time where you can get the education based on a reliable, data-backed blueprint for financial success.
                </p>

                {/* Section 1 */}
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Exploring the Foundation: Share Market Basics Course Ghaziabad
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our <span className="font-bold text-black">share market basics course ghaziabad</span>  covers essential mechanics. The entire course is based on the following aspects:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Teach you about how stock exchanges operate",
                    "Setting up specialized Demat and trading accounts",
                    "Understanding market terminology.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Here, we give you the confidence. Yes, the professionals understand what you lack and where to strike first for better progress and proven results. That's why we prioritize the following tactics:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Tell you about understanding the core mechanics of order execution.",
                    "Give you an understanding of deciphering market trends.",
                    "Educate you about the difference between short-term trading and long-term investing.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  All the foundational knowledge can protect you from executing a trade blindly.{" "}
                  <Link
                    href="https://www.sharemarketskills.in/contact"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to secure your free preview session at Share Market Skills Academy today!
                  </Link>
                </p>

                {/* Section 2 */}
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Transition from Theory to Practice: Beginner Trading Course Ghaziabad
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  It is important to learn the basics first. Our comprehensive <span className="font-bold text-black">beginner trading course ghaziabad</span>  shifts your learning. That is why we work closely with NISM-certified mentors. Their presence can teach you more about the following:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Standard Charting Software",
                    "Recognize Profitable Candlestick Patterns",
                    "Utilize Core Technical Indicators",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Also, we conduct specialized <span className="font-bold text-black">trading classes for beginners ghaziabad.</span> This elevates the knowledge and experience. Here, we teach you about the following marketing behaviour:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Day-Trading Methodologies",
                    "Proper Volume Analysis",
                    "Structural Price Action Setups",
                    "Evaluate Core Financial Ratios",
                    "Read Corporate Balance Sheets",
                    "Identify Deeply Undervalued Companies",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  That's why you should get the targeted <span className="font-bold text-black">investment basics course ghaziabad.</span>  Waste no more time reserving your seat in our premier academy batch today –{" "}
                  <Link
                    href="tel:+918460188483"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    call us now!
                  </Link>
                </p>

                {/* Conclusion */}
                <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
                  <p className="font-bold text-gray-900 mb-2 text-xl">Conclusion</p>
                  <p className="text-gray-700 leading-relaxed">
                    The structured <span className="font-bold text-black">stock market course for beginners ghaziabad</span> at <span className="font-bold text-black">Share Market Skills Academy Beginners</span>  is always going to give you the best experience of knowledge and profit. We teach you to live the best way possible and enable your true financial independence status.
                  </p>
                  <p className="mt-4 font-semibold text-[#7ED321]">
                    Now is the time to enroll in the best beginner stock market course in ghaziabad right now!
                  </p>
                </div>

                {/* FAQ Section — Clickable Accordion */}
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                  FAQs
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div
                        key={index}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                          ? "border-[#7ED321] shadow-md"
                          : "border-gray-200 hover:border-[#7ED321]"
                          }`}
                      >
                        {/* Question — clickable button */}
                        <button
                          onClick={() => toggle(index)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 cursor-pointer focus:outline-none bg-white"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-gray-900 text-base">
                            Q: {faq.q}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`flex-shrink-0 text-[#7ED321] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                              }`}
                          />
                        </button>

                        {/* Answer — shown when open */}
                        <div
                          className={`px-6 text-gray-700 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                          {faq.a}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* Sidebar / Enquiry Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
