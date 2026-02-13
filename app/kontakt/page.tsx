import { ContactForm } from "@/components/ContactForm";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Bezplatná konzultácia a cenová ponuka | AEB Digital Bratislava",
  description: "Kontaktujte AEB Digital pre bezplatnú konzultáciu! Telefón: +421 908 507 131, Email: peter@aebdig.com. Cenová ponuka na tvorbu webu do 24 hodín. Sídlo v Bratislave.",
  keywords: [
    "kontakt AEB Digital",
    "webová agentúra Bratislava",
    "bezplatná konzultácia web",
    "cenová ponuka webová stránka",
    "tvorba webu kontakt",
    "digitálna agentúra kontakt",
  ],
  alternates: {
    canonical: "https://aebdigital.sk/kontakt",
  },
  openGraph: {
    title: "Kontakt - Bezplatná konzultácia | AEB Digital",
    description: "Kontaktujte nás pre bezplatnú konzultáciu. Telefón: +421 908 507 131. Cenová ponuka do 24 hodín!",
    url: "https://aebdigital.sk/kontakt",
    type: "website",
  },
};

export default function KontaktPage() {
  return (
    <>
      <BackgroundTextAnimation />

      {/* Page Header */}
      <section className="page-header py-32 bg-custom-bg text-white">
        <div className="container">
          <h1 className="page-title">Kontaktujte nás</h1>
        </div>
      </section>

      <ContactInfoSection />
      <ContactForm />
      <FAQSection />
      <Footer />

      {/* Large AEB Digital Image below Footer */}
      <div className="relative z-40 w-full h-[400px] pointer-events-none hidden lg:block">
        <Image src="/sources/footimg_copy-removebg-preview.png" alt="AEB DIGITAL" width={1920} height={400} className="object-contain w-full h-full" />
      </div>
    </>
  );
}