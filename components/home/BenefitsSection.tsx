"use client";

import { useState } from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Beginners with no prior stock market or crypto knowledge",
    desc: "This course is perfect for absolute beginners who want to learn stock market and cryptocurrency trading from scratch with clear concepts and practical examples.",
    img: "/img1.webp",
    highlight: true,
  },
  {
    title: "Students & fresh graduates looking for practical trading skills",
    desc: "Ideal for students and fresh graduates who want hands-on trading skills, real market exposure, and career-oriented financial knowledge.",
    img: "/img2.jpg",
    highlight: false,
  },
  {
    title: "Working professionals aiming for financial literacy",
    desc: "Designed for working professionals who want to understand investing, trading, and risk management to build an additional source of income.",
    img: "/img3.jpg",
    highlight: false,
  },
  {
    title: "Business owners seeking investment strategies",
    desc: "Suitable for business owners who want to grow surplus funds using smart investment and trading strategies with disciplined risk management.",
    img: "/img4.jpg",
    highlight: false,
  },
  {
    title: "Anyone searching for stock market & crypto courses in Delhi NCR",
    desc: "Perfect for people searching online for stock market courses for beginners in Ghaziabad, crypto trading courses in Delhi NCR, or share market classes near them.",
    img: "/img5.jpg",
    highlight: false,
  },
];


export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0); // track which card is active
  const activeBenefit = benefits[activeIndex];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-green-500 font-semibold mb-2">Our Offer</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Benefits We Offer
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer p-8 rounded-xl font-semibold text-lg shadow-md transition ${
                  index === activeIndex
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-gray-50 text-gray-900 hover:shadow-md"
                }`}
              >
                {benefit.title}
              </div>
            ))}
          </div>

          {/* Right Image + Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Image */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src={activeBenefit.img}  
                alt={activeBenefit.title}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                {activeBenefit.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {activeBenefit.desc}
              </p>
            </div>

          </div> {/* Close Right grid */}

        </div> {/* Close Content grid */}

      </div> {/* Close container */}
    </section>
  );
}
