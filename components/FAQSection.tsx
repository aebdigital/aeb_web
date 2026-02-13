"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Ako dlho trvá vytvorenie webovej stránky?",
    answer: "Doba realizácie závisí od zložitosti projektu. Jednoduchá prezentačná stránka sa dá dokončiť za 1-2 týždne, zatiaľ čo komplexný e-shop alebo webová aplikácia môže trvať 4-8 týždňov. Po prvej konzultácii vám poskytneme presný časový harmonogram."
  },
  {
    question: "Koľko stojí vytvorenie webovej stránky?",
    answer: "Ceny sa pohybujú od 500€ za jednoduchú prezentačnú stránku až po 5000€+ za komplexné e-commerce riešenia. Finálna cena závisí od funkcionality, dizajnu a požiadaviek. Poskytujeme transparentnú cenovú ponuku po analýze vašich potrieb."
  },
  {
    question: "Zabezpečujete aj údržbu a podporu?",
    answer: "Áno, ponúkame kompletné služby údržby a technickej podpory. To zahŕňa aktualizácie obsahu, bezpečnostné záplaty, zálohovanie dát a riešenie technických problémov. Môžete si vybrať z rôznych balíčkov podľa vašich potrieb."
  },
  {
    question: "Budeme môcť sami upravovať obsah stránky?",
    answer: "Samozrejme! Vytvárame stránky s užívateľsky prívetivým CMS (Content Management System), ktorý vám umožní jednoducho pridávať a upravovať obsah bez technických znalostí. Poskytneme vám aj školenie a dokumentáciu."
  },
  {
    question: "Sú vaše webstránky optimalizované pre mobily?",
    answer: "Všetky naše webstránky sú responsívne, čo znamená, že sa automaticky prispôsobia akémukoľvek zariadeniu - či už je to mobil, tablet alebo počítač. Používame mobile-first prístup pre optimálny používateľský zážitok."
  },
  {
    question: "Pomôžete aj s digital marketingom?",
    answer: "Áno, ponúkame komplexné digital marketing služby vrátane SEO optimalizácie, správy sociálnych médií, PPC kampaní a email marketingu. Pomôžeme vám nielen vytvoriť skvělú stránku, ale aj prilákať na ňu návštevníkov."
  },
  {
    question: "Aký je postup pri tvorbe webovej stránky?",
    answer: "Náš proces zahŕňa 4 kroky: 1) Bezplatnú konzultáciu a analýzu potrieb, 2) Vytvorenie wireframov a dizajnu, 3) Programovanie a testovanie, 4) Spustenie a školenie. Každý krok zahŕňa vašu spätnú väzbu."
  },
  {
    question: "Poskytujete záruky na vašu prácu?",
    answer: "Áno, poskytujeme 12-mesačnú záruku na všetky naše webové riešenia. Záruka pokrýva technické chyby, kompatibilitu s prehliadačmi a základnú funkčnosť. Malé úpravy a opravy sú v priebehu záručnej doby bezplatné."
  },
  {
    question: "Dokážete migrovať existujúcu stránku?",
    answer: "Samozrejme! Zabezpečíme kompletnú migráciu vašich dát, obsahu a SEO nastavení z pôvodnej stránky. Proces je navrhnutý tak, aby neovplyvnil vašu návštevnosť ani pozície vo vyhľadávačoch."
  },
  {
    question: "Môžem si objednať len dizajn bez programovania?",
    answer: "Áno, ponúkame aj samostatné dizajnové služby. Vytvoríme pre vás kompletné UI/UX dizajny vo Figme spolu s prototypmi a grafickými podkladmi pre ďalšiu realizáciu."
  },
  {
    question: "Aké platobné metódy akceptujete?",
    answer: "Akceptujeme bankové prevody, platby kartou a PayPal. Väčšie projekty rozdeľujeme na čiastkové platby - zvyčajne 50% na začiatku a 50% po dokončení. Pre dlhodobé projekty je možná mesačná fakturácia."
  },
  {
    question: "Vytvárate aj mobilné aplikácie?",
    answer: "Špecializujeme sa na webové aplikácie, ktoré fungujú perfektne na mobiloch ako PWA (Progressive Web Apps). Pre natívne mobilné aplikácie máme partnerské spoločnosti, s ktorými úzko spolupracujeme."
  },
  {
    question: "Aké technológie používate?",
    answer: "Používame moderné technológie ako React, Vue.js, Node.js, TypeScript a WordPress. Pre dizajn pracujeme s Figma a Adobe Creative Suite. Výber technológií vždy prispôsobujeme potrebám projektu."
  },
  {
    question: "Pomôžete s obsahom a copywritingom?",
    answer: "Áno, máme skúsených copywriterov, ktorí vám pomôžu s tvorbou kvalitného obsahu optimalizovaného pre SEO. Pomôžeme s textami, produktovými popismi a marketingovými materiálmi."
  },
  {
    question: "Aká je vaša dostupnosť pre urgentné problémy?",
    answer: "Pre kritické problémy máme technickú podporu od 9 hodín ráno do 10 hodín večer. Štandardná odozva je do 2 hodín v pracovné dni a do 24 hodín cez víkendy. Urgentné opravy riešime prioritne."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-20 text-white relative z-40">
      <div className="container">
        <h2 className="heading-section text-left mb-12">Často kladené otázky</h2>
        <div className="faq-layout grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="faq-grid lg:col-span-2">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item border-b border-gray-medium/20 last:border-b-0">
                <div
                  className={`faq-question flex justify-between items-center cursor-pointer py-4 transition-all duration-300 hover:bg-accent-teal/10 hover:pl-4 rounded-md ${openIndex === index ? 'text-accent-teal' : 'text-white'}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold font-sans normal-case">{item.question}</h3>
                  <span className={`faq-toggle text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-accent-teal' : ''}`}>+</span>
                </div>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-light pl-4 pr-8 py-2 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-contact-box p-8 flex flex-col justify-center items-center text-center sticky top-20 self-start hidden lg:flex">
            <h3 className="text-3xl font-bold font-heading mb-6">Prvá konzultácia a návrh sú zadarmo!</h3>
            <Link href="/kontakt" className="btn btn-primary">
              <span className="btn-text-container">
                <span className="btn-text btn-text-visible">Kontakt</span>
                <span className="btn-text btn-text-hidden">VIAC</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
