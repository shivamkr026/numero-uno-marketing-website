export const metadata = {
  title: "Privacy Policy — Numero Uno Marketing",
  description: "Privacy Policy for Numero Uno Marketing Pvt. Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-12 bg-navy">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/60 leading-relaxed">
          <p><strong className="text-white">Effective Date:</strong> March 2026</p>
          <p>
            Numero Uno Marketing Pvt. Ltd. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website numerounomarketing.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Information We Collect</h2>
          <p>When you fill out a form on our website, we may collect your name, business name, phone number, email address, and marketing goals. This information is used solely to respond to your inquiry and provide our services.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To respond to your inquiry or service request</li>
            <li>To provide marketing audit and consulting services</li>
            <li>To send relevant marketing communications (with your consent)</li>
            <li>To improve our website and services</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Cookies & Tracking</h2>
          <p>We use Google Analytics and similar tools to understand how visitors use our website. These tools use cookies to collect information such as browser type, pages visited, and time on site. You can disable cookies in your browser settings.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Data Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third-party service providers who assist us in operating our website and providing services, subject to confidentiality agreements.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello@numerounomarketing.com.</p>

          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold text-white mt-8 mb-3">Contact</h2>
          <p>For questions about this Privacy Policy, contact: <a href="mailto:hello@numerounomarketing.com" className="text-green no-underline hover:underline">hello@numerounomarketing.com</a></p>
        </div>
      </div>
    </section>
  );
}
