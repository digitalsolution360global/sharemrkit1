import Image from "next/image"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Stock Market Basics for Beginners | ShareMarket Skills",
  description:
    "Learn stock market basics, trading strategies, and investment fundamentals in this detailed guide.",
}

export default function BlogDemoPage() {
  return (
    <main className="bg-[#F5F7FA] text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* Breadcrumb */}
          <p className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:underline">Home</Link> 
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span className="mx-2">/</span>
            Stock Market Basics
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Stock Market Basics for Beginners
          </h1>

          <p className="mt-4 text-blue-200 text-sm">
            Published on January 20, 2026 • By ShareMarket Skills Academy
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">

        {/* BLOG CONTENT */}
        <div className="lg:col-span-2">

          <div className="bg-white rounded-xl shadow-md p-8">

            {/* Featured Image */}
            <div className="relative w-full h-80 mb-8">
              <Image
                src="/blog-demo.jpg"
                alt="Stock Market Basics"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Article */}
            <article className="prose prose-blue max-w-none">

              <h2>What is the Stock Market?</h2>
              <p>
                The stock market is a platform where investors buy and sell shares
                of publicly listed companies. It enables businesses to raise capital
                and allows investors to participate in company growth.
              </p>

              <h2>Why Should You Learn Stock Trading?</h2>
              <p>
                Stock trading helps generate wealth, build passive income, and
                understand financial markets. With proper education and disciplined
                risk management, trading can become a sustainable income source.
              </p>

              <h2>Types of Trading</h2>
              <ul>
                <li>Intraday Trading</li>
                <li>Swing Trading</li>
                <li>Positional Trading</li>
                <li>Options & Futures Trading</li>
              </ul>

              <h2>Basic Trading Strategy</h2>
              <p>
                Beginners should start with technical analysis basics such as
                support & resistance levels, moving averages, and proper risk management.
              </p>

              <blockquote>
                “The goal of a successful trader is to make the best trades.
                Money is secondary.” – Alexander Elder
              </blockquote>

              <h2>Conclusion</h2>
              <p>
                Start learning today and build strong financial knowledge with
                structured training programs. Join ShareMarket Skills Academy
                to begin your professional trading journey.
              </p>

            </article>

          </div>

        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">

          {/* Search Box */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">
              Search Blog
            </h4>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">
              Recent Posts
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Top 5 Trading Strategies",
                "Understanding Market Trends",
                "Risk Management for Traders",
                "Beginner's Guide to Options Trading",
              ].map((post) => (
                <li key={post}>
                  <Link
                    href="#"
                    className="hover:text-blue-800 transition"
                  >
                    {post}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Stock Market Basics</li>
              <li>Technical Analysis</li>
              <li>Investment Strategies</li>
              <li>Trading Psychology</li>
            </ul>
          </div>

        </aside>

      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold">
            Want to Learn Trading Professionally?
          </h3>
          <p className="mt-4 text-blue-200 text-lg">
            Join our advanced share market course and start your journey today.
          </p>
          <button className="mt-6 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Enroll Now
          </button>
        </div>
      </section>

    </main>
  )
}
