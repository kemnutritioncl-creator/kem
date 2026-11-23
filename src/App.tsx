/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { PRICES, CHECKOUT_URLS, SHOW_KEM_PRO } from './config';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import MomView from './components/MomView';
import ProView from './components/ProView';
import TermsView from './components/TermsView';
import PrivacyView from './components/PrivacyView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Remove legacy localStorage keys once on load
  useEffect(() => {
    try {
      const legacyKeys = [
        'kem_price_esencial',
        'kem_price_acompañamiento',
        'kem_price_consulta',
        'kem_checkout_urls',
      ];
      legacyKeys.forEach((key) => localStorage.removeItem(key));
    } catch {
      // Ignore storage access errors
    }
  }, []);

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
      else if (hash === 'terminos') setCurrentPage('terminos');
      else if (hash === 'privacidad') setCurrentPage('privacidad');
      else setCurrentPage('home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHash);
    // Initial check on load
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash === 'kem-mom') setCurrentPage('kem-mom');
    else if (initialHash === 'kem-pro') setCurrentPage('kem-pro');
    else if (initialHash === 'terminos') setCurrentPage('terminos');
    else if (initialHash === 'privacidad') setCurrentPage('privacidad');

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Sync dynamic SEO metadata and document title for Google Search & social cards
  useEffect(() => {
    let title = "KEM Nutrition Academy | Nutrición en la maternidad y consulta clínica";
    let desc = SHOW_KEM_PRO
      ? "Acompañamiento nutricional en embarazo, posparto y lactancia por Katherinne Elgueta Mora, nutricionista clínica. Consulta 1:1, programa KEM Mom, KEM Pro (próximamente) y guía gratuita."
      : "Acompañamiento nutricional en embarazo, posparto y lactancia por Katherinne Elgueta Mora, nutricionista clínica. Consulta 1:1, programa KEM Mom y guía gratuita.";
    let canonicalUrl = "https://kemnutritionacademy.com/";

    if (currentPage === 'kem-mom') {
      title = "KEM Mom | Nutrición y acompañamiento en embarazo y maternidad";
      desc = "Programas y consulta de nutrición personalizada para embarazo, preconcepción y posparto con Katherinne Elgueta Mora en KEM Nutrition Academy.";
      canonicalUrl = "https://kemnutritionacademy.com/#kem-mom";
    } else if (currentPage === 'kem-pro') {
      if (SHOW_KEM_PRO) {
        title = "KEM Pro | Próximamente, programa clínico para nutricionistas";
        desc = "Próximamente: programa clínico de KEM Nutrition Academy para nutricionistas titulados que quieren atender gestantes con seguridad.";
      } else {
        title = "KEM Nutrition, próximamente";
        desc = "KEM Nutrition, próximamente";
      }
      canonicalUrl = "https://kemnutritionacademy.com/#kem-pro";
    } else if (currentPage === 'terminos') {
      title = "Términos y condiciones | KEM Nutrition Academy";
      desc = "Términos y condiciones de contratación de los programas y consultas clínicas de KEM Nutrition Academy (KEM NUTRITION SpA).";
      canonicalUrl = "https://kemnutritionacademy.com/#terminos";
    } else if (currentPage === 'privacidad') {
      title = "Política de privacidad | KEM Nutrition Academy";
      desc = "Política de privacidad y tratamiento de datos personales y de salud de KEM Nutrition Academy (KEM NUTRITION SpA).";
      canonicalUrl = "https://kemnutritionacademy.com/#privacidad";
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
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomeView 
            setCurrentPage={handlePageChange} 
            urls={CHECKOUT_URLS} 
          />
        )}
        {currentPage === 'kem-mom' && (
          <MomView 
            urls={CHECKOUT_URLS} 
            priceEsencial={PRICES.esencial} 
            priceAcompañamiento={PRICES.acompanamiento} 
            priceConsulta={PRICES.consulta}
            setCurrentPage={handlePageChange}
          />
        )}
        {currentPage === 'kem-pro' && (
          <ProView 
            urls={CHECKOUT_URLS} 
            priceEsencial={PRICES.esencial} 
            priceAcompañamiento={PRICES.acompanamiento} 
            priceConsulta={PRICES.consulta}
            setCurrentPage={handlePageChange}
          />
        )}
        {currentPage === 'terminos' && (
          <TermsView setCurrentPage={handlePageChange} />
        )}
        {currentPage === 'privacidad' && (
          <PrivacyView setCurrentPage={handlePageChange} />
        )}
      </main>

      {/* Persistent Legal, educational & disclaimer footer */}
      <Footer 
        setCurrentPage={handlePageChange} 
        onScrollToTeacher={handleScrollToTeacher}
      />

    </div>
  );
}

