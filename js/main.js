// AEB Digital - Main JavaScript with GSAP Animations

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Dynamic script loader function
function loadScript(src, callback) {
    const isSubpage = window.location.pathname.includes('/subpages/') || 
                     window.location.pathname.startsWith('/blog/') ||
                     window.location.pathname === '/o-nas' ||
                     window.location.pathname === '/sluzby' ||
                     window.location.pathname === '/kontakt' ||
                     window.location.pathname === '/portfolio' ||
                     window.location.pathname === '/blog';
    const adjustedSrc = isSubpage ? '../' + src : src;
    const cacheBustedSrc = adjustedSrc + '?v=1759200000';
    
    const script = document.createElement('script');
    script.src = cacheBustedSrc;
    script.onload = callback;
    script.onerror = function() {
        console.warn('Failed to load script:', cacheBustedSrc);
    };
    document.head.appendChild(script);
}

// Global Header HTML Template
const GLOBAL_HEADER = `
    <header class="header">
        <div class="container">
            <div class="header-content">
                <!-- Logo -->
                <div class="logo-container">
                    <a href="/">
                        <img src="sources/AEB LOGO.png" alt="AEB Digital Logo" class="logo">
                    </a>
                </div>
                
                <!-- Navigation -->
                <nav class="nav">
                    <ul class="nav-menu">
                        <li><a href="/portfolio">Portfólio</a></li>
                        <li><a href="/sluzby">Služby</a></li>
                        <li><a href="/o-nas">O nás</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                    
                    <!-- CTA Button -->
                    <a href="/kontakt" class="btn btn-red desktop-only">Kontaktujte nás</a>

                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <div class="mobile-menu-header">
                <div class="mobile-menu-header-content">
                    <div class="mobile-logo">
                        <a href="/">
                            <img src="sources/AEB LOGO.png" alt="AEB Digital Logo" class="logo">
                        </a>
                    </div>
                    <button class="mobile-menu-close" aria-label="Close mobile menu">
                        <span>&times;</span>
                    </button>
                </div>
            </div>
            <div class="mobile-menu-nav-container">
                <ul>
                    <li><a href="/portfolio">Portfólio</a></li>
                    <li><a href="/sluzby">Služby</a></li>
                    <li><a href="/o-nas">O nás</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </div>
            <div class="mobile-menu-footer">
                <div class="mobile-menu-footer-content">
                    <a href="/kontakt" class="btn btn-red mobile-cta">Kontaktujte nás</a>
                </div>
            </div>
        </div>
    </header>
`;


// Initialize global components and functionality
document.addEventListener('DOMContentLoaded', function() {
    // Inject global header and footer on all pages
    initGlobalComponents();
    
    // Initialize GSAP animations
    initGSAPAnimations();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize portfolio interactions
    initPortfolio();
    
    // Initialize scroll effects
    initScrollEffects();
    
    // Initialize portfolio filtering
    initPortfolioFiltering();
    
    // Initialize portfolio carousel
    initPortfolioCarousel();
    
    // Handle hash scrolling on page load
    initHashScrolling();
    
    // Initialize smooth page scrolling
    initSmoothPageScrolling();
    
});

// Global components injection
function initGlobalComponents() {
    // Detect if we're in a subpage
    const isSubpage = window.location.pathname.includes('/subpages/') || 
                     window.location.pathname.startsWith('/blog/') ||
                     window.location.pathname === '/o-nas' ||
                     window.location.pathname === '/sluzby' ||
                     window.location.pathname === '/kontakt' ||
                     window.location.pathname === '/portfolio' ||
                     window.location.pathname === '/blog';
    let headerHTML = GLOBAL_HEADER;
    
    if (isSubpage) {
        // Adjust paths for subpages - only logo and home link need adjustment
        headerHTML = headerHTML
            .replace(/src="sources\/AEB LOGO.png"/g, 'src="../sources/AEB LOGO.png"')
            .replace(/href="\/"/g, 'href="../"');
    }
    
    // Inject header at the beginning of body (for ALL pages)
    const existingHeader = document.querySelector('header');
    if (!existingHeader) {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
    
    // Load and initialize component scripts for subpages only
    // (Home page loads these directly in HTML)
    if (isSubpage) {
        loadScript('js/footer.js', function() {
            if (window.FooterComponent) {
                const footer = new window.FooterComponent();
                footer.inject();
            }
        });
        
        loadScript('js/contact-form.js', function() {
            if (window.ContactFormComponent) {
                const contactForm = new window.ContactFormComponent();
                contactForm.inject();
            }
        });
        
        loadScript('js/faq.js', function() {
            if (window.FAQComponent) {
                const faq = new window.FAQComponent();
                faq.inject();
            }
        });
    } else {
        // On home page, components are loaded via HTML, just initialize them
        if (window.FooterComponent) {
            const footer = new window.FooterComponent();
            footer.inject();
        }
        
        if (window.ContactFormComponent) {
            const contactForm = new window.ContactFormComponent();
            contactForm.inject();
        }
        
        if (window.FAQComponent) {
            const faq = new window.FAQComponent();
            faq.inject();
        }
    }
    
    // Set active navigation based on current page
    updateActiveNavigation();
}


// Update active navigation item based on current page
function updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove existing active classes
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page links
    document.querySelectorAll(`a[href="${currentPage}"]`).forEach(link => {
        link.classList.add('active');
    });
    
    // Special case for home page
    if (currentPage === 'index.html' || currentPage === '/' || currentPage === '') {
        document.querySelectorAll('a[href="/"], a[href="../"], a[href="#home"]').forEach(link => {
            link.classList.add('active');
        });
    }
}

// Smooth scrolling function with Lenis
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Use Lenis scrollTo for smooth scrolling
                lenis.scrollTo(targetElement);
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isActive = mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Prevent background scrolling when menu is open
            if (isActive) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking close button
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Close menu when clicking on menu items
        const menuItems = mobileMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// Portfolio interactions
function initPortfolio() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        // Add loading state for images
        const img = new Image();
        img.onload = function() {
            item.classList.add('loaded');
        };
        const bgImage = item.querySelector('.gallery-bg-image');
        img.src = bgImage ? bgImage.src : ''; // Get URL from img tag
        
        // Add click analytics (if needed)
        item.addEventListener('click', function() {
            // Track portfolio item clicks
            console.log('Portfolio item clicked:', this.href);
        });
    });
}

// Enhanced scroll effects
function initScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class for background change
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
            // Scrolling down - hide header
            header.classList.add('hidden');
        } else if (currentScrollY < lastScrollY || currentScrollY <= 150) {
            // Scrolling up or near top - show header
            header.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Smooth reveal animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.portfolio-item-apple, .about-stats, .contact-card');
    animateElements.forEach(el => observer.observe(el));
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimized scroll listener
const optimizedScrollListener = debounce(function() {
    // Any performance-sensitive scroll operations
}, 10);

window.addEventListener('scroll', optimizedScrollListener);


// Portfolio Filtering
function initPortfolioFiltering() {
    const filterButtons = document.querySelectorAll('.filter-tab, .filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item-apple');
    
    if (filterButtons.length === 0 || portfolioItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Portfolio Carousel Functionality
function initPortfolioCarousel() {
    const carouselTrack = document.querySelector('.portfolio-carousel-track');
    const leftArrow = document.querySelector('.carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-arrow-right');
    
    if (!carouselTrack || !leftArrow || !rightArrow) return;
    
    let currentOffset = 0; // Start at position 0
    const slideDistance = 30; // Move by 30vw for faster navigation
    const maxOffset = 200; // Maximum offset to see all photos (300vw - 100vw viewport)
    
    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${currentOffset}vw)`;
        
        // Update arrow states
        leftArrow.style.opacity = currentOffset > 0 ? '1' : '0.5';
        rightArrow.style.opacity = currentOffset < maxOffset ? '1' : '0.5';
    }
    
    // Right arrow - move forward
    rightArrow.addEventListener('click', function() {
        if (currentOffset < maxOffset) {
            currentOffset += slideDistance;
            updateCarousel();
        }
    });
    
    // Left arrow - move backward
    leftArrow.addEventListener('click', function() {
        if (currentOffset > 0) {
            currentOffset -= slideDistance;
            updateCarousel();
        }
    });
    
    // Initialize carousel state
    updateCarousel();
    
    // Touch/swipe support for mobile
    let startX = 0;
    let isDragging = false;
    
    carouselTrack.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    carouselTrack.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    carouselTrack.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0 && currentOffset < maxOffset) {
                // Swiped left - move right
                currentOffset += slideDistance;
                updateCarousel();
            } else if (diff < 0 && currentOffset > 0) {
                // Swiped right - move left
                currentOffset -= slideDistance;
                updateCarousel();
            }
        }
        
        isDragging = false;
    });
}

// Hash scrolling functionality with Lenis
function initHashScrolling() {
    // Prevent default hash scrolling behavior
    if (window.location.hash) {
        // Store the hash and remove it temporarily
        const hash = window.location.hash;
        history.replaceState(null, null, window.location.pathname + window.location.search);
        
        // Ensure we start at top
        lenis.scrollTo(0, { immediate: true });
        
        // Wait 300ms then smoothly scroll to target
        setTimeout(() => {
            const targetId = hash.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                lenis.scrollTo(targetElement);
                
                // Restore the hash to the URL after scrolling starts
                setTimeout(() => {
                    history.replaceState(null, null, window.location.pathname + hash);
                }, 100);
            }
        }, 300);
    }
}

// Mobile device detection
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           window.innerWidth <= 768;
}

// GSAP Animations for AEB Digital Website
function initGSAPAnimations() {
    // Skip animations on mobile devices for better performance
    if (isMobileDevice()) {
        console.log('📱 Mobile device detected - GSAP animations disabled for performance');
        return;
    }
    
    // 1. HERO SECTION ANIMATIONS
    // Hero title animation
    const heroTitle = document.querySelector('.hero h1, .heading-large');
    if (heroTitle) {
        gsap.fromTo(heroTitle, 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.9, 
                ease: "power2.out",
                delay: 0.2
            }
        );
    }

    // Hero subtitle animation
    const heroSubtitle = document.querySelector('.hero .subheading, .subheading');
    if (heroSubtitle) {
        gsap.fromTo(heroSubtitle, 
            { 
                opacity: 0, 
                scale: 0.8 
            },
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.8, 
                ease: "back.out(1.7)",
                delay: 0.6
            }
        );
    }

    // Hero buttons animation
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons.length > 0) {
        gsap.fromTo(heroButtons, 
            { 
                opacity: 0, 
                scale: 0.8 
            },
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.8, 
                ease: "back.out(1.7)",
                stagger: 0.2,
                delay: 0.8
            }
        );
    }

    // 2. SCROLL ANIMATIONS
    
    // Generic section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.fromTo(section, 
            { 
                opacity: 0, 
                y: 30 
            },
            {
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none' // Don't reverse on scroll up
                }
            }
        );
    });

    // Portfolio items animation
    const portfolioItems = document.querySelectorAll('.portfolio-item, .portfolio-item-carousel, .portfolio-item-apple');
    portfolioItems.forEach((item, index) => {
        gsap.fromTo(item, 
            { 
                opacity: 0, 
                scale: 0.8,
                y: 20
            },
            {
                opacity: 1, 
                scale: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: 'top 95%', // Trigger earlier to reduce delay
                    toggleActions: 'play none none none' // Don't reverse on scroll up
                },
                delay: index * 0.05 // Reduce stagger delay
            }
        );
    });

    // Service sections animation (excluding sticky service sections)
    const serviceCards = document.querySelectorAll('.contact-card');
    serviceCards.forEach(card => {
        gsap.fromTo(card, 
            { 
                opacity: 0, 
                x: -50 
            },
            {
                opacity: 1, 
                x: 0, 
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none' // Don't reverse on scroll up
                }
            }
        );
    });
    
    // Note: .service-section animations removed - sticky effect is sufficient

    // Stats section animations removed per user request

    // CTA button hover animations
    const ctaButtons = document.querySelectorAll('.btn, .cta-btn');
    ctaButtons.forEach(button => {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });

        button.addEventListener('mouseenter', () => tl.play());
        button.addEventListener('mouseleave', () => tl.reverse());
    });

    // Photo sliders section animation (immediate load)
    const photoSlidersSection = document.querySelector('.photo-sliders');
    if (photoSlidersSection) {
        gsap.fromTo(photoSlidersSection, 
            { 
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.0,
                ease: "power2.out",
                delay: 1.2 // Load after hero animations complete
            }
        );
    }

    // Background sliders animation (if present)
    const bgSliders = document.querySelectorAll('.hero-slider');
    bgSliders.forEach((slider, index) => {
        gsap.fromTo(slider, 
            { 
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                delay: 0.3 + (index * 0.2)
            }
        );
    });

    // Text reveal animations
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        // Skip hero headings and service-main h2 elements
        if (!heading.closest('.hero') && !heading.closest('.service-main')) {
            gsap.fromTo(heading,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: heading,
                        start: 'top 90%',
                        toggleActions: 'play none none none' // Don't reverse on scroll up
                    }
                }
            );
        }
    });

    // PERFORMANCE OPTIMIZATION
    // Refresh ScrollTrigger on window resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });

    console.log('🎬 GSAP animations loaded successfully!');
}

// Smooth page scrolling functionality (now handled by Lenis)
function initSmoothPageScrolling() {
    // Lenis handles all smooth scrolling, no need for CSS scroll-behavior
    // Remove any existing CSS smooth scrolling to avoid conflicts
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
}

// Gallery hover effect with cursor-following image
function initGalleryHoverEffect() {
    const galleryContainer = document.querySelector('.gallery-container');
    const floatingImage = document.querySelector('.gallery-floating-image');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!galleryContainer || !floatingImage || galleryItems.length === 0) return;

    // Skip on mobile devices
    if (isMobileDevice()) {
        return;
    }

    let currentImage = null;
    let isHovering = false;
    let lastX = 0;
    let lastY = 0;
    let moveThreshold = 50; // Distance moved before jiggle triggers
    let totalDistance = 0;
    let jiggleTimeout = null;

    // Track mouse movement within gallery container
    galleryContainer.addEventListener('mousemove', function(e) {
        if (isHovering && currentImage) {
            // Position image to the right of cursor, vertically centered with cursor
            const offsetX = 30; // 30px to the right
            const imageHeight = 350; // Height of the floating image

            const x = e.clientX + offsetX;
            const y = e.clientY - (imageHeight / 2); // Center vertically with cursor

            floatingImage.style.left = x + 'px';
            floatingImage.style.top = y + 'px';

            // Calculate distance moved
            if (lastX !== 0 && lastY !== 0) {
                const dx = e.clientX - lastX;
                const dy = e.clientY - lastY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                totalDistance += distance;

                // Trigger jiggle if moved enough
                if (totalDistance > moveThreshold) {
                    floatingImage.classList.add('jiggling');
                    totalDistance = 0;

                    // Remove jiggle class after animation
                    clearTimeout(jiggleTimeout);
                    jiggleTimeout = setTimeout(() => {
                        floatingImage.classList.remove('jiggling');
                    }, 300);
                }
            }

            lastX = e.clientX;
            lastY = e.clientY;
        }
    });

    // Add hover listeners to each gallery item
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            const imageUrl = this.getAttribute('data-image');

            if (imageUrl) {
                // Check if we're switching images
                const isSwitching = currentImage && currentImage !== imageUrl;

                if (isSwitching) {
                    // Add changing class for zoom out effect
                    floatingImage.classList.add('changing');

                    // Wait for zoom out, then change image and zoom in
                    setTimeout(() => {
                        currentImage = imageUrl;
                        floatingImage.style.backgroundImage = `url('${imageUrl}')`;
                        floatingImage.classList.remove('changing');
                    }, 200); // Half of the transition duration
                } else {
                    // First time showing or same image
                    currentImage = imageUrl;
                    floatingImage.style.backgroundImage = `url('${imageUrl}')`;
                }

                isHovering = true;

                // Show the floating image and position it
                floatingImage.classList.add('active');

                // Initial position - to the right, vertically centered
                const offsetX = 30;
                const imageHeight = 350;
                floatingImage.style.left = (e.clientX + offsetX) + 'px';
                floatingImage.style.top = (e.clientY - (imageHeight / 2)) + 'px';
            }
        });

        item.addEventListener('mouseleave', function() {
            currentImage = null;
            isHovering = false;
            lastX = 0;
            lastY = 0;
            totalDistance = 0;

            // Hide the floating image with zoom out effect
            floatingImage.classList.remove('active');
            floatingImage.classList.remove('changing');
            floatingImage.classList.remove('jiggling');
        });
    });

    // Hide floating image when leaving the container
    galleryContainer.addEventListener('mouseleave', function() {
        currentImage = null;
        isHovering = false;
        lastX = 0;
        lastY = 0;
        totalDistance = 0;
        floatingImage.classList.remove('active');
        floatingImage.classList.remove('jiggling');
    });
}

// Initialize gallery hover effect when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Add to existing initialization
    initGalleryHoverEffect();
});