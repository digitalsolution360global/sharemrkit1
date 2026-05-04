"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Are there affordable stock market training options in Ghaziabad?",
    answer: "We offer competitive fee structures and flexible payment plans to ensure quality financial education is accessible to everyone. Our focus is on providing a high Return on Investment (ROI) through the skills you gain.",
  },
  {
    question: "Do you offer live market training in Ghaziabad?",
    answer: "Yes, our 'Live Trading Floor' sessions allow students to trade alongside mentors during market hours to understand real-time price action.",
  },
  {
    question: "Is this training suitable for complete beginners?",
    answer: "Absolutely, our modules start from the absolute basics of 'What is a Stock?' before moving to advanced derivative strategies. We ensure every student develops a strong foundational understanding before tackling complex technical analysis.",
  },
  {
    question: "How does the Share Market Skills Academy help with trading psychology?",
    answer: "We include dedicated 'Mindset Mastery' sessions that focus on risk management, discipline, and emotional control of our students.",
  },
  {
    question: "Can I attend classes online, or are they only offline?",
    answer: "While we are famous for our offline center in Ghaziabad, we also offer high-quality interactive online sessions for remote learners.",
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
            Master the Markets:{" "}
            <span className="text-[#7ED321]">
              Premier Stock Market Training in Ghaziabad
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
              Introduction: Get Live Stock Market Training in Ghaziabad 
            </h2>
            <p>
              The financial world is a perfect place to invest. Many individuals and corporations are putting their resources into the share market to thrive with the giants. However, some of the beginners don’t understand what to follow and where to invest first.
            </p>

            <p className="mt-6">
              They require expert guidance from a trusted academy that teaches how to thrive in the world of the share market in Ghaziabad. It is Share Market Skills Academy that lets beginners get precision and confidence, and helps them move beyond the guesswork.
            </p>
            <p className="mt-6">
              Choosing the right market training institute Ghaziabad is the most critical decision an aspiring investor can make. Whether you are a student or a working professional, in any field you are in, we prepare the modules for equity trading training Ghaziabad. 
            </p>
            <p className="mt-4 font-medium text-[#7ED321]">
              Let every student thrive with the right knowledge and professional stock market training in Ghaziabad! Join Share Market Skills Academy today to unlock your financial growth anywhere in Ghaziabad!
            </p>

            {/* Get Comprehensive Insights Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Facts to Check in Comprehensive Equity Trading Training Ghaziabad
            </h2>

            <p className="mt-4">
              The investment training Ghaziabad isn’t easy unless you have joined the right stock market training academy. The sessions of Share Market Skills Academy always teach the right techniques to get maximum benefits in your share market investment.
            </p>

            <p className="mt-4 font-medium">
              We teach you the following equity trading technique: 
            </p>
            <ul className="space-y-4 list-none pl-0 mt-4">
              {[
                "Analyze balance sheets",
                "Interpret 2026 quarterly earnings in the context of global inflation",
                "Identify multibagger stocks before they hit the mainstream radar"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             <p className="mt-4">
              With Share Market Skills Academy, your journey into the equity markets is supported by rigorous research and a comprehensive understanding of the Indian economic landscape.
            </p>
            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Start Your Journey Today</p>
              <p className="mt-4 font-semibold text-[#7ED321]">
                📞 Join our classes aligned for trading training Ghaziabad and become a confident stakeholder in India's growth story afterwards!  
              </p>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-black mt-8 mb-4">
              Get Complete Insights on Specialized Investment Training Ghaziabad
            </h3>
            <p>
              The stock market training in Ghaziabad isn’t rare anymore, as Share Market Skills Academy Ghaziabad takes care of all the categories of financial growth. As our experts don’t focus on old and outdated tricks and catalogues.  
            </p>
            <p className="mt-4">
             As the market continuously changes, we don't rely on traditional saving methods as they are no longer sufficient. Our academy teaches you how to build a diversified "2026-Ready" portfolio.  
            </p>
            <p className="mt-4 font-medium">
              Let’s take a look at what we include in our stock trading classes Ghaziabad: 
            </p>
            <ul className="space-y-4 list-none pl-0 mt-4">
              {[
                "Prepare lessons based on “2026-ready”, a mix of large-cap stability and mid-cap growth.",
                "Plan to educate students with Mutual Funds, ETFs, and the digital economy.",
                "Deliver a personalized financial roadmap designed to meet your life goals."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-5 mt-4 rounded-r-lg">
              <p className="font-semibold text-gray-900">
                ✅ At Share Market Skills Academy Ghaziabad, we turn savers into savvy, strategic investors.
              </p>
            </div>


            {/* Conclusion */}
            <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
              <p className="font-bold text-gray-900 mb-2">Conclusion</p>
              <p>
                The journey to build a successful financial career isn’t a dream anymore, unless you receive the right share market training ghaziabad. At Share Market Skills Academy, we not only offer share market education but also create confident investors who can change their financial future easily. 
              </p>
              <p className="mt-3">
                When you join the right market training institute Ghaziabad, there is no stopping for you to achieve your targets. Don't let the market's complexity intimidate you; let us simplify it. Time to transform your financial destiny today!
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