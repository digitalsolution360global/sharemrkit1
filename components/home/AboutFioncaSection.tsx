"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AboutFioncaSection() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image with bottom-left circular play button */}
        <div className="w-full lg:w-1/2 relative bg-white rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/team/Ash.jpeg"
            alt="Fionca About"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />

        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            About Ashish{" "}
            <span className="inline-block w-12 h-[2px] bg-[#E63946] ml-2"></span>
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
           Why Choose Share Market Skills?

          </h2>

          {/* <p className="text-gray-600 mb-8">
            Fionca is a trusted name for providing financial assistance and expert guidance. Our mission is to help individuals and businesses grow their wealth with professionalism, trust, and quality education.
          </p> */}

          {/* Features */}
<div className="space-y-6">

  {/* 1 */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 text-[#2DB7F5]">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M12 8c-3.314 0-6 2.686-6 6m12 0c0-3.314-2.686-6-6-6m0-4v4" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">
        Professionally Designed Curriculum
      </h4>
      <p className="text-gray-600">
        Our courses are carefully structured by experts, making us one of the
        <strong> best stock market training institutes in Ghaziabad</strong>.
      </p>
    </div>
  </div>

  {/* 2 */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 text-[#2DB7F5]">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M3 12l2-2 4 4 8-8 4 4" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">
        Real-World Market Application
      </h4>
      <p className="text-gray-600">
        We focus on practical trading strategies rather than theory-only learning.
      </p>
    </div>
  </div>

  {/* 3 */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 text-[#2DB7F5]">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">
        Structured Learning Path
      </h4>
      <p className="text-gray-600">
        Step-by-step learning from beginner to advanced trading levels.
      </p>
    </div>
  </div>

  {/* 4 */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 text-[#2DB7F5]">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M3 3v18h18" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">
        Live Market & Chart-Based Teaching
      </h4>
      <p className="text-gray-600">
        Learn using real-time market examples and professional chart analysis.
      </p>
    </div>
  </div>

  {/* 5 */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 text-[#2DB7F5]">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">
        Risk Management & Trading Discipline
      </h4>
      <p className="text-gray-600">
        Clear explanation of capital protection, psychology, and disciplined trading.
      </p>
    </div>
  </div>

  {/* 6 */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 text-[#2DB7F5]">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M12 8v4l3 3" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">
        Offline & Online Training Options
      </h4>
      <p className="text-gray-600">
        Classroom training in Ghaziabad plus online learning across India & 
        <strong> Delhi NCR cryptocurrency trading classes</strong>.
      </p>
    </div>
  </div>

  {/* 7 */}
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 text-[#2DB7F5]">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">
        Course Completion Certificate
      </h4>
      <p className="text-gray-600">
        Get certified after successful completion to boost your trading credibility.
      </p>
    </div>
  </div>

</div>


          {/* Team Member */}
          <div className="mt-10 flex items-center gap-4">
         
            {/* <div>
              <p className="font-semibold text-gray-900">Ashish Singh</p>
              <p className="text-gray-500 text-sm">Co-founder & Faculty</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
