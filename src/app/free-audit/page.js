import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
 title: "Free Marketing Audit — Numero Uno Marketing",
 description: "Get a free, no-obligation marketing audit for your business. Competitor analysis, website review, and a custom 90-day growth roadmap.",
};

const auditIncludes = [
 "Complete website performance review",
 "Competitor analysis (3-5 competitors)",
 "Social media presence assessment",
 "Google & Meta Ads account audit",
 "SEO opportunity analysis",
 "Custom 90-day growth roadmap",
 "Budget & pricing recommendations",
 "15-minute strategy call with founder",
];

export default function FreeAuditPage() {
 return (
 <>
 <section className="pt-32 pb-10 px-6 lg:px-12 bg-navy">
 <div className="max-w-5xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 bg-blue/10 border border-blue/30 rounded-full px-4 py-1.5 text-[13px] text-blue small-label mb-6">
 <span className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse" />
 100% Free · No Obligation
 </div>
 <h1 className=" text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-tight mb-4">
 Get Your Free <span className="text-blue">Marketing Audit</span>
 </h1>
 <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
 Find out exactly where your marketing is leaking money and discover quick wins to grow your business — completely free.
 </p>
 </div>
 </section>

 <section className="pb-24 px-6 lg:px-12 bg-navy">
 <div className="max-w-5xl mx-auto">
 <div className="grid lg:grid-cols-2 gap-8">
 {/* What's included */}
 <div>
 <h2 className=" text-xl card-h3 mb-6">
 What&apos;s Included in Your Audit
 </h2>
 <div className="space-y-3 mb-8">
 {auditIncludes.map((item, i) => (
 <div key={i} className="flex items-center gap-3 sitewide-card p-4">
 <CheckCircle2 size={18} className="text-blue shrink-0" />
 <span className="text-sm text-white/70">{item}</span>
 </div>
 ))}
 </div>

 {/* Social proof */}
 <div className="bg-blue/5 border border-blue/15 rounded-2xl p-6">
 <div className="flex items-center gap-2 mb-3">
 <div className="text-amber text-sm">★★★★★</div>
 <span className="text-sm text-white/70 small-label">4.9/5 Client Rating</span>
 </div>
 <p className="text-sm text-white/50 italic leading-relaxed">
 &ldquo;The free audit alone was worth more than what other agencies charged us for a full consultation. The Numero Uno team showed us exactly where we were bleeding money.&rdquo;
 </p>
 <div className="text-sm text-muted mt-2">— Dr. Priya M., Dental Clinic Owner</div>
 </div>
 </div>

  {/* Form */}
  <div className="sitewide-card p-8">
  <h2 className=" text-2xl font-extrabold mb-2">
  Get Your Free Marketing Audit
  </h2>
  <p className="text-sm text-muted mb-8 leading-relaxed">Takes 60 seconds to fill. We'll deliver a full audit of your digital presence within 24 hours — completely free, no obligation.</p>
  
  <form action="https://formspree.io/f/xwvrllgy" method="POST" className="flex flex-col gap-4">
    <input type="hidden" name="_subject" value="🔍 Free Audit Request — Numero Uno" />
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
  </div>
 </div>
 </div>
 </section>
 </>
 );
}
