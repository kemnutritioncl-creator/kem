/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, CheckoutUrls } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import MomView from './components/MomView';
import ProView from './components/ProView';

// Strict input validator for price strings (format: 35.000 or digits)
const sanitizePrice = (raw: unknown, fallback: string): string => {
  if (typeof raw !== 'string') return fallback;
  const trimmed = raw.trim();
  return /^[0-9]+(\.[0-9]{3})*$/.test(trimmed) ? trimmed : fallback;
};

// Strict URL validator to prevent Open Redirects and DOM XSS (javascript:, data: schemes)
const ALLOWED_SECURE_DOMAINS = [
  'flow.cl',
  'www.flow.cl',
  'calendly.com',
  'wa.me',
  'api.whatsapp.com',
  'classroom.kemnutritionacademy.com',
  'kemnutritionacademy.com'
];

const sanitizeSecureUrl = (raw: unknown, fallback: string): string => {
  if (typeof raw !== 'string') return fallback;
  try {
    const parsed = new URL(raw.trim());
    if (parsed.protocol !== 'https:') return fallback;
    const isDomainAllowed = ALLOWED_SECURE_DOMAINS.some(domain => 
      parsed.hostname === domain || parsed.hostname.endsWith('.' + domain)
    );
    return isDomainAllowed ? parsed.toString() : fallback;
  } catch {
    return fallback;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  
  // Pricing state synced with local storage with strict validation
  const [priceEsencial, setPriceEsencial] = useState<string>(() => {
    try {
      const cached = localStorage.getItem('kem_price_esencial');
      return sanitizePrice(cached, '97.000');
    } catch (e) {
      return '97.000';
    }
  });
  
  const [priceAcompañamiento, setPriceAcompañamiento] = useState<string>(() => {
    try {
      const cached = localStorage.getItem('kem_price_acompañamiento');
      return sanitizePrice(cached, '217.000');
    } catch (e) {
      return '217.000';
    }
  });

  const [priceConsulta, setPriceConsulta] = useState<string>(() => {
    try {
      const cached = localStorage.getItem('kem_price_consulta');
      if (!cached || cached === '47.000') {
        localStorage.setItem('kem_price_consulta', '35.000');
        return '35.000';
      }
      return sanitizePrice(cached, '35.000');
    } catch (e) {
      return '35.000';
    }
  });

  // Unique Flow, Calendly and WhatsApp links
  const defaultCheckoutUrls: CheckoutUrls = {
    momEsencial: "https://www.flow.cl/btn.php?token=md684de16d889abef823b66ec6fddbe277647f6c",
    momAcompañamiento: "https://www.flow.cl/btn.php?token=l6eca65398973d28641a3de344ef16e6c008cd77",
    momConsulta: "https://calendly.com/kemnutritioncl/30min?month=2026-10",
    proEsencial: "https://www.flow.cl/btn.php?token=md684de16d889abef823b66ec6fddbe277647f6c",
    proAcompañamiento: "https://www.flow.cl/btn.php?token=l6eca65398973d28641a3de344ef16e6c008cd77",
    proConsulta: "https://calendly.com/kemnutritioncl/30min?month=2026-10",
    whatsapp: "https://wa.me/56985489624?text=Hola%20Katherinne%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20KEM%20Nutrition%20Academy"
  };

  const [urls, setUrls] = useState<CheckoutUrls>(() => {
    try {
      const cached = localStorage.getItem('kem_checkout_urls');
      if (cached) {
        const parsed = JSON.parse(cached);
        return {
          momEsencial: sanitizeSecureUrl(parsed.momEsencial, defaultCheckoutUrls.momEsencial),
          momAcompañamiento: sanitizeSecureUrl(parsed.momAcompañamiento, defaultCheckoutUrls.momAcompañamiento),
          momConsulta: defaultCheckoutUrls.momConsulta,
          proEsencial: sanitizeSecureUrl(parsed.proEsencial, defaultCheckoutUrls.proEsencial),
          proAcompañamiento: sanitizeSecureUrl(parsed.proAcompañamiento, defaultCheckoutUrls.proAcompañamiento),
          proConsulta: defaultCheckoutUrls.proConsulta,
          whatsapp: sanitizeSecureUrl(parsed.whatsapp, defaultCheckoutUrls.whatsapp)
        };
      }
    } catch (e) {}
    return defaultCheckoutUrls;
  });

  // Sync state modifications to LocalStorage automatically
  useEffect(() => {
    try {
      localStorage.setItem('kem_price_esencial', priceEsencial);
    } catch (e) {}
  }, [priceEsencial]);

  useEffect(() => {
    try {
      localStorage.setItem('kem_price_acompañamiento', priceAcompañamiento);
    } catch (e) {}
  }, [priceAcompañamiento]);

  useEffect(() => {
    try {
      localStorage.setItem('kem_price_consulta', priceConsulta);
    } catch (e) {}
  }, [priceConsulta]);

  useEffect(() => {
    try {
      localStorage.setItem('kem_checkout_urls', JSON.stringify(urls));
    } catch (e) {}
  }, [urls]);

  // Support smooth scroll triggers both locally and across pages
  const handleScrollToTeacher = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('sobre-katherinne');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    } else {
      const el = document.getElementById('sobre-katherinne');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Sync hash changes in URL bar with reactive page representation (helps back navigation)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'kem-mom') setCurrentPage('kem-mom');
      else if (hash === 'kem-pro') setCurrentPage('kem-pro');
      else setCurrentPage('home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHash);
    // Initial check on load
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash === 'kem-mom') setCurrentPage('kem-mom');
    else if (initialHash === 'kem-pro') setCurrentPage('kem-pro');

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Sync dynamic SEO metadata and document title for Google Search & social cards
  useEffect(() => {
    let title = "KEM Nutrition Academy | Nutrición en Maternidad y Formación Clínica";
    let desc = "Academia de nutrición materna y salud por Katherinne Elgueta Mora. Consulta y acompañamiento en Kem Mom, formación clínica en Kem Pro y guía gratuita.";
    let canonicalUrl = "https://kemnutritionacademy.com/";

    if (currentPage === 'kem-mom') {
      title = "KEM Mom | Nutrición y Acompañamiento en Embarazo y Maternidad";
      desc = "Programas y consulta de nutrición personalizada para embarazo, preconcepción y postparto con Katherinne Elgueta Mora en KEM Nutrition Academy.";
      canonicalUrl = "https://kemnutritionacademy.com/#kem-mom";
    } else if (currentPage === 'kem-pro') {
      title = "KEM Pro | Formación Clínica Avanzada para Nutricionistas";
      desc = "Formación profesional especializada y mentoría clínica en nutrición materno-infantil impartida por Katherinne Elgueta Mora en KEM Nutrition Academy.";
      canonicalUrl = "https://kemnutritionacademy.com/#kem-pro";
    }

    document.title = title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', desc);

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', canonicalUrl);
  }, [currentPage]);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    // Sync hash URL bar so browser history acts appropriately
    window.location.hash = page === 'home' ? '' : page;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-violeta/20 bg-bg-warm" id="app-root-shell">
      {/* Fixed top Header Menu */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={handlePageChange} 
        onScrollToTeacher={handleScrollToTeacher}
        whatsappUrl={urls.whatsapp}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView 
            setCurrentPage={handlePageChange} 
            urls={urls} 
          />
        )}
        {currentPage === 'kem-mom' && (
          <MomView 
            urls={urls} 
            priceEsencial={priceEsencial} 
            priceAcompañamiento={priceAcompañamiento} 
            priceConsulta={priceConsulta}
            setCurrentPage={handlePageChange}
          />
        )}
        {currentPage === 'kem-pro' && (
          <ProView 
            urls={urls} 
            priceEsencial={priceEsencial} 
            priceAcompañamiento={priceAcompañamiento} 
            priceConsulta={priceConsulta}
            setCurrentPage={handlePageChange}
          />
        )}
      </main>

      {/* Persistent Legal, educational & disclaimer footer */}
      <Footer 
        setCurrentPage={handlePageChange} 
        onScrollToTeacher={handleScrollToTeacher}
        whatsappUrl={urls.whatsapp}
      />

    </div>
  );
}

