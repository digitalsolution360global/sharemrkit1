import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | ShareMarket Skills Academy",
  description:
    "A detailed article on trading, investing, and market strategies from ShareMarket Skills Academy.",
}

export default function BlogDetails() {
  return (
    <main className="bg-gray-50 min-h-screen pb-16">

      {/* FEATURED IMAGE */}
      <section className="relative h-64 w-full">
        <Image
          src="/blog-featured.jpg"
          alt="Stock Market Blog"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* BLOG HEADER */}
      <section className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white shadow-lg rounded-lg p-6">

          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Proven Stock Market Strategies for Consistent Growth
          </h1>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <span>By ShareMarket Skills Academy</span>
            <span>•</span>
            <span>Jan 20, 2026</span>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="text-blue-600 hover:underline text-sm">
              Share on Facebook
            </button>
            <button className="text-blue-600 hover:underline text-sm">
              Tweet
            </button>
          </div>

        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="max-w-4xl mx-auto px-4 mt-8">
        <article className="prose prose-blue prose-lg bg-white p-6 rounded-lg shadow-lg">

          <p>
            The stock market is not just a place to trade — it’s a discipline of patience,
            strategy, and consistent learning. In this article, we explore practical
            strategies that investors and traders use to grow their capital
            and manage risk effectively.
          </p>

          <h2>Understand Market Cycles</h2>
          <p>
            Markets move in cycles — boom, correction, consolidation, and recovery.
            Recognizing where the market currently stands helps you make more
            informed entries and exits.
          </p>

          <h2>Technical & Fundamental Balance</h2>
          <p>
            A mix of both technical analysis for timing your trades and fundamental
            analysis for long-term investment decisions gives you stronger
            confidence and lower risk over time.
          </p>

          <blockquote>
            “Risk management is not just a strategy — it’s your safety net in trading.”
          </blockquote>

          <h2>Support & Resistance Levels</h2>
          <p>
            Support levels indicate where buyers step in, and resistance suggests
            where sellers dominate. These are key zones for planning your trades,
            entries, and stop-loss placements.
          </p>

          <h2>Conclusion</h2>
          <p>
            Learning the markets is a continuous journey — not a one-day task.
            Sharpen your skill with structured learning and real market examples
            to truly grow as a trader.
          </p>

        </article>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-900 text-white py-12 mt-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-semibold">
            Want to Master Trading & Investing?
          </h3>
          <p className="mt-3 text-blue-200 text-lg">
            Join our expert-led courses and learn practical strategies used by professionals.
          </p>
          <button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Enroll Now
          </button>
        </div>
      </section>

    </main>
  )
}
