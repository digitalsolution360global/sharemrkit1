import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FAQSection from "./FAQSection";
import EnquiryForm from "@/components/layouts/EnquiryForm";

export const metadata = {
  title: "How to Study Share Market in India: Beginner’s Guide",
  description: "Learn how to study share market in India using expert steps, exchange basics, and structured courses from Share Market Skills Academy.",
}

export default function ShareMarketSkillsAcademy() {
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
            How to study share market in india {" "}
            <span className="text-[#7ED321]">
              – Share Market Skills Academy
            </span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
                  Introduction: Master the Markets Legally and Strategically
                </h2>

                <p className="font-medium text-xl text-gray-800">
                  The Indian financial ecosystem is expanding. It gives more
                  opportunities to new investors to explore and learn more from the
                  stock market. Are you aware of the structural frameworks of the
                  NSE BSE trading basics?
                </p>

                <p className="font-medium text-xl text-gray-800 mt-4">
                  Well, that’s what you are about to learn at Share Market Skills Academy. Here, we give you proven and updated tips to learn a formal <Link href="/stock-market-training" className="underline text-blue-600 hover:text-blue-800">stock market education India</Link> style.
                </p>

                <p className="mt-4">
                  Let’s learn the combo of strong data analysis with structured risk
                  management tools – <Link href="/contact" className="underline text-blue-600 hover:text-blue-800">Book your service now</Link>!
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                  How to Study Share Market in India: A Beginner’s Complete Guide
                </h2>

                <p>
                  If you want to know how to study share market in India
                  effectively, you have come to the right place. Our professionals
                  have come with combined learning ideas. We combine structured
                  learning with practical insights rather than relying on random
                  internet tips.
                </p>

                <p className="mt-4">
                  Building a rock-solid foundation starts with mastering the basics
                  of stock market India. Here, we have premium online stock market
                  courses India provides the structured guidance needed to turn
                  confusion into clarity.
                </p>

                <p className="mt-4">
                  Wait no more and connect with the certified experts at Share
                  Market Skills Academy to jumpstart your financial journey today.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                  Step 1: Grasp the Operational Infrastructure
                </h2>

                <p>
                  India’s equity ecosystem revolves heavily around NSE BSE trading basics. Every beginner needs a unified, comprehensive map of the share market guide India. That’s why we let them create a Demat account to store securities electronically and a trading account to execute market orders.   
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                  Step 2: Transition from Theory to Practice Safely
                </h2>

                <p>
                  When looking to learn trading for beginners India programs, Share Market Skills Academy never fails to seize the opportunity. We teach them to master essential order types, learn to read basic candlestick charts, and understand transaction costs.
                </p>


                <p className="mt-4">
                  Here, we give students a comprehensive stock trading tutorial India. By implementing proven beginner trading strategies India protocols, you can safely test your analytical skills in real time.
                </p>

                <p className="mt-4 font-semibold text-[#7ED321]">
                  Time to join the next batch at Share Market Skills Academy for
                  hands-on trading simulations.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                  Step 3: Commit to Systematic Advanced Training
                </h2>

                <p>
                  Investing in professional Indian stock market training ensures you
                  master both fundamental analysis and technical analysis. That’s
                  how we build a new and engaged trader who has the tools and
                  expertise to perform in both long-term investing and short-term
                  trading.
                </p>

                <p className="mt-4">
                  Make your way with the right stock market education India. Here,
                  you can learn how to invest in stock market India safely.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
                  Conclusion
                </h2>

                <p>
                  With <Link href="/" className="underline text-blue-600 hover:text-blue-800">Share Market Skills Academy</Link>, you can confidently build a
                  well-diversified portfolio tailored to your unique financial
                  goals. Our experts let you master the market fundamentals and
                  give you the confidence you need the most.
                </p>

                <div className="bg-[#f9f9f9] border-l-4 border-[#7ED321] p-6 mt-12 rounded-r-lg">

                  <p>
                    Don't leave your financial future to luck – Get your free counseling session with Share Market Skills Academy
                  </p>

                  <p className="mt-4 font-semibold text-[#7ED321]">
                    📞 Enroll now and take your first step toward mastering the
                    Indian stock market.
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

      <FAQSection />
    </div>
  );
}

