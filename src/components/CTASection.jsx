import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection({
 headline = "Ready to Grow Your Business?",
 headlineAccent = "",
 subtitle = "Book a free 15-minute strategy call. No pressure, no commitment.",
 primaryText = "Get Free Marketing Audit",
 primaryHref = "/free-audit",
 secondaryText = "",
 secondaryHref = "",
}) {
 return (
 <section className="py-20 px-6 lg:px-12">
 <div className="max-w-4xl mx-auto text-center p-12 lg:p-16 bg-gradient-to-br from-blue/8 to-blue-dark/4 border border-blue/20 rounded-2xl">
 <h2 className=" text-[clamp(22px,3vw,38px)] font-extrabold mb-3">
 {headline}{" "}
 {headlineAccent && (
 <span className="text-blue">{headlineAccent}</span>
 )}
 </h2>
 <p className="text-base text-white/50 mb-8 max-w-lg mx-auto">{subtitle}</p>
 <div className="flex flex-wrap gap-4 justify-center">
 <Link
 href={primaryHref}
 className="inline-flex items-center gap-2 bg-blue text-navy text-[15px] cta-btn px-8 py-4 rounded-xl hover:bg-blue-dark transition-colors no-underline hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue/30"
 >
 {primaryText}
 <ArrowRight size={16} />
 </Link>
 {secondaryText && secondaryHref && (
 <Link
 href={secondaryHref}
 className="inline-flex items-center gap-2 border-[1.5px] border-border text-white text-[15px] cta-btn px-8 py-4 rounded-xl hover:border-blue/40 hover:bg-blue/5 transition-all no-underline"
 >
 {secondaryText}
 </Link>
 )}
 </div>
 </div>
 </section>
 );
}
