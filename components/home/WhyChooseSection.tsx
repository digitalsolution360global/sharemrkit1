"use client";

export default function WhyChooseSection() {
  const reasons = [
    "Professionally designed stock market and crypto curriculum",
    "Focus on real-world application, not just theory",
    "Structured learning from beginner to advanced",
    "Live market examples and chart-based teaching",
    "Clear explanation of risk management & discipline",
    "Offline & online training options",
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ================= H2 HEADING ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#7ED321]">Share Market Skills?</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our courses are designed to give you practical skills and confidence to trade successfully in stock and crypto markets.
          </p>
        </div>

        {/* ================= REASONS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:scale-105"
            >
              {/* Check Icon */}
              <span className="text-green-500 font-bold text-2xl mt-1">✔</span>

              {/* Reason Text */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>

        {/* ================= SEO / Long-tail Keywords ================= */}
       
      </div>
    </section>
  );
}
