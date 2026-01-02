"use client";

import Image from "next/image";
import Link from "next/link";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FaRocket, FaHeart, FaHandshake, FaAward, FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';
import { useEffect, useState } from "react";



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
    <div className="story-content grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
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
    <section className="values-grid py-24 bg-custom-bg text-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="values-grid-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="value-card text-center p-8 bg-white/[0.05] rounded-xl border border-white/[0.1] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]">
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

function TechnologiesShowcase() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure animations only run client-side
  }, []);

  return (
    <section className="tech-showcase py-24 bg-custom-bg text-white">
      <div className="container">
        <div className="tech-header text-center mb-16">
          <span className="section-label inline-block bg-accent-teal text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Naše technológie
          </span>
          <h2 className="text-5xl font-bold text-white">Nástroje, ktoré nám pomáhajú tvoriť zázraky</h2>
        </div>

        <div className="tech-visual flex justify-center mb-20">
          <div className="tech-circle relative w-[600px] h-[600px] rounded-full border border-white/[0.1] flex items-center justify-center">
            <div className="tech-center absolute w-32 h-32 bg-white rounded-full flex items-center justify-center z-10 shadow-lg text-black text-4xl font-bold font-[family-name:var(--font-anton)]">
              AEB
            </div>

            {isMounted && ( // Render orbits only after mount to ensure animations start
              <>
                <div className="tech-orbit orbit-1 absolute w-[300px] h-[300px] rounded-full border border-white/[0.1] animate-orbit-rotate-1">
                  <div className="tech-node absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <Image src="/sources/techstack/React-icon.svg.png" alt="React" width={35} height={35} className="block m-auto animate-counter-rotate-ccw-1" style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="tech-node absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <Image src="/sources/techstack/JavaScript-Logo-scaled-e1750439290173.png" alt="JavaScript" width={35} height={35} className="block m-auto animate-counter-rotate-ccw-1" style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="tech-node absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <Image src="/sources/techstack/node-js-icon-1817x2048-g8tzf91e.png" alt="Node.js" width={35} height={35} className="block m-auto animate-counter-rotate-ccw-1" style={{ objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="tech-orbit orbit-2 absolute w-[500px] h-[500px] rounded-full border border-white/[0.1] animate-orbit-rotate-2">
                  <div className="tech-node absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <Image src="/sources/techstack/apps-figma-icon-2048x2048-ctjj5ab7.png" alt="Figma" width={35} height={35} className="block m-auto animate-counter-rotate-cw-2" style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="tech-node absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <Image src="/sources/techstack/typescript-icon-icon-2048x2048-2rhh1z66.png" alt="TypeScript" width={35} height={35} className="block m-auto animate-counter-rotate-cw-2" style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="tech-node absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <Image src="/sources/techstack/wordpress-logo-wordpress-icon-transparent-free-png.webp" alt="WordPress" width={35} height={35} className="block m-auto animate-counter-rotate-cw-2" style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="tech-node absolute w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                    <Image src="/sources/techstack/Photoshop-logo-scaled-e1750439327654.png" alt="Photoshop" width={35} height={35} className="block m-auto animate-counter-rotate-cw-2" style={{ objectFit: 'contain' }} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="tech-categories-modern grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="tech-category-card bg-white/[0.05] p-8 rounded-xl text-left border-2 border-white/[0.1] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1] hover:border-accent-teal">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
              <FaCode className="text-accent-teal text-xl" /> Vývoj
            </h3>
            <p className="text-white/[0.8] leading-relaxed text-base">React, Vue.js, Node.js, TypeScript, JavaScript, HTML5, CSS3</p>
          </div>
          <div className="tech-category-card bg-white/[0.05] p-8 rounded-xl text-left border-2 border-white/[0.1] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1] hover:border-accent-teal">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
              <FaPaintBrush className="text-accent-teal text-xl" /> Dizajn
            </h3>
            <p className="text-white/[0.8] leading-relaxed text-base">Figma, Adobe Photoshop, Adobe Illustrator, Sketch</p>
          </div>
          <div className="tech-category-card bg-white/[0.05] p-8 rounded-xl text-left border-2 border-white/[0.1] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1] hover:border-accent-teal">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-4">
              <FaServer className="text-accent-teal text-xl" /> Backend & CMS
            </h3>
            <p className="text-white/[0.8] leading-relaxed text-base">WordPress, Shopify, WooCommerce, Custom APIs</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function AboutUsPage() {
  return (
    <>
      <BackgroundTextAnimation />

      {/* Page Header */}
      <section className="page-header py-32 bg-custom-bg text-white">
        <div className="container">
          <h1 className="page-title">O AEB Digital</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-modern py-20 bg-custom-bg">
        <div className="container">
          <div className="about-layout">
            <StorySection
              label="Náš príbeh"
              title="Tvoríme digitálne zážitky, ktoré inšpirujú"
              leadText="Sme mladý, dynamický tím s viac ako 5-ročnými skúsenosťami v oblasti digitálnych technológií. Začínali sme ako malá agentúra s veľkými snami."
              paragraph="Dnes máme za sebou 120+ spokojných klientov a pokračujeme v inšpirovaní ďalších po celom Slovensku. Každý projekt riešime s individuálnym prístupom a dôrazom na detail."
              imageSrc="/sources/aeb-portfolio/30.jpg"
              imageAlt="AEB Digital práca"
            />
            <StorySection
              label="Naša filozofia"
              title="Kvalita a inovácie na prvom mieste"
              leadText="Veríme, že každý projekt je jedinečný a zaslúži si individuálny prístup. Používame najnovšie technológie a trendy, ale nikdy nezabudneme na základné princípy kvalitnej práce."
              paragraph="Naším cieľom nie je len vytvoriť funkčné riešenie, ale pomôcť vašej firme dosiahnuť skutočný úspech v digitálnom svete."
              imageSrc="/sources/aeb-portfolio/80.jpg"
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
      {/* Large AEB Digital Image below Footer */}
      <div className="relative w-full h-[400px] pointer-events-none hidden lg:block bg-black">
        <Image src="/sources/footimg.png" alt="AEB DIGITAL" width={1920} height={400} className="object-contain w-full h-full" />
      </div>
    </>
  );
}
