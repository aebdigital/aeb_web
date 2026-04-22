import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/seo-pages";

type CaseStudyPageProps = {
  study: CaseStudy;
};

export function CaseStudyPage({ study }: CaseStudyPageProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.description,
    creator: {
      "@type": "Organization",
      name: "AEB Digital",
      url: "https://aebdigital.sk",
    },
    about: study.services,
    image: `https://aebdigital.sk${study.image}`,
    url: `https://aebdigital.sk/pripadove-studie/${study.slug}`,
  };

  return (
    <main className="relative z-10 text-white">
      <section className="pt-32 pb-16">
        <div className="container">
          <Link href="/portfolio" className="mb-8 inline-block text-gray-light transition-colors hover:text-white">
            Späť na portfólio
          </Link>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.24em] text-accent-teal">Prípadová štúdia</p>
              <h1 className="heading-large text-left mb-6">{study.title}</h1>
              <p className="max-w-3xl text-xl leading-relaxed text-gray-light">{study.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/10 bg-white/[0.04] p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-accent-teal">Klient</div>
                <div className="mt-2 text-xl font-bold">{study.client}</div>
              </div>
              <div className="border border-white/10 bg-white/[0.04] p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-accent-teal">Segment</div>
                <div className="mt-2 text-xl font-bold">{study.industry}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-white/[0.03]">
            <Image src={study.image} alt={study.imageAlt} fill priority className="object-cover" sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/[0.03]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-3">
            <article className="border border-white/10 bg-black/30 p-6">
              <h2 className="mb-5 text-3xl font-bold">Výzva</h2>
              <div className="space-y-4 leading-7 text-gray-light">
                {study.challenge.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="border border-white/10 bg-black/30 p-6">
              <h2 className="mb-5 text-3xl font-bold">Riešenie</h2>
              <div className="space-y-4 leading-7 text-gray-light">
                {study.solution.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article className="border border-white/10 bg-black/30 p-6">
              <h2 className="mb-5 text-3xl font-bold">Výsledok</h2>
              <ul className="space-y-3 text-gray-light">
                {study.results.map((result) => (
                  <li key={result} className="flex gap-3">
                    <span className="text-accent-teal">/</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-accent-teal">Spätná väzba</p>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Čo bolo pre projekt dôležité</h2>
              <p className="max-w-4xl text-lg leading-8 text-gray-light">{study.testimonialSummary}</p>
            </div>
            <aside className="border border-white/10 bg-white/[0.04] p-6">
              <h3 className="mb-5 text-2xl font-bold">Technológie a výstupy</h3>
              <div className="flex flex-wrap gap-3">
                {study.techStack.map((item) => (
                  <span key={item} className="border border-white/10 bg-black/30 px-4 py-2 text-gray-light">
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="mt-8 mb-5 text-2xl font-bold">Služby</h3>
              <ul className="space-y-3 text-gray-light">
                {study.services.map((service) => (
                  <li key={service}>
                    <span className="mr-3 text-accent-teal">/</span>{service}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="border border-white/10 bg-accent-teal/10 p-8 md:p-12">
            <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">Chcete podobný projekt?</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-light">
              Napíšte nám, čo má váš web vyriešiť. Navrhneme štruktúru, technológiu a postup.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn btn-primary">Začať projekt</Link>
              <Link href="/tvorba-web-stranok-bratislava" className="btn btn-secondary">Weby v Bratislave</Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </main>
  );
}
