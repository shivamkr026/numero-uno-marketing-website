"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
 { href: "/", label: "Home" },
 { href: "/services", label: "Services" },
 { href: "/about", label: "About Us" },
 { href: "/case-studies", label: "Case Studies" },
 { href: "/testimonials", label: "Testimonials" },
 { href: "/contact", label: "Contact" },
];

export default function Nav() {
 const pathname = usePathname();
 const [scrolled, setScrolled] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);

 const isActive = (href) =>
 href === "/" ? pathname === "/" : pathname.startsWith(href);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 60);
 window.addEventListener("scroll", onScroll);
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 useEffect(() => {
 if (mobileOpen) {
 document.body.style.overflow = "hidden";
 } else {
 document.body.style.overflow = "";
 }
 }, [mobileOpen]);

 return (
 <>
 <nav
 className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300 ${
 scrolled
 ? "bg-navy/92 backdrop-blur-[20px] py-3.5 px-6 lg:px-12 border-b border-blue-500/[0.08]"
 : "py-5 px-6 lg:px-12"
 }`}
 >
 <Link
 href="/"
 className=" section-h2 text-xl text-white no-underline"
 >
 Numero<span className="text-blue">Uno</span>
 </Link>

 {/* Desktop links */}
 <div className="hidden lg:flex items-center gap-9">
 {navLinks.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 className={`nav-link text-sm transition-colors no-underline relative ${
 isActive(link.href)
 ? "text-blue font-semibold"
 : "text-white/55 hover:text-blue"
 }`}
 >
 {link.label}
 {isActive(link.href) && (
 <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue" />
 )}
 </Link>
 ))}
 <Link
 href="/free-audit"
 className="inline-flex items-center gap-2 bg-blue text-navy text-[13px] cta-btn px-5 py-2.5 rounded-lg hover:bg-blue-dark transition-colors cta-glow no-underline"
 >
 Free Audit
 <ArrowRight size={14} />
 </Link>
 </div>

 {/* Mobile hamburger */}
 <button
 onClick={() => setMobileOpen(true)}
 className="lg:hidden text-white p-1"
 aria-label="Open menu"
 >
 <Menu size={24} />
 </button>
 </nav>

 {/* Mobile menu — full viewport overlay */}
 {mobileOpen && (
 <div className="fixed inset-0 z-[200] w-full h-full bg-navy/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
 <button
 onClick={() => setMobileOpen(false)}
 className="absolute top-6 right-6 text-white"
 aria-label="Close menu"
 >
 <X size={28} />
 </button>
 {navLinks.map((link) => {
 const active = isActive(link.href);
 return (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setMobileOpen(false)}
 className={` text-2xl card-h3 no-underline transition-colors flex items-center gap-3 ${
 active ? "text-blue" : "text-white hover:text-blue"
 }`}
 >
 {active && (
 <span className="w-2 h-2 bg-blue rounded-full shrink-0" />
 )}
 {link.label}
 </Link>
 );
 })}
 <Link
 href="/free-audit"
 onClick={() => setMobileOpen(false)}
 className=" text-2xl card-h3 text-blue no-underline"
 >
 Get Free Audit
 </Link>
 </div>
 )}
 </>
 );
}
