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
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

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
 { value: "17+", label: "Active Clients", color: "text-white" },
 { value: "₹10Cr+", label: "Revenue Generated", color: "text-orange" },
 { value: "8.2x", label: "Average ROAS", color: "text-blue" },
 { value: "100%", label: "Campaigns Optimized for Growth", color: "text-purple" },
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
          HERO SECTION
        ═══════════════════════════════════════════════════ */}
        <section 
          className="relative flex flex-col items-center justify-center px-6 lg:px-12 transition-all w-full"
          style={{
            paddingTop: "100px",
            paddingBottom: "60px",
            minHeight: "100vh",
            background: `
              radial-gradient(ellipse 60% 50% at 50% 40%, rgba(59,130,246,0.1) 0%, transparent 65%),
              radial-gradient(ellipse 40% 30% at 50% 60%, rgba(99,102,241,0.06) 0%, transparent 55%),
              #080B12
            `
          }}
        >
          {/* Noise Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`
            }} 
          />
          
          <div className="w-full relative z-10 flex flex-col items-center text-center mx-auto" style={{ maxWidth: "780px" }}>
            
            <div className="inline-flex items-center gap-2 bg-blue/10 border border-blue/30 rounded-full px-4 py-1.5 text-[13px] text-blue small-label mx-auto" style={{ marginBottom: "16px" }}>
              <span className="w-1.5 h-1.5 bg-blue rounded-full animate-pulse" />
              Revenue-Focused Growth Agency
            </div>

            <h1 className="hero-h1 text-[clamp(36px,5vw,64px)] font-bold mx-auto w-full" style={{ letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: "760px", marginBottom: "16px" }}>
              Turn Marketing Into{" "}
              <span className="text-blue">Predictable Revenue</span>
            </h1>

            <p className="body-para mx-auto text-[15px]" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "480px", lineHeight: 1.65, marginBottom: "0" }}>
              Websites, Performance Ads, Social Media and AI tools built for
              one outcome — measurable growth that compounds.{" "}
              <span className="text-blue font-semibold">
                Fixed pricing. No lock-in. Built to scale.
              </span>
            </p>

            <div className="flex justify-center flex-wrap w-full md:w-auto mx-auto" style={{ gap: "14px", marginTop: "28px", marginBottom: "32px" }}>
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 bg-blue text-navy text-[15px] cta-btn px-8 py-4 rounded-xl cta-glow no-underline w-full md:w-auto"
              >
                Get Free Marketing Audit
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-[1.5px] border-border text-white text-[15px] cta-btn px-8 py-4 rounded-xl hover:border-blue/40 hover:bg-blue/5 transition-all no-underline w-full md:w-auto"
              >
                View Services
              </Link>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center w-full mx-auto relative gap-y-8 md:gap-y-0 text-center">
              {[ 
                { value: "17+", label: "Brands Scaled" }, 
                { value: "8.2x", label: "Average ROAS" }, 
                { value: "₹10Cr+", label: "Revenue Generated" }, 
                { value: "4.9/5", label: "Client Rating" } 
              ].map((m, i) => (
                <div key={i} className={`flex flex-col items-center flex-1 px-4 md:px-6 ${i !== 3 ? 'md:border-r md:border-white/10' : ''}`}>
                  <div style={{ fontFamily: "var(--font-heading), system-ui, sans-serif", fontSize: "32px", fontWeight: "700", color: "#3B82F6", lineHeight: 1 }}>
                    {m.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-body), system-ui, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "8px" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 
          <div className="hidden lg:block mt-8 w-full max-w-4xl mx-auto">
            <div 
              className="p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 0 1px rgba(59,130,246,0.08), 0 24px 64px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.3)",
                borderRadius: "16px"
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-muted mb-1 text-left">
                    This Month
                  </div>
                  <div className="text-2xl font-extrabold text-left">
                    Client Results
                  </div>
                </div>
                <div className="bg-blue/15 border border-blue/30 rounded-lg px-3 py-1.5 text-xs text-blue font-semibold">
                  ↑ Live
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                <div className="rounded-xl p-4 text-left" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.22)" }}>
                  <div className="text-[11px] text-[#64748B] uppercase small-label mb-1">
                    Avg. ROAS
                  </div>
                  <div className="text-3xl section-h2 text-[#60A5FA]">
                    8.2x
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(96,165,250,0.8)" }}>
                    ↑ +34% vs last mo
                  </div>
                </div>
                <div className="rounded-xl p-4 text-left" style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.22)" }}>
                  <div className="text-[11px] text-[#64748B] uppercase small-label mb-1">
                    Leads Generated
                  </div>
                  <div className="text-3xl section-h2 text-[#818CF8]">
                    1,240
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(129,140,248,0.8)" }}>
                    ↑ +61% vs last mo
                  </div>
                </div>
                <div className="rounded-xl p-4 text-left" style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.22)" }}>
                  <div className="text-[11px] text-[#64748B] uppercase small-label mb-1">
                    Revenue Added
                  </div>
                  <div className="text-[28px] metric-num text-[#A78BFA]">
                    ₹48L
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(167,139,250,0.8)" }}>
                    across 17 clients
                  </div>
                </div>
                <div className="rounded-xl p-4 text-left" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.18)" }}>
                  <div className="text-[11px] text-[#64748B] uppercase small-label mb-1">
                    Cost Per Lead
                  </div>
                  <div className="text-[28px] metric-num text-[#93C5FD]">
                    ₹148
                  </div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(147,197,253,0.8)" }}>
                    ↓ -63% optimised
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[11px] text-muted uppercase small-label mb-2 text-left">
                  Weekly Leads Trend
                </div>
                <div className="flex items-end gap-1.5 h-[52px]">
                  {[40, 55, 70, 62, 85, 100].map((h, i, arr) => {
                    const isLast = i === arr.length - 1;
                    return (
                      <div
                        key={i}
                        style={{
                          height: `${h}%`,
                          background: isLast 
                            ? "linear-gradient(to top, #2563EB, #60A5FA)" 
                            : "linear-gradient(to top, #1D4ED8, #3B82F6)",
                          borderRadius: "4px 4px 0 0",
                          boxShadow: isLast ? "0 0 12px rgba(59,130,246,0.5)" : "none",
                          flex: 1
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          */}

        </section>

 {/* ═══════════════════════════════════════════════════
 SERVICES OVERVIEW
 ═══════════════════════════════════════════════════ */}
 <section 
 className="py-24 px-6 lg:px-12 bg-navy-2" 
 id="services"
 style={{ borderTop: "1px solid rgba(59,130,246,0.06)" }}
 >
 <div className="max-w-7xl mx-auto">
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
 href="/free-audit"
 className="inline-flex items-center gap-2 bg-blue text-navy text-sm cta-btn px-7 py-3 rounded-lg cta-glow no-underline"
 >
 Book Free Strategy Call
 <ArrowRight size={14} />
 </Link>
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════════════
 PROBLEM-SOLUTION
 ═══════════════════════════════════════════════════ */}
 <section 
 className="py-24 px-6 lg:px-12 bg-navy"
 style={{ borderTop: "1px solid rgba(59,130,246,0.06)" }}
 >
 <div className="max-w-7xl mx-auto">
 <SectionHeader
 label="Why Numero Uno"
 title="Your Challenges."
 titleAccent="Our Solutions."
 subtitle="We build predictable growth engines for ambitious brands."
 center
 />

 <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
 {/* Problems */}
 <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-8">
 <h3 className=" text-lg card-h3 text-red-400 mb-6 flex items-center gap-2">
 <span className="w-8 h-8 bg-red-500/15 rounded-lg flex items-center justify-center text-sm">✗</span>
 Common Growth Struggles
 </h3>
 <ul className="space-y-4">
 {problems.map((p, i) => (
 <li
 key={i}
 className="flex items-start gap-3 text-sm text-white/60 body-para"
 >
 <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
 {p}
 </li>
 ))}
 </ul>
 </div>

 {/* Solutions */}
 <div className="bg-blue/5 border border-blue/15 rounded-2xl p-8">
 <h3 className=" text-lg card-h3 text-blue mb-6 flex items-center gap-2">
 <span className="w-8 h-8 bg-blue/15 rounded-lg flex items-center justify-center text-sm">
 <CheckCircle2 size={16} className="text-blue" />
 </span>
 Numero Uno Solutions
 </h3>
 <ul className="space-y-4">
 {solutions.map((s, i) => (
 <li
 key={i}
 className="flex items-start gap-3 text-sm text-white/60 body-para"
 >
 <CheckCircle2
 size={16}
 className="text-blue mt-0.5 shrink-0"
 />
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
 className="py-24 px-6 lg:px-12 bg-navy-2"
 style={{ borderTop: "1px solid rgba(59,130,246,0.06)" }}
 >
 <div className="max-w-7xl mx-auto">
 <SectionHeader
 label="How It Works"
 title="From Audit to"
 titleAccent="Scale in 4 Steps"
 subtitle="A sharp, transparent process designed for founders who value their time."
 center
 />

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
 {processSteps.map((step) => (
 <div
 key={step.num}
 className="sitewide-card text-center group"
 >
 <div className=" text-6xl metric-num text-white/[0.04] leading-none mb-4">
 {step.num}
 </div>
 <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
 <step.icon size={22} className="text-blue" />
 </div>
 <h3 className=" text-base card-h3 mb-2">
 {step.title}
 </h3>
 <p className="text-[13px] text-white/50 body-para leading-relaxed">
 {step.desc}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ═══════════════════════════════════════════════════
 CASE STUDIES
 ═══════════════════════════════════════════════════ */}
 <section 
 className="py-24 px-6 lg:px-12 bg-navy"
 style={{ borderTop: "1px solid rgba(59,130,246,0.06)" }}
 >
 <div className="max-w-7xl mx-auto">
 <SectionHeader
 label="Results"
 title="Real Results for"
 titleAccent="Real Businesses"
 subtitle="Ambitious brands. Measurable results."
 center
 />

 <div className="grid md:grid-cols-3 gap-6 mb-8">
 <Link href="/case-studies" className="group sitewide-card p-8 no-underline text-center">
 <div className="text-xs text-muted uppercase tracking-widest mb-4">Restaurant Chain</div>
 <div className=" text-[clamp(36px,4vw,52px)] metric-num text-orange">+204%</div>
 <div className="text-sm text-white/70 small-label mb-2">Revenue Growth</div>
 <div className="text-[13px] text-muted">₹4.2L → ₹12.8L monthly</div>
 <div className="mt-4 text-sm text-blue font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read Case Study →</div>
 </Link>
 <Link href="/case-studies" className="group sitewide-card p-8 no-underline text-center">
 <div className="text-xs text-muted uppercase tracking-widest mb-4">Dental Clinic</div>
 <div className=" text-[clamp(36px,4vw,52px)] metric-num text-blue">+154%</div>
 <div className="text-sm text-white/70 small-label mb-2">Patient Growth</div>
 <div className="text-[13px] text-muted">56 → 142 monthly appointments</div>
 <div className="mt-4 text-sm text-blue font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read Case Study →</div>
 </Link>
 <Link href="/case-studies" className="group sitewide-card p-8 no-underline text-center">
 <div className="text-xs text-muted uppercase tracking-widest mb-4">Fashion E-Commerce</div>
 <div className=" text-[clamp(36px,4vw,52px)] metric-num text-purple">+187%</div>
 <div className="text-sm text-white/70 small-label mb-2">Sales Growth</div>
 <div className="text-[13px] text-muted">₹8L → ₹23L monthly GMV</div>
 <div className="mt-4 text-sm text-blue font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read Case Study →</div>
 </Link>
 </div>

 <div className="text-center">
 <Link
 href="/case-studies"
 className="inline-flex items-center gap-2 text-blue text-sm cta-btn hover:underline no-underline"
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
 headline="Join"
 headlineAccent="17+ Brands Already Scaling"
 subtitle="Fixed pricing. Proven results. Ambitious brands scaling with confidence."
 primaryText="Book Free Strategy Call"
 primaryHref="/free-audit"
 secondaryText="Read Client Reviews"
 secondaryHref="/case-studies"
 />

 </>
 );
}
