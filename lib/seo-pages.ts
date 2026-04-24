export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroImage: string;
  heroAlt: string;
  highlights: Array<{
    value: string;
    label: string;
  }>;
  sections: SeoSection[];
  deliverables: string[];
  faqs: SeoFaq[];
  showGMB?: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  client: string;
  industry: string;
  image: string;
  imageAlt: string;
  services: string[];
  challenge: string[];
  solution: string[];
  results: string[];
  techStack: string[];
  testimonialSummary: string;
};

export const servicePages: Record<string, ServicePage> = {
  "tvorba-web-stranok-bratislava": {
    slug: "tvorba-web-stranok-bratislava",
    title: "Tvorba web stránok Bratislava",
    metaTitle: "Tvorba web stránok na mieru Bratislava | AEB Digital",
    description:
      "Špecializovaná tvorba web stránok na mieru v Bratislave. Od rýchlych firemných webov po komplexné Next.js aplikácie a e-shopy. Získajte #1 v lokálnom vyhľadávaní.",
    keywords: [
      "tvorba web stránok Bratislava",
      "webdesign Bratislava",
      "webdizajn Bratislava",
      "web stránka Bratislava cena",
      "tvorba webu Bratislava",
      "tvorba web stránok na mieru",
    ],
    eyebrow: "Lokálny expert pre Bratislavu",
    heroTitle: "Tvorba web stránok v Bratislave, ktoré prinášajú reálne výsledky",
    heroLead:
      "Nestačí len byť online. V Bratislave súperíte s najlepšími. Staviame weby na Next.js, ktoré sú rýchlejšie ako u konkurencie, technicky čisté pre Google a dizajnovo pripravené presvedčiť vašich zákazníkov.",
    heroImage: "/sources/web-design.webp",
    heroAlt: "Profesionálna tvorba web stránok Bratislava",
    highlights: [
      { value: "LOC", label: "miestna znalosť trhu v BA" },
      { value: "CMS", label: "Next.js & Full-stack riešenia" },
      { value: "SEO", label: "dominancia v lokálnom hľadaní" },
      { value: "5+", label: "rokov overenej praxe tímu" },
    ],
    sections: [
      {
        title: "Prečo nie sme len ďalšia agentúra v Bratislave",
        body: [
          "Trh v Bratislave je presýtený všeobecnými vizitkami, ktoré sa pomaly načítavajú a v Google sa strácajú na desiatych stranách. My k tvorbe webu pristupujeme opačne. Web nie je cieľ, ale nástroj na získavanie dopytov. Každý náš kód, každý H1 nadpis a každá schéma je navrhnutá tak, aby ste prekonali lokálnu konkurenciu.",
          "Prechádzame od jednoduchých WordPress šablón k moderným, vysoko-výkonným Next.js aplikáciám. Pre vás to znamená bleskovú rýchlosť načítania (Core Web Vitals), lepšie pozície v Google a bezpečnosť, ktorú bežné riešenia neponúkajú. Vaša firma v Bratislave si zaslúži technologický náskok.",
        ],
      },
      {
        title: "Konkrétna stratégia pre vaše podnikanie",
        body: [
          "Či hľadáte 'webdesign Bratislava' pre malú firmu alebo komplexný 'e-shop na mieru', naša stratégia je rovnaká: pochopiť dopyt. Analyzujeme, čo vaši zákazníci v Bratislave a okolí reálne hľadajú, aké majú obavy a čo ich presvedčí k akcii. Tento výskum následne premeníme na obsahovú architektúru webu.",
          "Cena web stránky v Bratislave je často otázkou: Prečo platiť viac? Rozdiel je v návratnosti. Lacný web bez SEO a stratégie sú vyhodené peniaze. My staviame weby, ktoré sú indexované správne od prvého dňa a rastú spolu s vaším biznisom.",
        ],
        bullets: [
          "analýza lokálnej konkurencie a kľúčových slov v BA",
          "technické SEO (SSR, Metadata, JSON-LD) zabudované priamo v kóde",
          "profesionálny dizajn na mieru bez zbytočných šablón",
          "jasný merací plán dopytov a konverzií",
        ],
      },
      {
        title: "Náš proces: Od živnosti po agentúrnu kvalitu",
        body: [
          "Náš tím sa formoval viac ako 5 rokov na stovkách projektov ako tím špecializovaných živnostníkov. Dnes v rámci AEB Digital spájame túto senioritu do jedného celku. Vieme, čo funguje pre bratislavské firmy, pretože sme s nimi vyrástli.",
          "S klientom sa radi stretneme osobne v Bratislave, prejdeme si zadanie a navrhneme riešenie, ktoré dáva zmysel vášmu rozpočtu. Či je to jednoduchý jednostránkový web alebo robustný portál, proces je transparentný a zameraný na výsledok.",
        ],
      },
    ],
    deliverables: [
      "Plne responzívny web postavený na Next.js alebo optimalizovanom CMS",
      "Kompletné nastavenie meta tagov, titulkov a štruktúrovaných dát",
      "Integrácia Google Business Profile a Mapy",
      "Vysoké skóre v Google Lighthouse (Performance & SEO)",
      "Základné zaškolenie do správy obsahu",
    ],
    faqs: [
      {
        question: "Aké drahé je webové riešenie v Bratislave?",
        answer:
          "Cena sa odvíja od vašich cieľov. Malý prezentačný web začína na nižších stovkách eur, kým komplexné Next.js riešenia s pokročilým SEO sú investíciou v tisícoch. Vždy sa snažíme nájsť riešenie s najlepším pomerom cena/výkon pre vašu aktuálnu fázu rastu.",
      },
      {
        question: "Prečo mi nestačí lacný WordPress za 200€?",
        answer:
          "Lacný web často trpí pomalým načítaním, bezpečnostnými rizikami a takmer nulovým SEO. V prostredí Bratislavy vás konkurencia, ktorá investovala do technickej kvality, rýchlo predbehne v organických výsledkoch vyhľadávania.",
      },
      {
        question: "Viete mi pomôcť s Google Business profilom?",
        answer:
          "Áno, nastavenie GMB a jeho integrácia s webom je kľúčová pre lokálne SEO. Pomôžeme vám ho optimalizovať tak, aby ste sa zobrazovali v prvej trojke na Google mapách.",
      },
    ],
    showGMB: true,
  },
  "tvorba-web-stranok": {
    slug: "tvorba-web-stranok",
    title: "Tvorba web stránok",
    metaTitle: "Tvorba web stránok na mieru | Firemné weby AEB Digital",
    description:
      "Tvorba moderných web stránok na mieru pre firmy: stratégia, dizajn, vývoj, SEO základ, rýchlosť, responzívne zobrazenie a technická podpora.",
    keywords: ["tvorba web stránok", "firemný web", "web na mieru", "responzívny web", "web dizajn"],
    eyebrow: "Firemné weby",
    heroTitle: "Tvorba web stránok, ktoré vysvetlia ponuku a prinesú dopyty",
    heroLead:
      "Navrhneme web od obsahu až po technické spustenie. Zameriavame sa na jasnú štruktúru, rýchle načítanie, dobrý mobilný zážitok a SEO základ, ktorý sa dá ďalej rozvíjať.",
    heroImage: "/sources/web-design.webp",
    heroAlt: "Moderný firemný web na mieru",
    highlights: [
      { value: "UX", label: "prehľadná cesta ku kontaktu" },
      { value: "SEO", label: "technický základ pre vyhľadávanie" },
      { value: "CMS", label: "správa obsahu podľa potreby" },
      { value: "API", label: "integrácie a formuláre" },
    ],
    sections: [
      {
        title: "Web ako obchodný nástroj",
        body: [
          "Kvalitná web stránka má okamžite vysvetliť, čo robíte, komu pomáhate a prečo si má zákazník vybrať práve vás. Preto pri návrhu neriešime iba grafiku, ale najmä poradie informácií, dôkazy dôvery, formuláre, mikrocopy a interné linky na služby.",
          "Firemný web môže byť jednoduchý alebo rozsiahly. Dôležité je, aby mal jasnú logiku: homepage, služby, portfólio, prípadové štúdie, o firme, kontakt a často aj blog alebo poradňu. Takýto web sa ľahšie rozširuje a lepšie podporuje SEO.",
        ],
      },
      {
        title: "Technické spracovanie",
        body: [
          "Používame moderné technológie a čistú implementáciu. Pri každom webe riešime responzívne zobrazenie, optimalizované obrázky, správne metadata, bezpečné formuláre, cookies a analytiku. Web po spustení testujeme na mobile aj desktope.",
        ],
        bullets: ["Next.js alebo WordPress podľa zadania", "optimalizované obrázky a fonty", "základné SEO a sitemap", "formuláre a meranie konverzií"],
      },
      {
        title: "Obsah a dôveryhodnosť",
        body: [
          "Texty píšeme tak, aby boli zrozumiteľné pre zákazníka a zároveň použiteľné pre Google. Do webu zapájame referencie, logá klientov, konkrétne služby, FAQ a prípadové štúdie, pretože práve tieto prvky často rozhodnú o odoslaní dopytu.",
        ],
      },
    ],
    deliverables: [
      "návrh štruktúry webu",
      "responzívny dizajn",
      "vývoj a testovanie",
      "SEO metadata a nadpisy",
      "kontaktné formuláre",
      "analytika a meranie dopytov",
      "sitemap a technické nastavenia",
      "podpora po spustení",
    ],
    faqs: [
      { question: "Robíte weby na WordPresse aj v Next.js?", answer: "Áno. Technológiu vyberáme podľa potrieb projektu, správy obsahu, rozpočtu a budúceho rastu." },
      { question: "Viete pripraviť aj texty?", answer: "Áno. Vieme pripraviť štruktúru, SEO texty, CTA prvky, FAQ aj návrh obsahu pre služby." },
      { question: "Dostanem prístup na úpravu obsahu?", answer: "Podľa typu riešenia áno. Ak potrebujete často meniť obsah, navrhneme CMS alebo jednoduchý administrátorský systém." },
    ],
  },
  "tvorba-eshopu": {
    slug: "tvorba-eshopu",
    title: "Tvorba e-shopu",
    metaTitle: "Tvorba e-shopu na mieru | E-commerce riešenia AEB Digital",
    description:
      "Tvorba e-shopu na mieru: dizajn, produkty, kategórie, platobné brány, doprava, analytika, SEO a technická podpora pre rast online predaja.",
    keywords: ["tvorba e-shopu", "e-shop na mieru", "WooCommerce", "Shopify", "ecommerce web"],
    eyebrow: "E-commerce",
    heroTitle: "Tvorba e-shopu, ktorý sa dá spravovať aj škálovať",
    heroLead:
      "Postavíme e-shop so zrozumiteľnou kategorizáciou, rýchlym nákupným procesom, platobnými bránami, dopravou, analytikou a SEO základom pre produkty aj kategórie.",
    heroImage: "/sources/Gemini_Generated_Image_lxz7dglxz7dglxz7.webp",
    heroAlt: "Tvorba e-shopu na mieru",
    highlights: [
      { value: "UX", label: "nákup bez zbytočného trenia" },
      { value: "PAY", label: "platby a doprava" },
      { value: "SEO", label: "kategórie a produkty" },
      { value: "DATA", label: "analytics a reporting" },
    ],
    sections: [
      {
        title: "E-shop nie je iba katalóg produktov",
        body: [
          "Úspešný e-shop potrebuje jasnú štruktúru kategórií, kvalitné produktové stránky, dôveryhodné informácie o doprave a platbe, rýchle vyhľadávanie a jednoduchý checkout. Pri návrhu preto riešime celý nákupný proces, nielen úvodnú grafiku.",
          "Dôležité je aj meranie. Bez analytiky neviete, ktoré produkty sa prezerajú, kde ľudia odchádzajú a ktoré kampane prinášajú objednávky. Preto pripravujeme meranie konverzií, eventy a odporúčania pre ďalšie zlepšovanie.",
        ],
      },
      {
        title: "Platforma podľa rastu",
        body: [
          "Pre menšie a stredné e-shopy môže byť výborný WooCommerce alebo Shopify. Pre špecifické požiadavky, B2B objednávanie, integrácie so skladom alebo vlastnú logiku navrhujeme riešenia na mieru. Výber platformy robíme podľa produktov, tímu a budúceho rastu.",
        ],
        bullets: ["produktové kategórie", "platobné brány", "doprava a sklad", "napojenie na fakturáciu", "SEO pre kategórie", "remarketing a meranie"],
      },
      {
        title: "SEO pre e-commerce",
        body: [
          "E-shop potrebuje optimalizované kategórie, titulky, popisy, interné odkazy, filtrovanie bez duplicitného indexovania a technicky čistú sitemap. Pomáhame pripraviť štruktúru tak, aby produkty neboli izolované, ale podporovali hlavné obchodné kategórie.",
        ],
      },
    ],
    deliverables: ["návrh kategórií", "produktové šablóny", "platobné brány", "doprava", "SEO pre kategórie", "analytics", "správa objednávok", "technická podpora"],
    faqs: [
      { question: "Koľko stojí tvorba e-shopu?", answer: "Cena závisí od počtu produktov, integrácií, dizajnu, platobných brán, dopravy a napojení na sklad alebo fakturáciu." },
      { question: "Viete napojiť platobnú bránu?", answer: "Áno. Riešime bežné platobné brány, dopravu, fakturáciu aj analytiku podľa potrieb projektu." },
      { question: "Robíte aj SEO pre produkty?", answer: "Áno. Optimalizujeme kategórie, metadata, interné linkovanie a odporúčame štruktúru obsahu pre organický rast." },
    ],
  },
  "web-aplikacie": {
    slug: "web-aplikacie",
    title: "Webové aplikácie",
    metaTitle: "Webové aplikácie na mieru | React, Node.js, API | AEB Digital",
    description:
      "Vývoj webových aplikácií na mieru: React, Node.js, databázy, API integrácie, dashboardy, rezervačné systémy a automatizácia procesov.",
    keywords: ["webové aplikácie", "vývoj aplikácií na mieru", "React aplikácia", "Node.js backend", "dashboard"],
    eyebrow: "Custom development",
    heroTitle: "Webové aplikácie pre procesy, ktoré bežný web nezvládne",
    heroLead:
      "Navrhujeme aplikácie, dashboardy, interné systémy a klientské portály. Riešime UX, databázový návrh, API, bezpečnosť, role používateľov a dlhodobú rozšíriteľnosť.",
    heroImage: "/sources/services/aplikacie.webp",
    heroAlt: "Vývoj webovej aplikácie",
    highlights: [
      { value: "React", label: "moderný frontend" },
      { value: "API", label: "integrácie a automatizácia" },
      { value: "DB", label: "databázy a dáta" },
      { value: "Auth", label: "role a prístupy" },
    ],
    sections: [
      {
        title: "Kedy potrebujete webovú aplikáciu",
        body: [
          "Ak potrebujete rezervácie, interný dashboard, klientsku zónu, výpočtový nástroj, napojenie na API alebo vlastný workflow, bežný prezentačný web nestačí. Webová aplikácia umožňuje vytvoriť presný proces podľa firmy.",
          "Pri aplikáciách je dôležitý návrh dát, rolí a používateľských ciest. Najprv definujeme, kto systém používa, aké akcie vykonáva, aké dáta sa ukladajú a ktoré procesy sa majú automatizovať.",
        ],
      },
      {
        title: "Technológie a bezpečnosť",
        body: [
          "Používame React, Next.js, Node.js, TypeScript, databázy a cloudové služby podľa zadania. Pri formulároch, prihlasovaní a API riešime validáciu, oprávnenia, logovanie chýb a bezpečné spracovanie dát.",
        ],
        bullets: ["dashboardy", "rezervačné systémy", "klientské portály", "API integrácie", "automatizácie", "reporting"],
      },
      {
        title: "Rozšíriteľnosť",
        body: [
          "Aplikáciu navrhujeme tak, aby sa dala rozširovať. Začíname jadrom, ktoré rieši najdôležitejší problém, a ďalšie moduly pridávame podľa spätnej väzby. Tak sa rozpočet využije efektívne a systém rastie spolu s firmou.",
        ],
      },
    ],
    deliverables: ["analýza procesu", "UX návrh", "frontend", "backend", "databáza", "API integrácie", "testovanie", "nasadenie"],
    faqs: [
      { question: "Je webová aplikácia drahšia než web?", answer: "Zvyčajne áno, pretože rieši vlastnú logiku, dáta, prihlásenie, integrácie a testovanie procesov." },
      { question: "Viete vytvoriť MVP?", answer: "Áno. Vieme pripraviť prvú verziu s najdôležitejšími funkciami a následne ju rozširovať." },
      { question: "Viete napojiť externé API?", answer: "Áno. Riešime napojenia na platby, CRM, účtovníctvo, sklad, mapy, marketingové nástroje a ďalšie služby." },
    ],
  },
  "seo-optimalizacia": {
    slug: "seo-optimalizacia",
    title: "SEO optimalizácia",
    metaTitle: "SEO optimalizácia webu | Technické SEO a obsah | AEB Digital",
    description:
      "SEO optimalizácia webu: technický audit, keyword research, obsahová stratégia, landing pages, interné linkovanie, Core Web Vitals a meranie výsledkov.",
    keywords: ["SEO optimalizácia", "technické SEO", "SEO audit", "keyword research", "SEO Bratislava"],
    eyebrow: "Organický rast",
    heroTitle: "SEO optimalizácia, ktorá spája techniku, obsah a dôveru",
    heroLead:
      "Pomôžeme webu získať lepšiu štruktúru, rýchlosť, obsah a signály dôvery. SEO berieme ako dlhodobý systém, nie ako jednorazové doplnenie kľúčových slov.",
    heroImage: "/sources/social-media.webp",
    heroAlt: "SEO optimalizácia webu",
    highlights: [
      { value: "Audit", label: "technika a indexácia" },
      { value: "KW", label: "keyword research" },
      { value: "Content", label: "landing pages a blog" },
      { value: "GSC", label: "Search Console dáta" },
    ],
    sections: [
      {
        title: "SEO začína štruktúrou",
        body: [
          "Ak má web iba všeobecnú homepage a pár sekcií, Google má málo priestoru pochopiť konkrétne služby. Preto navrhujeme service pages, lokálne landing pages, FAQ, prípadové štúdie a interné linkovanie. Každá stránka má mať jasný zámer a vlastnú tému.",
          "Pri audite kontrolujeme metadata, nadpisy, rýchlosť, sitemap, robots, kanonické URL, indexáciu, interné odkazy, duplicity, obrázky a technické chyby. Potom pripravíme priority podľa dopadu.",
        ],
      },
      {
        title: "Obsah podľa reálneho vyhľadávania",
        body: [
          "Keyword research ukáže, ako ľudia službu hľadajú a aký obsah očakávajú. Niektoré frázy potrebujú obchodnú stránku, iné poradenský článok, ďalšie FAQ alebo prípadovú štúdiu. Cieľom je pokryť tému prirodzene a presvedčivo.",
        ],
        bullets: ["technický audit", "keyword research", "content plán", "landing pages", "interné prelinkovanie", "meranie výsledkov"],
      },
      {
        title: "Meranie a iterácia",
        body: [
          "SEO vyhodnocujeme cez Search Console, Analytics a reálne dopyty. Sledujeme impresie, CTR, pozície, indexáciu a konverzie. Na základe dát upravujeme title, meta description, obsah a interné linkovanie.",
        ],
      },
    ],
    deliverables: ["SEO audit", "keyword research", "prioritný plán", "metadata", "obsahové odporúčania", "technické opravy", "sitemap", "reporting"],
    faqs: [
      { question: "Kedy uvidím výsledky SEO?", answer: "Menšie technické zlepšenia môžu pomôcť rýchlo, ale stabilný organický rast zvyčajne potrebuje niekoľko mesiacov práce." },
      { question: "Robíte iba audit alebo aj implementáciu?", answer: "Robíme audit aj implementáciu. Vieme upraviť techniku, obsah, interné odkazy a pripraviť nové landing pages." },
      { question: "Je SEO lepšie než reklama?", answer: "SEO a reklama sa dopĺňajú. Reklama prináša rýchle dáta, SEO dlhodobú návštevnosť a dôveryhodnosť." },
    ],
  },
  "tvorba-web-stranok-cena": {
    slug: "tvorba-web-stranok-cena",
    title: "Tvorba web stránok cena",
    metaTitle: "Tvorba web stránok cena | Koľko stojí web na mieru",
    description:
      "Prehľad faktorov, ktoré ovplyvňujú cenu tvorby web stránky: rozsah, dizajn, obsah, SEO, CMS, integrácie, e-shop funkcie a údržba.",
    keywords: ["tvorba web stránok cena", "cena web stránky", "koľko stojí web", "web stránka cenník"],
    eyebrow: "Cena a rozsah",
    heroTitle: "Koľko stojí tvorba web stránky a čo cenu najviac ovplyvňuje",
    heroLead:
      "Cena webu závisí od cieľa, rozsahu, obsahu, dizajnu, technológie a integrácií. Namiesto univerzálneho balíka vysvetľujeme, čo do rozpočtu vstupuje a kde sa oplatí investovať.",
    heroImage: "/sources/email-market.webp",
    heroAlt: "Cena tvorby web stránky",
    highlights: [
      { value: "Scope", label: "počet strán a funkcií" },
      { value: "Design", label: "šablóna alebo návrh na mieru" },
      { value: "SEO", label: "obsah a landing pages" },
      { value: "Care", label: "údržba po spustení" },
    ],
    sections: [
      {
        title: "Prečo neexistuje jedna cena pre každý web",
        body: [
          "Jednoduchá prezentačná stránka má iný rozsah než web s blogom, prípadovými štúdiami, viacerými jazykmi, CMS, formulármi a SEO landing pages. Cena sa tvorí podľa práce, ktorú musí web urobiť pre firmu.",
          "Najlacnejšie riešenie môže byť vhodné pre rýchle overenie nápadu, ale pri firemnom webe často chýba stratégia, obsah, rýchlosť, meranie a možnosť rastu. Kvalitný web má byť investícia do dôveryhodnosti a dopytov.",
        ],
      },
      {
        title: "Čo vstupuje do ceny",
        body: [
          "Do ceny vstupuje príprava štruktúry, dizajn, vývoj, počet podstránok, texty, obrázky, SEO, formuláre, cookies, analytika, CMS, jazykové verzie, integrácie, testovanie a technická podpora. Pri e-shope pribúdajú produkty, kategórie, platby, doprava a objednávkový proces.",
        ],
        bullets: ["rozsah stránok", "náročnosť dizajnu", "CMS a administrácia", "SEO obsah", "integrácie", "údržba a podpora"],
      },
      {
        title: "Ako naceniť web rozumne",
        body: [
          "Najprv definujeme cieľ a minimum, ktoré má web splniť pri spustení. Potom oddelíme nutné veci od vecí, ktoré sa dajú doplniť neskôr. Tak vznikne rozpočet, ktorý rieši obchodnú prioritu a zároveň necháva priestor na rast.",
        ],
      },
    ],
    deliverables: ["rozsah projektu", "odporúčaná technológia", "obsahová mapa", "orientačný harmonogram", "SEO základ", "návrh údržby", "prioritizácia funkcií", "cenová ponuka"],
    faqs: [
      { question: "Dá sa začať menším webom?", answer: "Áno. Často odporúčame spustiť silný základ a ďalšie podstránky, blog alebo funkcie dopĺňať podľa dát." },
      { question: "Čo je najdrahšia časť webu?", answer: "Zvyčajne vlastný dizajn, obsahová stratégia, špecifické funkcie, integrácie a väčší počet SEO stránok." },
      { question: "Je cena jednorazová?", answer: "Vývoj je jednorazový, ale odporúčame počítať aj s hostingom, údržbou, aktualizáciami a priebežným SEO obsahom." },
    ],
  },
};

export const caseStudies: Record<string, CaseStudy> = {
  "kovo-sklo": {
    slug: "kovo-sklo",
    title: "Kovo Sklo",
    metaTitle: "Prípadová štúdia Kovo Sklo | Webová prezentácia AEB Digital",
    description:
      "Prípadová štúdia webovej prezentácie pre Kovo Sklo: jasnejšia štruktúra služieb, profesionálny vizuál, rýchlejšia orientácia a technický základ pre SEO.",
    client: "Kovo Sklo",
    industry: "remeselné a technické služby",
    image: "/sources/aeb-portfolio/kovo-sklo.sk.webp",
    imageAlt: "Webová prezentácia Kovo Sklo",
    services: ["tvorba web stránky", "responzívny dizajn", "SEO základ", "portfólio prác"],
    challenge: [
      "Klient potreboval web, ktorý rýchlo vysvetlí rozsah služieb a zároveň pôsobí dôveryhodne pri porovnávaní dodávateľov.",
      "Dôležitá bola prezentácia realizácií, jednoduchý kontakt a štruktúra pripravená na lokálne vyhľadávanie.",
    ],
    solution: [
      "Navrhli sme prehľadnú štruktúru s dôrazom na služby, vizuálne ukážky a kontaktné prvky.",
      "Obrázky sme zapojili ako dôkaz kvality práce, nie iba ako dekoráciu. Technický základ sme pripravili s metadata, responzívnym zobrazením a čistým interným prelinkovaním.",
    ],
    results: [
      "návštevník rýchlejšie pochopí rozsah služieb",
      "web pôsobí profesionálnejšie pri porovnaní konkurencie",
      "pripravený základ pre ďalšie SEO stránky a referencie",
    ],
    techStack: ["Next.js", "responzívny layout", "optimalizované obrázky", "SEO metadata"],
    testimonialSummary:
      "Spätná väzba z projektu bola zameraná hlavne na praktickosť: jednoduchšia prezentácia prác, jasnejší kontakt a profesionálnejší dojem pre nových zákazníkov.",
  },
  lerent: {
    slug: "lerent",
    title: "LeRent",
    metaTitle: "Prípadová štúdia LeRent | Web pre službu prenájmu",
    description:
      "Prípadová štúdia webu LeRent: prehľad služieb, konverzná štruktúra, responzívne zobrazenie a dôraz na rýchle odoslanie dopytu.",
    client: "LeRent",
    industry: "prenájom a služby",
    image: "/sources/aeb-portfolio/lerent.sk.webp",
    imageAlt: "Webová prezentácia LeRent",
    services: ["tvorba web stránky", "UX štruktúra", "kontaktné CTA", "technické SEO"],
    challenge: [
      "Pri službách prenájmu je dôležité, aby zákazník rýchlo našiel ponuku, podmienky a kontakt.",
      "Web musel byť prehľadný na mobile, pretože veľká časť dopytov vzniká priamo pri porovnávaní možností.",
    ],
    solution: [
      "Pripravili sme stránku so zrozumiteľným tokom informácií od ponuky cez dôvody výberu až po kontakt.",
      "V návrhu sme pracovali s jasnými CTA prvkami, krátkymi textami, vizuálnymi blokmi a responzívnym spracovaním.",
    ],
    results: [
      "jednoduchšia cesta ku kontaktu",
      "lepšia čitateľnosť na mobile",
      "štruktúra pripravená na rozšírenie o ďalšie služby alebo lokality",
    ],
    techStack: ["Next.js", "kontaktné formuláre", "responzívny dizajn", "analytics-ready štruktúra"],
    testimonialSummary:
      "Projekt ukázal, že pri službách s rýchlym rozhodovaním je najdôležitejšia jednoduchosť: jasná ponuka, rýchly kontakt a mobilné zobrazenie bez zbytočného hľadania.",
  },
  provel: {
    slug: "provel",
    title: "Provel",
    metaTitle: "Prípadová štúdia Provel | B2B webová prezentácia",
    description:
      "Prípadová štúdia Provel: B2B webová prezentácia s dôrazom na služby, dôveryhodnosť, technický základ a jednoduchý kontakt.",
    client: "Provel",
    industry: "B2B a technické služby",
    image: "/sources/aeb-portfolio/provel.sk.webp",
    imageAlt: "Webová prezentácia Provel",
    services: ["B2B web", "štruktúra služieb", "SEO základ", "responzívny dizajn"],
    challenge: [
      "B2B web potrebuje pôsobiť spoľahlivo, vysvetliť služby bez zbytočného marketingového šumu a uľahčiť prvý kontakt.",
      "Zároveň musí byť pripravený na ďalší obsah: nové služby, referencie, články alebo prípadové štúdie.",
    ],
    solution: [
      "Vytvorili sme prehľadnú prezentáciu s dôrazom na službu, dôveru a kontaktné body.",
      "Použili sme čistú štruktúru, technické metadata a vizuál, ktorý podporuje profesionálny charakter značky.",
    ],
    results: [
      "prehľadnejšia komunikácia služieb",
      "silnejší profesionálny dojem",
      "web pripravený na ďalšie SEO rozšírenie",
    ],
    techStack: ["responzívny layout", "SEO metadata", "optimalizované obrázky", "škálovateľná štruktúra"],
    testimonialSummary:
      "Najväčšou hodnotou bola jasnosť: web lepšie vysvetľuje ponuku a poskytuje seriózny prvý dojem pre obchodné rokovania.",
  },
};

export const featuredCaseStudySlugs = ["kovo-sklo", "lerent", "provel"] as const;
