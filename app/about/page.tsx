import Image from "next/image";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { TechnologiesShowcase } from "@/components/TechnologiesShowcase";
import { FaRocket, FaHeart, FaHandshake, FaAward } from 'react-icons/fa';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Über uns - Team von Web-Experten | AEB Digital Bratislava",
    description: "Lernen Sie das AEB Digital Team kennen - eine Webagentur aus Bratislava mit 5+ Jahren Erfahrung. 120+ erfolgreiche Projekte, moderne Technologien, individueller Ansatz. Ihr Partner für digitale Transformation.",
    keywords: [
        "AEB Digital team",
        "webagentur Bratislava",
        "über uns",
        "webentwicklung team",
        "digitalagentur",
        "webdesigner",
        "entwickler Bratislava",
    ],
    alternates: {
        canonical: "https://aebdigital.com/de/about", // Assuming /de prefix or structure, but keeping path simple for now if domain based
    },
    openGraph: {
        title: "Über uns - Team von Web-Experten | AEB Digital",
        description: "Lernen Sie das AEB Digital Team kennen - eine Webagentur aus Bratislava mit 5+ Jahren Erfahrung und 120+ erfolgreichen Projekten.",
        url: "https://aebdigital.com/de/about",
        type: "website",
    },
};

interface StorySectionProps {
    label: string;
    title: string;
    leadText: string;
    paragraph: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

function StorySection({ label, title, leadText, paragraph, imageSrc, imageAlt, reverse = false }: StorySectionProps) {
    return (
        <div className="story-content grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16" style={{ backgroundColor: 'transparent' }}>
            <div className={`story-text ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                <span className="story-label inline-block bg-accent-teal text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                    {label}
                </span>
                <h2 className="text-4xl leading-tight mb-6 text-white">{title}</h2>
                <p className="lead-text text-lg text-white/[0.9] mb-6 font-medium">{leadText}</p>
                <p className="text-base text-white/[0.8] leading-relaxed">{paragraph}</p>
            </div>
            <div className={`story-image rounded-none overflow-hidden shadow-xl transform transition-transform duration-300 hover:-translate-y-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                <Image src={imageSrc} alt={imageAlt} width={800} height={400} layout="responsive" objectFit="cover" />
            </div>
        </div>
    );
}

function ValuesGrid() {
    const values = [
        { icon: <FaRocket />, title: "Innovation", description: "Wir nutzen neueste Technologien und Trends, um moderne Lösungen zu schaffen, die Sie voranbringen." },
        { icon: <FaHeart />, title: "Leidenschaft fürs Detail", description: "Jedes Pixel, jede Zeile Code und jede Interaktion sind durchdacht und perfekt ausgearbeitet." },
        { icon: <FaHandshake />, title: "Partnerschaft", description: "Wir sind nicht nur ein Lieferant – wir sind Ihr Partner auf dem Weg zum digitalen Erfolg." },
        { icon: <FaAward />, title: "Qualität", description: "100% Kundenzufriedenheit ist kein Zufall – es ist das Ergebnis unserer Arbeit und unseres Engagements." },
    ];

    return (
        <section className="values-grid py-24 text-white relative overflow-hidden z-10">
            <div className="container relative z-10">
                <div className="values-grid-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="value-card text-center p-8 bg-white/[0.05] backdrop-blur-md rounded-xl border border-white/[0.1] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]">
                            <div className="value-icon w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-accent-teal rounded-full text-white text-3xl">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-extrabold text-accent-teal mb-3">{value.title}</h3>
                            <p className="text-base text-white/[0.9] leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function AboutUsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header py-20 text-white relative z-10">
                <div className="container">
                    <h1 className="page-title">Über AEB Digital</h1>
                </div>
            </section>

            {/* About Content */}
            <section className="about-content-modern py-20 relative z-10">
                <div className="container">
                    <div className="about-layout">
                        <StorySection
                            label="Unsere Geschichte"
                            title="Wir schaffen digitale Erlebnisse, die inspirieren"
                            leadText="Wir sind ein junges, dynamisches Team mit mehr als 5 Jahren Erfahrung in digitalen Technologien. Wir begannen als kleine Agentur mit großen Träumen."
                            paragraph="Heute haben wir 120+ zufriedene Kunden hinter uns und inspirieren weiterhin andere. Wir gehen jedes Projekt mit einem individuellen Ansatz und Liebe zum Detail an."
                            imageSrc="/sources/aeb-portfolio/30.webp"
                            imageAlt="AEB Digital Arbeit"
                        />
                        <StorySection
                            label="Unsere Philosophie"
                            title="Qualität und Innovation stehen an erster Stelle"
                            leadText="Wir glauben, dass jedes Projekt einzigartig ist und einen individuellen Ansatz verdient. Wir nutzen neueste Technologien und Trends, vergessen aber nie die Grundprinzipien qualitativer Arbeit."
                            paragraph="Unser Ziel ist es nicht nur, eine funktionale Lösung zu schaffen, sondern Ihrem Unternehmen zu echtem Erfolg in der digitalen Welt zu verhelfen."
                            imageSrc="/sources/aeb-portfolio/80.webp"
                            imageAlt="Digitale Lösungen"
                            reverse
                        />
                    </div>
                </div>
            </section>

            <ValuesGrid />

            <TechnologiesShowcase />

            <ContactForm />
            <FAQSection />
            <Footer />

            {/* Large AEB Digital Image below FAQ */}
            <div className="relative z-40 w-full h-[400px] pointer-events-none hidden lg:block">
                <Image src="/sources/footimg_copy-removebg-preview.png" alt="AEB DIGITAL" width={1920} height={400} className="object-contain w-full h-full" />
            </div>
        </>
    );
}
