import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FAQSection from "./FAQSection"; 

// ================= META TAGS =================
export const metadata = {
  title: "Best Stock Market Institute Ghaziabad | Start Your Trading Journey",
  description: "Looking for the best stock market institute in Ghaziabad? Learn professional trading strategies and risk management at Share Market Skills Academy today.",
};

export default function BestShareMarketAcademyGhaziabad() {
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
            Best share market academy <span className="text-[#7ED321]">ghaziabad</span> <br />
            Share Market Skills Academy
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed text-lg">

          <div className="prose max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Master the Markets: Best Share Market Academy in Ghaziabad (Complete Guide 2026)
            </h2>

            <p className="mt-8">
              Understanding the current share market and its ups and downs is not everyone’s cup of tea. For that, you require experts and their expertise to excel in the share market. Thanks to the best share market academy in ghaziabad, Share Market Skills Academy, for its immense work on freshers, who are new to the share market. 
            </p>

            <p className="mt-6">
              We stand at the forefront of this educational revolution. Students who are keen to learn and implement their skills on the share market to get better returns can get all the possible help at our institution.
            </p>

            <p className="mt-6">
              Here, every aspirant will get a blend of technical mastery, psychological discipline, and live market exposure. These tactics are not going to be achieved if you stick to the books. 
            </p>

            <p className="mt-6">
              Join the elite league of successful traders today at Ghaziabad’s most trusted academy.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-10 mb-6">
              Comprehensive Share Market Coaching in Ghaziabad for All Levels
            </h2>

            <p className="mt-4">
              Our share market coaching in Ghaziabad provides a structured roadmap. We recognize a beginner’s needs in the share market and give them the best knowledge in return.
            </p>

            <p className="mt-6">
              The best part is, we stick to the three important pillars of modern trading – Price Action, Volume Analysis, and Data Decoding. To educate every aspirant based on these, our share market coaching ghaziabad is the right choice.
            </p>

            <p className="mt-6">
              Time to understand how to make smart money with the help of top trading institute for beginners ghaziabad:
            </p>

            <ul className="space-y-4 list-none pl-0 mt-6">
              {[
                "Build your foundation",
                "Teach you to do advanced charting",
                "Customize your roadmaps",
                "Provide post-course support",
                "Teach you about the risks",
                "Teach you time decay and volatility of the market",
                "Maintain emotional discipline",
                "Calculate your risk-reward ratio"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6">
              Learn the secrets of trading psychology at the best stock market institute ghaziabad—Start your journey with Share Market Skills Academy now!
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              2026 Market Trends: Why You Need Professional Training Now
            </h2>

            <p className="mt-4">
              Professionalism in trading is important as 2026 is not going to be the easiest year of earning money. It is only difficult when you lack skills and experience. That’s why you need perfect attention from the established tutors and current players of the share market. 
            </p>

            <p className="mt-6">
              The time has shifted a lot, and it has taught users to divert their attention from "tips" or "free videos". They are not going to help in real-world cases. Share Market Skills Academy is the best share market academy in Ghaziabad.
            </p>

            <p className="mt-6">
              Let’s discover why you need the right guidance: 
            </p>

            <ul className="space-y-4 list-none pl-0 mt-6">
              {[
                "Learn to analyze Open Interest (OI) and Change in OI for trend reversal.",
                "Analyze the movement of bots in the market.",
                "Deep understanding of US Fed rates and global events to analyze the indian market.",
                "Learn to build a long-term wealth portfolio."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#7ED321] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-semibold">
              Don't get left behind—Sign up for the most advanced stock market course in Ghaziabad!
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black mt-12 mb-6">
              Conclusion
            </h2>

            <p className="mt-4">
              Share Market Skills Academy offers more than just lessons. It is not a hard task anymore to find the best share market academy in Ghaziabad. Whether your goal is to leave your 9-to-5 job or simply grow your savings, our structured approach ensures you have the tools, the tech, and the temperament to win.
            </p>

            <p className="mt-6 font-bold text-[#7ED321]">
              Start your journey with Share Market Skills Academy!
            </p>

          </div>
        </div>
      </section>

        {/* ================= FAQ SECTION ================= */}
      <FAQSection />
    </div>
  );
}