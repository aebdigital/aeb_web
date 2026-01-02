"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaBriefcase, FaCogs, FaUsers, FaBlog, FaEnvelope } from 'react-icons/fa';

export function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);

  const updateVisibility = () => {
    if (typeof window === 'undefined') return;

    const currentScrollY = window.scrollY;

    // Show floating nav when scrolling down and past a certain threshold (e.g., 150px)
    // Or if at the top (to allow immediate interaction)
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setIsVisible(true);
    } else if (currentScrollY < lastScrollY || currentScrollY <= 150) {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, [lastScrollY]); // Depend on lastScrollY to re-evaluate on each scroll

  const navItems = [
    { href: "/", icon: <FaHome />, title: "Domov" },
    { href: "/portfolio", icon: <FaBriefcase />, title: "Portfólio" },
    { href: "/sluzby", icon: <FaCogs />, title: "Služby" },
    { href: "/o-nas", icon: <FaUsers />, title: "O nás" },
    { href: "/blog", icon: <FaBlog />, title: "Blog" },
    { href: "/kontakt", icon: <FaEnvelope />, title: "Kontakt" },
  ];

  return (
    <nav className={`floating-nav fixed bottom-0 left-0 w-full bg-dark-gray/90 backdrop-blur-sm shadow-lg py-3 md:py-4 z-40 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <ul className="floating-nav-menu flex justify-around items-center h-full">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              title={item.title}
              className={`flex flex-col items-center text-xs md:text-sm transition-colors duration-200 ${
                pathname === item.href ? 'text-accent-teal' : 'text-gray-light hover:text-white'
              }`}
            >
              <span className="text-xl md:text-2xl mb-1">{item.icon}</span>
              <span className="hidden md:block">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
