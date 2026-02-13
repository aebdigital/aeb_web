import Image from 'next/image';

export interface BlogPostData {
  slug: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
    ogImage: string;
    ogImageAlt: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    category: string;
  };
  content: string; // HTML content
  recommendations?: { slug: string; title: string; imageSrc: string; imageAlt: string; date: string; author: string; }[];
}

const allBlogPosts: BlogPostData[] = [
  {
    slug: "ecommerce-trendy-2025",
    metadata: {
      title: "Trendy v e-commerce pre rok 2025 | AEB Digital Blog",
      description: "Objavte kľúčové e-commerce trendy 2025: mobile commerce, AI personalizácia, social commerce, udržateľnosť, AR/VR shopping a omnichannel stratégie.",
      keywords: "e-commerce trendy 2025, online obchod, mobile commerce, AI personalizácia, social commerce, udržateľnosť, AR shopping, omnichannel",
      canonicalUrl: "https://aebdigital.sk/blog/ecommerce-trendy-2025",
      ogImage: "/sources/techstack/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u-removebg-preview-e1750440978862.webp",
      ogImageAlt: "Trendy v e-commerce pre rok 2025",
      author: "AEB Digital",
      datePublished: "8. január 2025",
      category: "E-commerce",
    },
    content: `
      <a href="/blog" class="back-to-blog" style="display: inline-block; margin-bottom: 2rem; color: var(--accent-teal); text-decoration: none; font-weight: 600;">
          &larr; Späť na blog
      </a>

      <p>E-commerce sektor zažíva najrýchlejší rast v histórii. Pandémia COVID-19 urýchlila digitálnu transformáciu o 5-10 rokov a spotrebitelia si vytvorili nové nákupné zvyklosti. Rok 2025 prináša revolúciu v spôsobe, ako nakupujeme, predávame a interagujeme v digitálnom prostredí.</p>

      <div class="stat-box" style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 1rem; margin: 2rem 0; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
          <span class="stat-number" style="display: block; font-size: 3rem; font-weight: 800; color: var(--accent-teal); margin-bottom: 0.5rem;">$6.2T</span>
          <p style="margin: 0; color: #a0aec0;">Globálny e-commerce trh dosiahne v roku 2025 hodnotu <strong>6.2 biliónov dolárov</strong>, čo predstavuje 23% celkového retailu.</p>
      </div>

      <p>V tomto komplexnom sprievodcovi sa dozviete o kľúčových trendoch, ktoré budú definovať budúcnosť online obchodu, a praktické tipy, ako ich implementovať do vašej e-commerce stratégie.</p>

      <div class="trend-card" style="background: rgba(255,255,255,0.02); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid var(--accent-teal);">
          <h3 style="color: white; font-size: 1.5rem; margin-bottom: 1rem;">1. Mobile Commerce (M-Commerce) Revolution</h3>
          <p>Mobile commerce už nie je len trend - je to nová realita. V roku 2025 sa očakáva, že mobile nákupy budú tvoriť viac ako 54% všetkých e-commerce transakcií.</p>
          
          <h4 style="color: white; margin-top: 1.5rem; margin-bottom: 0.5rem;">Kľúčové faktory m-commerce úspechu:</h4>
          <ul style="list-style-type: disc; padding-left: 1.5rem; color: #a0aec0;">
              <li><strong>Progressive Web Apps (PWA):</strong> App-like skúsenosť bez nutnosti sťahovania</li>
              <li><strong>One-click purchasing:</strong> Minimalizácia krokov v checkout procese</li>
              <li><strong>Mobile payment integration:</strong> Apple Pay, Google Pay, PayPal</li>
              <li><strong>Voice commerce:</strong> Nákupy cez hlasové asistenty</li>
              <li><strong>Visual search:</strong> Vyhľadávanie produktov pomocou kamery</li>
          </ul>

          <p style="margin-top: 1rem;"><strong>Implementácia:</strong> Prioritizujte mobile-first dizajn, optimalizujte loading speed a implementujte touch-friendly navigáciu s veľkými tlačidlami.</p>
      </div>

      <div class="trend-card" style="background: rgba(255,255,255,0.02); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid var(--accent-teal);">
          <h3 style="color: white; font-size: 1.5rem; margin-bottom: 1rem;">2. AI-Powered Personalizácia</h3>
          <p>Umelá inteligencia transformuje spôsob, ako e-commerce stránky interagujú so zákazníkmi. Personalizácia sa stáva kľúčovým diferenciátorom.</p>
          
          <h4 style="color: white; margin-top: 1.5rem; margin-bottom: 0.5rem;">AI aplikácie v e-commerce:</h4>
          <ul style="list-style-type: disc; padding-left: 1.5rem; color: #a0aec0;">
              <li><strong>Predictive analytics:</strong> Predpovedanie nákupného správania</li>
              <li><strong>Dynamic pricing:</strong> Automatické prispôsobovanie cien</li>
              <li><strong>Chatbots a virtual assistants:</strong> 24/7 zákaznícky servis</li>
              <li><strong>Product recommendations:</strong> AI-driven odporúčania produktov</li>
              <li><strong>Inventory management:</strong> Inteligentná správa zásob</li>
              <li><strong>Fraud detection:</strong> Automatická detekcia podvodov</li>
          </ul>

          <div class="stat-box" style="background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 0.5rem; margin-top: 1.5rem; text-align: center;">
              <span class="stat-number" style="display: block; font-size: 2.5rem; font-weight: 800; color: var(--accent-teal);">35%</span>
              <p style="margin: 0; color: #a0aec0;">Amazonnové príjmy pochádzajú z AI-powered product recommendations</p>
          </div>
      </div>

      <div class="trend-card" style="background: rgba(255,255,255,0.02); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid var(--accent-teal);">
          <h3 style="color: white; font-size: 1.5rem; margin-bottom: 1rem;">3. Social Commerce Boom</h3>
          <p>Sociálne médiá sa transformujú z marketingových kanálov na predajné platformy. Social commerce kombinuje social media s e-commerce funkcionality.</p>
          
          <h4 style="color: white; margin-top: 1.5rem; margin-bottom: 0.5rem;">Platformy a funkcie:</h4>
          <ul style="list-style-type: disc; padding-left: 1.5rem; color: #a0aec0;">
              <li><strong>Instagram Shopping:</strong> Product tags a Shopping ads</li>
              <li><strong>Facebook Shops:</strong> Customizable online stores</li>
              <li><strong>TikTok Shopping:</strong> In-app purchasing cez video obsah</li>
              <li><strong>Pinterest Shopping:</strong> Product Rich Pins a Try-on features</li>
              <li><strong>YouTube Shopping:</strong> Product shelves v videách</li>
          </ul>
      </div>

      <div class="trend-card" style="background: rgba(255,255,255,0.02); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid var(--accent-teal);">
          <h3 style="color: white; font-size: 1.5rem; margin-bottom: 1rem;">4. Sustainable E-commerce</h3>
          <p>Udržateľnosť sa stáva kľúčovým faktorom nákupných rozhodnutí. Gen Z a Millennials sú ochotní platiť viac za environmentálne zodpovedné produkty.</p>
          
          <h4 style="color: white; margin-top: 1.5rem; margin-bottom: 0.5rem;">Green e-commerce iniciatívy:</h4>
          <ul style="list-style-type: disc; padding-left: 1.5rem; color: #a0aec0;">
              <li><strong>Carbon-neutral shipping:</strong> Kompenzácia carbon footprint</li>
              <li><strong>Sustainable packaging:</strong> Biodegradovateľné a recyclovateľné obaly</li>
              <li><strong>Circular economy:</strong> Refurbished a second-hand produkty</li>
              <li><strong>Local sourcing:</strong> Podpora lokálnych dodávateľov</li>
          </ul>
      </div>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">Záver: Budúcnosť je teraz</h2>
      <p>E-commerce trendy roku 2025 nie sú len technologické novinky - sú odrazom meniacich sa spotrebiteľských očakávaní a správania. Úspešné e-commerce business budú tie, ktoré dokážu rýchlo adaptovať nové technológie a zamerať sa na vytvorenie exceptional customer experience.</p>

      <p><strong>Chcete byť súčasťou e-commerce revolúcie?</strong> Náš tím v AEB Digital pomáha brands adaptovať sa na nové trendy a vybudovať future-ready e-commerce platforms. <a href="/kontakt" style="color: var(--accent-teal); text-decoration: underline;">Kontaktujte nás</a> pre konzultáciu o vašej e-commerce stratégii.</p>
    `
  },
  {
    slug: "javascript-techniky-2025",
    metadata: {
      title: "Moderné JavaScript techniky pre vývojárov v roku 2025 | AEB Digital Blog",
      description: "Objavte najnovšie JavaScript techniky a best practices pre rok 2025. ES2024 features, async/await patterns, TypeScript, performance optimalizácia a moderné frameworky.",
      keywords: "JavaScript 2025, ES2024, async await, TypeScript, JavaScript performance, modern JavaScript, web development, frontend techniky, JavaScript best practices",
      canonicalUrl: "https://aebdigital.sk/blog/javascript-techniky-2025",
      ogImage: "/sources/techstack/JavaScript-Logo-scaled-e1750439290173.webp",
      ogImageAlt: "Moderné JavaScript techniky pre vývojárov v roku 2025",
      author: "AEB Digital",
      datePublished: "5. január 2025",
      category: "Technológie",
    },
    content: `
      <a href="/blog" class="back-to-blog" style="display: inline-block; margin-bottom: 2rem; color: var(--accent-teal); text-decoration: none; font-weight: 600;">
          &larr; Späť na blog
      </a>

      <p class="lead" style="font-size: 1.25rem; font-weight: 500; margin-bottom: 2rem;">JavaScript pokračuje vo svojej evolúcii a rok 2025 prináša nové možnosti, ktoré menia spôsob, akým vyvíjame webové aplikácie. Od nových ES2024 funkcionalít až po pokročilé asynchronné patterny - pozrite si najvýznamnejšie trendy a techniky.</p>
      
      <p>Moderný JavaScript development si vyžaduje neustále vzdelávanie a adaptáciu na nové technológie. V tomto článku si prejdeme najdôležitejšie techniky, ktoré by mal poznať každý JavaScript vývojár v roku 2025.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">1. ES2024 Nové funkcionality</h2>
      
      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">Array.fromAsync()</h3>
      <p>Nová metóda, ktorá umožňuje vytvorenie poľa z asynchronného iterátora:</p>
      <pre style="background: #1a1a1a; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.5rem 0; border: 1px solid #333;"><code style="color: #e2e8f0; font-family: monospace;">const asyncIterable = {
async *[Symbol.asyncIterator]() {
  for (let i = 0; i < 3; i++) {
    yield Promise.resolve(i);
  }
}
};

(async () => {
const array = await Array.fromAsync(asyncIterable);
console.log(array); // [0, 1, 2]
})();</code></pre>
      
      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">Object.groupBy() a Map.groupBy()</h3>
      <p>Efektívne grupovanie objektov:</p>
      <pre style="background: #1a1a1a; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.5rem 0; border: 1px solid #333;"><code style="color: #e2e8f0; font-family: monospace;">const products = [
{ category: 'electronics', name: 'laptop' },
{ category: 'books', name: 'javascript guide' },
{ category: 'electronics', name: 'smartphone' }
];

const grouped = Object.groupBy(products, item => item.category);
// { electronics: [...], books: [...] }</code></pre>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">2. Pokročilé asynchronné patterny</h2>
      
      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">Top-level await</h3>
      <p>Používanie await na najvyššej úrovni modulov:</p>
      <pre style="background: #1a1a1a; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.5rem 0; border: 1px solid #333;"><code style="color: #e2e8f0; font-family: monospace;">// config.js
const response = await fetch('/api/config');
export const config = await response.json();

// main.js
import { config } from './config.js';
console.log(config); // Už pripravený</code></pre>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">3. Performance optimalizácia</h2>
      
      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">Web Workers pre ťažké operácie</h3>
      <p>Využitie Web Workers pre výpočtovo náročné úlohy:</p>
      <pre style="background: #1a1a1a; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.5rem 0; border: 1px solid #333;"><code style="color: #e2e8f0; font-family: monospace;">// worker.js
self.onmessage = function(e) {
const { numbers } = e.data;
const result = numbers.reduce((sum, num) => sum + num, 0);
self.postMessage(result);
};

// main.js
const worker = new Worker('worker.js');
worker.postMessage({ numbers: [1, 2, 3, 4, 5] });
worker.onmessage = (e) => console.log('Result:', e.data);</code></pre>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">4. TypeScript integrácia</h2>
      <p>TypeScript sa stal štandardom. V roku 2025 je jeho znalosť nevyhnutná.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">Záver</h2>
      
      <p>JavaScript ekosystém sa neustále vyvíja a rok 2025 prináša mnoho zaujímavých možností. Kľúčom k úspechu je neustále vzdelávanie a adaptácia.</p>
      
      <div class="tip-box" style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #ecc94b;">
          <h3 style="color: #ecc94b; margin-top: 0; margin-bottom: 1rem;">💡 Tip od expertov</h3>
          <p style="margin: 0;">Nezačínajte všetko naraz. Vyberte si 2-3 techniky, ktoré sú pre váš projekt najrelevantnejšie, a postupne ich implementujte.</p>
      </div>

      <p><strong>Potrebujete pomoc s modernými JavaScript projektmi?</strong> Náš tím expertov vám pomôže. <a href="/kontakt" style="color: var(--accent-teal); text-decoration: underline;">Kontaktujte nás</a>.</p>
    `
  },
  {
    slug: "react-trendy-2025",
    metadata: {
      title: "Top 10 React trendov pre rok 2025 | AEB Digital Blog",
      description: "Objavte najvýznamnejšie React trendy pre rok 2025. Server Components, Concurrent Rendering, React 19 a ďalšie novinky, ktoré zmenia vývoj webových aplikácií.",
      keywords: "React 2025, React trendy, Server Components, React 19, Concurrent Rendering, Next.js 15, React hooks, frontend development",
      canonicalUrl: "https://aebdigital.sk/blog/react-trendy-2025",
      ogImage: "/sources/techstack/React-icon.svg.webp",
      ogImageAlt: "Top 10 React trendov pre rok 2025",
      author: "AEB Digital",
      datePublished: "15. január 2025",
      category: "Technológie",
    },
    content: `
      <a href="/blog" class="back-to-blog" style="display: inline-block; margin-bottom: 2rem; color: var(--accent-teal); text-decoration: none; font-weight: 600;">
          &larr; Späť na blog
      </a>

      <p>React ekosystém sa neustále vyvíja a rok 2025 prináša množstvo vzrušujúcich noviniek. Ako vývojári, je dôležité zostať v obraze s najnovšími trendmi, ktoré môžu výrazne ovplyvniť spôsob, akým budujeme moderné webové aplikácie.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">1. React Server Components (RSC)</h2>
      <p>Server Components predstavujú revolučný prístup k renderovaniu React komponentov. Umožňujú spúšťať komponenty na serveri, čo vedie k rýchlejšiemu načítaniu a menším bundle velikostiam.</p>
      
      <div class="code-block" style="background: #1a1a1a; padding: 1.5rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.5rem 0; border: 1px solid #333;">
<pre><code style="color: #e2e8f0; font-family: monospace;">// Príklad Server Component
async function BlogPost({ id }) {
const post = await fetch(\"/api/posts/\${id}\");
return <article>{post.content}</article>;
}</code></pre>
      </div>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">2. Concurrent Rendering</h2>
      <p>Concurrent features v Reacte umožňujú prerušovanie a pokračovanie renderovania podľa priority úloh. To znamená plynulejšie používateľské rozhrania a lepšiu responzivitu.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">3. React 19 Novinky</h2>
      <p>React 19 prináša množstvo vylepšení:</p>
      <ul style="list-style-type: disc; padding-left: 1.5rem; color: #a0aec0;">
          <li>Nové hooky ako <code>use()</code> pre asynchrónne operácie</li>
          <li>Vylepšené error boundaries</li>
          <li>Optimalizácie výkonu a menšia veľkosť knižnice</li>
          <li>Lepšia podpora pre TypeScript</li>
      </ul>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">4. Next.js 15 a App Router</h2>
      <p>App Router v Next.js 15 prináša nové možnosti pre routing a layouty. Využíva React Server Components a prináša lepšiu developer experience.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">5. State Management Evolution</h2>
      <p>Tradičné state management knižnice sa vyvíjajú smerom k jednoduchšiemu API a lepšej integrácii s React 18+ funkciami. Zustand a Jotai získavajú na popularite.</p>

      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">Záver</h3>
      <p>Rok 2025 bude pre React ekosystém prelomový. Server Components, Concurrent Rendering a nové nástroje zmenia spôsob, akým uvažujeme o frontend developmente. Odporúčame postupne experimentovať s týmito technológiami vo vašich projektoch.</p>

      <p><strong>Potrebujete pomoc s modernizáciou vašej React aplikácie?</strong> Náš tím v AEB Digital má skúsenosti s najnovšími React technológiami. <a href="/kontakt" style="color: var(--accent-teal); text-decoration: underline;">Kontaktujte nás</a> pre bezplatnú konzultáciu.</p>
    `
  },
  {
    slug: "seo-strategia-2025",
    metadata: {
      title: "5 krokov k úspešnej SEO stratégii v roku 2025 | AEB Digital Blog",
      description: "Kompletný guide pre SEO stratégiu v roku 2025. Keyword research, technické SEO, content stratégia, Core Web Vitals a analytics. Praktické tipy od expertov.",
      keywords: "SEO stratégia 2025, keyword research, technické SEO, content marketing, Google algoritmus, Core Web Vitals, SEO audit, vyhľadávače",
      canonicalUrl: "https://aebdigital.sk/blog/seo-strategia-2025",
      ogImage: "/sources/techstack/1f4ac.svg",
      ogImageAlt: "5 krokov k úspešnej SEO stratégii v roku 2025",
      author: "AEB Digital",
      datePublished: "10. január 2025",
      category: "Marketing",
    },
    content: `
      <a href="/blog" class="back-to-blog" style="display: inline-block; margin-bottom: 2rem; color: var(--accent-teal); text-decoration: none; font-weight: 600;">
          &larr; Späť na blog
      </a>

      <p>V roku 2025 sa SEO stratégia stáva ešte komplexnejšou a dôležitejšou než kedykoľvek predtým. Google's algoritmus sa neustále vyvíja, pričom kladie čoraz väčší dôraz na používateľskú skúsenosť, kvalitný obsah a technické aspekty webových stránok.</p>

      <div class="seo-tip" style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #48bb78;">
          <h4 style="color: #48bb78; margin-top: 0; margin-bottom: 1rem;">💡 Prečo je SEO stále dôležité?</h4>
          <p style="margin: 0;">93% všetkých online zážitkov začína vo vyhľadávači. Stránky na prvej pozícii v Google dostanú priemerne 28.5% všetkých klikov.</p>
      </div>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;"><span class="step-number" style="display: inline-block; width: 40px; height: 40px; background: var(--accent-teal); color: white; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 15px; font-size: 1.2rem;">1</span>SEO Audit a analýza</h2>
      <p>Pred akoukoľvek optimalizáciou musíte pochopiť, kde aktuálne stojíte. Kompletný SEO audit odhalí silné stránky, problémy a príležitosti vašej webovej stránky.</p>

      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">Technický audit</h3>
      <p>Technické SEO je základom všetkého. Ak vaša stránka nie je technicky v poriadku, ostatné optimalizácie nebudú efektívne.</p>

      <ul style="list-style-type: disc; padding-left: 1.5rem; color: #a0aec0;">
          <li><strong>Core Web Vitals:</strong> Largest Contentful Paint (LCP), First Input Delay (FID), Cumulative Layout Shift (CLS)</li>
          <li><strong>Rýchlosť načítania:</strong> Cieľ pod 3 sekundy pre desktop, pod 2 sekundy pre mobil</li>
          <li><strong>Mobile-friendliness:</strong> Responsive dizajn a mobilná použiteľnosť</li>
          <li><strong>HTTPS:</strong> Bezpečnostné certifikáty sú štandard</li>
      </ul>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;"><span class="step-number" style="display: inline-block; width: 40px; height: 40px; background: var(--accent-teal); color: white; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 15px; font-size: 1.2rem;">2</span>Keyword Research a stratégia</h2>
      <p>Keyword research v roku 2025 nie je len o hľadaní kľúčových slov s vysokým search volume. Je to o pochopení search intent a user journey vašej cieľovej skupiny.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;"><span class="step-number" style="display: inline-block; width: 40px; height: 40px; background: var(--accent-teal); color: white; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 15px; font-size: 1.2rem;">3</span>On-Page SEO optimalizácia</h2>
      <p>On-page SEO v roku 2025 je o vytváraní obsahu, ktorý nie len obsahuje správne keywords, ale skutočne pomáha používateľom vyriešiť ich problémy.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;"><span class="step-number" style="display: inline-block; width: 40px; height: 40px; background: var(--accent-teal); color: white; border-radius: 50%; text-align: center; line-height: 40px; margin-right: 15px; font-size: 1.2rem;">4</span>Technické SEO a Core Web Vitals</h2>
      <p>V roku 2025 sú technické aspekty SEO kritické pre úspech. Google oficiálne používa Page Experience ako ranking factor.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">Záver</h2>
      <p>SEO stratégia pre rok 2025 vyžaduje holistický prístup, ktorý kombinuje technickú excelentnosť, kvalitný obsah a silné off-page signály.</p>

      <p><strong>Potrebujete pomoc s implementáciou SEO stratégie?</strong> Náš tím v AEB Digital má skúsenosti s komplexnými SEO projektmi. <a href="/kontakt" style="color: var(--accent-teal); text-decoration: underline;">Kontaktujte nás</a> pre bezplatný SEO audit a konzultáciu.</p>
    `
  },
  {
    slug: "ux-dizajn-prirucka",
    metadata: {
      title: "Ako vytvoriť používateľsky prívetivý dizajn - Kompletný UX/UI guide | AEB Digital",
      description: "Kompletný sprievodca UX/UI dizajnom. Naučte sa základy user experience, wireframingu, prototypovania a accessibility. Praktické tipy pre lepší používateľský zážitok.",
      keywords: "UX dizajn, UI design, user experience, wireframing, prototypovanie, accessibility, používateľský zážitok, dizajn princípy, UX research",
      canonicalUrl: "https://aebdigital.sk/blog/ux-dizajn-prirucka",
      ogImage: "/sources/techstack/apps-figma-icon-2048x2048-ctjj5ab7.webp",
      ogImageAlt: "Ako vytvoriť používateľsky prívetivý dizajn",
      author: "AEB Digital",
      datePublished: "12. január 2025",
      category: "Dizajn",
    },
    content: `
      <a href="/blog" class="back-to-blog" style="display: inline-block; margin-bottom: 2rem; color: var(--accent-teal); text-decoration: none; font-weight: 600;">
          &larr; Späť na blog
      </a>

      <p>V dnešnej digitálnej ére je používateľský zážitok (UX) rozhodujúcim faktorom úspechu akejkolvek webovej stránky alebo aplikácie. Dobrý UX dizajn dokáže zvýšiť konverzie, zlepšiť spokojnosť používateľov a vybudovať silnú značku.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">Čo je UX dizajn a prečo je dôležitý?</h2>
      <p>User Experience (UX) dizajn je proces navrhovania produktov, ktoré poskytujú zmysluplný a relevantný zážitok používateľom. Zahŕňa celý proces získavania a integrácie produktu, vrátane aspektov brandingu, dizajnu, použiteľnosti a funkcionality.</p>

      <div class="highlight-box" style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid rgba(255,255,255,0.1);">
          <h4 style="color: white; margin-top: 0; margin-bottom: 1rem;">Kľúčové štatistiky o UX:</h4>
          <ul style="list-style-type: disc; padding-left: 1.5rem; color: #a0aec0;">
              <li>88% používateľov sa nevracia na web s zlým UX</li>
              <li>Každý euro investovaný do UX prinesie návratnosť 100 eur</li>
              <li>94% prvých dojmov súvisí s dizajnom</li>
          </ul>
      </div>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">Základné princípy UX dizajnu</h2>
      
      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">1. Používateľ je na prvom mieste</h3>
      <p>Každé rozhodnutie v dizajne by malo byť vedené potrebami a očakávaniami používateľov.</p>

      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">2. Konzistentnosť je kľúč</h3>
      <p>Konzistentný dizajn vytvára predvídateľnú skúsenosť.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">UX dizajn proces krok za krokom</h2>

      <div class="ux-process-step" style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255,255,255,0.02); border-radius: 0.5rem;">
          <h4 style="color: var(--accent-teal); font-size: 1.25rem; margin-top: 0;">1. Research a analýza používateľov</h4>
          <p style="margin-bottom: 0;">Pred akýmkoľvek dizajnovaním musíte pochopiť svojich používateľov. Vytvorte user personas, analyzujte user journey a identifikujte pain points.</p>
      </div>

      <div class="ux-process-step" style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255,255,255,0.02); border-radius: 0.5rem;">
          <h4 style="color: var(--accent-teal); font-size: 1.25rem; margin-top: 0;">2. Informačná architektúra</h4>
          <p style="margin-bottom: 0;">Organizujte obsah a funkcionality logickým spôsobom.</p>
      </div>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">Záver</h2>
      <p>Používateľsky prívetivý dizajn nie je luxus - je to nutnosť. V konkurenčnom digitálnom prostredí môže dobrý UX rozhodnúť o úspechu alebo neúspechu vášho produktu.</p>

      <p><strong>Potrebujete pomoc s UX dizajnom vašej webovej stránky?</strong> Náš tím v AEB Digital má bohaté skúsenosti. <a href="/kontakt" style="color: var(--accent-teal); text-decoration: underline;">Kontaktujte nás</a> pre bezplatnú UX audit vašej stránky.</p>
    `
  },
  {
    slug: "web-optimalizacia-rychlost",
    metadata: {
      title: "Ako optimalizovať rýchlosť načítania webu v roku 2025 | AEB Digital Blog",
      description: "Kompletný guide pre optimalizáciu výkonu webových stránok. Core Web Vitals, lazy loading, CDN, image optimization a pokročilé techniky pre rýchlejší web.",
      keywords: "optimalizácia webu, rýchlosť načítania, Core Web Vitals, lazy loading, CDN, image optimization, web performance, PageSpeed Insights, LCP, FID, CLS",
      canonicalUrl: "https://aebdigital.sk/blog/web-optimalizacia-rychlost",
      ogImage: "/sources/techstack/HTML5_logo_and_wordmark.svg.webp",
      ogImageAlt: "Ako optimalizovať rýchlosť načítania webu v roku 2025",
      author: "AEB Digital",
      datePublished: "3. január 2025",
      category: "Vývoj",
    },
    content: `
      <a href="/blog" class="back-to-blog" style="display: inline-block; margin-bottom: 2rem; color: var(--accent-teal); text-decoration: none; font-weight: 600;">
          &larr; Späť na blog
      </a>

      <p class="lead" style="font-size: 1.25rem; font-weight: 500; margin-bottom: 2rem;">Rýchlosť načítania webových stránok je dnes kritickým faktorom úspechu. Používatelia opúšťajú stránky, ktoré sa načítajú dlhšie ako 3 sekundy, a Google penalizuje pomalé weby v vyhľadávaní.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">1. Core Web Vitals - základ optimalizácie</h2>
      <p>Google Core Web Vitals sú tri kľúčové metriky, ktoré merajú používateľskú skúsenosť:</p>
      
      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">Largest Contentful Paint (LCP)</h3>
      <ul style="list-style-type: disc; padding-left: 1.5rem; color: #a0aec0;">
          <li><strong>Cieľ:</strong> Pod 2,5 sekundy</li>
          <li><strong>Meria:</strong> Čas načítania najväčšieho obsahu na stránke</li>
          <li><strong>Optimalizácia:</strong> Preload kritických zdrojov, optimalizácia obrázkov</li>
      </ul>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">2. Optimalizácia obrázkov</h2>
      <p>Obrázky často tvoria najväčšiu časť veľkosti stránky. Optimalizácia je kľúčová.</p>
      
      <h3 style="color: white; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem;">Moderné formáty obrázkov</h3>
      <p>Používajte efektívne formáty ako WebP a AVIF.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">3. CSS optimalizácia</h2>
      <p>Minimalizujte a optimalizujte CSS pre rýchlejšie renderovanie.</p>

      <h2 style="color: white; font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem;">Záver</h2>
      <p>Optimalizácia rýchlosti webových stránok je kontinuálny proces, ktorý vyžaduje systematický prístup.</p>

      <p><strong>Potrebujete pomoc s optimalizáciou výkonu?</strong> Náš tím expertov vám pomôže identifikovať bottlenecky. <a href="/kontakt" style="color: var(--accent-teal); text-decoration: underline;">Kontaktujte nás</a>.</p>
    `
  }
];

export function getBlogPostBySlug(slug: string): BlogPostData | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

export function getAllBlogPostSlugs(): string[] {
  return allBlogPosts.map(post => post.slug);
}

export function getRecommendedPosts(currentSlug: string): BlogPostData['recommendations'] {
    const currentPost = allBlogPosts.find(post => post.slug === currentSlug);
    // Return empty array if post not found
    if (!currentPost) return [];

    // Filter out the current post from the main blogPosts array
    const otherPosts = allBlogPosts.filter(post => post.slug !== currentSlug);

    // Pick first two other posts as recommendations
    const recommendations = otherPosts.slice(0, 2).map(post => ({
        slug: post.slug,
        title: post.metadata.title,
        imageSrc: post.metadata.ogImage,
        imageAlt: post.metadata.ogImageAlt,
        date: post.metadata.datePublished,
        author: post.metadata.author,
    }));

    return recommendations;
}
