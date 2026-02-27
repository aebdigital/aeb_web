"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookieConsentState {
  consent: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  };
  setConsent: (consent: CookieConsentState['consent']) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
  showPrivacyPopup: boolean;
  setShowPrivacyPopup: (show: boolean) => void;
  acceptAllCookies: () => void;
  declineAllCookies: () => void;
  saveSettings: (settings: CookieConsentState['consent']) => void;
}

const CookieConsentContext = createContext<CookieConsentState | undefined>(undefined);

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [consent, setConsent] = useState<CookieConsentState['consent']>({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  useEffect(() => {
    // Load consent from localStorage on mount
    const storedConsent = localStorage.getItem('cookieConsent');
    if (storedConsent) {
      try {
        const parsedConsent = JSON.parse(storedConsent);
        const settings = parsedConsent.settings;
        if (settings && typeof settings.analytics !== 'undefined') {
          setConsent(settings);
        }
        // If consent exists, don't show the banner
        setShowBanner(false);
      } catch {
        // Malformed JSON — clear it and show banner
        localStorage.removeItem('cookieConsent');
        const timer = setTimeout(() => setShowBanner(true), 1000);
        return () => clearTimeout(timer);
      }
    } else {
      // If no consent, show the banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Handle body overflow when any modal/banner is open
    if (showSettings || showPrivacyPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSettings, showPrivacyPopup]);

  const updateConsentInLocalStorage = (newConsent: CookieConsentState['consent'], type: 'accepted' | 'declined' | 'custom') => {
    const consentData = {
      type: type,
      settings: newConsent,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setConsent(newConsent);

    // Placeholder for integrating analytics/marketing scripts
    if (newConsent.analytics) {
      console.log('Analytics cookies enabled');
      // e.g., enableGoogleAnalytics();
    } else {
      console.log('Analytics cookies disabled');
      // e.g., disableGoogleAnalytics();
    }
    if (newConsent.marketing) {
      console.log('Marketing cookies enabled');
      // e.g., enableMarketingScripts();
    } else {
      console.log('Marketing cookies disabled');
      // e.g., disableMarketingScripts();
    }
  };

  const acceptAllCookies = () => {
    const newConsent = { necessary: true, analytics: true, marketing: true };
    updateConsentInLocalStorage(newConsent, 'accepted');
    setShowBanner(false);
    setShowSettings(false);
  };

  const declineAllCookies = () => {
    const newConsent = { necessary: true, analytics: false, marketing: false };
    updateConsentInLocalStorage(newConsent, 'declined');
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveSettings = (newSettings: CookieConsentState['consent']) => {
    updateConsentInLocalStorage(newSettings, 'custom');
    setShowBanner(false);
    setShowSettings(false);
  };

  const value = {
    consent,
    setConsent,
    showBanner,
    setShowBanner,
    showSettings,
    setShowSettings,
    showPrivacyPopup,
    setShowPrivacyPopup,
    acceptAllCookies,
    declineAllCookies,
    saveSettings,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}
