"use client";

import React, { useState, useEffect } from 'react';
import { useCookieConsent } from './CookieConsentProvider';

export function CookieSettingsModal() {
  const { showSettings, setShowSettings, consent, saveSettings, acceptAllCookies } = useCookieConsent();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent.analytics);
  const [marketingEnabled, setMarketingEnabled] = useState(consent.marketing);

  useEffect(() => {
    // Sync internal state with context consent when modal opens
    if (showSettings) {
      setAnalyticsEnabled(consent.analytics);
      setMarketingEnabled(consent.marketing);
    }
  }, [showSettings, consent.analytics, consent.marketing]);

  const handleSaveSettings = () => {
    saveSettings({
      necessary: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
  };

  const handleAcceptAll = () => {
    acceptAllCookies();
  };

  if (!showSettings) return null;

  return (
    <div
      id="cookie-settings-modal"
      className="cookie-settings-modal fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[1000] overflow-y-auto p-4"
      onClick={() => setShowSettings(false)}
    >
      <div
        className="cookie-settings-content bg-dark-gray text-white p-8 rounded-lg shadow-2xl max-w-2xl w-full relative max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="cookie-settings-close absolute top-4 right-4 text-white text-3xl font-bold leading-none focus:outline-none"
          onClick={() => setShowSettings(false)}
          aria-label="Close cookie settings"
        >
          &times;
        </button>
        <h3 className="text-3xl font-bold mb-6">Nastavenia cookies</h3>

        <div className="cookie-category mb-6">
          <div className="cookie-category-header flex justify-between items-center mb-2">
            <label className="cookie-switch relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked disabled />
              <div className="relative w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-accent-teal after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              <span className="ml-3 text-lg font-semibold text-white">Nevyhnutné cookies</span>
            </label>
          </div>
          <p className="text-gray-light text-sm">Tieto cookies sú potrebné pre základnú funkčnosť stránky a nemožno ich vypnúť.</p>
        </div>

        <div className="cookie-category mb-6">
          <div className="cookie-category-header flex justify-between items-center mb-2">
            <label className="cookie-switch relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={analyticsEnabled}
                onChange={() => setAnalyticsEnabled(!analyticsEnabled)}
              />
              <div className="relative w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-accent-teal after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              <span className="ml-3 text-lg font-semibold text-white">Analytické cookies</span>
            </label>
          </div>
          <p className="text-gray-light text-sm">Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku, aby sme ju mohli zlepšiť.</p>
        </div>

        <div className="cookie-category mb-6">
          <div className="cookie-category-header flex justify-between items-center mb-2">
            <label className="cookie-switch relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={marketingEnabled}
                onChange={() => setMarketingEnabled(!marketingEnabled)}
              />
              <div className="relative w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-accent-teal after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
              <span className="ml-3 text-lg font-semibold text-white">Marketingové cookies</span>
            </label>
          </div>
          <p className="text-gray-light text-sm">Používajú sa na personalizáciu reklám a meranie ich účinnosti.</p>
        </div>

        <div className="cookie-settings-buttons flex flex-col md:flex-row gap-4 mt-8">
          <button onClick={handleSaveSettings} className="btn btn-primary flex-1">Uložiť nastavenia</button>
          <button onClick={handleAcceptAll} className="btn btn-primary flex-1">Súhlasím so všetkými</button>
        </div>
      </div>
    </div>
  );
}