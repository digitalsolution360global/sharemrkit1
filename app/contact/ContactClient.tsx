"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactClient() {
  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal scroll */}

      {/* ================= HERO ================= */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">Home</Link> / Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Contact <span className="text-[#7ED321]">Us</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Let’s talk! Reach out to our centers for expert guidance and personalized support.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Govindpuram */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition min-w-0">
            <h3 className="text-2xl font-bold mb-6 text-[#7ED321]">
              Govindpuram Center
            </h3>

            <div className="space-y-4 text-gray-700">

              <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <Phone className="text-[#2DB7F5]" />
                <span>+91 84601 88483</span>
              </p>

              <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <Mail className="text-[#2DB7F5]" />
                <span>sharemarketskillsacademy@gmail.com</span>
              </p>

              <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <MapPin className="text-[#2DB7F5]" />
                <span>41 Vishnu Enclave, Main Hapur Road, Opp. Govindpuram, Ghaziabad</span>
              </p>

            </div>
          </div>

          {/* Raj Nagar Extension */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition min-w-0">
            <h3 className="text-2xl font-bold mb-6 text-[#7ED321]">
              Raj Nagar Extension Center
            </h3>

            <div className="space-y-4 text-gray-700">

              <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <Phone className="text-[#2DB7F5]" />
                <span>+91 99247 68290</span>
              </p>

              <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <Mail className="text-[#2DB7F5]" />
                <span>sharemarketskillsacademy@gmail.com</span>
              </p>

              <p className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <MapPin className="text-[#2DB7F5]" />
                <span>407 AVS City Square, Raj Nagar Extension, Ghaziabad</span>
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* ================= MAPS ================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row gap-6">

            {/* Govindpuram Map */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[350px] min-w-0">
              <iframe
                src="https://www.google.com/maps?q=41%20Vishnu%20Enclave,%20Main%20Hapur%20Road,%20Ghaziabad&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Raj Nagar Extension Map */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[350px] min-w-0">
              <iframe
                src="https://www.google.com/maps?q=407%20AVS%20City%20Square,%20Raj%20Nagar%20Extension,%20Ghaziabad&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
