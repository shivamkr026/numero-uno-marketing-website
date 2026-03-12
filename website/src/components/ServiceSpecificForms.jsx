"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

function SuccessMessage() {
  return (
    <div className="text-center py-10 bg-blue/5 rounded-2xl border border-blue/20">
      <div className="text-6xl mb-4">🚀</div>
      <h3 className="text-2xl font-extrabold text-blue mb-2">Request Received!</h3>
      <p className="text-white/70 max-w-sm mx-auto">
        Our team will review your details and reach out within 24 hours.
      </p>
    </div>
  );
}

export function PerformanceMarketingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const sourceText = `Performance Marketing | Platforms: ${formData.get("platforms")} | Challenge: ${formData.get("challenge")}`;

    const data = {
      name: formData.get("name"),
      business: formData.get("business_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      goal: formData.get("goal"),
      budget: formData.get("budget"),
      source: sourceText
    };

    const { error } = await supabase.from('contacts').insert([data]);
    if (!error) setSubmitted(true);
  };

  if (submitted) return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="service_type" value="Performance Marketing" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Your Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" placeholder="Rahul Sharma" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Business Name <span className="text-red-500">*</span></label>
          <input type="text" name="business_name" placeholder="Your Business" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">WhatsApp Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" placeholder="you@business.com" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Which platforms are you currently advertising on? <span className="text-red-500">*</span></label>
        <select name="platforms" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select platform</option>
          <option value="Meta Ads">Meta Ads (Facebook / Instagram)</option>
          <option value="Google Ads">Google Ads (Search / Display)</option>
          <option value="Both">Both Meta and Google Ads</option>
          <option value="None">Not running any ads yet</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is your current monthly ad budget? <span className="text-red-500">*</span></label>
        <select name="budget" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select budget range</option>
          <option value="Under ₹10,000">Under ₹10,000</option>
          <option value="₹10,000 – ₹30,000">₹10,000 – ₹30,000</option>
          <option value="₹30,000 – ₹1,00,000">₹30,000 – ₹1,00,000</option>
          <option value="₹1,00,000 – ₹5,00,000">₹1,00,000 – ₹5,00,000</option>
          <option value="₹5,00,000+">₹5,00,000+</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is your biggest challenge with ads right now? <span className="text-red-500">*</span></label>
        <select name="challenge" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select your challenge</option>
          <option value="High cost per lead / poor ROAS">High cost per lead / poor ROAS</option>
          <option value="Ads getting clicks but no conversions">Ads getting clicks but no conversions</option>
          <option value="Don't know how to set up campaigns">Don't know how to set up campaigns</option>
          <option value="Tried ads before — didn't work">Tried ads before — didn't work</option>
          <option value="Want to scale existing campaigns">Want to scale existing campaigns</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What result matters most to you?</label>
        <select name="goal" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select your goal</option>
          <option value="More qualified leads">More qualified leads</option>
          <option value="Better ROAS on existing spend">Better ROAS on existing spend</option>
          <option value="Lower cost per lead">Lower cost per lead</option>
          <option value="More online sales / revenue">More online sales / revenue</option>
          <option value="Brand awareness and reach">Brand awareness and reach</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue text-navy font-bold py-4 rounded-xl mt-2 hover:bg-white hover:text-navy transition-all cta-glow">
        Get My Free Campaign Audit →
      </button>
    </form>
  );
}

export function SocialMediaForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const sourceText = `Social Media | Platforms: ${formData.get("platforms")} | Status: ${formData.get("current_situation")} | Content: ${formData.get("content_type")}`;

    const data = {
      name: formData.get("full_name"),
      business: formData.get("business_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      goal: "Social Media Management",
      budget: formData.get("budget"),
      source: sourceText
    };

    const { error } = await supabase.from('contacts').insert([data]);
    if (!error) setSubmitted(true);
  };

  if (submitted) return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="service_type" value="Social Media Management" />
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
          <label className="text-xs text-muted mb-1 block uppercase small-label">WhatsApp Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" placeholder="you@business.com" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Which platforms do you want to focus on? <span className="text-red-500">*</span></label>
        <select name="platforms" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select platforms</option>
          <option value="Instagram only">Instagram only</option>
          <option value="LinkedIn only">LinkedIn only</option>
          <option value="Facebook only">Facebook only</option>
          <option value="Instagram + Facebook">Instagram + Facebook</option>
          <option value="Instagram + LinkedIn">Instagram + LinkedIn</option>
          <option value="All platforms">All platforms</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">How would you describe your current social media situation? <span className="text-red-500">*</span></label>
        <select name="current_situation" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select current situation</option>
          <option value="No social media presence at all">No social media presence at all</option>
          <option value="Accounts exist but barely active">Accounts exist but barely active</option>
          <option value="Posting inconsistently, no strategy">Posting inconsistently, no strategy</option>
          <option value="Active but low engagement and reach">Active but low engagement and reach</option>
          <option value="Growing but need professional help">Growing but need professional help</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What type of content does your business need most? <span className="text-red-500">*</span></label>
        <select name="content_type" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select content type</option>
          <option value="Reels and short videos">Reels and short videos</option>
          <option value="Static graphics and carousels">Static graphics and carousels</option>
          <option value="A mix of everything">A mix of everything</option>
          <option value="Not sure — need your recommendation">Not sure — need your recommendation</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is your monthly budget for social media management?</label>
        <select name="budget" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select budget</option>
          <option value="Under ₹10,000">Under ₹10,000</option>
          <option value="₹10,000 – ₹20,000">₹10,000 – ₹20,000</option>
          <option value="₹20,000 – ₹30,000">₹20,000 – ₹30,000</option>
          <option value="₹30,000+">₹30,000+</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue text-navy font-bold py-4 rounded-xl mt-2 hover:bg-white hover:text-navy transition-all cta-glow">
        Get My Free Social Media Audit →
      </button>
    </form>
  );
}

export function WebDevelopmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const sourceText = `Web Dev | Type: ${formData.get("website_type")} | Current: ${formData.get("current_website")}`;

    const data = {
      name: formData.get("full_name"),
      business: formData.get("business_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      goal: `Web Dev Priority: ${formData.get("priority")}`,
      budget: formData.get("budget"),
      source: sourceText
    };

    const { error } = await supabase.from('contacts').insert([data]);
    if (!error) setSubmitted(true);
  };

  if (submitted) return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="service_type" value="Web Development" />
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
          <label className="text-xs text-muted mb-1 block uppercase small-label">WhatsApp Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" placeholder="you@business.com" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What type of website do you need? <span className="text-red-500">*</span></label>
        <select name="website_type" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select website type</option>
          <option value="Single landing page (for campaigns)">Single landing page (for campaigns)</option>
          <option value="Business website (5-7 pages)">Business website (5-7 pages)</option>
          <option value="E-commerce website (with payments)">E-commerce website (with payments)</option>
          <option value="Redesign of existing website">Redesign of existing website</option>
          <option value="Not sure — need your recommendation">Not sure — need your recommendation</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Do you currently have a website? <span className="text-red-500">*</span></label>
        <select name="current_website" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select option</option>
          <option value="No website at all">No website at all</option>
          <option value="Yes but it looks outdated">Yes but it looks outdated</option>
          <option value="Yes but it doesn't generate leads">Yes but it doesn't generate leads</option>
          <option value="Yes but it loads slowly">Yes but it loads slowly</option>
          <option value="Yes and I want a full redesign">Yes and I want a full redesign</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is most important to you in the new website? <span className="text-red-500">*</span></label>
        <select name="priority" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select priority</option>
          <option value="Generating leads and enquiries">Generating leads and enquiries</option>
          <option value="Ranking on Google (SEO)">Ranking on Google (SEO)</option>
          <option value="Looking professional and credible">Looking professional and credible</option>
          <option value="Fast loading and mobile-friendly">Fast loading and mobile-friendly</option>
          <option value="All of the above">All of the above</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is your budget for this website project?</label>
        <select name="budget" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select budget</option>
          <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
          <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
          <option value="₹1,00,000 – ₹2,00,000">₹1,00,000 – ₹2,00,000</option>
          <option value="₹2,00,000+">₹2,00,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue text-navy font-bold py-4 rounded-xl mt-2 hover:bg-white hover:text-navy transition-all cta-glow">
        Get My Free Website Consultation →
      </button>
    </form>
  );
}

export function AIGrowthToolsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const sourceText = `AI Tools | Experience: ${formData.get("ai_experience")} | Area: ${formData.get("time_consuming_area")}`;

    const data = {
      name: formData.get("full_name"),
      business: formData.get("business_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      goal: `AI Outcome: ${formData.get("desired_outcome")}`,
      budget: formData.get("budget"),
      source: sourceText
    };

    const { error } = await supabase.from('contacts').insert([data]);
    if (!error) setSubmitted(true);
  };

  if (submitted) return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="service_type" value="AI Growth Tools" />
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
          <label className="text-xs text-muted mb-1 block uppercase small-label">WhatsApp Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" placeholder="you@business.com" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Which area takes up the most time in your marketing right now? <span className="text-red-500">*</span></label>
        <select name="time_consuming_area" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select area</option>
          <option value="Writing content and captions">Writing content and captions</option>
          <option value="Managing and optimising ad campaigns">Managing and optimising ad campaigns</option>
          <option value="Following up with leads manually">Following up with leads manually</option>
          <option value="Reporting and analytics">Reporting and analytics</option>
          <option value="Competitor research and monitoring">Competitor research and monitoring</option>
          <option value="All of the above">All of the above</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Have you used any AI tools for marketing before? <span className="text-red-500">*</span></label>
        <select name="ai_experience" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select option</option>
          <option value="Never used AI tools">Never used AI tools</option>
          <option value="Tried ChatGPT but inconsistent results">Tried ChatGPT but inconsistent results</option>
          <option value="Using some tools but not integrated">Using some tools but not integrated</option>
          <option value="Yes — looking to scale AI usage">Yes — looking to scale AI usage</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What outcome matters most from AI tools? <span className="text-red-500">*</span></label>
        <select name="desired_outcome" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select outcome</option>
          <option value="Save time on content creation">Save time on content creation</option>
          <option value="Generate better quality leads">Generate better quality leads</option>
          <option value="Reduce cost per acquisition">Reduce cost per acquisition</option>
          <option value="Automate repetitive marketing tasks">Automate repetitive marketing tasks</option>
          <option value="Outpace competitors with AI insights">Outpace competitors with AI insights</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is your monthly budget for AI marketing tools and management?</label>
        <select name="budget" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select budget</option>
          <option value="Under ₹15,000">Under ₹15,000</option>
          <option value="₹15,000 – ₹30,000">₹15,000 – ₹30,000</option>
          <option value="₹30,000 – ₹50,000">₹30,000 – ₹50,000</option>
          <option value="₹50,000+">₹50,000+</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue text-navy font-bold py-4 rounded-xl mt-2 hover:bg-white hover:text-navy transition-all cta-glow">
        Get My Free AI Marketing Assessment →
      </button>
    </form>
  );
}

export function CustomSoftwareForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const sourceText = `Custom Software | Type: ${formData.get("software_type")} | Existing: ${formData.get("existing_systems")}`;

    const data = {
      name: formData.get("full_name"),
      business: formData.get("business_name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      goal: `Problem: ${formData.get("problem_description")}`,
      budget: formData.get("budget"),
      source: sourceText
    };

    const { error } = await supabase.from('contacts').insert([data]);
    if (!error) setSubmitted(true);
  };

  if (submitted) return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="service_type" value="Custom Software" />
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
          <label className="text-xs text-muted mb-1 block uppercase small-label">WhatsApp Number <span className="text-red-500">*</span></label>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
        <div>
          <label className="text-xs text-muted mb-1 block uppercase small-label">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" placeholder="you@business.com" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What type of software do you need? <span className="text-red-500">*</span></label>
        <select name="software_type" required className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select type</option>
          <option value="Custom CRM (lead and client management)">Custom CRM (lead and client management)</option>
          <option value="Business dashboard (data in one view)">Business dashboard (data in one view)</option>
          <option value="API integration (connect existing tools)">API integration (connect existing tools)</option>
          <option value="Operations automation">Operations automation</option>
          <option value="SaaS product (software to sell to others)">SaaS product (software to sell to others)</option>
          <option value="Not sure — need your recommendation">Not sure — need your recommendation</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Describe the problem you want the software to solve <span className="text-red-500">*</span></label>
        <textarea 
          name="problem_description" 
          placeholder="e.g. We manage 200+ leads across WhatsApp and Excel and keep losing track of follow-ups..." 
          rows="3" 
          required 
          className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors resize-none"
        ></textarea>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">Do you have an existing system we need to integrate with?</label>
        <select name="existing_systems" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select option</option>
          <option value="No existing systems">No existing systems</option>
          <option value="Yes — Zoho CRM">Yes — Zoho CRM</option>
          <option value="Yes — HubSpot">Yes — HubSpot</option>
          <option value="Yes — Tally / accounting software">Yes — Tally / accounting software</option>
          <option value="Yes — WhatsApp Business">Yes — WhatsApp Business</option>
          <option value="Yes — custom/other system">Yes — custom/other system</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-muted mb-1 block uppercase small-label">What is your budget for this software project?</label>
        <select name="budget" className="w-full bg-navy border border-border rounded-lg px-4 py-3 text-sm text-white focus:border-blue outline-none transition-colors appearance-none">
          <option value="" disabled>Select budget</option>
          <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
          <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
          <option value="₹1,00,000 – ₹3,00,000">₹1,00,000 – ₹3,00,000</option>
          <option value="₹3,00,000+">₹3,00,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue text-navy font-bold py-4 rounded-xl mt-2 hover:bg-white hover:text-navy transition-all cta-glow">
        Send My Project Brief →
      </button>
    </form>
  );
}
