import Image from "next/image";
import Link from "next/link";
import { caseStudies, featuredCaseStudySlugs, type ServicePage } from "@/lib/seo-pages";
import { GMBWidget } from "@/components/GMBWidget";

type SeoServicePageProps = {
  page: ServicePage;
};

const serviceLinks = [
  { href: "/tvorba-web-stranok-bratislava", label: "Web stránky Bratislava" },
  { href: "/tvorba-web-stranok", label: "Tvorba web stránok" },
  { href: "/tvorba-eshopu", label: "Tvorba e-shopu" },
  { href: "/web-aplikacie", label: "Webové aplikácie" },
  { href: "/seo-optimalizacia", label: "SEO optimalizácia" },
  { href: "/tvorba-web-stranok-cena", label: "Cena web stránky" },
];

export function SeoServicePage({ page }: SeoServicePageProps) {
  const pageUrl = `https://aebdigital.sk/${page.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: {
      "@type": "LocalBusiness",
      name: "AEB Digital",
      url: "https://aebdigital.sk",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bratislava",
        addressRegion: "Bratislavský kraj",
        addressCountry: "SK",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Bratislava",
    },
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="relative z-10 text-white">
      <section className="relative min-h-[92vh] overflow-hidden pt-32 pb-20">
        <Image
          src={page.heroImage}
          alt={page.heroAlt}
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="container relative z-10">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm uppercase tracking-[0.24em] text-accent-teal">{page.eyebrow}</p>
            <h1 className="heading-large text-left mb-8">{page.heroTitle}</h1>
            <p className="max-w-3xl text-xl md:text-2xl leading-relaxed text-gray-light">{page.heroLead}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn btn-primary">Získať ponuku</Link>
              <Link href="/portfolio" className="btn btn-secondary">Pozrieť práce</Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {page.highlights.map((item) => (
              <div key={item.label} className="border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">{item.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-gray-light">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-16">
              {page.sections.map((section) => (
                <section key={section.title} className="max-w-4xl">
                  <h2 className="mb-6 text-4xl font-bold md:text-5xl">{section.title}</h2>
                  <div className="space-y-5 text-lg leading-8 text-gray-light">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <div className="mt-8 grid gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <div key={bullet} className="border border-white/10 bg-white/[0.03] px-5 py-4 text-gray-light">
                          <span className="mr-3 text-accent-teal">/</span>{bullet}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-white/10 bg-white/[0.04] p-6">
                <h2 className="mb-5 text-2xl font-bold">Služby</h2>
                <div className="space-y-3">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block border-l-2 py-2 pl-4 text-gray-light transition-colors hover:border-accent-teal hover:text-white ${
                        link.href === `/${page.slug}` ? "border-accent-teal text-white" : "border-white/15"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-accent-teal">Výstupy</p>
            <h2 className="text-4xl font-bold md:text-5xl">Čo dostanete v projekte</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {page.deliverables.map((item, index) => (
              <div key={item} className="min-h-[120px] border border-white/10 bg-black/30 p-5">
                <div className="mb-4 text-sm font-bold text-accent-teal">{String(index + 1).padStart(2, "0")}</div>
                <p className="text-gray-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-accent-teal">Prípadové štúdie</p>
              <h2 className="text-4xl font-bold md:text-5xl">Ukážky reálnych projektov</h2>
            </div>
            <Link href="/portfolio" className="btn btn-secondary">Celé portfólio</Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredCaseStudySlugs.map((slug) => {
              const study = caseStudies[slug];
              return (
                <Link key={study.slug} href={`/pripadove-studie/${study.slug}`} className="group block overflow-hidden border border-white/10 bg-white/[0.03]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={study.image} alt={study.imageAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-sm uppercase tracking-[0.18em] text-accent-teal">{study.industry}</p>
                    <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                    <p className="mt-3 text-gray-light">{study.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="container">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-accent-teal">FAQ</p>
            <h2 className="text-4xl font-bold md:text-5xl">Časté otázky</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="border border-white/10 bg-black/30 p-6">
                <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                <p className="leading-7 text-gray-light">{faq.answer}</p>
              </div>
            ))}
          </div>

          {page.showGMB && (
            <div className="mt-20">
              <GMBWidget className="max-w-4xl mx-auto" />
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="border border-white/10 bg-accent-teal/10 p-8 md:p-12">
            <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">Chcete web, ktorý bude vyzerať dobre a dávať zmysel aj pre SEO?</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-light">
              Pošlite nám stručné zadanie. Pozrieme sa na cieľ, konkurenciu, rozsah a navrhneme ďalší krok.
            </p>
            <div className="mt-8">
              <Link href="/kontakt" className="btn btn-primary">Napísať AEB Digital</Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
