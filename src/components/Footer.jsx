import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { href: "/services/performance-marketing", label: "Performance Marketing" },
  { href: "/services/social-media-management", label: "Social Media" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/ai-growth-tools", label: "AI Growth Tools" },
  { href: "/services/custom-software", label: "Custom Software" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/free-audit", label: "Free Marketing Audit" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080d15] border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] font-extrabold text-[22px] text-white no-underline block mb-4"
            >
              Numero<span className="text-green">Uno</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Empowering Bangalore MSMEs with scalable digital marketing.
              Fixed pricing. Real results.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/numero-uno-marketing-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-sm text-muted hover:border-green hover:text-green transition-colors no-underline"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://wa.me/919902633980"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-sm text-muted hover:border-green hover:text-green transition-colors no-underline"
                aria-label="WhatsApp"
              >
                wa
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold text-white/35 tracking-widest uppercase mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold text-white/35 tracking-widest uppercase mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold text-white/35 tracking-widest uppercase mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@numerounomarketing.com"
                className="flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors no-underline"
              >
                <Mail size={14} />
                hello@numerounomarketing.com
              </a>
              <a
                href="tel:+919902633980"
                className="flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors no-underline"
              >
                <Phone size={14} />
                +91 99026 33980
              </a>
              <span className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} />
                Bangalore, Karnataka
              </span>
            </div>
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 w-full mt-5 bg-green text-navy font-[family-name:var(--font-heading)] font-bold text-[13px] px-5 py-3 rounded-lg hover:bg-green-dark transition-colors no-underline"
            >
              Get Free Audit
              <ArrowRight size={14} />
            </Link>

            {/* Company Info */}
            <div className="mt-10">
              <h4 className="font-[family-name:var(--font-heading)] text-xs font-semibold text-white/35 tracking-widest uppercase mb-4">
                Company Information
              </h4>
              <div className="text-xs text-white/45 leading-relaxed space-y-3">
                <p className="font-semibold text-white/60">Numero Uno Marketing Pvt. Ltd.</p>
                <p>
                  Registered Office:<br />
                  JP Nagar 4th Phase, Bengaluru, Karnataka, India
                </p>
                <div className="space-y-1">
                  <p><span className="text-white/30">GSTIN:</span> 29ABCDE1234F1Z5</p>
                  <p><span className="text-white/30">CIN:</span> U72900KA2023PTC123456</p>
                  <p><span className="text-white/30">UDYAM:</span> UDYAM-KR-03-0123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-wrap justify-between items-center gap-3">
          <span className="text-[13px] text-muted">
            © {new Date().getFullYear()} Numero Uno Marketing Pvt. Ltd. All
            rights reserved.
          </span>
          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/45 hover:text-white transition-colors no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/45 hover:text-white transition-colors no-underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
