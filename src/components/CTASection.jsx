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
      <div className="max-w-4xl mx-auto text-center p-12 lg:p-16 bg-gradient-to-br from-green/8 to-green-dark/4 border border-green/20 rounded-2xl">
        <h2 className="font-[family-name:var(--font-heading)] text-[clamp(22px,3vw,38px)] font-extrabold mb-3">
          {headline}{" "}
          {headlineAccent && (
            <span className="text-green">{headlineAccent}</span>
          )}
        </h2>
        <p className="text-base text-white/50 mb-8 max-w-lg mx-auto">{subtitle}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 bg-green text-navy font-[family-name:var(--font-heading)] font-bold text-[15px] px-8 py-4 rounded-xl hover:bg-green-dark transition-colors no-underline hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green/30"
          >
            {primaryText}
            <ArrowRight size={16} />
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 border-[1.5px] border-border text-white font-[family-name:var(--font-heading)] font-semibold text-[15px] px-8 py-4 rounded-xl hover:border-green/40 hover:bg-green/5 transition-all no-underline"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
