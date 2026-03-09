import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Case Studies — Real Results for Bangalore Businesses | Numero Uno Marketing",
  description: "See how Bangalore MSMEs grew revenue, leads, and patients with Numero Uno Marketing. Real case studies with real metrics.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-10 px-6 lg:px-12 bg-navy">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Case Studies"
            title="Real Results for"
            titleAccent="Real Businesses"
            subtitle="Every metric is real. Every result is verifiable. Here's what happens when Bangalore MSMEs partner with Numero Uno."
            center
          />
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-12 bg-navy">
        <div className="max-w-5xl mx-auto space-y-8">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-white/[0.02] border-b border-border px-8 py-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-muted uppercase tracking-widest">{cs.industry}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mt-1">{cs.client}</h3>
                </div>
                <span className="text-xs text-muted">{cs.location}</span>
              </div>

              {/* Body */}
              <div className="p-8">
                {/* Metrics grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {cs.results.map((r, ri) => (
                    <div key={ri} className="bg-green/5 border border-green/15 rounded-xl p-4 text-center">
                      <div className="font-[family-name:var(--font-heading)] text-2xl font-extrabold text-green">{r.metric}</div>
                      <div className="text-[11px] text-muted mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Problem / Strategy sections */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold text-red-400 mb-2">The Problem</h4>
                    <p className="text-sm text-white/55 leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold text-green mb-2">Our Strategy</h4>
                    <p className="text-sm text-white/55 leading-relaxed">{cs.strategy}</p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white/[0.03] border border-border rounded-xl p-6">
                  <p className="text-[15px] text-white/60 italic leading-relaxed mb-3">
                    &ldquo;{cs.testimonial}&rdquo;
                  </p>
                  <div className="text-sm text-muted font-semibold">— {cs.testimonialAuthor}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        headline="Want Results"
        headlineAccent="Like These?"
        subtitle="Get a free marketing audit and see what we can achieve for your business."
        primaryText="Get Free Marketing Audit"
        primaryHref="/free-audit"
      />
    </>
  );
}
