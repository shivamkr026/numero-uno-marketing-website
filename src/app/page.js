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
  "Consistent lead generation for your business",
  "Marketing strategies designed for Bangalore businesses",
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
      <section className="min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 lg:px-12 relative bg-gradient-to-br from-navy via-navy-2 to-navy">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green/10 border border-green/30 rounded-full px-4 py-1.5 text-[13px] font-medium text-green tracking-wide mb-6">
                <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse" />
                Digital Growth Agency · Bangalore
              </div>

              <h1 className="font-[family-name:var(--font-heading)] text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[1.05] tracking-tight mb-6">
                We Grow Bangalore MSMEs with{" "}
                <span className="text-green">Data-Driven Marketing</span>
              </h1>

              <p className="text-[17px] leading-relaxed text-white/55 max-w-lg mb-8">
                Websites, Social Media, Performance Ads and AI tools designed to
                generate leads and measurable revenue.{" "}
                <span className="text-green font-semibold">
                  Clear pricing. No lock-in. Built for measurable growth.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center justify-center gap-2 bg-green text-navy font-[family-name:var(--font-heading)] font-bold text-[15px] px-8 py-4 rounded-xl hover:bg-green-dark transition-all no-underline hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green/30"
                >
                  Get Free Marketing Audit
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-[1.5px] border-border text-white font-[family-name:var(--font-heading)] font-semibold text-[15px] px-8 py-4 rounded-xl hover:border-green/40 hover:bg-green/5 transition-all no-underline"
                >
                  View Services
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-[13px] text-white/55">
                  <span className="w-1.5 h-1.5 bg-green rounded-full" />
                  17+ Active Clients
                </div>
                <div className="flex items-center gap-2 text-[13px] text-white/55">
                  <span className="w-1.5 h-1.5 bg-green rounded-full" />
                  ₹10Cr+ Revenue Generated
                </div>
                <div className="flex items-center gap-2 text-[13px] text-white/55">
                  <span className="w-1.5 h-1.5 bg-green rounded-full" />
                  ⭐ 4.9/5 Client Rating
                </div>
              </div>
            </div>

            {/* Right — clean dashboard mockup */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-[family-name:var(--font-heading)] text-sm text-muted mb-1">
                      This Month
                    </div>
                    <div className="font-[family-name:var(--font-heading)] text-2xl font-extrabold">
                      Client Results
                    </div>
                  </div>
                  <div className="bg-green/15 border border-green/30 rounded-lg px-3 py-1.5 text-xs text-green font-semibold">
                    ↑ Live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-green/8 border border-green/20 rounded-xl p-4">
                    <div className="text-[11px] text-muted uppercase tracking-wider mb-1">
                      Avg. ROAS
                    </div>
                    <div className="font-[family-name:var(--font-heading)] text-3xl font-extrabold text-green">
                      8.2x
                    </div>
                    <div className="text-[11px] text-green mt-1">
                      ↑ +34% vs last mo
                    </div>
                  </div>
                  <div className="bg-orange/8 border border-orange/20 rounded-xl p-4">
                    <div className="text-[11px] text-muted uppercase tracking-wider mb-1">
                      Leads Generated
                    </div>
                    <div className="font-[family-name:var(--font-heading)] text-3xl font-extrabold text-orange">
                      1,240
                    </div>
                    <div className="text-[11px] text-orange mt-1">
                      ↑ +61% vs last mo
                    </div>
                  </div>
                  <div className="bg-blue/8 border border-blue/20 rounded-xl p-4">
                    <div className="text-[11px] text-muted uppercase tracking-wider mb-1">
                      Revenue Added
                    </div>
                    <div className="font-[family-name:var(--font-heading)] text-[28px] font-extrabold text-blue">
                      ₹48L
                    </div>
                    <div className="text-[11px] text-blue mt-1">
                      across 17 clients
                    </div>
                  </div>
                  <div className="bg-purple/8 border border-purple/20 rounded-xl p-4">
                    <div className="text-[11px] text-muted uppercase tracking-wider mb-1">
                      Cost Per Lead
                    </div>
                    <div className="font-[family-name:var(--font-heading)] text-[28px] font-extrabold text-purple">
                      ₹148
                    </div>
                    <div className="text-[11px] text-purple mt-1">
                      ↓ -63% optimised
                    </div>
                  </div>
                </div>

                {/* Mini bar chart */}
                <div>
                  <div className="text-[11px] text-muted uppercase tracking-wider mb-2">
                    Weekly Leads Trend
                  </div>
                  <div className="flex items-end gap-1.5 h-[52px]">
                    {[40, 55, 70, 62, 85, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          background: `rgba(34,197,94,${0.3 + i * 0.12})`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
           CREDIBILITY BAR
      ═══════════════════════════════════════════════════ */}
      <section className="bg-slate-dark border-y border-border py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-slate-dark p-10 text-center"
              >
                <div
                  className={`font-[family-name:var(--font-heading)] text-[clamp(36px,4vw,56px)] font-extrabold tracking-tight leading-none ${m.color}`}
                >
                  {m.value}
                </div>
                <div className="text-[13px] text-muted mt-2 tracking-wide">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
           SERVICES OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-12 bg-navy-2" id="services">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Our Services"
            title="Growth Services That Actually"
            titleAccent="Deliver"
            subtitle="Fixed pricing for Bangalore MSMEs. No lock-in contracts. Scale as you grow."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-card border border-border rounded-2xl p-8 hover:bg-white/[0.06] hover:border-green/25 transition-all no-underline flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${service.color}15` }}
                  >
                    {Icon && <Icon size={22} style={{ color: service.color }} />}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[17px] font-bold mb-3 text-white">
                    {service.name}
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed mb-6 flex-grow">
                    {service.tagline}
                  </p>
                  <div className="font-[family-name:var(--font-heading)] text-xl font-extrabold text-green mt-auto border-t border-white/5 pt-4">
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
              className="inline-flex items-center gap-2 bg-green text-navy font-[family-name:var(--font-heading)] font-bold text-sm px-7 py-3 rounded-lg hover:bg-green-dark transition-colors no-underline"
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
      <section className="py-24 px-6 lg:px-12 bg-navy">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Why Numero Uno"
            title="Your Challenges."
            titleAccent="Our Solutions."
            subtitle="We help Bangalore businesses turn digital marketing into predictable growth."
            center
          />

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Problems */}
            <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-red-400 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-500/15 rounded-lg flex items-center justify-center text-sm">✗</span>
                Common MSME Struggles
              </h3>
              <ul className="space-y-4">
                {problems.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/60 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-green/5 border border-green/15 rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-green mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-green/15 rounded-lg flex items-center justify-center text-sm">
                  <CheckCircle2 size={16} className="text-green" />
                </span>
                Numero Uno Solutions
              </h3>
              <ul className="space-y-4">
                {solutions.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/60 leading-relaxed"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-green mt-0.5 shrink-0"
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
      <section className="py-24 px-6 lg:px-12 bg-navy-2">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="How It Works"
            title="From Audit to"
            titleAccent="Scale in 4 Steps"
            subtitle="A simple, transparent process designed for busy business owners."
            center
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-card border border-border rounded-2xl p-7 text-center hover:border-green/20 transition-colors"
              >
                <div className="font-[family-name:var(--font-heading)] text-6xl font-extrabold text-white/[0.04] leading-none mb-4">
                  {step.num}
                </div>
                <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon size={22} className="text-green" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed">
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
      <section className="py-24 px-6 lg:px-12 bg-navy">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Results"
            title="Real Results for"
            titleAccent="Real Businesses"
            subtitle="Bangalore businesses growing with transparent, fixed-fee marketing."
            center
          />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Link href="/case-studies" className="group bg-card border border-border rounded-2xl p-8 hover:border-green/25 transition-all no-underline text-center">
                <div className="text-xs text-muted uppercase tracking-widest mb-4">Restaurant Chain</div>
                <div className="font-[family-name:var(--font-heading)] text-[clamp(36px,4vw,52px)] font-extrabold tracking-tight text-orange">+204%</div>
                <div className="text-sm text-white/70 font-semibold mb-2">Revenue Growth</div>
                <div className="text-[13px] text-muted">₹4.2L → ₹12.8L monthly</div>
                <div className="mt-4 text-sm text-green font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read Case Study →</div>
              </Link>
              <Link href="/case-studies" className="group bg-card border border-border rounded-2xl p-8 hover:border-green/25 transition-all no-underline text-center">
                <div className="text-xs text-muted uppercase tracking-widest mb-4">Dental Clinic</div>
                <div className="font-[family-name:var(--font-heading)] text-[clamp(36px,4vw,52px)] font-extrabold tracking-tight text-blue">+154%</div>
                <div className="text-sm text-white/70 font-semibold mb-2">Patient Growth</div>
                <div className="text-[13px] text-muted">56 → 142 monthly appointments</div>
                <div className="mt-4 text-sm text-green font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read Case Study →</div>
              </Link>
              <Link href="/case-studies" className="group bg-card border border-border rounded-2xl p-8 hover:border-green/25 transition-all no-underline text-center">
                <div className="text-xs text-muted uppercase tracking-widest mb-4">Fashion E-Commerce</div>
                <div className="font-[family-name:var(--font-heading)] text-[clamp(36px,4vw,52px)] font-extrabold tracking-tight text-purple">+187%</div>
                <div className="text-sm text-white/70 font-semibold mb-2">Sales Growth</div>
                <div className="text-[13px] text-muted">₹8L → ₹23L monthly GMV</div>
                <div className="mt-4 text-sm text-green font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Read Case Study →</div>
              </Link>
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-green font-[family-name:var(--font-heading)] font-semibold text-sm hover:underline no-underline"
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
        headlineAccent="17+ Growing Businesses"
        subtitle="Fixed pricing. Proven results. Bangalore businesses scaling with confidence."
        primaryText="Book Free Strategy Call"
        primaryHref="/free-audit"
        secondaryText="Read Client Reviews"
        secondaryHref="/case-studies"
      />

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919693220791?text=Hi%20Nishant%2C%20I%20saw%20your%20website%20and%20want%20to%20know%20more!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-[500] w-14 h-14 bg-gradient-to-br from-green to-green-dark rounded-full flex items-center justify-center text-2xl shadow-lg shadow-green/40 hover:scale-110 transition-transform no-underline"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}
