import { ContactForm } from "@/components/ContactForm";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt - Kostenlose Beratung und Preisangebot | AEB Digital Bratislava",
    description: "Kontaktieren Sie AEB Digital für eine kostenlose Beratung! Telefon: +421 908 507 131, E-Mail: peter@aebdig.com. Preisangebot für Webentwicklung innerhalb von 24 Stunden. Sitz in Bratislava.",
    keywords: [
        "kontakt AEB Digital",
        "webagentur Bratislava",
        "kostenlose webberatung",
        "website preisangebot",
        "webentwicklung kontakt",
        "digitalagentur kontakt",
    ],
    alternates: {
        canonical: "https://aebdigital.com/de/contact",
    },
    openGraph: {
        title: "Kontakt - Kostenlose Beratung | AEB Digital",
        description: "Kontaktieren Sie uns für eine kostenlose Beratung. Telefon: +421 908 507 131. Preisangebot innerhalb von 24 Stunden!",
        url: "https://aebdigital.com/de/contact",
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
                    <h1 className="page-title">Kontaktieren Sie uns</h1>
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
