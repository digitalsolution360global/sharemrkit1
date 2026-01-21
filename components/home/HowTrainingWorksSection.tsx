"use client";

export default function HowTrainingWorksSection() {
  const steps = [
    "Build a strong foundation in market basics",
    "Learn charts, technical analysis & price action",
    "Understand strategy-based trading & investing",
    "Master risk management & capital protection",
    "Develop discipline for consistent results",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-14 md:text-center">
          How Our <span className="text-[#7ED321]">Training Works</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-black">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#7ED321] text-black font-bold">
                {i + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
