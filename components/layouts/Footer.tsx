"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* 1️⃣ Logo + About */}
          <div>
            <Image
              src="/share-white-logo.png"
              alt="ShareMrKit"
              width={160}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart stock market learning platform for traders and investors.
              Learn trading with real market exposure and expert guidance.
            </p>
          </div>

          {/* 2️⃣ Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-green-400 cursor-pointer">About Us</li>
              <li className="hover:text-green-400 cursor-pointer">Courses</li>
              <li className="hover:text-green-400 cursor-pointer">Blogs</li>
              <li className="hover:text-green-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* 3️⃣ Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Trading Courses</li>
              <li>Algo Trading</li>
              <li>Mutual Funds</li>
              <li>Investment Guidance</li>
            </ul>
          </div>

          {/* 4️⃣ Address */}
          <div>
            <h4 className="text-white font-semibold mb-4">Address</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              ShareMrKit Academy<br />
              Sector 62, Noida<br />
              Uttar Pradesh, India<br />
              📞 +91 99999 99999
            </p>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
          © {new Date().getFullYear()} ShareMrKit. All rights reserved.
        </div>
      </footer>

      {/* ============ FLOATING WHATSAPP (DESKTOP ONLY) ============ */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-[999]
                   bg-green-500 hover:bg-green-600
                   w-14 h-14 rounded-full
                   items-center justify-center
                   shadow-xl transition"
      >
        <MessageCircle size={28} className="text-white" />
      </a>

      {/* ============ MOBILE FIXED BAR ============ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800
                      flex items-center justify-between px-5 py-3 md:hidden">

        {/* Left Logo */}
        <Image
          src="/share-white-logo.png"
          alt="ShareMrKit"
          width={120}
          height={40}
        />

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <a href="tel:+919999999999" className="text-white">
            <Phone size={26} />
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400"
          >
            <MessageCircle size={26} />
          </a>
        </div>
      </div>
    </>
  );
}
