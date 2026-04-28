"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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

const serviceDropdownLinks = [
  {
    href: "/tvorba-web-stranok-bratislava",
    label: "Web stránky Bratislava",
    description: "Lokálna SEO landing page pre BA",
  },
  {
    href: "/tvorba-web-stranok",
    label: "Tvorba web stránok",
    description: "Firemné weby, UX, SEO základ",
  },
  {
    href: "/tvorba-eshopu",
    label: "Tvorba e-shopu",
    description: "E-commerce, platby, produkty",
  },
  {
    href: "/web-aplikacie",
    label: "Webové aplikácie",
    description: "React, API, dashboardy, portály",
  },
  {
    href: "/seo-optimalizacia",
    label: "SEO optimalizácia",
    description: "Audit, obsah, technické SEO",
  },
  {
    href: "/tvorba-web-stranok-cena",
    label: "Cena web stránky",
    description: "Rozpočet, rozsah a faktory ceny",
  },
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

  const isServicePath = pathname === "/sluzby" || serviceDropdownLinks.some((link) => pathname === link.href);

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

              {/* The actual Dropdown - positioned absolutely relative to the container */}
              <div className="hidden md:block absolute left-0 top-0 w-full h-full pointer-events-none px-4">
                <div className="flex justify-between items-center h-12 md:h-16">
                  <div className="flex items-center gap-4 md:gap-6 pointer-events-none">
                     <div className="logo text-[38px] opacity-0 pointer-events-none">AEB DIGITAL</div>
                     <nav className="flex space-x-6">
                        <div className="text-xl opacity-0 pointer-events-none">Portfólio</div>
                        <div className="relative group pointer-events-auto">
                        <div className="text-xl opacity-0 py-2">Služby</div>
                        <div className={`absolute left-0 top-full pt-4 transition-all duration-200 ${isServicesHovered ? 'visible opacity-100' : 'invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100'}`}>
                          <div
                            className="w-[420px] border border-white/15 bg-black p-3 shadow-2xl backdrop-blur-md pointer-events-auto"
                            onMouseEnter={() => setIsServicesHovered(true)}
                            onMouseLeave={() => setIsServicesHovered(false)}
                          >
                            <Link
                              href="/sluzby"
                              className="block border-b border-white/10 px-4 py-3 text-base font-bold text-white transition-colors hover:bg-white/10"
                            >
                              Prehľad služieb
                            </Link>
                            {serviceDropdownLinks.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 transition-colors hover:bg-white/10"
                              >
                                <span className="block text-base font-bold text-white">{link.label}</span>
                                <span className="mt-1 block text-sm leading-relaxed text-white/65">{link.description}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
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
                    AEB DIGITAL
                  </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                  <ul className="nav-menu flex space-x-6">
                    <li>
                      <Link href="/portfolio" className={`text-xl text-white nav-link-underline transition-colors ${isActive('/portfolio') ? 'active' : ''}`}>
                        Portfólio
                      </Link>
                    </li>
                    <li
                      className="relative group"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <Link href="/sluzby" className={`text-xl text-white nav-link-underline transition-colors ${isServicePath ? 'active' : ''}`}>
                        Služby
                      </Link>
                    </li>
                    <li>
                      <Link href="/o-nas" className={`text-xl text-white nav-link-underline transition-colors ${isActive('/o-nas') ? 'active' : ''}`}>
                        O nás
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className={`text-xl text-white nav-link-underline transition-colors ${isActive('/blog') ? 'active' : ''}`}>
                        Blog
                      </Link>
                    </li>
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
              AEB DIGITAL
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
            <li className="border-b border-white/10">
              <Link href="/portfolio" className={`block text-white text-3xl py-4 ${isActive('/portfolio') ? 'active' : ''}`} onClick={toggleMobileMenu}>
                Portfólio
              </Link>
            </li>
            <li className="border-b border-white/10">
              <Link href="/sluzby" className={`block text-white text-3xl py-4 ${isActive('/sluzby') ? 'active' : ''}`} onClick={toggleMobileMenu}>
                Služby
              </Link>
              <div className="pb-4">
                {serviceDropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 pl-4 text-xl text-white/75 ${isActive(link.href) ? 'active text-white' : ''}`}
                    onClick={toggleMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </li>
            <li className="border-b border-white/10">
              <Link href="/o-nas" className={`block text-white text-3xl py-4 ${isActive('/o-nas') ? 'active' : ''}`} onClick={toggleMobileMenu}>
                O nás
              </Link>
            </li>
            <li className="border-b border-white/10">
              <Link href="/blog" className={`block text-white text-3xl py-4 ${isActive('/blog') ? 'active' : ''}`} onClick={toggleMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="border-b border-white/10">
              <Link href="/kontakt" className={`block text-white text-3xl py-4 ${isActive('/kontakt') ? 'active' : ''}`} onClick={toggleMobileMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="mt-8 flex justify-center pb-8">
            <LanguageSwitcher currentLang="sk" className="text-xl space-x-6" getLocalizedHref={getLocalizedHref} />
          </div>
        </div>
      </div>
    </>
  );
}
