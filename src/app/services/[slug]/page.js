import { notFound } from "next/navigation";
import Link from "next/link";
import {
 ArrowRight, CheckCircle2, Target, Share2, Globe, Brain,
 MessageCircle, BarChart3, Settings, ChevronDown,
} from "lucide-react";
import { services } from "@/data/services";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

const iconMap = { Target, Share2, Globe, Brain, MessageCircle, BarChart3, Settings };

export async function generateStaticParams() {
 return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
 const { slug } = await params;
 const service = services.find((s) => s.slug === slug);
 if (!service) return {};
 return {
 title: `${service.name} — Numero Uno Marketing`,
 description: service.description,
 };
}

export default async function ServicePage({ params }) {
 const { slug } = await params;
 const service = services.find((s) => s.slug === slug);
 if (!service) notFound();

 const Icon = iconMap[service.icon];

 return (
 <>
 {/* Hero */}
 <section className="pt-32 pb-16 px-6 lg:px-12 bg-navy">
 <div className="max-w-5xl mx-auto">
 <Link href="/services" className="inline-flex items-center gap-1 text-sm text-muted hover:text-white transition-colors no-underline mb-6">
 ← Back to Services
 </Link>
 <div className="flex items-start gap-5 mb-6">
 <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${service.color}15` }}>
 {Icon && <Icon size={26} style={{ color: service.color }} />}
 </div>
 <div>
 <h1 className=" text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-tight">
 {service.name}
 </h1>
 <p className="text-base text-white/55 mt-2 leading-relaxed max-w-xl">
 {service.description}
 </p>
 </div>
 </div>
 <div className="flex flex-wrap gap-4 items-center">
 <div className=" text-3xl section-h2 text-blue">
 {service.pricing}
 <span className="text-base font-normal text-muted">{service.pricingNote}</span>
 </div>
 <Link href="/free-audit" className="inline-flex items-center gap-2 bg-blue text-navy text-sm cta-btn px-6 py-3 rounded-xl hover:bg-blue-dark transition-colors no-underline">
 Get Started <ArrowRight size={14} />
 </Link>
 </div>
 </div>
 </section>

 {/* Who it's for */}
 <section className="py-16 px-6 lg:px-12 bg-navy-2">
 <div className="max-w-5xl mx-auto">
 <h2 className=" text-xl card-h3 mb-4">Who This Is For</h2>
 <p className="text-base text-white/55 leading-relaxed max-w-2xl">{service.whoItsFor}</p>
 </div>
 </section>

 {/* Deliverables */}
 <section className="py-16 px-6 lg:px-12 bg-navy">
 <div className="max-w-5xl mx-auto">
 <h2 className=" text-xl card-h3 mb-6">What&apos;s Included</h2>
 <div className="grid sm:grid-cols-2 gap-4">
 {service.features.map((f, i) => (
 <div key={i} className="flex items-center gap-3 sitewide-card p-4">
 <CheckCircle2 size={18} className="text-blue shrink-0" />
 <span className="text-sm text-white/70">{f}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Process */}
 <section className="py-16 px-6 lg:px-12 bg-navy-2">
 <div className="max-w-5xl mx-auto">
 <h2 className=" text-xl card-h3 mb-6">Our Process</h2>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
 {service.process.map((p, i) => (
 <div key={i} className="sitewide-card p-6 text-center">
 <div className=" text-4xl section-h2 text-white/[0.05] mb-2">{String(i + 1).padStart(2, "0")}</div>
 <h3 className=" text-sm font-bold mb-2 text-blue">{p.step}</h3>
 <p className="text-[13px] text-muted leading-relaxed">{p.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Case Study Highlight */}
 {service.caseStudy && (
 <section className="py-16 px-6 lg:px-12 bg-navy">
 <div className="max-w-5xl mx-auto">
 <h2 className=" text-xl card-h3 mb-6">Real Results</h2>
 <div className="bg-blue/5 border border-blue/20 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6">
 <div className="shrink-0">
 <div className="text-xs text-muted uppercase tracking-wider mb-1">{service.caseStudy.industry}</div>
 <div className=" text-4xl section-h2 text-blue">{service.caseStudy.metric}</div>
 </div>
 <div>
 <p className="text-sm text-white/60 body-para">{service.caseStudy.detail}</p>
 <Link href="/case-studies" className="inline-flex items-center gap-1 text-sm text-blue font-semibold mt-3 no-underline hover:underline">
 Read Full Case Study <ArrowRight size={12} />
 </Link>
 </div>
 </div>
 </div>
 </section>
 )}

 {/* FAQ */}
 <section className="py-16 px-6 lg:px-12 bg-navy-2">
 <div className="max-w-3xl mx-auto">
 <h2 className=" text-xl card-h3 mb-6 text-center">Frequently Asked Questions</h2>
 <div className="space-y-4">
 {service.faqs.map((faq, i) => (
 <div key={i} className="sitewide-card p-6">
 <h3 className=" text-sm font-bold mb-2 text-white">{faq.q}</h3>
 <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA with form */}
 <section className="py-20 px-6 lg:px-12 bg-navy">
 <div className="max-w-2xl mx-auto">
 <h2 className=" text-2xl font-extrabold text-center mb-2">
 Ready to Get Started with <span className="text-blue">{service.name}</span>?
 </h2>
 <p className="text-sm text-muted text-center mb-8">Fill in your details and we&apos;ll get back within 24 hours.</p>
 <div className="sitewide-card p-8">
 <ContactForm compact />
 </div>
 </div>
 </section>
 </>
 );
}
