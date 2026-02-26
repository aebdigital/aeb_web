import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | GDPR | AEB Digital",
  description: "Zásady ochrany osobných údajov a GDPR spoločnosti AEB Digital. Informácie o spracovaní osobných údajov, cookies a právach dotknutej osoby podľa GDPR.",
  alternates: {
    canonical: "https://aebdigital.sk/ochrana-osobnych-udajov",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BackgroundTextAnimation />

      {/* Page Header */}
      <section className="page-header py-32 bg-custom-bg text-white">
        <div className="container">
          <h1 className="page-title">Ochrana osobných údajov</h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="privacy-policy-content py-20 bg-custom-bg text-white">
        <div className="container">
          <div className="privacy-text max-w-4xl mx-auto">
            <p className="mb-4"><strong>AEB Digital s. r. o.</strong><br/>
            IČO: 57 307 709<br/>
            Konateľ: Peter Samuel Bobák<br/>
            E-mail: peter@aebdig.com<br/>
            Tel.: +421 908 507 131</p>

            <p className="mb-8">Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>

            <hr className="my-8 border-gray-medium"/>

            <h2 className="text-3xl font-bold mb-4">I. Kontaktný formulár</h2>
            <p className="mb-4">Na stránke www.aebdigital.sk prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám:</p>
            <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
              <li>Položiť otázku k našim produktom a službám</li>
              <li>Požiadať o cenovú ponuku</li>
            </ul>

            <p className="mb-2"><strong>Rozsah spracúvaných údajov:</strong></p>
            <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
              <li>Meno a priezvisko</li>
              <li>E-mailová adresa</li>
              <li>Telefónne číslo</li>
            </ul>

            <p className="mb-2"><strong>Účel spracovania:</strong><br/>
            Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>

            <p className="mb-8"><strong>Právny základ:</strong><br/>
            Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>

            <p className="mb-2"><strong>Doba uchovávania:</strong><br/>
            Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>

            <hr className="my-8 border-gray-medium"/>

            <h2 className="text-3xl font-bold mb-4">II. Súbory cookies</h2>
            <p className="mb-4">Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
            <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
              <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
              <li><strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
            </ul>

            <p className="mb-8"><strong>Správa súhlasov:</strong><br/>
            Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>

            <hr className="my-8 border-gray-medium"/>

            <h3 className="text-3xl font-bold mb-4">III. Práva dotknutej osoby</h3>
            <p className="mb-4">Podľa nariadenia GDPR máte nasledujúce práva:</p>
            <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
              <li>Prístup k osobným údajom, ktoré spracúvame</li>
              <li>Oprava nepresných alebo neúplných údajov</li>
              <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
              <li>Obmedzenie spracovania</li>
              <li>Prenosnosť údajov</li>
              <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
              <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, <a href="http://www.dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:underline">www.dataprotection.gov.sk</a>)</li>
            </ul>

            <p className="mb-8">V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na <a href="mailto:reachout@aebdig.com" className="text-accent-teal hover:underline">reachout@aebdig.com</a> alebo telefónnom čísle +421 917 422 245.</p>

            <hr className="my-8 border-gray-medium"/>

            <p className="italic text-gray-light"><em>Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.</em></p>
          </div>
        </div>
      </section>
    </>
  );
}
