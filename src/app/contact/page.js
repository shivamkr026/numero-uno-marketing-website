import { MessageCircle, Mail, MapPin, Phone, Clock } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Numero Uno Marketing — Get in Touch",
  description: "Contact Numero Uno Marketing for a free marketing consultation. WhatsApp, phone, or email — we respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-10 px-6 lg:px-12 bg-navy">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="Contact Us"
            title="Let's Talk"
            titleAccent="Growth"
            subtitle="Whether you have a question, need a quote, or want to discuss strategy — we're here to help."
            center
          />
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-12 bg-navy">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-12">
            {/* Left — Contact Info (41.6%) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[3px] uppercase text-green mb-4">
                <span className="w-7 h-px bg-green" />
                Get In Touch
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] mb-4">
                Let&apos;s Build a Great <span className="text-green">Online Presence</span>!
              </h2>
              <p className="text-base text-white/50 leading-relaxed mb-10 max-w-md">
                Ready to transform your digital presence? We focus on giving the most cost-effective solutions to our clients, enabling them to navigate towards success in the digital space.
              </p>

              {/* Contact rows */}
              <div className="space-y-5 mb-8">
                {/* Email */}
                <a
                  href="mailto:hello@numerounomarketing.com"
                  className="flex items-center gap-5 group no-underline"
                >
                  <div className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-green" />
                  </div>
                  <div>
                    <div className="text-[13px] text-muted mb-0.5">Email us at</div>
                    <div className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-white transition-colors">
                      hello@numerounomarketing.com
                    </div>
                  </div>
                </a>

                {/* Support */}
                <a
                  href="mailto:support@numerounomarketing.com"
                  className="flex items-center gap-5 group no-underline"
                >
                  <div className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shrink-0">
                    <MessageCircle size={22} className="text-green" />
                  </div>
                  <div>
                    <div className="text-[13px] text-muted mb-0.5">Support</div>
                    <div className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-white transition-colors">
                      support@numerounomarketing.com
                    </div>
                  </div>
                </a>

                {/* Call / WhatsApp */}
                <a
                  href="tel:+919902633980"
                  className="flex items-center gap-5 group no-underline"
                >
                  <div className="w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-green" />
                  </div>
                  <div>
                    <div className="text-[13px] text-muted mb-0.5">Call / WhatsApp</div>
                    <div className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-white transition-colors">
                      (+91) 99026 33980
                    </div>
                  </div>
                </a>
              </div>

              {/* Response time bar */}
              <div className="bg-card border border-border rounded-xl px-5 py-3.5 inline-flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-green rounded-full" />
                <span className="text-sm text-muted">
                  Average response time: <strong className="text-white">Under 24 hours</strong>
                </span>
              </div>
            </div>

            {/* Right — Contact Form (58.3%) */}
            <div className="lg:col-span-7 bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue/15 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">Schedule a Call</h3>
                  <div className="text-[13px] text-muted">15 minutes. Same/next day slot.</div>
                </div>
              </div>
              <ContactForm 
                actionUrl="https://formspree.io/f/mlgpjjyg"
                source="Contact Page - Schedule Call"
              />
            </div>
          </div>        </div>
      </section>
    </>
  );
}
