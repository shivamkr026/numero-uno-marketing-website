export const metadata = {
  title: "Terms of Service — Numero Uno Marketing",
  description: "Terms of Service for Numero Uno Marketing Pvt. Ltd.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-12 bg-navy">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/60 leading-relaxed">
          <p><strong className="text-white">Effective Date:</strong> March 2026</p>
          <p>
            These Terms of Service govern your use of the website operated by Numero Uno Marketing Pvt. Ltd. By accessing or using our website, you agree to these terms.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Services</h2>
          <p>Numero Uno Marketing provides digital marketing services including performance marketing, social media management, web development, AI growth tools, and custom software. Specific deliverables, timelines, and pricing are agreed upon in individual service contracts.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Payments</h2>
          <p>Service fees are as quoted on our website or in individual proposals. Payment terms are outlined in individual service agreements. All prices are in Indian Rupees (INR) and are subject to applicable GST.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Cancellation</h2>
          <p>Monthly services can be cancelled at any time with 15 days&apos; written notice. There are no long-term contracts or lock-in periods unless explicitly agreed upon. One-time project fees are non-refundable once work has commenced.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Intellectual Property</h2>
          <p>All content created for you as part of our services (websites, designs, copy) becomes your property upon full payment. Our proprietary tools, processes, and internal methodologies remain our intellectual property.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Limitation of Liability</h2>
          <p>While we strive for the best results, we do not guarantee specific marketing outcomes (leads, revenue, ROAS). Marketing results depend on many factors including market conditions, competition, and client cooperation. Our liability is limited to the fees paid for the specific service in question.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Website Use</h2>
          <p>The content on this website is for general informational purposes. We make no representations about the accuracy or completeness of information on the site. Prices, services, and availability are subject to change without notice.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Contact</h2>
          <p>For questions about these Terms, contact: <a href="mailto:hello@numerounomarketing.com" className="text-green no-underline hover:underline">hello@numerounomarketing.com</a></p>
        </div>
      </div>
    </section>
  );
}
