import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Client Testimonials — Numero Uno Marketing Bangalore",
  description: "Read reviews from Bangalore business owners who grew their companies with our fixed-fee digital marketing services.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 lg:px-12 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Client Love"
            title="Don't Take Our Word."
            titleAccent="Take Theirs."
            subtitle="Real reviews from Bangalore business owners who chose fixed-fee growth over expensive agencies."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-8 hover:border-green/20 transition-colors"
              >
                <div className="text-5xl leading-none text-green/40 font-serif mb-2">
                  &ldquo;
                </div>
                <div className="font-[family-name:var(--font-heading)] text-[clamp(22px,2.5vw,32px)] font-extrabold text-green tracking-tight mb-1">
                  {t.metric}
                </div>
                <div className="text-xs text-muted mb-4">{t.metricLabel}</div>
                <p className="text-[15px] leading-relaxed text-white/60 italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Stats */}
                <div className="flex justify-center gap-6 mb-6 p-4 bg-white/[0.03] rounded-xl border border-border">
                  {t.stats.map((s, si) => (
                    <div key={si} className="text-center">
                      <div className="font-[family-name:var(--font-heading)] text-lg font-extrabold text-green">
                        {s.value}
                      </div>
                      <div className="text-[11px] text-muted">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green to-green-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-heading)] text-sm font-bold">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                  <div className="ml-auto text-amber text-sm">
                    {"★".repeat(t.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Write Your"
        headlineAccent="Growth Story?"
        subtitle="Book a free audit call today and see how we can replicate these results for your business."
        primaryText="Get Free Marketing Audit"
        primaryHref="/free-audit"
        secondaryText="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
