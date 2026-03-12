import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const metadata = {
 title: "Client Testimonials — Numero Uno Marketing",
 description: "Read reviews from business owners who scaled their brands with our fixed-fee performance marketing services.",
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
 subtitle="Real reviews from founders who chose fixed-fee growth over expensive traditional agencies."
 center
 />

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
 {testimonials.map((t, i) => (
 <div
 key={i}
 className="sitewide-card p-8"
 >
 <div className="text-5xl leading-none text-blue/40 font-serif mb-2">
 &ldquo;
 </div>
 <div className=" text-[clamp(22px,2.5vw,32px)] font-extrabold text-blue tracking-tight mb-1">
 {t.metric}
 </div>
 <div className="text-xs text-muted mb-4">{t.metricLabel}</div>
 <p className="text-[15px] body-para text-white/60 italic mb-6">
 &ldquo;{t.quote}&rdquo;
 </p>

 {/* Stats */}
 <div className="flex justify-center gap-6 mb-6 p-4 bg-white/[0.03] rounded-xl border border-border">
 {t.stats.map((s, si) => (
 <div key={si} className="text-center">
 <div className=" text-lg card-h3 text-blue">
 {s.value}
 </div>
 <div className="text-[11px] text-muted">{s.label}</div>
 </div>
 ))}
 </div>

 {/* Author */}
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-gradient-to-br from-blue to-blue-dark rounded-full flex items-center justify-center text-white text-sm cta-btn">
 {t.name[0]}
 </div>
            <div>
              <div className="text-sm font-bold">{t.name}</div>
              <div className="text-xs text-muted">{t.role}</div>
            </div>
            <div className="ml-auto text-yellow-500 text-sm">
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
 primaryText="Explore Case Studies"
 primaryHref="/case-studies"
 secondaryText="Learn More"
 secondaryHref="/services"
 />
 </>
 );
}
