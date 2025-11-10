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
            await this.transitionOut();
            
            const html = await this.fetchPage(path);
            const newContent = this.extractContent(html);
            
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
        
        return {
            main: doc.querySelector('main')?.innerHTML || '',
            head: {
                title: doc.querySelector('title')?.textContent || '',
                metaDescription: doc.querySelector('meta[name="description"]')?.content || '',
                metaKeywords: doc.querySelector('meta[name="keywords"]')?.content || ''
            }
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
        if (window.initContactForm) {
            window.initContactForm();
        }
        
        if (window.initFAQ) {
            window.initFAQ();
        }
        
        if (window.initGalleryHoverEffect) {
            window.initGalleryHoverEffect();
        }
        
        this.reinitializeGSAP();
        
        const event = new CustomEvent('pageLoaded', { 
            detail: { path: this.currentPath } 
        });
        document.dispatchEvent(event);
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