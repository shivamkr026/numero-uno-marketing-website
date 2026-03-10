import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Numero Uno Marketing — Digital Marketing Agency Bangalore",
  description:
    "Empowering Bangalore MSMEs with scalable, data-driven digital marketing solutions. Performance marketing, social media, web development, AI tools & more. Fixed pricing. Real results.",
  keywords:
    "digital marketing agency bangalore, performance marketing bangalore, social media agency bangalore, website development bangalore, MSME marketing india",
  openGraph: {
    title: "Numero Uno Marketing — Digital Marketing Agency Bangalore",
    description:
      "Agency-quality digital marketing at MSME-friendly budgets. 17+ active clients, ₹10Cr+ revenue generated, 8.2x average ROAS.",
    type: "website",
    locale: "en_IN",
    siteName: "Numero Uno Marketing",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
