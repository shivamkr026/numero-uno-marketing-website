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
 className=" font-extrabold text-[22px] text-white no-underline block mb-4"
 >
 Numero<span className="text-blue">Uno</span>
 </Link>
 <p className="text-sm text-muted leading-relaxed mb-5">
 Performance marketing for brands built to scale.
 Fixed pricing. Real results.
 </p>
 <div className="flex gap-3">
 <a
 href="https://www.linkedin.com/company/numero-uno-marketing-private-limited/"
 target="_blank"
 rel="noopener noreferrer"
 className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-sm text-muted hover:border-blue hover:text-blue transition-colors no-underline"
 aria-label="LinkedIn"
 >
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
 </svg>
 </a>
 <a
 href="https://wa.me/919902633980"
 target="_blank"
 rel="noopener noreferrer"
 className="w-9 h-9 border border-border rounded-lg flex items-center justify-center text-sm text-muted hover:border-whatsapp hover:text-whatsapp transition-colors no-underline"
 aria-label="WhatsApp"
 >
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" width="18" height="18">
 <path d="M16.004 3.2C9.058 3.2 3.404 8.854 3.404 15.8c0 2.22.58 4.39 1.682 6.302L3.2 28.8l6.892-1.81A12.56 12.56 0 0 0 16.004 28.4c6.946 0 12.596-5.654 12.596-12.6S22.95 3.2 16.004 3.2Zm0 22.752a10.12 10.12 0 0 1-5.388-1.546l-.386-.23-4.004 1.052 1.07-3.904-.252-.4a10.1 10.1 0 0 1-1.548-5.384c0-5.608 4.56-10.164 10.168-10.164 5.438 0 10.16 4.556 10.16 10.164 0 5.612-4.562 10.412-10.16 10.412h-.004Zm5.578-7.604c-.306-.154-1.812-.894-2.092-.996-.282-.102-.486-.154-.69.154-.204.306-.792.996-.97 1.2-.178.204-.358.23-.664.078-.306-.154-1.292-.476-2.46-1.518-.91-.81-1.524-1.812-1.702-2.118-.178-.306-.02-.472.134-.624.138-.138.306-.358.46-.538.152-.178.204-.306.306-.51.102-.204.05-.384-.026-.538-.076-.154-.69-1.664-.946-2.278-.25-.598-.502-.516-.69-.526l-.588-.01a1.13 1.13 0 0 0-.818.384c-.282.306-1.074 1.05-1.074 2.56 0 1.512 1.1 2.972 1.254 3.176.152.204 2.162 3.302 5.24 4.63.732.316 1.304.506 1.75.648.736.234 1.406.2 1.934.122.59-.088 1.812-.74 2.068-1.456.256-.716.256-1.33.178-1.456-.076-.128-.28-.204-.588-.358Z" />
 </svg>
 </a>
 </div>
 </div>

 {/* Services */}
 <div>
 <h4 className=" text-xs text-white/35 small-label uppercase mb-4">
 Services
 </h4>
 <div className="flex flex-col gap-2.5">
 {serviceLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="nav-link text-sm text-white/45 hover:text-white transition-colors no-underline"
 >
 {link.label}
 </Link>
 ))}
 </div>
 </div>

 {/* Company */}
 <div>
 <h4 className=" text-xs text-white/35 small-label uppercase mb-4">
 Company
 </h4>
 <div className="flex flex-col gap-2.5">
 {companyLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className="nav-link text-sm text-white/45 hover:text-white transition-colors no-underline"
 >
 {link.label}
 </Link>
 ))}
 </div>
 </div>

 {/* Contact */}
 <div>
 <h4 className=" text-xs text-white/35 small-label uppercase mb-4">
 Contact
 </h4>
 <div className="flex flex-col gap-3">
 <a
 href="mailto:hello@numerounomarketing.com"
 className="flex items-center gap-2 nav-link text-sm text-white/45 hover:text-white transition-colors no-underline"
 >
 <Mail size={14} />
 hello@numerounomarketing.com
 </a>
 <a
 href="tel:+919902633980"
 className="flex items-center gap-2 nav-link text-sm text-white/45 hover:text-white transition-colors no-underline"
 >
 <Phone size={14} />
 +91 99026 33980
 </a>
 <span className="flex items-center gap-2 text-sm text-muted">
 <MapPin size={14} />
 Bengaluru · Remote-first
 </span>
 </div>
 <Link
 href="/free-audit"
 className="inline-flex items-center justify-center gap-2 w-full mt-5 bg-blue text-navy font-bold text-[13px] px-5 py-3 rounded-lg hover:bg-blue-dark transition-colors no-underline"
 >
 Get Free Audit
 <ArrowRight size={14} />
 </Link>

 {/* Company Info */}
 <div className="mt-10">
 <h4 className=" text-xs text-white/35 small-label uppercase mb-4">
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
 className="nav-link text-xs text-white/45 hover:text-white transition-colors no-underline"
 >
 Privacy Policy
 </Link>
 <Link
 href="/terms"
 className="nav-link text-xs text-white/45 hover:text-white transition-colors no-underline"
 >
 Terms of Service
 </Link>
 </div>
 </div>
 </div>
 </footer>
 );
}
