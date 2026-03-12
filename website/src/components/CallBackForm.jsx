"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CallBackForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    // Formatting extra fields into the 'source' column
    const prefTime = formData.get("preferred_time") || "";
    const msg = formData.get("message") || "";
    let sourceText = "Contact Page - Call Back";
    if (prefTime) sourceText += ` | Time: ${prefTime}`;
    if (msg) sourceText += ` | Msg: ${msg}`;

    const data = {
      name: formData.get("full_name"),
      business: formData.get("business_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      goal: formData.get("service_interest"),
      budget: formData.get("budget"),
      source: sourceText
    };

    try {
      const { error } = await supabase
        .from('contacts')
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
      <div className="text-center py-12 bg-blue/5 rounded-2xl border border-blue/20">
        <div className="text-6xl mb-4">📞</div>
        <h3 className="text-2xl font-extrabold text-blue mb-2">Request Received!</h3>
        <p className="text-white/70 max-w-sm mx-auto">
          We'll call you back within 24 hours during business hours. Talk soon!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="form_type" value="Call Back Request" />
      
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
          <label className="text-xs text-muted mb-1 block uppercase small-label">WhatsApp / Call Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Email Address</label>
          <input type="email" name="email" placeholder="you@business.com" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
      </div>

      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Which service are you interested in? <span className="text-red-500">*</span></label>
        <select name="service_interest" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled selected>Select a service</option>
          <option value="Performance Marketing (Meta / Google Ads)">Performance Marketing (Meta / Google Ads)</option>
          <option value="Social Media Management">Social Media Management</option>
          <option value="Web Development">Web Development</option>
          <option value="AI Growth Tools">AI Growth Tools</option>
          <option value="Custom Software Development">Custom Software Development</option>
          <option value="Not sure — need your guidance">Not sure — need your guidance</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Best time to call you back? <span className="text-red-500">*</span></label>
        <select name="preferred_time" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled selected>Select preferred time</option>
          <option value="Morning (9am – 12pm)">Morning (9am – 12pm)</option>
          <option value="Afternoon (12pm – 3pm)">Afternoon (12pm – 3pm)</option>
          <option value="Evening (3pm – 6pm)">Evening (3pm – 6pm)</option>
          <option value="Anytime during business hours">Anytime during business hours</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is your approximate monthly marketing budget?</label>
        <select name="budget" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled selected>Select range</option>
          <option value="Under ₹10,000">Under ₹10,000</option>
          <option value="₹10,000 – ₹50,000">₹10,000 – ₹50,000</option>
          <option value="₹50,000 – ₹2,00,000">₹50,000 – ₹2,00,000</option>
          <option value="₹2,00,000+">₹2,00,000+</option>
          <option value="Not decided yet">Not decided yet</option>
        </select>
      </div>

      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Anything specific you want to discuss on the call? (optional)</label>
        <textarea 
          name="message" 
          placeholder="e.g. I want to understand how Meta Ads can work for my restaurant business..." 
          rows="3" 
          className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors resize-none"
        ></textarea>
      </div>

      <div className="mt-2">
        <button type="submit" className="w-full bg-blue text-navy font-bold py-4 rounded-xl hover:bg-white hover:text-navy transition-all cta-glow">
          Request My Call Back →
        </button>
        <p className="text-[11px] text-muted text-center mt-3">We call back within 24 hours · Mon–Sat, 9am–6pm</p>
      </div>
    </form>
  );
}
