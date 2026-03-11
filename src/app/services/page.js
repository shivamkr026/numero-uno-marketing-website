import Link from "next/link";
import { ArrowRight, Target, Share2, Globe, Brain, MessageCircle, BarChart3, Settings, Rocket, TrendingUp, ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

const iconMap = { Target, Share2, Globe, Brain, MessageCircle, BarChart3, Settings, Rocket, TrendingUp };

export const metadata = {
 title: "Digital Marketing Services — Numero Uno Marketing",
 description: "Performance marketing, social media, web development, AI tools, and more. Specialist services with fixed pricing. No lock-in contracts.",
};

export default function ServicesPage() {
 return (
 <>
 <section className="pt-32 pb-20 px-6 lg:px-12 bg-navy">
 <div className="max-w-7xl mx-auto">
 <SectionHeader
 label="Our Services"
 title="Everything You Need to"
 titleAccent="Grow Online"
 subtitle="Explore our specialized services, each with clear deliverables and fixed pricing. Pick what you need, scale when ready."
 center
 />

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {services.map((service) => {
 const Icon = iconMap[service.icon];
 return (
 <Link
 key={service.slug}
 href={`/services/${service.slug}`}
 className="group sitewide-card p-8 no-underline flex flex-col"
 >
 <div
 className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
 style={{ background: `${service.color}15` }}
 >
 {Icon && <Icon size={22} style={{ color: service.color }} />}
 </div>
 <h3 className=" text-lg card-h3 mb-2 text-white">{service.name}</h3>
 <p className="text-sm text-white/50 leading-relaxed mb-6">{service.tagline}</p>
 
 {/* Features list */}
 <ul className="space-y-3 mb-8 flex-grow">
 {service.features.map((f, i) => (
 <li key={i} className="flex items-start gap-3 text-[14px] text-white/60">
 <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: service.color }} />
 {f}
 </li>
 ))}
 </ul>

 <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
 <div className=" text-xl card-h3 text-blue">
 {service.pricing}
 <span className="text-sm font-normal text-muted">{service.pricingNote}</span>
 </div>
 </div>
 </Link>
 );
 })}
 </div>

 {/* Small conversion CTA */}
 <div className="text-center mt-14">
 <p className="text-[15px] text-white/50 mb-4">
 Not sure which service is right for your business?
 </p>
 <Link
 href="/free-audit"
 className="inline-flex items-center gap-2 bg-blue text-navy text-sm cta-btn px-7 py-3 rounded-lg hover:bg-blue-dark transition-colors no-underline"
 >
 Book Free Strategy Call
 <ArrowRight size={14} />
 </Link>
 </div>
 </div>
 </section>

 <CTASection
 headline="Not Sure Which Service"
 headlineAccent="You Need?"
 subtitle="Book a free audit call and we'll recommend the right mix for your business and budget."
 primaryText="Get Free Marketing Audit"
 primaryHref="/free-audit"
 secondaryText="View Case Studies"
 secondaryHref="/case-studies"
 />
 </>
 );
}
