import Image from "next/image";
import Link from "next/link";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Služby - Tvorba webov, e-shopov, aplikácií | AEB Digital Bratislava",
  description: "Kompletné digitálne služby v Bratislave: tvorba webových stránok od 500€, e-shopy na mieru, webové aplikácie, digital marketing, SEO optimalizácia, UI/UX dizajn. Bezplatná konzultácia!",
  keywords: [
    "tvorba webových stránok",
    "web dizajn služby",
    "e-shop tvorba Slovensko",
    "webové aplikácie na mieru",
    "SEO optimalizácia",
    "digital marketing",
    "UI/UX dizajn",
    "responzívny web dizajn",
    "WordPress weby",
    "React vývoj",
  ],
  alternates: {
    canonical: "https://aebdigital.sk/sluzby",
  },
  openGraph: {
    title: "Služby - Tvorba webov, e-shopov, aplikácií | AEB Digital",
    description: "Kompletné digitálne služby v Bratislave: webové stránky, e-shopy, aplikácie, marketing. Bezplatná konzultácia!",
    url: "https://aebdigital.sk/sluzby",
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
    <section id={id} className={`services-page-section bg-custom-bg ${reverse ? 'reverse' : ''}`}>
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

            <Link href="/kontakt" className="btn btn-primary">Získať ponuku</Link>
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

          <Link href="/kontakt" className="btn btn-primary">Získať ponuku</Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "Konzultácia",
      description: "Počas prvého stretnutia si spoločne definujeme vaše potreby a ciele projektu."
    },
    {
      step: 2,
      title: "Návrh",
      description: "Vytvoríme detailný návrh riešenia a cenovu ponuku prispôsobenú vášmu rozpočtu."
    },
    {
      step: 3,
      title: "Vývoj",
      description: "Realizujeme projekt pomocou najnovších technológií a najlepších praktík."
    },
    {
      step: 4,
      title: "Testovanie",
      description: "Dôkladne testujeme všetku funkcionalitu a optimalizujeme výkon riešenia."
    },
    {
      step: 5,
      title: "Spustenie",
      description: "Spúšťame projekt do ostrého prevádzky a zabezpečujeme hladký prechod."
    },
    {
      step: 6,
      title: "Podpora",
      description: "Poskytujeme technickú podporu a údržbu pre dlhodobý úspech projektu."
    },
  ];

  return (
    <section className="process-section py-20 bg-custom-bg text-white relative overflow-hidden">
      <div className="container relative z-10">
        <h2 className="heading-section text-center mb-12">Náš proces</h2>

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
      <section className="page-header py-32 bg-custom-bg text-white">
        <div className="container">
          <h1 className="page-title">Naše služby</h1>
        </div>
      </section>

      <ServiceSection
        id="webove-stranky"
        title="Webové stránky"
        description="Tvoríme moderné, responzívne webové stránky optimalizované pre všetky zariadenia. Naše weby sú rýchle, SEO optimalizované a navrhnuté s ohľadom na používateľskú skúsenosť."
        features={["Responzívny dizajn", "SEO optimalizácia", "Rýchle načítanie", "CMS systém", "Technická podpora", "SSL certifikáty", "Hosting a domény", "Google Analytics"]}
        imageSrc="/sources/web-design.jpg"
        imageAlt="Webové stránky"
      />

      <ServiceSection
        id="webove-aplikacie"
        title="Webové aplikácie"
        description="Vyvíjame pokročilé webové aplikácie s modernou funkcionalitou. Používame najnovšie technológie ako React, Node.js a TypeScript pre vytvorenie robustných riešení."
        features={["React & Vue.js", "Node.js backend", "Real-time funkcionalita", "API integrácie", "Škálovateľnosť", "Progressive Web Apps", "Databázy & Cloud", "Automatizácia"]}
        imageSrc="/sources/services/aplikacie.jpg"
        imageAlt="Webové aplikácie"
        reverse
      />

      <ServiceSection
        id="e-shopy"
        title="E-shopy"
        description="Vytvárame komplexné e-commerce riešenia, ktoré zvýšia vaše predaje. Od dizajnu po platobné brány a správu objednávok - všetko na jednom mieste."
        features={["WooCommerce & Shopify", "Platobné brány", "Správa skladov", "Analytics a reporting", "Mobilná optimalizácia", "Inventory management", "Multi-channel predaj", "Email marketing integrácia"]}
        imageSrc="/sources/Gemini_Generated_Image_lxz7dglxz7dglxz7.png"
        imageAlt="E-shopy"
      />

      <ServiceSection
        id="digital-marketing"
        title="Digital Marketing"
        description="Pomáhame vašej značke rásť online. Spravujeme sociálne médiá, vytvárame obsah a realizujeme reklamné kampane, ktoré prinášajú výsledky."
        features={["Správa sociálnych médií", "Google Ads & Facebook Ads", "Tvorba obsahu", "Email marketing", "SEO optimalizácia", "Influencer marketing", "Conversion optimization", "Marketing automation"]}
        imageSrc="/sources/social-media.jpg"
        imageAlt="Digital Marketing"
        reverse
      />

      <ServiceSection
        id="email-marketing"
        title="Email Marketing"
        description="Vytvárame efektívne email kampane, ktoré budujú vzťahy s vašimi zákazníkmi a zvyšujú konverzie. Od newslettrov po automatizované sekvencie."
        features={["Newsletter kampane", "Email automatizácia", "A/B testovanie", "Analytics a reporting", "Personalizácia obsahu", "Drip kampane", "Lead nurturing", "ROI optimalizácia"]}
        imageSrc="/sources/email-market.jpg"
        imageAlt="Email Marketing"
      />

      <ProcessSection />
    </>
  );
}