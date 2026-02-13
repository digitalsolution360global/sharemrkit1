import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stock Market Basics for Beginners | ShareMarket Skills",
  description:
    "Learn stock market basics, trading strategies, and investment fundamentals in this detailed guide.",
}

export default function BlogDemoPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Stock Market Basics for Beginners
          </h1>
          <p className="mt-4 text-blue-200 text-sm">
            Published on January 20, 2026 • By ShareMarket Skills Academy
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-white shadow-lg -mt-10 rounded-xl relative z-10">
        
        {/* Featured Image */}
        <div className="relative w-full h-72 mb-8">
          <Image
            src="/blog-demo.jpg"  // put image inside public folder
            alt="Stock Market Basics"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <article className="prose max-w-none prose-blue">
          
          <h2>What is the Stock Market?</h2>
          <p>
            The stock market is a platform where investors buy and sell shares 
            of publicly listed companies. It helps businesses raise capital 
            and allows investors to participate in company growth.
          </p>

          <h2>Why Should You Learn Stock Trading?</h2>
          <p>
            Stock trading helps you generate wealth, build passive income, 
            and understand financial markets. With proper education and risk 
            management, trading can become a strong income source.
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
            support & resistance, moving averages, and risk management.
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

      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold">
            Want to Learn Trading Professionally?
          </h3>
          <p className="mt-3 text-blue-200">
            Join our advanced share market course and start your journey today.
          </p>
          <button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Enroll Now
          </button>
        </div>
      </section>

    </main>
  )
}
