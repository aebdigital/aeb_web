// Contact Form Component - AEB Digital

// Global Contact Form HTML Template
const CONTACT_FORM_SECTION = `
    <!-- Contact Form Section -->
    <section id="contact" class="contact-form-section">
        <div class="container">
            <div class="contact-content">
                <div class="contact-text">
                    <h2 class="heading-section">Máte nápad? Poďme na to!</h2>
                    <p>Máte projekt v hlave? Napíšte nám a my vám vytvoríme riešenie presne na mieru s bezplatnou konzultáciou.</p>
                    
                    <div class="contact-person-box">
                        <div class="contact-person-avatar">
                            <img src="AEB LOGO.png" alt="Peter Bobák" class="person-photo">
                        </div>
                        <div class="contact-person-info">
                            <h4>Peter Bobák</h4>
                            <p>CEO</p>
                            <a href="tel:+421908507131">+421 908 507 131</a>
                        </div>
                    </div>
                </div>
                
                <form id="contact-form" class="contact-form">
                    <div class="form-group">
                        <label for="name">Meno *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone">Telefón</label>
                        <input type="tel" id="phone" name="phone" placeholder="+421 XXX XXX XXX">
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Typ projektu *</label>
                        <select id="subject" name="subject" required>
                            <option value="">Vyberte typ projektu</option>
                            <option value="webova-stranka">Webová stránka</option>
                            <option value="eshop">E-shop</option>
                            <option value="webova-aplikacia">Webová aplikácia</option>
                            <option value="marketing">Digital marketing</option>
                            <option value="dizajn">UI/UX dizajn</option>
                            <option value="custom">Vývoj na mieru</option>
                            <option value="ine">Iné</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="budget">Rozpočet</label>
                        <select id="budget" name="budget">
                            <option value="">Vyberte rozpočet</option>
                            <option value="do-1000">Do 1 000 €</option>
                            <option value="1000-3000">1 000 - 3 000 €</option>
                            <option value="3000-5000">3 000 - 5 000 €</option>
                            <option value="5000-10000">5 000 - 10 000 €</option>
                            <option value="nad-10000">Nad 10 000 €</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Popis projektu *</label>
                        <textarea id="message" name="message" rows="5" placeholder="Opíšte svoj projekt, ciele a požiadavky..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Odoslať správu</button>
                </form>
            </div>
        </div>
    </section>
`;

// Contact Form Component Class
class ContactFormComponent {
    constructor() {
        this.isSubpage = window.location.pathname.includes('/subpages/');
    }

    // Inject contact form into the page
    inject() {
        // Always inject contact form on all pages, before footer
        const footer = document.querySelector('footer');
        if (footer) {
            let contactHTML = CONTACT_FORM_SECTION;
            
            // Adjust paths for subpages
            if (this.isSubpage) {
                contactHTML = contactHTML.replace(/src="AEB LOGO.png"/g, 'src="../AEB LOGO.png"');
            }
            
            footer.insertAdjacentHTML('beforebegin', contactHTML);
            
            // Initialize contact form functionality after injection
            this.init();
        }
    }

    // Initialize contact form functionality
    init() {
        const contactForm = document.querySelector('#contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                
                if (!name || !email || !message) {
                    alert('Prosím vyplňte všetky polia.');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Prosím zadajte platný email.');
                    return;
                }
                
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Odosiela sa...';
                submitBtn.disabled = true;
                
                // Submit form to working email handler
                fetch('send-mail-simple.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('✅ ' + data.message);
                        this.reset();
                    } else {
                        alert('❌ ' + data.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('❌ Nastala chyba pri odosielaní správy. Skúste to prosím neskôr alebo nás kontaktujte telefonicky na +421 908 507 131.');
                })
                .finally(() => {
                    // Reset button state
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
            });
        }
    }
}

// Export for use in main.js
window.ContactFormComponent = ContactFormComponent;