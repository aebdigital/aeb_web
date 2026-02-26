import Image from "next/image";
import Link from "next/link";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen - Webseiten, E-Shops, Anwendungen | AEB Digital",
  description: "Umfassende digitale Dienstleistungen: Erstellung von Webseiten ab 500€, maßgeschneiderte E-Shops, Webanwendungen, Digital Marketing, SEO-Optimierung, UI/UX Design. Kostenlose Beratung!",
  keywords: [
    "Webseiten erstellen",
    "Webdesign Dienstleistungen",
    "E-Shop Erstellung Österreich",
    "maßgeschneiderte Webanwendungen",
    "SEO-Optimierung",
    "Digital Marketing",
    "UI/UX Design",
    "responsives Webdesign",
    "WordPress Webseiten",
    "React Entwicklung",
  ],
  alternates: {
    canonical: "https://aebdigital.at/leistungen",
  },
  openGraph: {
    title: "Leistungen - Webseiten, E-Shops, Anwendungen | AEB Digital",
    description: "Umfassende digitale Dienstleistungen: Webseiten, E-Shops, Anwendungen, Marketing. Kostenlose Beratung!",
    url: "https://aebdigital.at/leistungen",
    type: "website",
  },
};

interface ServiceItemProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

function ServiceSection({ id, title, description, features, imageSrc, imageAlt, reverse = false }: ServiceItemProps) {
  return (
    <section id={id} className={`services-page-section ${reverse ? 'reverse' : ''}`}>
      {/* Desktop Layout */}
      <div className={`hidden lg:flex ${reverse ? 'flex-row-reverse' : 'flex-row'} min-h-screen`}>
        {/* Text Column */}
        <div className="w-1/2 flex items-center">
          <div className={`py-20 ${reverse ? 'pl-8 pr-[5vw]' : 'pl-[5vw] pr-8'}`}>
            <h2 className="text-7xl xl:text-8xl font-bold mb-6">{title}</h2>
            <p className="text-gray-light mb-8">{description}</p>

            <div className="service-list grid grid-cols-1 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="service-item flex items-center">
                  <span className="service-number text-accent-teal font-bold text-lg mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                  <span className="text-gray-light">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/kontakt" className="btn btn-primary">Angebot anfordern</Link>
          </div>
        </div>
        {/* Image Column - 50vw, touching edge */}
        <div className="w-1/2 relative h-screen">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative h-[50vh] w-full">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
        <div className="py-12 px-4">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-gray-light mb-8">{description}</p>

          <div className="service-list grid grid-cols-1 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="service-item flex items-center">
                <span className="service-number text-accent-teal font-bold text-lg mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                <span className="text-gray-light">{feature}</span>
              </div>
            ))}
          </div>

          <Link href="/kontakt" className="btn btn-primary">Angebot anfordern</Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "Beratung",
      description: "Beim ersten Gespräch definieren wir gemeinsam Ihre Bedürfnisse und Projektziele."
    },
    {
      step: 2,
      title: "Entwurf",
      description: "Wir erstellen einen detaillierten Lösungsentwurf und ein Angebot, das auf Ihr Budget zugeschnitten ist."
    },
    {
      step: 3,
      title: "Entwicklung",
      description: "Wir realisieren das Projekt mit den neuesten Technologien und Best Practices."
    },
    {
      step: 4,
      title: "Testing",
      description: "Wir testen gründlich alle Funktionalitäten und optimieren die Leistung der Lösung."
    },
    {
      step: 5,
      title: "Launch",
      description: "Wir starten das Projekt im Live-Betrieb und sorgen für einen reibungslosen Übergang."
    },
    {
      step: 6,
      title: "Support",
      description: "Wir bieten technischen Support und Wartung für den langfristigen Erfolg Ihres Projekts."
    },
  ];

  return (
    <section className="process-section py-20 text-white relative overflow-hidden">
      <div className="container relative z-10">
        <h2 className="heading-section text-center mb-12">Unser Prozess</h2>

        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-icon">
                <span className="text-2xl font-bold">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <BackgroundTextAnimation />

      {/* Page Header */}
      <section className="page-header py-32 text-white">
        <div className="container">
          <h1 className="page-title">Unsere Leistungen</h1>
        </div>
      </section>

      <ServiceSection
        id="webseiten"
        title="Webseiten"
        description="Wir erstellen moderne, responsive Webseiten, optimiert für alle Geräte. Unsere Webseiten sind schnell, SEO-optimiert und mit Fokus auf Benutzererfahrung gestaltet."
        features={["Responsives Design", "SEO-Optimierung", "Schnelle Ladezeiten", "CMS-System", "Technischer Support", "SSL-Zertifikate", "Hosting und Domains", "Google Analytics"]}
        imageSrc="/sources/web-design.webp"
        imageAlt="Webseiten"
      />

      <ServiceSection
        id="webanwendungen"
        title="Webanwendungen"
        description="Wir entwickeln fortgeschrittene Webanwendungen mit moderner Funktionalität. Wir nutzen die neuesten Technologien wie React, Node.js und TypeScript für robuste Lösungen."
        features={["React & Vue.js", "Node.js Backend", "Echtzeit-Funktionalität", "API-Integrationen", "Skalierbarkeit", "Progressive Web Apps", "Datenbanken & Cloud", "Automatisierung"]}
        imageSrc="/sources/services/aplikacie.webp"
        imageAlt="Webanwendungen"
        reverse
      />

      <ServiceSection
        id="e-shops"
        title="E-Shops"
        description="Wir erstellen umfassende E-Commerce-Lösungen, die Ihren Umsatz steigern. Vom Design über Zahlungsgateways bis zur Bestellverwaltung - alles an einem Ort."
        features={["WooCommerce & Shopify", "Zahlungsgateways", "Lagerverwaltung", "Analytics und Reporting", "Mobile Optimierung", "Inventory Management", "Multi-Channel-Verkauf", "E-Mail-Marketing-Integration"]}
        imageSrc="/sources/Gemini_Generated_Image_lxz7dglxz7dglxz7.webp"
        imageAlt="E-Shops"
      />

      <ServiceSection
        id="digital-marketing"
        title="Digital Marketing"
        description="Wir helfen Ihrer Marke, online zu wachsen. Wir verwalten Social Media, erstellen Inhalte und führen Werbekampagnen durch, die Ergebnisse liefern."
        features={["Social-Media-Management", "Google Ads & Facebook Ads", "Content-Erstellung", "E-Mail-Marketing", "SEO-Optimierung", "Influencer Marketing", "Conversion-Optimierung", "Marketing-Automatisierung"]}
        imageSrc="/sources/social-media.webp"
        imageAlt="Digital Marketing"
        reverse
      />

      <ServiceSection
        id="email-marketing"
        title="Email Marketing"
        description="Wir erstellen effektive E-Mail-Kampagnen, die Beziehungen zu Ihren Kunden aufbauen und Conversions steigern. Von Newslettern bis zu automatisierten Sequenzen."
        features={["Newsletter-Kampagnen", "E-Mail-Automatisierung", "A/B-Testing", "Analytics und Reporting", "Content-Personalisierung", "Drip-Kampagnen", "Lead Nurturing", "ROI-Optimierung"]}
        imageSrc="/sources/email-market.webp"
        imageAlt="Email Marketing"
      />

      <ProcessSection />
    </>
  );
}
