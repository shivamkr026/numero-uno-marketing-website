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
 <div className="inline-flex items-center gap-2.5 text-[11px] uppercase small-label tracking-[3px] text-blue mb-4">
 <span className="w-7 h-px bg-blue" />
 Get In Touch
 </div>
 <h2 className=" text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] mb-4">
 Let&apos;s Build a Great <span className="text-blue">Online Presence</span>!
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
 <div className="w-14 h-14 sitewide-card flex items-center justify-center shrink-0">
 <Mail size={22} className="text-blue" />
 </div>
 <div>
 <div className="text-[13px] text-muted mb-0.5">Email us at</div>
 <div className=" text-[15px] font-bold text-white transition-colors">
 hello@numerounomarketing.com
 </div>
 </div>
 </a>

 {/* Support */}
 <a
 href="mailto:support@numerounomarketing.com"
 className="flex items-center gap-5 group no-underline"
 >
 <div className="w-14 h-14 sitewide-card flex items-center justify-center shrink-0">
 <MessageCircle size={22} className="text-blue" />
 </div>
 <div>
 <div className="text-[13px] text-muted mb-0.5">Support</div>
 <div className=" text-[15px] font-bold text-white transition-colors">
 support@numerounomarketing.com
 </div>
 </div>
 </a>

 {/* Call / WhatsApp */}
 <a
 href="tel:+919902633980"
 className="flex items-center gap-5 group no-underline"
 >
 <div className="w-14 h-14 sitewide-card flex items-center justify-center shrink-0">
 <Phone size={22} className="text-blue" />
 </div>
 <div>
 <div className="text-[13px] text-muted mb-0.5">Call / WhatsApp</div>
 <div className=" text-[15px] font-bold text-white transition-colors">
 (+91) 99026 33980
 </div>
 </div>
 </a>
 </div>

 {/* Response time bar */}
 <div className="sitewide-card px-5 py-3.5 inline-flex items-center gap-3">
 <span className="w-2.5 h-2.5 bg-blue rounded-full" />
 <span className="text-sm text-muted">
 Average response time: <strong className="text-white">Under 24 hours</strong>
 </span>
 </div>
 </div>

 {/* Right — Contact Form (58.3%) */}
 <div className="lg:col-span-7 sitewide-card p-8">
 <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
 <div className="w-12 h-12 bg-blue/15 rounded-xl flex items-center justify-center shrink-0">
 <Clock size={20} className="text-blue" />
 </div>
 <div>
 <h3 className=" text-xl font-extrabold mb-1">Request a Call Back</h3>
 <div className="text-[13px] text-muted leading-relaxed">Leave your details and we'll call you back within 2 hours during business hours. No sales pitch — just a straight conversation.</div>
 </div>
 </div>
 
 <form action="https://formspree.io/f/mlgpjjyg" method="POST" className="flex flex-col gap-4">
 <input type="hidden" name="_subject" value="📞 Call Back Request — Numero Uno" />
 <input type="hidden" name="form_type" value="Call Back Request" />
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <label className="text-xs text-muted mb-1 block uppercase small-label">Your Name <span className="text-red-500">*</span></label>
 <input type="text" name="full_name" placeholder="Rahul Sharma" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
 </div>
 <div>
 <label className="text-xs text-muted mb-1 block uppercase small-label">Business Name <span className="text-red-500">*</span></label>
 <input type="text" name="business_name" placeholder="Your Business" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
 </div>
 <div>
 <label className="text-xs text-muted mb-1 block uppercase small-label">WhatsApp / Call Number <span className="text-red-500">*</span></label>
 <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
 </div>
 <div>
 <label className="text-xs text-muted mb-1 block uppercase small-label">Email Address</label>
 <input type="email" name="email" placeholder="you@business.com" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
 </div>
 </div>

 <div>
 <label className="text-xs text-muted mb-1 block uppercase small-label">Which service are you interested in? <span className="text-red-500">*</span></label>
 <select name="service_interest" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
 <option value="" disabled selected>Select a service</option>
 <option value="Performance Marketing (Meta / Google Ads)">Performance Marketing (Meta / Google Ads)</option>
 <option value="Social Media Management">Social Media Management</option>
 <option value="Web Development">Web Development</option>
 <option value="AI Growth Tools">AI Growth Tools</option>
 <option value="Custom Software Development">Custom Software Development</option>
 <option value="Not sure — need your guidance">Not sure — need your guidance</option>
 </select>
 </div>

 <div>
 <label className="text-xs text-muted mb-1 block uppercase small-label">Best time to call you back? <span className="text-red-500">*</span></label>
 <select name="preferred_time" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
 <option value="" disabled selected>Select preferred time</option>
 <option value="Morning (9am – 12pm)">Morning (9am – 12pm)</option>
 <option value="Afternoon (12pm – 3pm)">Afternoon (12pm – 3pm)</option>
 <option value="Evening (3pm – 6pm)">Evening (3pm – 6pm)</option>
 <option value="Anytime during business hours">Anytime during business hours</option>
 </select>
 </div>

 <div>
 <label className="text-xs text-muted mb-1 block uppercase small-label">What is your approximate monthly marketing budget?</label>
 <select name="budget" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
 <option value="" disabled selected>Select range</option>
 <option value="Under ₹10,000">Under ₹10,000</option>
 <option value="₹10,000 – ₹50,000">₹10,000 – ₹50,000</option>
 <option value="₹50,000 – ₹2,00,000">₹50,000 – ₹2,00,000</option>
 <option value="₹2,00,000+">₹2,00,000+</option>
 <option value="Not decided yet">Not decided yet</option>
 </select>
 </div>

 <div>
 <label className="text-xs text-muted mb-1 block uppercase small-label">Anything specific you want to discuss on the call? (optional)</label>
 <textarea 
 name="message" 
 placeholder="e.g. I want to understand how Meta Ads can work for my restaurant business..." 
 rows="3" 
 className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors resize-none"
 ></textarea>
 </div>

 <div className="mt-2">
 <button type="submit" className="w-full bg-blue text-navy font-bold py-4 rounded-xl hover:bg-white hover:text-navy transition-all cta-glow">
 Request My Call Back →
 </button>
 <p className="text-[11px] text-muted text-center mt-3">We call back within 24 hours · Mon–Sat, 9am–6pm</p>
 </div>
 </form>
 </div>
 </div> </div>
 </section>
 </>
 );
}
