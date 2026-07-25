import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FAQSection from "./FAQSection";
import EnquiryForm from "@/components/layouts/EnquiryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Education Center Ghaziabad: Top Finance Training Institute",
  description:
    "Master stock trading, wealth management, and market investing at our leading financial education center ghaziabad. Learn from industry experts and grow your wealth.",
};

export default function FinancialEducationCenterGhaziabad() {
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
            Financial Education Center <span className="text-[#7ED321]">Ghaziabad</span> <br />
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

                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  Master the Markets: The Ultimate Guide to the Best Financial Education Center Ghaziabad
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  In 2026, traditional savings accounts just cannot keep up with inflation anymore. True financial freedom begins when you start relying on informed, strategic financial decision-making.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The best financial educator always finds it easy to teach you about the real share market art. With us, you can learn the art of making your money work hard for you. Joining an elite <Link href="https://www.sharemarketskills.in/stock-market-training" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">financial education center ghaziabad</Link> helps individuals to get the following benefits:
                </p>

                <ul className="space-y-4 list-none pl-0">
                  {[
                    "Decode market complexities",
                    "Eliminate bad debts",
                    "Master advanced budgeting systems"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-semibold text-gray-900">
                  Secure your future by joining the top financial education center ghaziabad today!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
                  Choosing the Right Investment Education Institute Ghaziabad for Your Goals
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  A top-tier investment education institute ghaziabad stands out by offering deeply structured and step-by-step training paths.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The Share Market Skills Academy can tailor education and financial advice specifically for absolute beginners and advanced professionals. With us, students gain the confidence needed to navigate volatile bull and bear cycles.
                </p>

                <p className="text-gray-900">
                  Important Insights for Choosing <Link href="https://www.sharemarketskills.in/" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Share Market Skills Academy</Link>:
                </p>

                <ul className="space-y-4 list-none pl-0">
                  {[
                    "Comprehensive training",
                    "Practical knowledge",
                    "Mastery of risk-to-reward metrics",
                    "Create customized learning tracks",
                    "Teach in live market conditions."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-semibold text-gray-900">
                  Waste no time and start scaling your portfolio with the premier investment education institute ghaziabad!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
                  Elevating Daily Financial Knowledge with Financial Literacy Classes Ghaziabad
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  A structured finance training institute ghaziabad offers a clear roadmap that effectively bridges this knowledge gap. Enrolling in premium financial literacy classes ghaziabad is the most important decision for everyday individuals
                </p>

                <p className="text-gray-700 leading-relaxed">
                  This way you can get insights about smart tax optimization, comprehensive retirement structuring, and efficient cash flow oversight.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  After the completion of the course and successful sessions of every class, citizens can successfully transition from basic living to sustainable, long-term wealth abundance.
                </p>

                <p className="font-semibold text-gray-900">
                  Through our strategic guidance, users can understand the following features about the share market:
                </p>

                <ul className="space-y-4 list-none pl-0">
                  {[
                    "Diverse ecosystems offer profitable investment avenues",
                    "Multi-asset knowledge",
                    "In-depth REIT and ETF training",
                    "Capital preservation techniques",
                    "All-weather portfolio construction",
                    "Understanding global economic correlations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  The specialized financial education center for traders in ghaziabad can solve all the issues. With Share Market Skills Academy, students get a cutting-edge curriculum focusing on the following course structure:
                </p>

                <ul className="space-y-4 list-none pl-0">
                  {[
                    "advanced technical analysis",
                    "volume profile analysis",
                    "multi-timeframe candle strategies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#7ED321] text-xl">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-semibold text-[#7ED321]">
                  Master professional technical charts at the elite financial education center for traders in ghaziabad now!
                </p>

                <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">
                  <p className="font-bold text-gray-900 mb-2 text-xl">Conclusion</p>
                  <p className="text-gray-700 leading-relaxed">
                    Step out of financial uncertainty today. By actively partnering with a premier financial education center ghaziabad, get in touch with the Share Market Skills Academy. With us, you can take your rightful place among the market's most profitable, elite inner circle.
                  </p>
                  <p className="mt-4  text-[#7ED321]">
                    <Link href="https://www.sharemarketskills.in/contact" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Join the ultimate investment learning center ghaziabad and capitalize on your investment right away!</Link>
                  </p>
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

      {/* ================= FAQ SECTION ================= */}
      <FAQSection />
    </div>
  );
}
