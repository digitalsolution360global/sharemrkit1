"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I join just after giving my 12th exam?",
    answer:
      "Yes, you can. Share Market Skills Academy starts from absolute fundamentals. That's why young learners can get the perfect idea from our experts.",
  },
  {
    question: "Do we provide live marketing experience during the course?",
    answer:
      "Yes, we have a virtual platform that helps young students operate in real-world scenarios.",
  },
  {
    question:
      "Can I get a valid certification in our trading course after 12th Ghaziabad?",
    answer:
      "Yes, you can. Share Market Skills Academy provides an authoritative certification that indicates you have completed the course successfully.",
  },
  {
    question: "How do our professionals help young investors?",
    answer:
      "We provide the best help, tailored for students, starting from chart practice, career orientation, mentorship programs, and portfolio setup guidance. Training on these helps students to get brighter paths.",
  },
  {
    question:
      "Can I choose a career path after the share market career course Ghaziabad?",
    answer:
      "Yes, you can! Through this course, young students can get industry-standard NISM and NCFM module certifications. That's how they can apply for top stock broking and financial advisory firms.",
  },
];

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#7ED321] font-semibold mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. Everything you need to know before
            starting your trading journey after 12th.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-[#7ED321]">
                  {activeIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
