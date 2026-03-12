import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata = {
  title: "Numero Uno Marketing — Performance Marketing Agency | Websites, Ads, AI & Social Media",
  description:
    "Numero Uno Marketing — a performance-first digital marketing agency. We build websites, run profitable ad campaigns, manage social media, and deploy AI tools that generate measurable revenue. Fixed pricing. No lock-in.",
  keywords:
    "performance marketing agency, digital marketing, social media agency, website development, AI growth tools, scaling brands",
  openGraph: {
    title: "Numero Uno Marketing — Performance Marketing Agency | Websites, Ads, AI & Social Media",
    description:
      "Numero Uno Marketing — a performance-first digital marketing agency. We build websites, run profitable ad campaigns, manage social media, and deploy AI tools that generate measurable revenue. Fixed pricing. No lock-in.",
    type: "website",
    locale: "en_IN",
    siteName: "Numero Uno Marketing",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
