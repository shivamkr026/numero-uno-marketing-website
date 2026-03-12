import Link from "next/link";
import {
 ArrowRight,
 Target,
 Share2,
 Globe,
 Brain,
 MessageCircle,
 BarChart3,
 Settings,
 CheckCircle2,
 Users,
 TrendingUp,
 Clock,
 Zap,
 Star,
 Phone,
 ChevronRight,
 Search,
 LayoutDashboard,
 Rocket,
 MapPin,
 DollarSign,
 Mail,
} from "lucide-react";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import HeroStats from "@/components/HeroStats";
import ParticleHero from "@/components/ParticleHero";

const iconMap = {
 Target,
 Share2,
 Globe,
 Brain,
 MessageCircle,
 BarChart3,
 Settings,
 Rocket,
 TrendingUp
};

const metrics = [
 { value: "17+", label: "Brands Scaled", color: "text-white" },
 { value: "₹10Cr+", label: "Revenue Generated", color: "text-orange" },
 { value: "8.2x", label: "Average ROAS", color: "text-blue" },
];

const problems = [
 "No online presence or outdated website",
 "Social media accounts with low engagement",
 "Wasting money on ads without proper tracking",
 "No consistent leads from digital channels",
 "Competitors ranking above you on Google",
 "No clarity on what marketing is actually working",
];

const solutions = [
 "Conversion-optimized websites built to generate leads",
 "Consistent social media management with quality content",
 "Data-driven ad campaigns with transparent ROAS",
 "Consistent lead generation for your brand",
 "Marketing strategies engineered for ambitious brands",
 "Weekly performance reports with clear dashboards",
];

const processSteps = [
 {
 num: "01",
 title: "Free Audit",
 desc: "Deep competitor analysis, website review, and custom 90-day roadmap for your business.",
 icon: Search,
 },
 {
 num: "02",
 title: "Strategy Session",
 desc: "15-minute call to align on goals, budget, and the right mix of services.",
 icon: LayoutDashboard,
 },
 {
 num: "03",
 title: "Execution",
 desc: "Content calendar live, ads running, website optimized. First leads flowing within weeks.",
 icon: Zap,
 },
 {
 num: "04",
 title: "Reporting & Scale",
 desc: "Weekly dashboards, monthly reviews. Double down on winners and scale what works.",
 icon: Rocket,
 },
];

export default function HomePage() {
 return (
 <>
        {/* ═══════════════════════════════════════════════════
          HEADER / HERO SECTION
        ═══════════════════════════════════════════════════ */}
        <ParticleHero />

 {/* ═══════════════════════════════════════════════════
 SERVICES OVERVIEW
 ═══════════════════════════════════════════════════ */}
 <section 
 className="py-24 px-6 lg:px-12 relative" 
 id="services"
 style={{ backgroundColor: "#0D0F14", borderTop: "1px solid rgba(255,255,255,0.06)" }}
 >
 <div 
   className="absolute inset-0 pointer-events-none z-0" 
   style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "22px 22px" }} 
 />
 <div className="max-w-7xl mx-auto relative z-10">
 <SectionHeader
 label="Our Services"
 title="Growth Services That Actually"
 titleAccent="Deliver"
 subtitle="Specialist services. Fixed pricing. No lock-in contracts."
 />

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
 {services.map((service) => {
 const Icon = iconMap[service.icon];
 return (
 <Link
 key={service.slug}
 href={`/services/${service.slug}`}
 className="group sitewide-card p-8 no-underline flex flex-col"
 style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.07)" }}
 >
 <div
 className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
 style={{ background: `${service.color}15` }}
 >
 {Icon && <Icon size={22} style={{ color: service.color }} />}
 </div>
 <h3 className=" text-[17px] card-h3 mb-3 text-white">
 {service.name}
 </h3>
 <p className="text-[14px] text-white/50 body-para leading-relaxed mb-6 flex-grow">
 {service.tagline}
 </p>
 <div className=" text-xl card-h3 text-blue mt-auto border-t border-white/5 pt-4">
 {service.pricing}
 <span className="text-[13px] font-normal text-muted ml-0.5">
 {service.pricingNote}
 </span>
 </div>
 </Link>
 );
 })}
 </div>

 {/* Small conversion CTA */}
 <div className="text-center mt-12">
 <p className="text-[15px] text-white/50 mb-4">
 Not sure which service is right for your business?
 </p>
 <Link
 href="/services"
 className="inline-flex items-center gap-2 text-white text-sm cta-btn px-7 py-3 rounded-lg cta-glow no-underline font-semibold"
 style={{ backgroundColor: "var(--color-primary)" }}
 >
 Learn More
 <ArrowRight size={14} />
 </Link>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════════════
 PROBLEM-SOLUTION
 ═══════════════════════════════════════════════════ */}
 <section 
 className="py-24 px-6 lg:px-12"
 style={{ backgroundColor: "#0D0F14", borderTop: "1px solid rgba(255,255,255,0.06)" }}
 >
 <div className="max-w-7xl mx-auto">
 <SectionHeader
 label="Why Numero Uno"
 title="Your Challenges."
 titleAccent="Our Solutions."
 subtitle="We build predictable growth engines for ambitious brands."
 center
 />

 <div className="flex flex-col lg:flex-row max-w-5xl mx-auto overflow-hidden">
 {/* Problems */}
 <div className="flex-1 p-8 lg:p-12 relative" style={{ backgroundColor: "#0A0C11", borderRight: "1px solid rgba(79, 110, 247, 0.3)" }}>
 <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "radial-gradient(circle at top left, rgba(79, 110, 247, 0.06) 0%, transparent 60%)" }} />
 <h3 className="text-lg card-h3 mb-6 flex items-center gap-3 relative z-10" style={{ color: "#FFFFFF" }}>
 <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#BEBEBE" }}>✗</span>
 Common Growth Struggles
 </h3>
 <ul className="space-y-5 relative z-10">
 {problems.map((p, i) => (
 <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-secondary)" }}>
 <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#BEBEBE" }} />
 {p}
 </li>
 ))}
 </ul>
 </div>

 {/* Solutions */}
 <div className="flex-1 p-8 lg:p-12" style={{ backgroundColor: "#0D0F14" }}>
 <h3 className="text-lg card-h3 mb-6 flex items-center gap-3" style={{ color: "var(--color-primary)" }}>
 <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ backgroundColor: "rgba(79, 110, 247, 0.15)", color: "var(--color-primary)" }}>
 <CheckCircle2 size={16} />
 </span>
 Numero Uno Solutions
 </h3>
 <ul className="space-y-5">
 {solutions.map((s, i) => (
 <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-secondary)" }}>
 <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-primary)" }} />
 {s}
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════════════
 PROCESS
 ═══════════════════════════════════════════════════ */}
 <section 
 className="py-24 px-6 lg:px-12"
 style={{ backgroundColor: "#0D0F14", borderTop: "1px solid rgba(255,255,255,0.06)" }}
 >
 <div className="max-w-7xl mx-auto">
 <SectionHeader
 label="How It Works"
 title="From Audit to"
 titleAccent="Scale in 4 Steps"
 subtitle="A sharp, transparent process designed for founders who value their time."
 center
 />

 {/* Desktop dashed line wrapper */}
 <div className="relative max-w-5xl mx-auto mt-16">
 <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] -z-10" style={{ borderTop: "1px dashed rgba(79, 110, 247, 0.3)" }}></div>
 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
 {processSteps.map((step) => (
 <div
 key={step.num}
 className="text-center group relative sitewide-card p-6 border-transparent bg-transparent mt-4"
 style={{ background: "transparent", borderColor: "transparent" }}
 >
 <div 
   className="w-20 h-20 rounded-full mx-auto relative flex items-center justify-center mb-6 z-10 transition-colors group-hover:bg-[#4F6EF725]"
   style={{ backgroundColor: "rgba(79, 110, 247, 0.08)", border: "1px solid rgba(79, 110, 247, 0.4)" }}
 >
   <div className="absolute inset-0 rounded-full pointer-events-none transition-opacity" style={{ background: "radial-gradient(circle, rgba(79, 110, 247, 0.05) 0%, transparent 80%)", transform: "scale(2.5)", zIndex: -1 }}></div>
   <span className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>{step.num}</span>
 </div>
 <h3 className="text-base font-bold mb-3" style={{ color: "#FFFFFF" }}>
 {step.title}
 </h3>
 <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-secondary)" }}>
 {step.desc}
 </p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════════════
 CASE STUDIES
 ═══════════════════════════════════════════════════ */}
 <section 
 className="py-24 px-6 lg:px-12 relative"
 style={{ backgroundColor: "#0A0C11", borderTop: "1px solid rgba(255,255,255,0.06)" }}
 >
 <div 
   className="absolute inset-0 pointer-events-none z-0" 
   style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "24px 24px" }} 
 />
 <div className="max-w-7xl mx-auto relative z-10">
 <SectionHeader
 label="Results"
 title="Real Results for"
 titleAccent="Real Businesses"
 subtitle="Ambitious brands. Measurable results."
 center
 />

 <div className="grid md:grid-cols-3 gap-6 mb-8">
 <Link 
   href="/case-studies" 
   className="group sitewide-card p-8 no-underline text-center relative overflow-hidden transition-shadow"
   style={{ backgroundColor: "#13161F", borderTop: "3px solid var(--color-primary)" }}
 >
 <div className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-muted)" }}>Restaurant Chain</div>
 <div className="text-[clamp(36px,4vw,52px)] font-bold mb-2" style={{ color: "var(--color-primary)" }}>+204%</div>
 <div className="text-sm border-b border-white/5 pb-3 mb-3" style={{ color: "var(--color-secondary)" }}>Revenue Growth</div>
 <div className="text-[13px]" style={{ color: "var(--color-muted)" }}>₹4.2L → ₹12.8L monthly</div>
 <div className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-primary)" }}>Read Case Study →</div>
 </Link>
 <Link 
   href="/case-studies" 
   className="group sitewide-card p-8 no-underline text-center relative overflow-hidden transition-shadow"
   style={{ backgroundColor: "#13161F", borderTop: "3px solid var(--color-primary)" }}
 >
 <div className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-muted)" }}>Dental Clinic</div>
 <div className="text-[clamp(36px,4vw,52px)] font-bold mb-2" style={{ color: "var(--color-primary)" }}>+154%</div>
 <div className="text-sm border-b border-white/5 pb-3 mb-3" style={{ color: "var(--color-secondary)" }}>Patient Growth</div>
 <div className="text-[13px]" style={{ color: "var(--color-muted)" }}>56 → 142 monthly appointments</div>
 <div className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-primary)" }}>Read Case Study →</div>
 </Link>
 <Link 
   href="/case-studies" 
   className="group sitewide-card p-8 no-underline text-center relative overflow-hidden transition-shadow"
   style={{ backgroundColor: "#13161F", borderTop: "3px solid var(--color-primary)" }}
 >
 <div className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-muted)" }}>Fashion E-Commerce</div>
 <div className="text-[clamp(36px,4vw,52px)] font-bold mb-2" style={{ color: "var(--color-primary)" }}>+187%</div>
 <div className="text-sm border-b border-white/5 pb-3 mb-3" style={{ color: "var(--color-secondary)" }}>Sales Growth</div>
 <div className="text-[13px]" style={{ color: "var(--color-muted)" }}>₹8L → ₹23L monthly GMV</div>
 <div className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-primary)" }}>Read Case Study →</div>
 </Link>
 </div>

 <div className="text-center">
 <Link
 href="/case-studies"
 className="inline-flex items-center gap-2 cta-btn hover:underline no-underline"
 style={{ color: "var(--color-primary)", fontSize: "14px", fontWeight: "600" }}
 >
 View All Case Studies
 <ArrowRight size={14} />
 </Link>
 </div>
 </div>
 </section>







 {/* ═══════════════════════════════════════════════════
 FINAL CTA
 ═══════════════════════════════════════════════════ */}
 <CTASection
 headline="Join Our"
 headlineAccent="Growing Client Roster"
 subtitle="Fixed pricing. Proven results. Ambitious brands scaling with confidence."
 primaryText="See How It Works"
 primaryHref="/services"
 secondaryText="Read Client Reviews"
 secondaryHref="/case-studies"
 />

 </>
 );
}
