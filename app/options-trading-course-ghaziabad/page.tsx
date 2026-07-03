import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EnquiryForm from "@/components/layouts/EnquiryForm";

export const metadata: Metadata = {
  title: "Professional Derivatives Trading Course Ghaziabad - Learn Live Trading",
  description: "Advance your skills with our derivatives trading course ghaziabad. Master position sizing, minimize drawdowns, and build professional consistency in live market environments.",
};

export default function OptionsTradingCourseGhaziabad() {
  return (
    <div className="bg-white text-black">
      {/* ================= BANNER ================= */}
      <section
        className="relative h-[40vh] md:h-[50vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center md:text-left">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#7ED321] mb-6 transition font-medium"
          >
            <ArrowLeft size={18} /> Back to Blogs
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Options Trading Course <span className="text-[#7ED321]">Ghaziabad</span> <br />
            – Share Market
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

                {/* <h3 className="text-2xl font-bold text-black mt-10 mb-4">Introduction</h3> */}
                <p className="font-medium text-xl text-gray-800">
                  It is important to get your hands on the structured mentorship, as this type of guidance is necessary to navigate the complexity of the financial market. Social media speculations or random theories won’t work in real-world cases.
                </p>
                <p>
                  At <Link href="/" className="text-blue-600 underline hover:text-blue-800">Share Market Skills Academy</Link>, every professional delivers a meticulously structured, institutional-grade curriculum. For any young or amateur learner, this is the right place to understand <Link href="/services" className="text-blue-600 underline hover:text-blue-800">options trading course ghaziabad</Link>.
                </p>
                <p>
                  Our professionals fill the voids between theoretical mechanics and live market execution. We are thankful to our team for bringing the interactive options trading classes ghaziabad. This brings students directly into live market simulation labs.
                </p>
                <p className=" text-gray-800">
                  Time to eliminate speculative behaviors with systematic, rule-based execution – <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sharemarketskillsacademy@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ">book our live derivatives trading course ghaziabad now!</a>
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
                  Master the Markets with the Premier Options Trading Course Ghaziabad
                </h2>
                <p>
                  The premier options trading course ghaziabad provided by Share Market Skills Academy is friendly for every type of learner. This delivers a meticulously structured, institutional-grade curriculum.
                </p>
                <p>
                  We design a perfect program that works on the extraction of premium knowledge and basic concpects, such as the intrinsic mechanics of calls and puts, into highly advanced market analysis tools.
                </p>
                <p>
                  After the completion of the sessions, the learner can now understand Option Chain analysis, decode Open Interest (OI) build-up, and analyze volume spikes flawlessly.
                </p>

                <div className="my-6 bg-gray-50 p-6 rounded-xl border border-gray-150">
                  <p className="font-bold text-gray-900 mb-3 text-lg">Let’s understand shortly what else we provide here:</p>
                  <ul className="space-y-4 list-none pl-0">
                    {[
                      "Comprehensive coverage of foundational Call and Put mechanics.",
                      "Advanced evaluation of Option Chains and volume trends.",
                      "Tracking institutional footprints via Open Interest (OI) analysis.",
                      "Differentiating retail speculation from professional market mapping."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#7ED321] text-xl">✔</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Don’t wait anymore – secure your seat at our premier options trading course ghaziabad today!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
                  Decode Complex Strategies via the Futures and Options Course Ghaziabad
                </h2>
                <p>
                  Our advanced futures and options course ghaziabad reveals the best things to learners. Now, they can explore more about market leverage, margin management, and mathematical hedging. Every step is necessary, as they safeguard your trading account for the future.
                </p>
                <p>
                  With our help, students can discover how to engineer rule-based, market-neutral setups. This syllabus can teach you about Iron Condors, Bull Call Spreads, and Bear Put Spreads. Also, we don’t miss the chance to teach you how time decay (θ) can work as an income generator rather than a hidden cost.
                </p>
                <p className="font-medium text-gray-800">
                  Gain access to our futures and options course ghaziabad and master the mathematical secrets of elite option sellers!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
                  Protect and Multiply Capital via the Derivatives Trading Course Ghaziabad
                </h2>
                <p>
                  Our derivatives trading course ghaziabad is designed with the idea of capital preservation. Here, we teach young learners about risk mitigation, capital allocation, and trading psychology.
                </p>

                <div className="my-6 bg-gray-50 p-6 rounded-xl border border-gray-150">
                  <p className="font-bold text-gray-900 mb-3 text-lg">Let’s get into the important structure first:</p>
                  <ul className="space-y-4 list-none pl-0">
                    {[
                      "Train you to approach the market like an actuarial business.",
                      "Help you to establish optimal stop-loss protocols and calculate strict risk-per-trade limits",
                      "Strengthen learners in building the psychological discipline required for long-term consistency."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl font-bold">●</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  Join our collaborative options trading classes ghaziabad now and experience the difference on your own!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
                  From Basics to Brilliance: Best Options Trading Course in Ghaziabad for Beginners
                </h2>
                <p>
                  At Share Market Skills Academy, we provide the best options trading course in ghaziabad for beginners. Here, we walk you through the step-by-step process from the very beginning. That’s how we let you into advanced f&o training ghaziabad modules without leaving you feeling lost or confused.
                </p>

                <div className="my-6 bg-gray-50 p-6 rounded-xl border border-gray-150">
                  <p className="font-bold text-gray-900 mb-3 text-lg">Let’s understand the module first:</p>
                  <ul className="space-y-4 list-none pl-0">
                    {[
                      "Designing a beginner-friendly pat",
                      "Step-by-step guidance",
                      "Simplification of complex Wall Street jargon",
                      "Providing direct personal mentorship",
                      "Smooth learning transitions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#7ED321] text-xl">✔</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p>
                  <Link href="/contact" className="text-blue-600 underline hover:text-blue-800">Secure your enrollment in the best options trading course in ghaziabad for beginners today <br /> <span className="flex justify-center">with us!</span></Link>
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
                  Conclusion
                </h2>
                <p>
                  Share Market Skills Academy provides a complete ecosystem to help you succeed, offering great analytical skills, advanced multi-leg strategies, and psychological conditioning. Never forget its name and join today to start your journey on the path of professional trading consistency!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6 border-b pb-2">FAQs</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "1. What makes the Share Market Skills Academy Options program different from free online videos?",
                      a: "Share Market Skills Academy offers a verified, step-by-step framework, which is better than the others. We bring live-market trading labs to build practical execution confidence."
                    },
                    {
                      q: "2. Do I need a strong background in finance or math to join the course?",
                      a: "No, ideas on basic math calculations are required at first, as we start with fundamental and easy real-world concepts."
                    },
                    {
                      q: "3. Can a working corporate professional comfortably manage the batch timings?",
                      a: "Yes, there is flexibility in our options trading course ghaziabad. That’s why corporate employees can join us at their convenience."
                    },
                    {
                      q: "4. Does your academy offer ongoing help after the formal course ends?",
                      a: "Yes, we are keen to deliver ongoing support. Also, we offer a private trader community and regular post-training doubt-clearing sessions."
                    },
                    {
                      q: "5. What is the minimum capital required to start live options trading?",
                      a: "We recommend that you invest around ₹20,000 to ₹30,000. With this, you can practice proper risk management using single-lot hedged strategies."
                    }
                  ].map((faq, index) => (
                    <details key={index} className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 bg-gray-50 font-medium">
                        <h4 className="font-bold text-lg text-black">{faq.q}</h4>
                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 border-t border-gray-200 text-gray-700 leading-relaxed bg-white">
                        <p>{faq.a}</p>
                      </div>
                    </details>
                  ))}
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
