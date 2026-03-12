"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const data = {
      full_name: formData.get("full_name"),
      business_name: formData.get("business_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      website_url: formData.get("website_url"),
      business_type: formData.get("business_type"),
      audit_area: formData.get("audit_area"),
      biggest_challenge: formData.get("biggest_challenge"),
      monthly_budget: formData.get("monthly_budget"),
      how_did_you_hear: formData.get("how_did_you_hear")
    };

    try {
      const { error } = await supabase
        .from('audits')
        .insert([data]);

      if (!error) {
        setSubmitted(true);
      } else {
        console.error('Supabase error:', error);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 bg-blue/5 rounded-2xl border border-blue/20">
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-3xl font-extrabold text-blue mb-3">Audit Requested!</h2>
        <p className="text-lg text-white/70 max-w-md mx-auto">
          We've received your details. Our team is already working on your custom audit. 
          Expect a response via WhatsApp/Email within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="form_type" value="Free Audit Request" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Your Name <span className="text-red-500">*</span></label>
          <input type="text" name="full_name" placeholder="Rahul Sharma" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Business Name <span className="text-red-500">*</span></label>
          <input type="text" name="business_name" placeholder="Your Business" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">WhatsApp Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" placeholder="you@business.com" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
      </div>

      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Website URL (if you have one)</label>
        <input type="text" name="website_url" placeholder="https://yourbusiness.com" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
      </div>

      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What type of business are you? <span className="text-red-500">*</span></label>
        <select name="business_type" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled selected>Select business type</option>
          <option value="E-commerce / D2C brand">E-commerce / D2C brand</option>
          <option value="B2B / Services company">B2B / Services company</option>
          <option value="Restaurant / Hospitality">Restaurant / Hospitality</option>
          <option value="Healthcare / Clinic">Healthcare / Clinic</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Education / Coaching">Education / Coaching</option>
          <option value="Retail / Local business">Retail / Local business</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Which area do you most want audited? <span className="text-red-500">*</span></label>
        <select name="audit_area" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled selected>Select area</option>
          <option value="My website (speed, SEO, conversions)">My website (speed, SEO, conversions)</option>
          <option value="My Google / Meta Ad campaigns">My Google / Meta Ad campaigns</option>
          <option value="My social media presence">My social media presence</option>
          <option value="My overall digital marketing strategy">My overall digital marketing strategy</option>
          <option value="Everything — full audit">Everything — full audit</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is your biggest marketing challenge right now? <span className="text-red-500">*</span></label>
        <select name="biggest_challenge" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled selected>Select challenge</option>
          <option value="Not getting enough leads online">Not getting enough leads online</option>
          <option value="Spending on ads with poor results">Spending on ads with poor results</option>
          <option value="No clear digital marketing strategy">No clear digital marketing strategy</option>
          <option value="Competitors outranking me on Google">Competitors outranking me on Google</option>
          <option value="Social media not driving business">Social media not driving business</option>
          <option value="Don't know where to start">Don't know where to start</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-end">
          <label className="text-xs text-muted mb-1 block uppercase small-label">Current monthly marketing spend?</label>
          <select name="monthly_budget" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none mt-auto">
            <option value="" disabled selected>Select range</option>
            <option value="Not spending anything yet">Not spending anything yet</option>
            <option value="Under ₹10,000">Under ₹10,000</option>
            <option value="₹10,000 – ₹50,000">₹10,000 – ₹50,000</option>
            <option value="₹50,000 – ₹2,00,000">₹50,000 – ₹2,00,000</option>
            <option value="₹2,00,000+">₹2,00,000+</option>
          </select>
        </div>

        <div className="flex flex-col justify-end">
          <label className="text-xs text-muted mb-1 block uppercase small-label">How did you hear about us?</label>
          <select name="how_did_you_hear" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none mt-auto">
            <option value="" disabled selected>Select source</option>
            <option value="Google Search">Google Search</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral from someone">Referral from someone</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-2">
        <button type="submit" className="w-full bg-blue text-navy font-bold py-4 rounded-xl hover:bg-white hover:text-navy transition-all cta-glow">
          Send My Audit Request →
        </button>
        <p className="text-[11px] text-muted text-center mt-3">100% Free · No obligation · Response within 24 hours</p>
      </div>
    </form>
  );
}
