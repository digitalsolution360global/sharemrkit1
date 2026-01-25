"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Play } from "lucide-react";

const reviews = [
  {
    title: "Happy Client Review",
    sub: "See how our students trade confidently in the real market",
    videoUrl: "https://www.instagram.com/reel/DNAW7pPTqvD/embed",
  },
  {
    title: "Success Story",
    sub: "Practical trading experience leads to consistent growth",
    videoUrl: "https://www.instagram.com/reel/DM4zx0hTRt2/embed",
  },
];

export default function ClientVideosSection() {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">
          What Our <span className="text-[#7ED321]">Clients Say</span>
        </h2>

        <p className="text-gray-600 text-lg mb-12">
          Real stories and reviews from our students learning stock & crypto trading.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* TEXT */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-1">
                  {review.title}
                </h3>
                <p className="text-gray-600">{review.sub}</p>
              </div>

              {/* ✅ THUMBNAIL = INSTAGRAM EMBED */}
              <div
                className="relative w-full h-[350px] cursor-pointer group"
                onClick={() => setOpenVideo(review.videoUrl)}
              >
                <iframe
                  src={review.videoUrl}
                  className="w-full h-full pointer-events-none"
                  loading="lazy"
                />

                {/* PLAY OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play
                    size={64}
                    className="text-white bg-black/60 p-4 rounded-full group-hover:scale-110 transition"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= VIDEO MODAL ================= */}
      {openVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl h-[70vh] bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute top-4 right-4 z-50 text-white hover:text-red-500"
            >
              <X size={30} />
            </button>

            <iframe
              src={openVideo}
              className="w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
