import { notFound } from "next/navigation";
import Link from "next/link";
import {
 ArrowRight, CheckCircle2, Target, Share2, Globe, Brain,
 MessageCircle, BarChart3, Settings, ChevronDown,
} from "lucide-react";
import { services } from "@/data/services";


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

 {/* New CTA */}
 <section className="py-20 px-6 lg:px-12 bg-navy">
 <div className="max-w-4xl mx-auto">
   <div 
     style={{
       background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(59,130,246,0.02))',
       border: '1px solid rgba(59,130,246,0.12)',
       borderRadius: '20px',
       padding: '56px 40px',
       textAlign: 'center'
     }}
   >
     <h2 className="text-3xl font-extrabold text-white mb-3">
       Ready to Get Started?
     </h2>
     <p className="text-base text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
       Talk to us directly. We'll understand your business and put together the right plan for you — no obligation, no sales pressure.
     </p>
     
     <div className="flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-[16px] w-full md:w-auto mb-8">
       <Link 
         href="/contact" 
         className="flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:-translate-y-[2px] bg-[#3B82F6] shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] no-underline"
       >
         Contact Us →
       </Link>
       <Link 
         href="https://wa.me/919902633980" 
         target="_blank" 
         rel="noopener noreferrer"
         className="flex items-center justify-center gap-2.5 w-full md:w-auto px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:-translate-y-[2px] bg-[#22C55E] shadow-[0_0_24px_rgba(34,197,94,0.25)] hover:shadow-[0_0_32px_rgba(34,197,94,0.4)] no-underline group"
       >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="18" height="18" className="transition-colors duration-300 group-hover:text-[#166534]">
           <path d="M16.004 3.2C9.058 3.2 3.404 8.854 3.404 15.8c0 2.22.58 4.39 1.682 6.302L3.2 28.8l6.892-1.81A12.56 12.56 0 0 0 16.004 28.4c6.946 0 12.596-5.654 12.596-12.6S22.95 3.2 16.004 3.2Zm0 22.752a10.12 10.12 0 0 1-5.388-1.546l-.386-.23-4.004 1.052 1.07-3.904-.252-.4a10.1 10.1 0 0 1-1.548-5.384c0-5.608 4.56-10.164 10.168-10.164 5.438 0 10.16 4.556 10.16 10.164 0 5.612-4.562 10.412-10.16 10.412h-.004Zm5.578-7.604c-.306-.154-1.812-.894-2.092-.996-.282-.102-.486-.154-.69.154-.204.306-.792.996-.97 1.2-.178.204-.358.23-.664.078-.306-.154-1.292-.476-2.46-1.518-.91-.81-1.524-1.812-1.702-2.118-.178-.306-.02-.472.134-.624.138-.138.306-.358.46-.538.152-.178.204-.306.306-.51.102-.204.05-.384-.026-.538-.076-.154-.69-1.664-.946-2.278-.25-.598-.502-.516-.69-.526l-.588-.01a1.13 1.13 0 0 0-.818.384c-.282.306-1.074 1.05-1.074 2.56 0 1.512 1.1 2.972 1.254 3.176.152.204 2.162 3.302 5.24 4.63.732.316 1.304.506 1.75.648.736.234 1.406.2 1.934.122.59-.088 1.812-.74 2.068-1.456.256-.716.256-1.33.178-1.456-.076-.128-.28-.204-.588-.358Z" />
         </svg>
         Chat on WhatsApp
       </Link>
       <Link 
         href="tel:+919902633980" 
         className="flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-[2px] bg-transparent border-[1.5px] border-white/12 text-white/60 hover:border-white/30 hover:text-white no-underline"
       >
         📞 Call +91 99026 33980
       </Link>
     </div>

     <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>
       Free consultation · No obligation · Response within 24 hours
     </p>
   </div>
 </div>
 </section>
 </>
 );
}
