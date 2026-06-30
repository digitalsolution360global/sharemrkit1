"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import EnquiryForm from "@/components/layouts/EnquiryForm";

export default function IntradayTradingCourseGhaziabad() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Intraday Trading Course in <span className="text-[#7ED321]">Ghaziabad</span> <br />
            Share Market Skills Academy
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

                <p className="font-medium text-xl text-gray-800">
                  Trading without a defined strategy leads to misleading information and training. No beginner would want that. That&apos;s why young investors, those who are starting with intraday trading, need guidance from the best.
                </p>

                <p>
                  That&apos;s how they can take the right path and avoid capital loss. At Share Market Skills Academy, you can attain financial freedom with a structured roadmap. As a premium <Link href="/stock-market-training" className="text-blue-600 hover:underline">intraday trading course ghaziabad</Link>, our professionals help traders to lead the best path toward systematic execution.
                </p>

                <p>
                  Get complete training about the quick momentum shifts, technical chart reading, and strict psychological boundaries – <Link href="/contact" className="text-blue-600 hover:underline">Join our class today!</Link>
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Why Choose Our Comprehensive Day Trading Academy?
                </h2>

                <p>
                  A specialized day trading course ghaziabad bridges the issues all the time. The young learners can join the activities between academic theory and actual execution. That&apos;s what matters the most.
                </p>

                <p>
                  We aspire for traders to learn to scan volatile stocks, identify support and resistance zones, and interpret price action with high precision.
                </p>

                <p>
                  We come up with the finest and most structured framework, and students can understand everything related to the <Link href="/" className="text-blue-600 hover:underline">Share Market Skills Academy Intraday</Link>:
                </p>

                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Candlestick Formations",
                    "Momentum Indicators",
                    "Volume Analysis",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  Bring the best range of advise into your desk at Share Market Skills Academy – Reserve your seat at our premier academy today!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Experience Practical Learning in the Live Market
                </h2>

                <p>
                  The main area to focus is to keep things all together. Professionals join the best intraday trading course in ghaziabad with live market exposure.
                </p>

                <p>
                  Yes, it is important to give young researchers the right exposure. It builds true confidence. Our hands-on training methodology simulates actual trading environments, guiding you through:
                </p>

                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Pre-Market Analysis",
                    "Live Order Execution",
                    "Risk-Reward Management",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Step-by-Step Curriculum of Our Intraday Classes
                </h2>

                <p>
                  Comprehensive intraday classes ghaziabad can enlighten the complexity easily. It is an effective treat for complete beginners, corporate employees, and retail investors alike. In short, we follow the given curriculum architecture:
                </p>

                <ul className="space-y-3 list-none pl-0">
                  {[
                    "Module 1: Market Mechanics & Order Types",
                    "Module 2: Technical Chart Patterns & Price Action Basics",
                    "Module 3: Advanced Options & Derivative Volatility",
                    "Module 4: Risk Sizing & Trading Psychology Safeguards",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p>
                  A live trading course ghaziabad is a secure and proven way to teach students with real-time feedback from seasoned market mentors. Also, personalized intraday coaching ghaziabad ensures to avoid common and complex trading pitfalls easily.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-4">
                  Conclusion
                </h2>

                <p>
                  Building a sustainable career is easy. It is always vital to explore the financial markets with the help of skilled professionals. With Share Market Skills Academy, you can get formal, structured education.
                </p>

                <p>
                  Our system is so focused that it can empower you with the technical skills and emotional discipline required for consistent market performance.
                </p>

                <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-8 rounded-r-lg">
                  <p className="font-bold text-gray-900 mb-2">Take Charge of Your Financial Future</p>
                  <p className="font-semibold text-[#7ED321]">
                    📞 Register now and step confidently into your professional trading career!
                  </p>
                </div>

                {/* FAQs */}
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                  FAQs
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      q: "Can a complete beginner join this training academy?",
                      a: "Yes, there is no need to have any type of prior learning or courses to join our trading institution. We are here to provide guidance step-by-step and keep things action-oriented.",
                    },
                    {
                      q: "What is the minimum capital required to start daily trading?",
                      a: "To start from the basics, we recommend starting from a minimal amount, for instance, INR 5,000 to 10,000 is acceptable. We insist on raising the size of your capital only after mastering risk management.",
                    },
                    {
                      q: "Do you provide official industry certifications upon course completion?",
                      a: "Yes, certification is 100% mandatory and valid from the Share Market Skills Academy. We help prepare interested candidates for professional NISM series certifications.",
                    },
                    {
                      q: "Are there flexible batch timings available for working corporate professionals?",
                      a: "Yes, weekend batches are on! Here, we don't just train young students but professionals too. Our team lets corporate employees upskill without disrupting their regular work routines.",
                    },
                    {
                      q: "Is post-training mentorship support included in this program?",
                      a: "Yes, you can have access to our experts and communicate with them about your doubts through the doubt-clearing sessions. Each session is a perfect treat for anyone dealing with live trading.",
                    },
                  ].map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div
                        key={index}
                        className={`border rounded-lg transition-all duration-300 ${
                          isOpen ? "border-[#7ED321] bg-gray-50/50" : "border-gray-200"
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between text-left p-5 text-gray-900 focus:outline-none"
                        >
                          <span className="font-bold text-lg pr-4">{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? "transform rotate-180 text-[#7ED321]" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            isOpen ? "max-h-96 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="p-5 text-gray-600 leading-relaxed text-base">
                            {faq.a}
                          </div>
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
