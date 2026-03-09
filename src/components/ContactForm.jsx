"use client";
import { useState } from "react";

export default function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const biz = formData.get("business");
    const phone = formData.get("phone");
    if (!biz || !phone) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-3">✅</div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-green mb-2">
          Request Received!
        </h3>
        <p className="text-sm text-muted">
          Our team will reach out within 24 hours via WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-3`}>
        <div>
          <label htmlFor="cf-name">Your Name</label>
          <input type="text" id="cf-name" name="name" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="cf-business">Business Name *</label>
          <input
            type="text"
            id="cf-business"
            name="business"
            placeholder="Your business"
            required
          />
        </div>
      </div>
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"} gap-3`}>
        <div>
          <label htmlFor="cf-phone">Phone / WhatsApp *</label>
          <input
            type="tel"
            id="cf-phone"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>
        <div>
          <label htmlFor="cf-email">Email *</label>
          <input
            type="email"
            id="cf-email"
            name="email"
            placeholder="you@business.com"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-goal">What&apos;s your primary goal?</label>
        <select id="cf-goal" name="goal">
          <option value="">Select a goal</option>
          <option>Get more leads / customers</option>
          <option>Build social media presence</option>
          <option>Improve website performance</option>
          <option>Run Google / Meta Ads</option>
          <option>Full digital marketing strategy</option>
          <option>Just exploring options</option>
        </select>
      </div>
      <div>
        <label htmlFor="cf-budget">Monthly Marketing Budget</label>
        <select id="cf-budget" name="budget">
          <option value="">Select range</option>
          <option>Under ₹10,000</option>
          <option>₹10,000 – ₹30,000</option>
          <option>₹30,000 – ₹1,00,000</option>
          <option>₹1,00,000+</option>
          <option>Just exploring options</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-green text-navy font-[family-name:var(--font-heading)] font-bold text-[15px] py-4 rounded-xl hover:bg-green-dark transition-colors cursor-pointer"
      >
        Send Details →
      </button>
      <p className="text-xs text-muted text-center">
        Takes 60 seconds · Response within 24 hours
      </p>
    </form>
  );
}
