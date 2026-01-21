"use client";

export default function LocationTrainingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-6 md:text-center">
          Location-Focused <span className="text-[#7ED321]">Training</span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12 md:text-center">
          Stock Market & Cryptocurrency Courses in Ghaziabad, Delhi NCR & Noida
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-black">
          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h4 className="text-xl font-semibold mb-4">
              Offline / Classroom Training
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Stock market course in Ghaziabad</li>
              <li>✔ Share market training institute in Delhi NCR</li>
              <li>✔ Crypto trading course in Ghaziabad</li>
              <li>✔ Cryptocurrency course in Noida</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h4 className="text-xl font-semibold mb-4">
              Online Training (Pan India)
            </h4>
            <p className="text-gray-700">
              Live online stock market and crypto trading classes available
              across India with mentorship and lifetime support.
            </p>

            <p className="mt-4 font-semibold text-[#7ED321]">
              ✔ Online & Offline both available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
