"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer: "Die Bearbeitungszeit hängt von der Komplexität des Projekts ab. Eine einfache Präsentationsseite kann in 1-2 Wochen fertiggestellt werden, während ein komplexer E-Shop oder eine Webanwendung 4-8 Wochen dauern kann. Nach der Erstberatung erhalten Sie einen genauen Zeitplan."
  },
  {
    question: "Wie viel kostet eine Website?",
    answer: "Die Preise reichen von 500 € für eine einfache Präsentationsseite bis zu 5000 €+ für komplexe E-Commerce-Lösungen. Der Endpreis hängt von Funktionalität, Design und Anforderungen ab. Wir erstellen nach Analyse Ihrer Bedürfnisse ein transparentes Preisangebot."
  },
  {
    question: "Bieten Sie auch Wartung und Support an?",
    answer: "Ja, wir bieten komplette Wartungs- und technische Supportdienste an. Dies umfasst Inhaltsaktualisierungen, Sicherheitspatches, Datensicherungen und technische Fehlerbehebung. Sie können aus verschiedenen Paketen nach Ihren Bedürfnissen wählen."
  },
  {
    question: "Können wir den Website-Inhalt selbst bearbeiten?",
    answer: "Natürlich! Wir erstellen Websites mit einem benutzerfreundlichen CMS (Content Management System), mit dem Sie Inhalte einfach hinzufügen und bearbeiten können, ohne technisches Wissen. Wir bieten auch Schulung und Dokumentation an."
  },
  {
    question: "Sind Ihre Websites für mobile Geräte optimiert?",
    answer: "Alle unsere Websites sind responsiv, das heißt, sie passen sich automatisch an jedes Gerät an – egal ob Handy, Tablet oder Computer. Wir nutzen einen Mobile-First-Ansatz für optimale Benutzererfahrung."
  },
  {
    question: "Helfen Sie auch beim digitalen Marketing?",
    answer: "Ja, wir bieten umfassende digitale Marketingdienste einschließlich SEO-Optimierung, Social Media Management, PPC-Kampagnen und E-Mail-Marketing. Wir helfen Ihnen nicht nur, eine großartige Website zu erstellen, sondern auch Besucher anzuziehen."
  },
  {
    question: "Wie ist der Prozess der Website-Erstellung?",
    answer: "Unser Prozess umfasst 4 Schritte: 1) Kostenlose Beratung und Bedarfsanalyse, 2) Erstellung von Wireframes und Design, 3) Programmierung und Testen, 4) Start und Schulung. Jeder Schritt beinhaltet Ihr Feedback."
  },
  {
    question: "Geben Sie Garantien für Ihre Arbeit?",
    answer: "Ja, wir geben auf alle unsere Weblösungen eine 12-monatige Garantie. Die Garantie deckt technische Fehler, Browserkompatibilität und grundlegende Funktionalität ab. Kleinere Anpassungen und Korrekturen sind während der Garantiezeit kostenlos."
  },
  {
    question: "Können Sie eine bestehende Website migrieren?",
    answer: "Natürlich! Wir sorgen für eine komplette Migration Ihrer Daten, Inhalte und SEO-Einstellungen von der ursprünglichen Seite. Der Prozess ist so gestaltet, dass er Ihren Traffic oder Ihr Suchmaschinenranking nicht beeinträchtigt."
  },
  {
    question: "Kann ich nur das Design ohne Programmierung bestellen?",
    answer: "Ja, wir bieten auch eigenständige Designdienstleistungen an. Wir erstellen komplette UI/UX-Designs für Sie in Figma zusammen mit Prototypen und grafischen Assets für die weitere Implementierung."
  },
  {
    question: "Welche Zahlungsmethoden akzeptieren Sie?",
    answer: "Wir akzeptieren Überweisungen, Kartenzahlungen und PayPal. Größere Projekte werden in Teilzahlungen aufgeteilt - normalerweise 50% zu Beginn und 50% bei Fertigstellung. Monatliche Rechnungsstellung ist bei langfristigen Projekten möglich."
  },
  {
    question: "Erstellen Sie auch mobile Anwendungen?",
    answer: "Wir spezialisieren uns auf Webanwendungen, die perfekt auf Mobilgeräten als PWAs (Progressive Web Apps) funktionieren. Für native mobile Anwendungen haben wir Partnerunternehmen, mit denen wir eng zusammenarbeiten."
  },
  {
    question: "Welche Technologien verwenden Sie?",
    answer: "Wir verwenden moderne Technologien wie React, Vue.js, Node.js, TypeScript und WordPress. Für Design arbeiten wir mit Figma und Adobe Creative Suite. Wir passen die Wahl der Technologien immer an die Projektbedürfnisse an."
  },
  {
    question: "Helfen Sie mit Inhalten und Copywriting?",
    answer: "Ja, wir haben erfahrene Texter, die Ihnen helfen, qualitativ hochwertige, SEO-optimierte Inhalte zu erstellen. Wir helfen bei Texten, Produktbeschreibungen und Marketingmaterialien."
  },
  {
    question: "Wie ist Ihre Verfügbarkeit bei dringenden Problemen?",
    answer: "Für kritische Probleme haben wir technischen Support von 9:00 bis 22:00 Uhr. Die Standardantwortzeit beträgt an Werktagen 2 Stunden und am Wochenende 24 Stunden. Wir lösen dringende Reparaturen mit Priorität."
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
        <h2 className="heading-section text-left mb-12">Häufig gestellte Fragen</h2>
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
                  className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-gray-light pl-4 pr-8 py-2 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact-box p-8 flex flex-col justify-center items-center text-center sticky top-20 self-start hidden lg:flex">
            <h3 className="text-3xl font-bold font-heading mb-6">Erste Beratung und Angebot sind kostenlos!</h3>
            <Link href="/contact" className="btn btn-primary">
              <span className="btn-text-container">
                <span className="btn-text btn-text-visible">Kontakt</span>
                <span className="btn-text btn-text-hidden">MEHR</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
