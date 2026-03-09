"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
            ? "bg-navy/92 backdrop-blur-lg py-3.5 px-6 lg:px-12 border-b border-border"
            : "py-5 px-6 lg:px-12"
        }`}
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] font-extrabold text-xl tracking-tight text-white no-underline"
        >
          Numero<span className="text-green">Uno</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 hover:text-white transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 bg-green text-navy font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:bg-green-dark transition-colors no-underline"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-navy/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white no-underline hover:text-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/free-audit"
            onClick={() => setMobileOpen(false)}
            className="font-[family-name:var(--font-heading)] text-2xl font-bold text-green no-underline"
          >
            Get Free Audit
          </Link>
        </div>
      )}
    </>
  );
}
