import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung | DSGVO | AEB Digital",
    description: "Datenschutzerklärung und DSGVO von AEB Digital. Informationen über die Verarbeitung personenbezogener Daten, Cookies und Rechte der betroffenen Personen gemäß DSGVO.",
    alternates: {
        canonical: "https://aebdigital.com/de/privacy-policy",
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
                    <h1 className="page-title">Datenschutzerklärung</h1>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="privacy-policy-content py-20 bg-custom-bg text-white">
                <div className="container">
                    <div className="privacy-text max-w-4xl mx-auto">
                        <p className="mb-4"><strong>AEB Digital s. r. o.</strong><br />
                            ID: 57 307 709<br />
                            CEO: Peter Samuel Bobák<br />
                            E-Mail: peter@aebdig.com<br />
                            Telefon: +421 908 507 131</p>

                        <p className="mb-8">Diese Datenschutzerklärung (im Folgenden „Erklärung“) beschreibt, welche personenbezogenen Daten wir im Zusammenhang mit der Nutzung unserer Website und Kontaktformulare verarbeiten.</p>

                        <hr className="my-8 border-gray-medium" />

                        <h2 className="text-3xl font-bold mb-4">I. Kontaktformular</h2>
                        <p className="mb-4">Auf der Website www.aebdigital.at betreiben wir ein Kontaktformular auf zwei separaten Seiten, dessen Zweck es ist, Ihnen Folgendes zu ermöglichen:</p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
                            <li>Eine Frage zu unseren Produkten und Dienstleistungen stellen</li>
                            <li>Ein Preisangebot anfordern</li>
                        </ul>

                        <p className="mb-2"><strong>Umfang der verarbeiteten Daten:</strong></p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
                            <li>Vor- und Nachname</li>
                            <li>E-Mail-Adresse</li>
                            <li>Telefonnummer</li>
                        </ul>

                        <p className="mb-2"><strong>Zweck der Verarbeitung:</strong><br />
                            Wir verarbeiten die oben genannten Daten, um Sie zu kontaktieren und auf Ihre Anfrage zu antworten.</p>

                        <p className="mb-8"><strong>Rechtsgrundlage:</strong><br />
                            Artikel 6 Abs. 1 lit. b DSGVO – Erfüllung von Maßnahmen vor Abschluss eines Vertrages auf Anfrage der betroffenen Person.</p>

                        <p className="mb-2"><strong>Aufbewahrungsfrist:</strong><br />
                            Wir bewahren personenbezogene Daten für maximal 10 Jahre nach Beantwortung Ihrer Anfrage auf, sofern kein weiteres Vertragsverhältnis zustande kommt.</p>

                        <hr className="my-8 border-gray-medium" />

                        <h2 className="text-3xl font-bold mb-4">II. Cookies</h2>
                        <p className="mb-4">Auf unserer Website verwenden wir Cookies ausschließlich zu folgenden Zwecken:</p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
                            <li><strong>Erforderliche Cookies</strong> – gewährleisten die Grundfunktionen der Website (z.B. Sitzungsspeicherung, Browsereinstellungen).</li>
                            <li><strong>Statistische (analytische) Cookies</strong> – helfen uns zu verstehen, wie Besucher die Website nutzen (wir setzen sie nur mit Zustimmung des Nutzers ein).</li>
                        </ul>

                        <p className="mb-8"><strong>Verwaltung der Zustimmung:</strong><br />
                            Der Nutzer kann die Zustimmung zur Verwendung statistischer Cookies jederzeit über die Cookie-Banner-Einstellungen oder direkt im Browser widerrufen.</p>

                        <hr className="my-8 border-gray-medium" />

                        <h3 className="text-3xl font-bold mb-4">III. Rechte der betroffenen Person</h3>
                        <p className="mb-4">Gemäß der DSGVO-Verordnung haben Sie folgende Rechte:</p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
                            <li>Zugang zu personenbezogenen Daten, die wir verarbeiten</li>
                            <li>Berichtigung ungenauer oder unvollständiger Daten</li>
                            <li>Löschung („Recht auf Vergessenwerden“), wenn keine Rechtsgrundlage für die Verarbeitung mehr besteht</li>
                            <li>Einschränkung der Verarbeitung</li>
                            <li>Datenübertragbarkeit</li>
                            <li>Widerruf der Zustimmung – wird am Tag des Widerrufs wirksam</li>
                            <li>Einreichung einer Beschwerde beim Amt für den Schutz personenbezogener Daten der Slowakischen Republik (Hraničná 12, 820 07 Bratislava, <a href="http://www.dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:underline">www.dataprotection.gov.sk</a>)</li>
                        </ul>

                        <p className="mb-8">Wenn Sie Fragen haben oder Ihre Rechte ausüben möchten, können Sie uns unter <a href="mailto:reachout@aebdig.com" className="text-accent-teal hover:underline">reachout@aebdig.com</a> oder telefonisch unter +421 917 422 245 kontaktieren.</p>

                        <hr className="my-8 border-gray-medium" />

                        <p className="italic text-gray-light"><em>Diese Erklärung tritt am 25. April 2025 in Kraft.</em></p>
                    </div>
                </div>
            </section>
        </>
    );
}
