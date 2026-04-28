"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/LenisProvider";

type LanguageSwitcherProps = {
  className?: string;
  currentLang: string;
  getLocalizedHref: (lang: 'sk' | 'cz' | 'at' | 'en') => string;
};

function LanguageSwitcher({ className = "", currentLang, getLocalizedHref }: LanguageSwitcherProps) {
  return (
    <div className={`flex items-center space-x-2 font-[family-name:var(--font-manrope)] ${className}`}>
      <a href={getLocalizedHref('sk')} className={`transition-colors ${currentLang === 'sk' ? 'text-white font-bold' : 'text-white/60 hover:text-white'}`}>SK</a>
      <span className="text-white/30">|</span>
      <a href={getLocalizedHref('cz')} className={`transition-colors ${currentLang === 'cz' ? 'text-white font-bold' : 'text-white/60 hover:text-white'}`}>CZ</a>
      <span className="text-white/30">|</span>
      <a href={getLocalizedHref('at')} className={`transition-colors ${currentLang === 'at' ? 'text-white font-bold' : 'text-white/60 hover:text-white'}`}>DE</a>
      <span className="text-white/30">|</span>
      <a href={getLocalizedHref('en')} className={`transition-colors ${currentLang === 'en' ? 'text-white font-bold' : 'text-white/60 hover:text-white'}`}>EN</a>
    </div>
  );
}

// Simplified navigation for Pedrostol
const navLinks = [
  { href: "/", label: "Domov" },
  { href: "#portfolio", label: "Galéria" },
  { href: "#contact", label: "Kontakt" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const getLocalizedHref = (lang: 'sk' | 'cz' | 'at' | 'en') => {
    const roots = {
      sk: "https://aebdigital.sk",
      cz: "https://aebdigital.cz",
      at: "https://aebdigital.at",
      en: "https://aebdigital.com"
    };

    const pathMaps: Record<string, Record<string, string>> = {
      '/portfolio': { sk: '/portfolio', cz: '/portfolio', at: '/portfolio', en: '/portfolio' },
      '/sluzby': { sk: '/sluzby', cz: '/services', at: '/services', en: '/services' },
      '/services': { sk: '/sluzby', cz: '/services', at: '/services', en: '/services' },
      '/o-nas': { sk: '/o-nas', cz: '/about', at: '/about', en: '/about' },
      '/about': { sk: '/o-nas', cz: '/about', at: '/about', en: '/about' },
      '/blog': { sk: '/blog', cz: '/blog', at: '/blog', en: '/blog' },
      '/kontakt': { sk: '/kontakt', cz: '/contact', at: '/contact', en: '/contact' },
      '/contact': { sk: '/kontakt', cz: '/contact', at: '/contact', en: '/contact' },
      '/tvorba-web-stranok-bratislava': { sk: '/tvorba-web-stranok-bratislava', cz: '/tvorba-webovych-stranek-bratislava', at: '/webseiten-erstellen-bratislava', en: '/website-development-bratislava' },
      '/tvorba-web-stranok': { sk: '/tvorba-web-stranok', cz: '/tvorba-webovych-stranek', at: '/webseiten-erstellen', en: '/website-development' },
      '/tvorba-eshopu': { sk: '/tvorba-eshopu', cz: '/tvorba-eshopu', at: '/online-shop-erstellen', en: '/ecommerce-development' },
      '/web-aplikacie': { sk: '/web-aplikacie', cz: '/webove-aplikace', at: '/webanwendungen', en: '/web-applications' },
      '/seo-optimalizacia': { sk: '/seo-optimalizacia', cz: '/seo-optimalizace', at: '/seo-optimierung', en: '/seo-services' },
      '/tvorba-web-stranok-cena': { sk: '/tvorba-web-stranok-cena', cz: '/cena-webovych-stranek', at: '/webseite-kosten', en: '/website-pricing' },
    };

    const exactMatch = pathMaps[pathname];
    if (exactMatch) return roots[lang] + exactMatch[lang];
    if (pathname.startsWith('/blog/')) return roots[lang] + '/blog';
    return roots[lang];
  };

  // Function to determine if a link is active based on current path
  const isActive = (path: string) => {
    return pathname === path;
  };

  const lenis = useLenis();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        lenis?.scrollTo(element, { offset: -80, duration: 1.5 });
      } else if (pathname !== "/") {
        // If we are not on homepage, navigate to homepage with hash
        window.location.href = `/${href}`;
      }
    } else if (href === "/" && pathname === "/") {
      e.preventDefault();
      lenis?.scrollTo(0, { duration: 1.2 });
    }
  };

  const isServicePath = false; // No longer using services dropdown

  return (
    <>
      <header className="header fixed top-0 left-0 w-full z-50 bg-transparent text-white">
        {/* Layer 1: The solid layer (for dropdowns and non-blending elements) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="container mx-auto p-2 md:py-6 md:px-4 h-full relative">
            <div className="flex justify-between items-center h-12 md:h-16">
              {/* Dummy left spacer to match layout */}
              <div className="flex items-center gap-4 md:gap-6 opacity-0">
                <div className="logo text-[38px] font-bold uppercase tracking-wide">AEB DIGITAL</div>
                <nav className="hidden md:flex space-x-6">
                  <div className="text-xl">Portfólio</div>
                  <div className="text-xl">Služby</div>
                </nav>
              </div>

              {/* Simplified Header for Pedrostol - No dropdowns */}
              <div className="hidden md:block absolute left-0 top-0 w-full h-full pointer-events-none px-4">
                <div className="flex justify-between items-center h-12 md:h-16">
                  <div className="flex items-center gap-4 md:gap-6 pointer-events-none">
                     <div className="logo text-[38px] opacity-0 pointer-events-none">PEDROSTOL</div>
                     <nav className="flex space-x-6">
                        {navLinks.map((link) => (
                          <div key={link.href} className="text-xl opacity-0 py-2">{link.label}</div>
                        ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2: The blending layer (for text inversion) */}
        <div className="relative z-10 mix-blend-difference pointer-events-none">
          <div className="container mx-auto p-2 md:py-6 md:px-4">
            <div className="flex justify-between items-center h-12 md:h-16">
              {/* Left Group: Logo and Navigation */}
              <div className="flex items-center gap-4 md:gap-6 pointer-events-auto">
                {/* Logo */}
                <div className="logo-container">
                  <Link href="/" className="logo text-white text-[38px] font-[family-name:var(--font-anton)] font-bold uppercase tracking-wide">
                    PEDROSTOL
                  </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                  <ul className="nav-menu flex space-x-6">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          onClick={(e) => scrollToSection(e as any, link.href)}
                          className={`text-xl text-white nav-link-underline transition-colors ${isActive(link.href) ? 'active' : ''}`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="hidden md:flex items-center space-x-6 pointer-events-auto">
                <LanguageSwitcher currentLang="sk" getLocalizedHref={getLocalizedHref} />
                {/* CTA Button (Desktop) */}
                <Link href="/kontakt" className="btn btn-secondary">
                  <span className="btn-text-container">
                    <span className="btn-text btn-text-visible">Kontaktujte nás</span>
                    <span className="btn-text btn-text-hidden">VIAC</span>
                  </span>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="mobile-menu-toggle md:hidden flex flex-col space-y-1.5 focus:outline-none pointer-events-auto"
                aria-label="Toggle mobile menu"
                onClick={toggleMobileMenu}
              >
                <span className="block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out"></span>
                <span className="block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out"></span>
                <span className="block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Outside header to avoid mix-blend-difference inheritance */}
      <div
        className={`mobile-menu fixed top-0 left-0 w-full h-full transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-[100] overflow-hidden animate-gradient-shift`}
        style={{
          background: 'linear-gradient(135deg, #030303 0%, #0a0a0a 25%, #050505 50%, #080808 75%, #040404 100%)',
          backgroundSize: '400% 400%'
        }}
      >
        {/* Star effect background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
          <div className="star star-6"></div>
          <div className="star star-7"></div>
          <div className="star star-8"></div>
          <div className="star star-9"></div>
          <div className="star star-10"></div>
          <div className="star star-11"></div>
          <div className="star star-12"></div>
        </div>

        <div className="mobile-menu-header flex justify-between items-center p-2 mx-auto w-[95%] border-b border-white/10 relative z-10">
          <div className="mobile-logo">
            <Link href="/" className="text-white text-[38px] font-[family-name:var(--font-anton)] font-bold leading-tight">
              PEDROSTOL
            </Link>
          </div>
          <button
            className="mobile-menu-close text-white text-4xl focus:outline-none"
            aria-label="Close mobile menu"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
        </div>
        <div className="mobile-menu-nav-container px-4 py-2 relative z-10">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-white/10">
                <Link 
                  href={link.href} 
                  className={`block text-white text-3xl py-4 ${isActive(link.href) ? 'active' : ''}`} 
                  onClick={(e) => {
                    scrollToSection(e as any, link.href);
                    toggleMobileMenu();
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center pb-8">
            <LanguageSwitcher currentLang="sk" className="text-xl space-x-6" getLocalizedHref={getLocalizedHref} />
          </div>
        </div>
      </div>
    </>
  );
}
