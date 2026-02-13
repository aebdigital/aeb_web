import Image from "next/image";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { TechnologiesShowcase } from "@/components/TechnologiesShowcase";
import { FaRocket, FaHeart, FaHandshake, FaAward } from 'react-icons/fa';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nás - Tím webových expertov | AEB Digital Bratislava",
  description: "Spoznajte tím AEB Digital - webovú agentúru z Bratislavy s 5+ rokmi skúseností. 120+ úspešných projektov, moderné technológie, individuálny prístup. Váš partner pre digitálnu transformáciu.",
  keywords: [
    "AEB Digital tím",
    "webová agentúra Bratislava",
    "o nás",
    "web development tím",
    "digitálna agentúra Slovensko",
    "webový dizajnéri",
    "vývojári Bratislava",
  ],
  alternates: {
    canonical: "https://aebdigital.sk/o-nas",
  },
  openGraph: {
    title: "O nás - Tím webových expertov | AEB Digital",
    description: "Spoznajte tím AEB Digital - webovú agentúru z Bratislavy s 5+ rokmi skúseností a 120+ úspešnými projektmi.",
    url: "https://aebdigital.sk/o-nas",
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
    { icon: <FaRocket />, title: "Inovácia", description: "Používame najnovšie technológie a trendy pre vytvorenie moderných riešení, ktoré vás posunú dopredu." },
    { icon: <FaHeart />, title: "Vášeň pre detail", description: "Každý pixel, každý riadok kódu a každá interakcia sú premyslené a dokonale vytvorené." },
    { icon: <FaHandshake />, title: "Partnerstvo", description: "Nie sme len dodávateľ - sme váš partner na ceste k digitálnemu úspechu." },
    { icon: <FaAward />, title: "Kvalita", description: "100% spokojnosť klientov nie je náhoda - je výsledkom našej práce a záväzku." },
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
          <h1 className="page-title">O AEB Digital</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-modern py-20 relative z-10">
        <div className="container">
          <div className="about-layout">
            <StorySection
              label="Náš príbeh"
              title="Tvoríme digitálne zážitky, ktoré inšpirujú"
              leadText="Sme mladý, dynamický tím s viac ako 5-ročnými skúsenosťami v oblasti digitálnych technológií. Začínali sme ako malá agentúra s veľkými snami."
              paragraph="Dnes máme za sebou 120+ spokojných klientov a pokračujeme v inšpirovaní ďalších po celom Slovensku. Každý projekt riešime s individuálnym prístupom a dôrazom na detail."
              imageSrc="/sources/aeb-portfolio/30.webp"
              imageAlt="AEB Digital práca"
            />
            <StorySection
              label="Naša filozofia"
              title="Kvalita a inovácie na prvom mieste"
              leadText="Veríme, že každý projekt je jedinečný a zaslúži si individuálny prístup. Používame najnovšie technológie a trendy, ale nikdy nezabudneme na základné princípy kvalitnej práce."
              paragraph="Naším cieľom nie je len vytvoriť funkčné riešenie, ale pomôcť vašej firme dosiahnuť skutočný úspech v digitálnom svete."
              imageSrc="/sources/aeb-portfolio/80.webp"
              imageAlt="Digitálne riešenia"
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
