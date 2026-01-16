"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function ScrollVideoSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* VIDEO BUTTON */}
        <div className="relative z-10 flex justify-center mb-[-60px]">
          <a
            href="https://www.youtube.com/watch?v=VIDEO_ID"
            target="_blank"
            className="bg-[#7ED321] hover:bg-[#6ac11c] text-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition"
          >
            <Play size={36} />
          </a>
        </div>

        {/* IMAGE */}
        <div
          className={`relative overflow-hidden rounded-3xl shadow-xl transition-all duration-1000 ease-out
          ${visible ? "h-[420px] md:h-[520px]" : "h-[120px]"}`}
        >
          <Image
            src="/scrool-img.jpg"
            alt="Trading Classroom"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
