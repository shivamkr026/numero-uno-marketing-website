import { Users, Award, Target, TrendingUp, MapPin, DollarSign, BarChart3, Rocket } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import AboutStats from "@/components/AboutStats";

export const metadata = {
 title: "About Numero Uno Marketing — Our Story & Mission",
 description: "Meet the team behind Numero Uno Marketing. MBA + IT expertise, startup DNA, and a mission to empower ambitious brands with data-driven performance marketing.",
};

const values = [
 { icon: MapPin, title: "Founded in Bengaluru", desc: "We understand what drives growth for scaling businesses. Available in-person or remotely." },
 { icon: DollarSign, title: "Fixed Pricing", desc: "No surprises. No hidden fees. Cancel anytime." },
 { icon: BarChart3, title: "Weekly Updates", desc: "15-min calls. Clear dashboards. Full transparency." },
 { icon: Rocket, title: "Startup DNA", desc: "We've built companies. Now we build yours." },
 { icon: Target, title: "ROI Focused", desc: "Every rupee tracked. Every campaign measured." },
 { icon: TrendingUp, title: "Scale Ready", desc: "Start small. Scale when you see results." },
];

const timeline = [
 { name: "ICICI Bank", role: "Privilege Banking — Sold millions in premium products", color: "text-blue" },
 { name: "Vedantu", role: "Tech Sales — Scaled digital education growth", color: "text-orange" },
 { name: "Numero Uno Marketing", role: "Founded — Now scaling ambitious brands", color: "text-blue", active: true },
];

export default function AboutPage() {
 return (
 <>
 {/* Hero */}
 <section className="pt-32 pb-20 px-6 lg:px-12 bg-navy">
 <div className="max-w-7xl mx-auto">
 <SectionHeader
 label="About Us"
 title="Built for Ambitious Brands."
 titleAccent="By Someone Who Gets Results."
 subtitle="We're not a faceless agency. We're a team of marketers, technologists, and strategists engineered for growth and built for brands that mean business."
 />
 </div>
 </section>

 {/* Mission */}
 <section className="py-20 px-6 lg:px-12 bg-navy-2">
 <div className="max-w-5xl mx-auto">
 <div className="bg-gradient-to-br from-blue/8 to-blue-dark/4 border border-blue/20 rounded-2xl p-10 lg:p-14 text-center">
 <h2 className=" text-2xl lg:text-3xl section-h2 mb-4">
 Our Mission
 </h2>
 <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
 Engineered for growth. Built for brands that mean business. 
 Agency-quality execution at scalable budgets.
 </p>
 </div>
 </div>
 </section>

 {/* Founder */}
 <section className="py-20 px-6 lg:px-12 bg-navy">
 <div className="max-w-5xl mx-auto">
 <SectionHeader
 label="The Founder"
 title="Meet"
 titleAccent="Nishant Sahay"
 center
 />

 <div className="grid lg:grid-cols-2 gap-8 items-start">
 {/* Bio */}
 <div className="sitewide-card p-8">
 <div className="flex items-start gap-4 mb-6">
 <div className="w-16 h-16 bg-gradient-to-br from-indigo to-blue rounded-xl flex items-center justify-center shrink-0">
 <Users size={28} className="text-white" />
 </div>
 <div>
 <h3 className=" text-xl card-h3">Nishant Sahay</h3>
 <span className="inline-block bg-blue/15 text-blue text-[11px] font-semibold px-2.5 py-1 rounded uppercase tracking-wider mt-1">
 Founder & CEO
 </span>
 </div>
 </div>
 <p className="text-sm text-white/55 leading-relaxed mb-4">
 <strong className="text-white">MBA Marketing + IT (BIT Mesra)</strong> — Nishant brings a unique combination of corporate sales experience and startup hustle to Numero Uno Marketing.
 </p>
 <p className="text-sm text-white/55 leading-relaxed mb-4">
 After selling millions in premium banking products at ICICI Bank and scaling tech sales at Vedantu, he saw a gap: ambitious brands were either paying too much to big agencies or getting poor results from freelancers.
 </p>
 <p className="text-sm text-white/55 leading-relaxed italic">
 &ldquo;I treat your marketing like my own startup. Weekly 15-min calls. Fixed fees. Real results or you walk.&rdquo;
 </p>
 </div>

 {/* Timeline + Stats */}
 <div className="space-y-5">
 <div className="sitewide-card p-7">
 <div className=" text-[13px] font-semibold text-muted tracking-widest uppercase mb-5">
 Career Journey
 </div>
 <div className="space-y-4">
 {timeline.map((item, i) => (
 <div key={i} className="flex gap-3 items-start">
 <div className="flex flex-col items-center">
 <div className={`w-3 h-3 rounded-full ${item.active ? "bg-blue shadow-lg shadow-blue/50" : "bg-blue"}`} />
 {i < timeline.length - 1 && <div className="w-px h-8 bg-blue/20 mt-1" />}
 </div>
 <div>
 <div className={` text-sm font-bold ${item.color}`}>{item.name}</div>
 <div className="text-[13px] text-muted">{item.role}</div>
 </div>
 </div>
 ))}
 </div>
 </div>

 <AboutStats />
 </div>
 </div>
 </div>
 </section>

 {/* Values */}
 <section className="py-20 px-6 lg:px-12 bg-navy-2">
 <div className="max-w-5xl mx-auto">
 <SectionHeader label="Our Values" title="What Sets Us" titleAccent="Apart" center />
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
 {values.map((v, i) => (
 <div key={i} className="sitewide-card p-7 text-center hover:border-blue/20 transition-colors">
 <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
 <v.icon size={22} className="text-blue" />
 </div>
 <h4 className=" text-[15px] font-bold mb-2">{v.title}</h4>
 <p className="text-[13px] text-muted leading-relaxed">{v.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <CTASection
 headline="Ready to Grow"
 headlineAccent="Your Business?"
 subtitle="Book a free 15-minute strategy call with our marketing team. No pressure, no commitment."
 primaryText="Book Strategy Call"
 primaryHref="/free-audit"
 />
 </>
 );
}
