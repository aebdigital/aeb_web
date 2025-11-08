// Footer Component - AEB Digital

// Global Footer HTML Template
const GLOBAL_FOOTER = `
    <footer class="footer">
        <div class="footer-gradient">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-main">
                        <div class="footer-brand">
                            <img src="sources/techstack/aeb_whiteonblack_final.png" alt="AEB Digital Logo" class="footer-logo">
                            <p>Tvoríme digitálne riešenia pre váš úspech. Moderné webové stránky, aplikácie a marketing na mieru.</p>
                            
                            <div class="footer-social">
                                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                        
                        <div class="footer-links">
                            <div class="footer-column">
                                <h4>Spoločnosť</h4>
                                <ul>
                                    <li><a href="/o-nas">O nás</a></li>
                                    <li><a href="/portfolio">Portfólio</a></li>
                                    <li><a href="/kontakt">Kontakt</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                </ul>
                            </div>
                            
                            <div class="footer-column">
                                <h4>Služby</h4>
                                <ul>
                                    <li><a href="/sluzby#webove-stranky">Webové stránky</a></li>
                                    <li><a href="/sluzby#webove-aplikacie">Webové aplikácie</a></li>
                                    <li><a href="/sluzby#e-shopy">E-shopy</a></li>
                                    <li><a href="/sluzby#digital-marketing">Digital Marketing</a></li>
                                    <li><a href="/sluzby#email-marketing">Email Marketing</a></li>
                                </ul>
                            </div>
                            
                            <div class="footer-column">
                                <h4>Kontakt</h4>
                                <ul>
                                    <li><a href="mailto:peter@aebdig.com">peter@aebdig.com</a></li>
                                    <li><a href="mailto:alexander@aebdig.com">alexander@aebdig.com</a></li>
                                    <li><a href="tel:+421908507131">+421 908 507 131</a></li>
                                    <li><a href="tel:+421917422245">+421 917 422 245</a></li>
                                    <li>Bratislava, Slovensko</li>
                                </ul>
                                
                                <div class="footer-newsletter">
                                    <h5>Newsletter</h5>
                                    <form class="newsletter-form">
                                        <input type="email" placeholder="Váš email">
                                        <button type="submit">Prihlásiť</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <div class="footer-copyright">
                            <p>&copy; 2025 AEB Digital</p>
                        </div>
                        <div class="footer-legal">
                            <a href="#" id="privacy-link">Ochrana súkromia</a>
                            <a href="#" id="gdpr-link">GDPR</a>
                            <a href="#" id="cookie-settings-footer" class="cookie-settings-icon" title="Nastavenia cookies">
                                <i class="fas fa-cookie-bite"></i> Cookies
                            </a>
                        </div>
                    </div>
                    
                    <!-- Large AEB Digital Image -->
                    <div class="footer-large-text">
                        <img src="sources/footimg.png" alt="AEB DIGITAL">
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Privacy Policy Popup -->
    <div id="privacy-popup" class="privacy-popup">
        <div class="privacy-popup-content">
            <span class="privacy-popup-close">&times;</span>
            <h2>Ochrana osobných údajov</h2>
            <div class="privacy-content">
                <p><strong>Peter Samuel Bobák</strong><br>
                Andreja Mráza 3161/15, 821 03 Bratislava – mestská časť<br>
                Ružinov, Slovenská republika<br>
                IČO: 56157207, DIČ: 1129453677<br>
                E-mail: peter@aebdig.com<br>
                Tel.: +421 908 507 131</p>

                <p>Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>

                <hr>

                <h3>I. Kontaktný formulár</h3>
                <p>Na stránke www.aebdigital.com prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám:</p>
                <ul>
                    <li>Položiť otázku k našim produktom a službám</li>
                    <li>Požiadať o cenovú ponuku</li>
                </ul>

                <p><strong>Rozsah spracúvaných údajov:</strong></p>
                <ul>
                    <li>Meno a priezvisko</li>
                    <li>E-mailová adresa</li>
                    <li>Telefónne číslo</li>
                </ul>

                <p><strong>Účel spracovania:</strong><br>
                Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>

                <p><strong>Právny základ:</strong><br>
                Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>

                <p><strong>Doba uchovávania:</strong><br>
                Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>

                <hr>

                <h3>II. Súbory cookies</h3>
                <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
                <ul>
                    <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                    <li><strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
                </ul>

                <p><strong>Správa súhlasov:</strong><br>
                Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>

                <hr>

                <h3>III. Práva dotknutej osoby</h3>
                <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                <ul>
                    <li>Prístup k osobným údajom, ktoré spracúvame</li>
                    <li>Oprava nepresných alebo neúplných údajov</li>
                    <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                    <li>Obmedzenie spracovania</li>
                    <li>Prenosnosť údajov</li>
                    <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                    <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, <a href="http://www.dataprotection.gov.sk" target="_blank">www.dataprotection.gov.sk</a>)</li>
                </ul>

                <p>V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na <a href="mailto:reachout@aebdig.com">reachout@aebdig.com</a> alebo telefónnom čísle +421 917 422 245.</p>

                <hr>

                <p><em>Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.</em></p>
            </div>
        </div>
    </div>

    <!-- Cookie Consent Banner -->
    <div id="cookie-banner" class="cookie-banner">
        <div class="cookie-content">
            <div class="cookie-text">
                <h4>🍪 Cookies na našej stránke</h4>
                <p>Používame cookies na zlepšenie vašej používateľskej skúsenosti a na analýzu návštevnosti. Kliknutím na "Súhlasím" súhlasíte s používaním všetkých cookies.</p>
            </div>
            <div class="cookie-buttons">
                <button id="cookie-accept" class="cookie-btn cookie-btn-accept">Súhlasím</button>
                <button id="cookie-decline" class="cookie-btn cookie-btn-decline">Odmietnuť</button>
                <button id="cookie-settings" class="cookie-btn cookie-btn-settings">Nastavenia</button>
            </div>
        </div>
    </div>

    <!-- Cookie Settings Modal -->
    <div id="cookie-settings-modal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <span class="cookie-settings-close">&times;</span>
            <h3>Nastavenia cookies</h3>
            <div class="cookie-category">
                <div class="cookie-category-header">
                    <label class="cookie-switch">
                        <input type="checkbox" id="necessary-cookies" checked disabled>
                        <span class="cookie-slider"></span>
                        <strong>Nevyhnutné cookies</strong>
                    </label>
                </div>
                <p>Tieto cookies sú potrebné pre základnú funkčnosť stránky a nemožno ich vypnúť.</p>
            </div>
            <div class="cookie-category">
                <div class="cookie-category-header">
                    <label class="cookie-switch">
                        <input type="checkbox" id="analytics-cookies">
                        <span class="cookie-slider"></span>
                        <strong>Analytické cookies</strong>
                    </label>
                </div>
                <p>Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku, aby sme ju mohli zlepšiť.</p>
            </div>
            <div class="cookie-category">
                <div class="cookie-category-header">
                    <label class="cookie-switch">
                        <input type="checkbox" id="marketing-cookies">
                        <span class="cookie-slider"></span>
                        <strong>Marketingové cookies</strong>
                    </label>
                </div>
                <p>Používajú sa na personalizáciu reklám a meranie ich účinnosti.</p>
            </div>
            <div class="cookie-settings-buttons">
                <button id="cookie-save-settings" class="cookie-btn cookie-btn-accept">Uložiť nastavenia</button>
                <button id="cookie-accept-all" class="cookie-btn cookie-btn-accept">Súhlasím so všetkými</button>
            </div>
        </div>
    </div>

    <!-- Floating Bottom Navbar -->
    <nav class="floating-nav">
        <ul class="floating-nav-menu">
            <li><a href="/" title="Domov"><i class="fas fa-home"></i></a></li>
            <li><a href="/portfolio" title="Portfólio"><i class="fas fa-briefcase"></i></a></li>
            <li><a href="/sluzby" title="Služby"><i class="fas fa-cogs"></i></a></li>
            <li><a href="/o-nas" title="O nás"><i class="fas fa-users"></i></a></li>
            <li><a href="/blog" title="Blog"><i class="fas fa-blog"></i></a></li>
            <li><a href="/kontakt" title="Kontakt"><i class="fas fa-envelope"></i></a></li>
        </ul>
    </nav>
`;

// Footer Component Class
class FooterComponent {
    constructor() {
        this.isSubpage = window.location.pathname.includes('/subpages/') || 
                        window.location.pathname.startsWith('/blog/') ||
                        window.location.pathname === '/o-nas' ||
                        window.location.pathname === '/sluzby' ||
                        window.location.pathname === '/kontakt' ||
                        window.location.pathname === '/portfolio' ||
                        window.location.pathname === '/blog';
    }

    // Inject footer into the page
    inject() {
        let footerHTML = GLOBAL_FOOTER;
        
        // Adjust paths for subpages (only images need adjustment, links use absolute paths)
        if (this.isSubpage) {
            footerHTML = footerHTML
                .replace(/src="sources\/techstack\//g, 'src="../sources/techstack/')
                .replace(/src="sources\/footimg\.png"/g, 'src="../sources/footimg.png"')
                .replace(/href="\/"/g, 'href="../"');
        }
        
        // Remove existing footer and floating nav if they exist
        const existingFooter = document.querySelector('footer');
        const existingFloatingNav = document.querySelector('.floating-nav');
        
        if (existingFooter) {
            existingFooter.remove();
        }
        if (existingFloatingNav) {
            existingFloatingNav.remove();
        }
        
        // Inject the footer
        document.body.insertAdjacentHTML('beforeend', footerHTML);
        
        // Initialize footer functionality
        this.init();
        
        // Initialize privacy popup
        this.initPrivacyPopup();
        
        // Initialize cookie banner
        this.initCookieBanner();
    }

    // Initialize footer functionality
    init() {
        this.initNewsletterForm();
        this.initFloatingNav();
    }

    // Newsletter form handling
    initNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = this.querySelector('input[type="email"]').value;
                
                if (!email) {
                    alert('Prosím zadajte váš email.');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Prosím zadajte platný email.');
                    return;
                }
                
                // Simulate subscription (replace with actual API call)
                alert('Ďakujeme za prihlásenie do newslettra!');
                this.reset();
            });
        }
    }

    // Floating navigation functionality
    initFloatingNav() {
        const floatingNav = document.querySelector('.floating-nav');
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        function updateFloatingNav() {
            const currentScrollY = window.scrollY;
            
            // Show floating nav when scrolling down and header is hidden
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                // Scrolling down - show floating nav
                if (floatingNav) floatingNav.classList.add('visible');
            } else if (currentScrollY < lastScrollY || currentScrollY <= 150) {
                // Scrolling up or near top - hide floating nav
                if (floatingNav) floatingNav.classList.remove('visible');
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        }
        
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateFloatingNav);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
        
        // Set active navigation based on current page
        this.updateActiveNavigation();
    }

    // Privacy popup functionality
    initPrivacyPopup() {
        const privacyLink = document.getElementById('privacy-link');
        const gdprLink = document.getElementById('gdpr-link');
        const privacyPopup = document.getElementById('privacy-popup');
        const closeButton = document.querySelector('.privacy-popup-close');

        if ((privacyLink || gdprLink) && privacyPopup) {
            // Open popup when clicking privacy link
            if (privacyLink) {
                privacyLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    privacyPopup.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            }

            // Open popup when clicking GDPR link (same popup)
            if (gdprLink) {
                gdprLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    privacyPopup.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            }

            // Close popup when clicking close button
            if (closeButton) {
                closeButton.addEventListener('click', function() {
                    privacyPopup.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }

            // Close popup when clicking outside content
            privacyPopup.addEventListener('click', function(e) {
                if (e.target === privacyPopup) {
                    privacyPopup.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });

            // Close popup with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && privacyPopup.classList.contains('active')) {
                    privacyPopup.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }
    }

    // Cookie banner functionality
    initCookieBanner() {
        const cookieBanner = document.getElementById('cookie-banner');
        const cookieSettingsModal = document.getElementById('cookie-settings-modal');
        
        // Check if cookies have been accepted/declined
        const cookieConsent = localStorage.getItem('cookieConsent');
        
        if (!cookieConsent) {
            // Show banner if no consent stored
            setTimeout(() => {
                if (cookieBanner) {
                    // Mobile browser positioning fix
                    this.fixMobileCookieBanner(cookieBanner);
                    cookieBanner.classList.add('show');
                }
            }, 1000);
        }

        // Accept all cookies
        document.getElementById('cookie-accept')?.addEventListener('click', () => {
            this.setCookieConsent('accepted', { necessary: true, analytics: true, marketing: true });
            this.hideCookieBanner();
        });

        // Decline all non-necessary cookies
        document.getElementById('cookie-decline')?.addEventListener('click', () => {
            this.setCookieConsent('declined', { necessary: true, analytics: false, marketing: false });
            this.hideCookieBanner();
        });

        // Show settings modal
        document.getElementById('cookie-settings')?.addEventListener('click', () => {
            cookieSettingsModal?.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        // Show settings modal from footer icon
        document.getElementById('cookie-settings-footer')?.addEventListener('click', (e) => {
            e.preventDefault();
            cookieSettingsModal?.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

        // Close settings modal
        document.querySelector('.cookie-settings-close')?.addEventListener('click', () => {
            cookieSettingsModal?.classList.remove('show');
            document.body.style.overflow = '';
        });

        // Close modal when clicking outside content
        cookieSettingsModal?.addEventListener('click', function(e) {
            if (e.target === cookieSettingsModal) {
                cookieSettingsModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && cookieSettingsModal?.classList.contains('show')) {
                cookieSettingsModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });

        // Save custom settings
        document.getElementById('cookie-save-settings')?.addEventListener('click', () => {
            const settings = {
                necessary: true,
                analytics: document.getElementById('analytics-cookies')?.checked || false,
                marketing: document.getElementById('marketing-cookies')?.checked || false
            };
            this.setCookieConsent('custom', settings);
            cookieSettingsModal?.classList.remove('show');
            document.body.style.overflow = '';
            this.hideCookieBanner();
        });

        // Accept all from settings
        document.getElementById('cookie-accept-all')?.addEventListener('click', () => {
            document.getElementById('analytics-cookies').checked = true;
            document.getElementById('marketing-cookies').checked = true;
            this.setCookieConsent('accepted', { necessary: true, analytics: true, marketing: true });
            cookieSettingsModal?.classList.remove('show');
            document.body.style.overflow = '';
            this.hideCookieBanner();
        });
    }

    setCookieConsent(type, settings) {
        const consent = {
            type: type,
            settings: settings,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
        
        // You can add your analytics/marketing code initialization here
        if (settings.analytics) {
            // Initialize Google Analytics or other analytics
            console.log('Analytics cookies enabled');
        }
        if (settings.marketing) {
            // Initialize marketing cookies
            console.log('Marketing cookies enabled');
        }
    }

    hideCookieBanner() {
        const cookieBanner = document.getElementById('cookie-banner');
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 300);
        }
    }

    // Fix mobile browser positioning issues
    fixMobileCookieBanner(cookieBanner) {
        // Detect mobile browsers
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Get actual viewport height
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            
            // Force reflow and ensure banner is positioned correctly
            cookieBanner.style.position = 'fixed';
            cookieBanner.style.zIndex = '99999';
            
            // Handle viewport changes (when mobile browser UI shows/hides)
            const updateViewport = () => {
                const vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            };
            
            window.addEventListener('resize', updateViewport);
            window.addEventListener('orientationchange', updateViewport);
        }
    }

    // Update active navigation item based on current page
    updateActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Remove existing active classes
        document.querySelectorAll('.floating-nav-menu a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current page links
        document.querySelectorAll(`a[href="${currentPage}"]`).forEach(link => {
            link.classList.add('active');
        });
        
        // Special case for home page
        if (currentPage === 'index.html' || currentPage === '/' || currentPage === '') {
            document.querySelectorAll('a[href="/"], a[href="../"]').forEach(link => {
                link.classList.add('active');
            });
        }
    }
}

// Export for use in main.js
window.FooterComponent = FooterComponent;