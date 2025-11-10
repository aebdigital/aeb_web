class SPARouter {
    constructor() {
        this.currentPath = window.location.pathname;
        this.contentContainer = document.querySelector('main');
        this.isTransitioning = false;
        
        this.init();
    }

    init() {
        this.bindNavigation();
        this.handleBrowserNavigation();
        
        window.addEventListener('popstate', (e) => {
            if (e.state) {
                this.loadPage(e.state.path, false);
            }
        });
    }

    bindNavigation() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (!link) return;
            
            const href = link.getAttribute('href');
            
            if (this.shouldInterceptClick(href, link)) {
                e.preventDefault();
                this.navigateTo(href);
            }
        });
    }

    shouldInterceptClick(href, link) {
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
            return false;
        }
        
        if (link.target === '_blank' || href.startsWith('http')) {
            return false;
        }
        
        if (href.endsWith('.pdf') || href.endsWith('.jpg') || href.endsWith('.png')) {
            return false;
        }

        return true;
    }

    async navigateTo(path) {
        if (this.isTransitioning || path === this.currentPath) return;
        
        const fullPath = this.resolvePath(path);
        await this.loadPage(fullPath, true);
    }

    resolvePath(path) {
        if (path.startsWith('/')) return path;
        
        const isSubpage = window.location.pathname.includes('/subpages/');
        
        if (path.startsWith('subpages/')) {
            return isSubpage ? `/${path}` : `/${path}`;
        }
        
        if (path.includes('.html')) {
            if (isSubpage && !path.startsWith('../')) {
                return `/subpages/${path}`;
            }
            return `/${path}`;
        }
        
        return path;
    }

    async loadPage(path, pushState = true) {
        if (this.isTransitioning) return;
        
        this.isTransitioning = true;
        
        try {
            // Start loading page content and transition out in parallel
            const [html] = await Promise.all([
                this.fetchPage(path),
                this.transitionOut()
            ]);
            
            const newContent = this.extractContent(html);
            
            // Load CSS first, then content
            this.loadCSS(newContent.css);
            
            // Wait for CSS to load before showing content
            await this.waitForCSS();
            
            this.contentContainer.innerHTML = newContent.main;
            this.updateHead(newContent.head);
            
            if (pushState) {
                history.pushState({ path }, '', path);
            }
            
            this.currentPath = path;
            this.reinitializeJS();
            
            await this.transitionIn();
            
        } catch (error) {
            console.error('Navigation error:', error);
            window.location.href = path;
        } finally {
            this.isTransitioning = false;
        }
    }

    async fetchPage(path) {
        const response = await fetch(path, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.text();
    }

    extractContent(html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Extract CSS links that need to be added
        const cssLinks = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'))
            .map(link => link.href)
            .filter(href => !document.querySelector(`link[href="${href}"]`));
        
        return {
            main: doc.querySelector('main')?.innerHTML || '',
            head: {
                title: doc.querySelector('title')?.textContent || '',
                metaDescription: doc.querySelector('meta[name="description"]')?.content || '',
                metaKeywords: doc.querySelector('meta[name="keywords"]')?.content || ''
            },
            css: cssLinks
        };
    }

    updateHead(headData) {
        if (headData.title) {
            document.title = headData.title;
        }
        
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && headData.metaDescription) {
            metaDesc.content = headData.metaDescription;
        }
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords && headData.metaKeywords) {
            metaKeywords.content = headData.metaKeywords;
        }
    }

    loadCSS(cssLinks) {
        cssLinks.forEach(href => {
            if (!document.querySelector(`link[href="${href}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.setAttribute('data-spa-css', 'true');
                document.head.appendChild(link);
            }
        });
    }


    async waitForCSS() {
        return new Promise(resolve => {
            // Wait a short time for CSS to load and apply
            setTimeout(resolve, 100);
        });
    }

    async transitionOut() {
        return new Promise((resolve) => {
            this.contentContainer.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.contentContainer.style.opacity = '0';
            
            setTimeout(resolve, 300);
        });
    }

    async transitionIn() {
        return new Promise((resolve) => {
            requestAnimationFrame(() => {
                this.contentContainer.style.opacity = '1';
                setTimeout(resolve, 300);
            });
        });
    }

    reinitializeJS() {
        // Clear existing components to prevent duplicates
        this.clearExistingComponents();
        
        // Only initialize components if they exist on the new page
        const hasContactForm = this.contentContainer.querySelector('.contact-form-component, [data-contact-form]');
        const hasFAQ = this.contentContainer.querySelector('.faq-component, .faq-item');
        const hasGallery = this.contentContainer.querySelector('.gallery-container');
        
        if (hasContactForm && window.ContactFormComponent) {
            new window.ContactFormComponent().inject();
        }
        
        if (hasFAQ && window.FAQComponent) {
            new window.FAQComponent().inject();
        }
        
        if (hasGallery && window.initGalleryHoverEffect) {
            window.initGalleryHoverEffect();
        }
        
        this.reinitializeGSAP();
        
        const event = new CustomEvent('pageLoaded', { 
            detail: { path: this.currentPath } 
        });
        document.dispatchEvent(event);
    }

    clearExistingComponents() {
        // Remove existing contact forms and FAQs that might be duplicated
        const existingContactForms = document.querySelectorAll('.contact-form-component:not([data-spa-preserved])');
        const existingFAQs = document.querySelectorAll('.faq-component:not([data-spa-preserved])');
        
        existingContactForms.forEach(form => {
            if (!this.contentContainer.contains(form)) {
                form.remove();
            }
        });
        
        existingFAQs.forEach(faq => {
            if (!this.contentContainer.contains(faq)) {
                faq.remove();
            }
        });
    }

    reinitializeGSAP() {
        if (typeof gsap !== 'undefined' && gsap.ScrollTrigger) {
            gsap.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            
            if (window.initScrollAnimations) {
                window.initScrollAnimations();
            }
        }
    }

    handleBrowserNavigation() {
        if (this.currentPath !== '/') {
            history.replaceState({ path: this.currentPath }, '', this.currentPath);
        }
    }
}

window.SPARouter = SPARouter;