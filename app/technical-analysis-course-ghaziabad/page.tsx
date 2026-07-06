"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import EnquiryForm from "@/components/layouts/EnquiryForm";
import { useState } from "react";

const faqs = [
  {
    q: "Is experience required for a technical analysis course ghaziabad?",
    a: "No, we teach beginners from all age groups. Also, working professionals are taking part in the course.",
  },
  {
    q: "Why is our chart reading course Ghaziabad better than online videos?",
    a: "We are more into skilled and personalized education, rather than focusing on random and instantaneous facts. This is something that static online videos simply cannot replicate.",
  },
  {
    q: "Do we provide a live scenario in the technical trading course ghaziabad?",
    a: "Yes, we do. That's how students can get real-time simulator practice and build confidence with immediate execution.",
  },
  {
    q: "Can I join both candlestick patterns and technical indicators in this training?",
    a: "Yes, you can. We are great at delivering combo courses to our young investors.",
  },
  {
    q: "Who are the mentors of the Share Market Skills Academy Technical hub?",
    a: "Every mentor at our institution is skilled, and they are NISM-certified professionals. They have real-world trading experience in institutional financial markets.",
  },
];

export default function TechnicalAnalysisCourseGhaziabad() {
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
            Master the Markets: Top{" "}
            <span className="text-[#7ED321]">Technical Analysis Course</span>{" "}
            in Ghaziabad
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
                <p className="font-medium text-xl text-gray-800">
                  A structured and professional education is important to succeed in the share market.
                  The <a href="https://www.sharemarketskills.in/" target="_blank" className="underline text-blue-600 hover:text-blue-800">Share Market Skills Academy Technical</a> sessions are the best. The entire course is
                  designed for thorough analysis and training.
                </p>
                <p>
                  Each of the designed courses bridges the gap between raw financial data and actionable
                  trading strategies. Enrolling in a premier{" "}
                  <a href="https://www.sharemarketskills.in/services" target="_blank" className="underline text-blue-600 hover:text-blue-800"> technical analysis course ghaziabad</a> provides the foundation needed to
                  build lasting market confidence.
                </p>

                {/* Section 1 */}
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Decode Price Action with a Chart Reading Course in Ghaziabad
                </h2>
                <p>
                  A specialized <strong>chart reading course ghaziabad</strong> helps you interpret
                  historical price footprints to predict future directional shifts. That&apos;s why you
                  need something unique. Not all random coaching ideas and institutions can provide proven
                  knowledge.
                </p>
                <p>
                  We help traders to study raw price trends, support levels, and resistance zones
                  directly on live charts. Students shift from simple guesswork to a professional
                  rule-based mindset. This foundational training is the best to have. Here, every
                  individual student can protect their trading capital while targeting clear, structured
                  market moves.
                </p>
                <p>Here, we highlight our core insights and training we teach to young share market learners:</p>
                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Trend lines and channels",
                    "Key horizontal support and resistance levels",
                    "Chart patterns & Volume verification",
                    "Identifying market structure & Practical chart tracking",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Section 2 */}
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Master the Core with a Technical Trading Course in Ghaziabad
                </h2>
                <p>
                  A comprehensive <strong>technical trading course ghaziabad</strong> gives you the
                  strategies needed to navigate volatile intraday and swing trading environments. Now,
                  students can master the behavioral psychology needed to cut losses quickly and let
                  winning trades run efficiently.
                </p>
                <p>
                  In our campaign, we provide intensive live simulator training and historical market
                  case studies. This phase of learning moves beyond basic tracking to cover precise risk
                  management protocols, position sizing, and protective stop-loss placements.
                </p>
                <p>
                  It&apos;s important to{" "}
                  <strong>learn technical analysis in ghaziabad</strong> step by step. That&apos;s how
                  you build knowledge methodically. Our professionals give you the perfect start. We
                  begin with basic market mechanics before advancing to complex multi-layered trading
                  systems.
                </p>
                <p>
                  Also, we introduce a structured{" "}
                  <strong>candlestick course ghaziabad</strong> framework and allow proven{" "}
                  <strong>indicator based trading ghaziabad</strong> models. That&apos;s how young
                  students can confidently build their own personalized trading setups.
                </p>
                <p>
                  Gain an institutional edge over retail traders with a practical{" "}
                  <strong>technical trading course ghaziabad</strong>.
                </p>

                {/* Section 3 */}
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Perfect Timing via Candlestick and Indicator Systems
                </h2>
                <p>
                  A dedicated <strong>candlestick course ghaziabad</strong> teaches you to read
                  individual and multi-bar formations. They give you visual patterns. However, they must
                  be validated first.
                </p>
                <p>
                  To do so, traders use data-driven{" "}
                  <strong>indicator based trading ghaziabad</strong> tools like the Relative Strength
                  Index (RSI), Moving Average Convergence Divergence (MACD), and Exponential Moving
                  Averages (EMA).
                </p>
                <p>
                  Combine price action and mathematical filters with advanced{" "}
                  <strong>indicator based trading ghaziabad</strong> models.
                </p>

                {/* Conclusion */}
                <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
                  <p className="font-bold text-gray-900 mb-2">Conclusion</p>
                  <p>
                    It&apos;s vital to get true financial independence in 2026. The Share Market Skills
                    Academy Technical training center provides you with deep chart insights, systematic
                    strategies, and the emotional discipline needed for long-term profitability.
                  </p>
                  <p>
                    Secure your financial independence by <a href="https://www.sharemarketskills.in/contact" target="_blank" className="text-blue-600 hover:text-blue-800 underline">scheduling a session at the top technical analysis course ghaziabad today!</a>
                  </p>
                </div>

                {/* FAQs */}
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">FAQs</h2>
                <div className="space-y-3">
                  {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div
                        key={index}
                        className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? "border-[#7ED321] shadow-md"
                            : "border-gray-200 hover:border-[#7ED321]"
                        }`}
                      >
                        {/* Question — clickable */}
                        <button
                          onClick={() => toggle(index)}
                          className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <span className="font-semibold text-gray-900 text-base">
                            Q: {faq.q}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`flex-shrink-0 text-[#7ED321] transition-transform duration-300 ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>

                        {/* Answer — shown when open */}
                        <div
                          className={`px-5 text-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? "max-h-48 pb-4 opacity-100" : "max-h-0 opacity-0"
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
      </section >
    </div >
  );
}
