"use client";

import React, { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border border-gray-100 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-[#7ED321]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="text-[#7ED321] w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-6">
          Our team will get back to you shortly to discuss your trading goals.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[#7ED321] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-[#7ED321]/10">
      <div className="bg-[#1A1A1A] p-6 text-white">
        <h3 className="text-2xl font-bold mb-1">Quick Enquiry</h3>
        <p className="text-gray-400 text-sm">Fill out the form to get expert guidance.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#7ED321] transition-colors" />
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#7ED321] focus:bg-white focus:ring-4 focus:ring-[#7ED321]/5 transition-all text-gray-900"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
          <div className="relative group">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#7ED321] transition-colors" />
            <input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#7ED321] focus:bg-white focus:ring-4 focus:ring-[#7ED321]/5 transition-all text-gray-900"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#7ED321] transition-colors" />
            <input
              name="phone"
              type="tel"
              required
              placeholder="+91 00000 00000"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#7ED321] focus:bg-white focus:ring-4 focus:ring-[#7ED321]/5 transition-all text-gray-900"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
          <div className="relative group">
            <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#7ED321] transition-colors" />
            <textarea
              name="message"
              required
              rows={3}
              placeholder="Tell us about your interest..."
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#7ED321] focus:bg-white focus:ring-4 focus:ring-[#7ED321]/5 transition-all text-gray-900 resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#7ED321] hover:bg-[#6abc1e] disabled:bg-gray-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#7ED321]/20 hover:shadow-[#7ED321]/40 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Details
            </>
          )}
        </button>

        <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider font-semibold">
          Secure & Professional Consultation
        </p>
      </form>
    </div>
  );
}
