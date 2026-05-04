"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is the course fee for the investment course in Ghaziabad affordable?",
    answer: "Yes, we pride ourselves on offering an affordable trading course in Ghaziabad that provides maximum value through high-quality mentorship.",
  },
  {
    question: "Do you teach mobile trading or only desktop-based trading?",
    answer: "We provide a share market course in ghaziabad on both platforms, ensuring you can manage your trades and analyze charts using professional mobile apps and advanced desktop software.",
  },
  {
    question: "What makes SMSA the best share market institute in Ghaziabad?",
    answer: "SMSA provides a unique investment course ghaziabad, composed with 100% practical live-market training and a curriculum updated for 2026's AI-driven trading environment.",
  },
  {
    question: "Will I get a certificate after completing the trading course in Ghaziabad?",
    answer: "Yes, every student receives a professional certification from ShareMarket Skills Academy.",
  },
  {
    question: "Do you offer online or offline trading course ghaziabad?",
    answer: "We offer both flexible modes, including interactive offline classroom sessions at our Ghaziabad center.",
  },
];

// Type for FAQ item
type FAQItem = {
  question: string;
  answer: string;
};

export default function ShareMarketCourseBlog() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="bg-white text-black">
      {/* ================= BANNER ================= */}
      <section
        className="relative min-h-[50vh] pt-20 flex items-center bg-cover bg-center"
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
            Master the Markets with SMSA:{" "}
            <span className="text-[#7ED321]">
              Best Share Market Course in Ghaziabad
            </span>
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">
          <div className="prose max-w-none">
            {/* Introduction */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Introduction
            </h2>
            <p>
              The world of finance is evolving with the latest trends and fluctuations due to the rise and fall in the current market. So in 2026, understanding the market shares and values before investing money in the share market is always the wiser move.
            </p>

            <p className="mt-6">
              That’s why you need a platform that offers a comprehensive share market course in Ghaziabad. Users should understand why the ShareMarket Skills Academy, SMSA Ghaziabad is the right choice to start your career in finance or to seek a secondary income.
            </p>
            <p className="mt-6">
              Time to focus on the structured approach to get next-level guidance and never feel lost in a sea full of financial turbulence. 
            </p>

            {/* Get Comprehensive Insights Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Get Comprehensive Insights on Our Stock Market Course Ghaziabad
            </h2>

            <p className="mt-4">
              The share market classes ghaziabad are worth taking when you find the right tutor and tutorial; otherwise, it’s just a waste of time. 
            </p>
            <p className="mt-4">
              So, the ShareMarket Skills Academy is the only reliable trading institute ghaziabad that can help you to become a prominent and professional investor in the share market after the completion of the course. 
            </p>

            <p className="mt-4 font-medium text-[#7ED321]">
              At Share Market Skills Academy Ghaziabad; we offer the following
              services:
            </p>

            {/* Service 1 */}
            <h3 className="text-xl md:text-2xl font-bold text-black mt-8 mb-4">
              1. Professional Stock Market Training for Beginners
            </h3>
            <p>
              Getting a proper trading course ghaziabad at SMSA is easy, as we plan everything easy for beginners. Our students come from all types of backgrounds that have the enthusiasm to achieve something more and unique out of the share market. 
            </p>
            <p className="mt-4">
              So, getting a practical stock market course ghaziabad with beginners’ guide is easier as they are all prepared by professionals who have decades of experience in Share Market, Financing, and Chartered Accounting.  
            </p>
            <p className="mt-4">
              We ensure that you understand the psychological barriers that often lead to early losses. We take a slow, methodical approach to ensure no student is left behind. That’s why we become the most sought-after investment and trading course ghaziabad. 
            </p>
            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-5 mt-4 rounded-r-lg">
              <p className="font-semibold text-gray-900">
                ✅ Ready to build your financial foundation from scratch? Connect with the best share market course in ghaziabad for beginners today!
              </p>
            </div>

            {/* Service 2 */}
            <h3 className="text-xl md:text-2xl font-bold text-black mt-10 mb-4">
              2. Advanced Technical Analysis and Chart Reading
            </h3>
            <p>
              After we complete the basics, we focus on the transitions that
              help students to understand the advanced analysis involved in the
              share market. We named this phase of stock market training
              ghaziabad as{" "}
              <span className="italic">"Understanding the Language of the Markets"</span>
              !
            </p>
            <p className="mt-4">
              At ShareMarket Skills Academy, we emphasize clean trading and advanced learning. So, we offer more than you won't just see those patterns in a textbook. 
            </p>
            <p className="mt-4">
              This level of expertise is why we are recognized as the premier trading academy ghaziabad for those who want to master the art of timing their entries and exits with surgical precision.
            </p>
            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-5 mt-4 rounded-r-lg">
              <p className="font-semibold text-gray-900">
                📊 Stop guessing and start analyzing like a pro trader with an
                affordable trading course in ghaziabad at SMSA!
              </p>
            </div>

            {/* Service 3 */}
            <h3 className="text-xl md:text-2xl font-bold text-black mt-10 mb-4">
              3. Mastering Options Trading and Hedging Strategies
            </h3>
            <p>
              The year 2026 is full of surprises, as the share market experiences more derivative segments and presents significant opportunities. However, it’s nearly impossible for a beginner trader to understand them all easily. 
            </p>
            <p className="mt-4">
              That’s why we offer different courses and options.  They are the tools for a consistent income, not a lottery ticket. With the right training, we strengthen our students to become confident investors who can navigate bear markets with ease.
            </p>
            <p className="mt-4">
              We ensure that when you put your hard-earned money into a stock, it’s based on data, not rumors. We cover portfolio diversification, asset allocation, and the power of compounding.
            </p>

            {/* Conclusion */}
            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Conclusion</p>
              <p>
                By choosing our share market course in Ghaziabad, you aren't just buying a series of lessons; you are gaining a lifetime of support and a seat at the table with the best trading academy in Ghaziabad.
              </p>
              <p className="mt-3 font-semibold text-[#7ED321]">
                Empower yourself with the skills to navigate the bulls and bears of 2026 and beyond. Join ShareMarket Skills Academy today!
              </p>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}