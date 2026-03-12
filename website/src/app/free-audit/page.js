import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AuditForm from "@/components/AuditForm";

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
  
  <AuditForm />

  </div>
 </div>
 </div>
 </section>
 </>
 );
}
