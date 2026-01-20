"use client";

import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="bg-white py-28 flex justify-center">
      <div className="max-w-5xl px-6 text-center">

        {/* H2 Heading */}
        <h2 className="text-3xl text-black md:text-5xl font-bold mb-6">
          Trusted Stock Market & Crypto Training Institute
          <span className="block text-[#7ED321] mt-2">
            in Ghaziabad & Delhi NCR
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Share Market Skills is a professional academy dedicated to teaching
          practical trading and investment skills. We focus on helping learners:
        </p>

     {/* Points */}
<div className="max-w-4xl mx-auto mb-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-lg">

    <div className="flex items-start gap-3 bg-gray-100 border border-sky-200 rounded-xl p-6 shadow-sm h-full min-h-[110px]">
      <span className="text-white font-bold text-xl">•</span>
      <p>Understand how stock markets work</p>
    </div>

    <div className="flex items-start gap-3 bg-gray-100 border border-sky-200 rounded-xl p-6 shadow-sm h-full min-h-[110px]">
      <span className="text-white font-bold text-xl">•</span>
      <p>Learn technical and fundamental analysis</p>
    </div>

    <div className="flex items-start gap-3 bg-gray-100 border border-sky-200 rounded-xl p-6 shadow-sm h-full min-h-[110px]">
      <span className="text-white font-bold text-xl">•</span>
      <p>Gain confidence in options, swing trading, and cryptocurrency trading</p>
    </div>

    <div className="flex items-start gap-3  border bg-gray-100 rounded-xl p-6 shadow-sm h-full min-h-[110px]">
      <span className="text-white font-bold text-xl">•</span>
      <p>Develop disciplined investment and risk management strategies</p>
    </div>

  </div>
</div>


        {/* Location Line */}
        <p className="text-gray-600 text-lg mb-8">
          📍 Courses available offline in Ghaziabad and online across India.
        </p>

        {/* CTA */}
        <Link
          href="#courses"
          className="inline-block text-[#2DB7F5] font-semibold text-lg hover:underline"
        >
          Explore Our Courses →
        </Link>

      </div>
    </section>
  );
}
