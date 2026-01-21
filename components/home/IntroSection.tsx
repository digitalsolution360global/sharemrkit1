"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="bg-white py-28 flex justify-center">
      <div className="max-w-5xl px-6 text-center">

        {/* H2 Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
          Trusted Stock Market & Crypto Training Institute
          <span className="block text-[#7ED321] mt-3">
            in Ghaziabad & Delhi NCR
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          <strong>Share Market Skills</strong>is a professional academy dedicated to teaching practical trading and investment skills. We focus on helping learners:

        </p>

        {/* Points */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

            {[
              "Understand how stock markets work",
              "Learn technical and fundamental analysis",
              "Gain confidence in options, swing trading, and cryptocurrency trading",
              "Develop disciplined investment & risk management strategies",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <CheckCircle className="w-6 h-6 text-[#7ED321] mt-1 flex-shrink-0" />
                <p className="text-gray-800 text-lg">{text}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Location Line */}
        <p className="text-gray-600 text-lg mb-10">
          📍 Offline classroom courses in <strong>Ghaziabad</strong> & online
          training available across <strong>India</strong>.
        </p>

        {/* CTA */}
        <Link
          href="#courses"
          className="inline-flex items-center gap-2 bg-[#7ED321] text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#6ac11c] transition"
        >
          Explore Our Courses →
        </Link>

      </div>
    </section>
  );
}
