// FAQ Component - AEB Digital

// Global FAQ Section HTML Template
const FAQ_SECTION = `
    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <h2 class="heading-section">Často kladené otázky</h2>
            <div class="faq-layout">
                <div class="faq-grid">
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Ako dlho trvá vytvorenie webovej stránky?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Doba realizácie závisí od zložitosti projektu. Jednoduchá prezentačná stránka sa dá dokončiť za 1-2 týždne, zatiaľ čo komplexný e-shop alebo webová aplikácia môže trvať 4-8 týždňov. Po prvej konzultácii vám poskytneme presný časový harmonogram.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Koľko stojí vytvorenie webovej stránky?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Ceny sa pohybujú od 500€ za jednoduchú prezentačnú stránku až po 5000€+ za komplexné e-commerce riešenia. Finálna cena závisí od funkcionality, dizajnu a požiadaviek. Poskytujeme transparentnú cenovú ponuku po analýze vašich potrieb.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Zabezpečujete aj údržbu a podporu?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Áno, ponúkame kompletné služby údržby a technickej podpory. To zahŕňa aktualizácie obsahu, bezpečnostné záplaty, zálohovanie dát a riešenie technických problémov. Môžete si vybrať z rôznych balíčkov podľa vašich potrieb.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Budeme môcť sami upravovať obsah stránky?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Samozrejme! Vytvárame stránky s užívateľsky prívetivým CMS (Content Management System), ktorý vám umožní jednoducho pridávať a upravovať obsah bez technických znalostí. Poskytneme vám aj školenie a dokumentáciu.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Sú vaše webstránky optimalizované pre mobily?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Všetky naše webstránky sú responsívne, čo znamená, že sa automaticky prispôsobia akémukoľvek zariadeniu - či už je to mobil, tablet alebo počítač. Používame mobile-first prístup pre optimálny používateľský zážitok.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Pomôžete aj s digital marketingom?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Áno, ponúkame komplexné digital marketing služby vrátane SEO optimalizácie, správy sociálnych médií, PPC kampaní a email marketingu. Pomôžeme vám nielen vytvoriť skvělú stránku, ale aj prilákať na ňu návštevníkov.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Aký je postup pri tvorbe webovej stránky?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Náš proces zahŕňa 4 kroky: 1) Bezplatnú konzultáciu a analýzu potrieb, 2) Vytvorenie wireframov a dizajnu, 3) Programovanie a testovanie, 4) Spustenie a školenie. Každý krok zahŕňa vašu spätnú väzbu.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Poskytujete záruky na vašu prácu?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Áno, poskytujeme 12-mesačnú záruku na všetky naše webové riešenia. Záruka pokrýva technické chyby, kompatibilitu s prehliadačmi a základnú funkčnosť. Malé úpravy a opravy sú v priebehu záručnej doby bezplatné.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Dokážete migrovať existujúcu stránku?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Samozrejme! Zabezpečíme kompletnú migráciu vašich dát, obsahu a SEO nastavení z pôvodnej stránky. Proces je navrhnutý tak, aby neovplyvnil vašu návštevnosť ani pozície vo vyhľadávačoch.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Môžem si objednať len dizajn bez programovania?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Áno, ponúkame aj samostatné dizajnové služby. Vytvoríme pre vás kompletné UI/UX dizajny vo Figme spolu s prototypmi a grafickými podkladmi pre ďalšiu realizáciu.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Aké platobné metódy akceptujete?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Akceptujeme bankové prevody, platby kartou a PayPal. Väčšie projekty rozdeľujeme na čiastkové platby - zvyčajne 50% na začiatku a 50% po dokončení. Pre dlhodobé projekty je možná mesačná fakturácia.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Vytvárate aj mobilné aplikácie?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Špecializujeme sa na webové aplikácie, ktoré fungujú perfektne na mobiloch ako PWA (Progressive Web Apps). Pre natívne mobilné aplikácie máme partnerské spoločnosti, s ktorými úzko spolupracujeme.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Aké technológie používate?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Používame moderné technológie ako React, Vue.js, Node.js, TypeScript a WordPress. Pre dizajn pracujeme s Figma a Adobe Creative Suite. Výber technológií vždy prispôsobujeme potrebám projektu.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Pomôžete s obsahom a copywritingom?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Áno, máme skúsených copywriterov, ktorí vám pomôžu s tvorbou kvalitného obsahu optimalizovaného pre SEO. Pomôžeme s textami, produktovými popismi a marketingovými materiálmi.</p>
                    </div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Aká je vaša dostupnosť pre urgentné problémy?</h3>
                        <span class="faq-toggle">+</span>
                    </div>
                    <div class="faq-answer">
                        <p>Pre kritické problémy máme technickú podporu od 9 hodín ráno do 10 hodín večer. Štandardná odozva je do 2 hodín v pracovné dni a do 24 hodín cez víkendy. Urgentné opravy riešime prioritne.</p>
                    </div>
                </div>
                </div>
                
                <!-- FAQ Contact Box -->
                <div class="faq-contact-box">
                    <h3>Prvá konzultácia a návrh sú zadarmo!</h3>
                    <a href="#contact" class="btn btn-primary">Kontakt</a>
                </div>
            </div>
        </div>
    </section>
`;

// FAQ Component Class
class FAQComponent {
    constructor() {
        this.isContactPage = window.location.pathname.includes('kontakt.html');
        this.isPrivacyPage = window.location.pathname.includes('ochrana-osobnych-udajov');
    }

    // Inject FAQ section into the page
    inject() {
        if (this.isContactPage || this.isPrivacyPage) {
            return; // Don't inject FAQ on contact page or privacy page
        }

        // On other pages, find the contact form section and insert FAQ before it
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.insertAdjacentHTML('beforebegin', FAQ_SECTION);
            this.init();
            if (window.initButtonAnimations) window.initButtonAnimations();
        }
    }

    // Initialize FAQ toggle functionality
    init() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                if (isActive) {
                    faqItem.classList.remove('active');
                } else {
                    faqItem.classList.add('active');
                }
            });
        });
    }
}

// Export for use in main.js
window.FAQComponent = FAQComponent;