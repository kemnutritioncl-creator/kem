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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  
  // Pricing state synced with local storage for high-fidelity persistence
  const [priceEsencial, setPriceEsencial] = useState<string>(() => {
    return localStorage.getItem('kem_price_esencial') || '97.000';
  });
  
  const [priceAcompañamiento, setPriceAcompañamiento] = useState<string>(() => {
    return localStorage.getItem('kem_price_acompañamiento') || '217.000';
  });

  const [priceConsulta, setPriceConsulta] = useState<string>(() => {
    return localStorage.getItem('kem_price_consulta') || '47.000';
  });

  // Unique Webpay and WhatsApp links
  const [urls, setUrls] = useState<CheckoutUrls>(() => {
    try {
      const cached = localStorage.getItem('kem_checkout_urls');
      if (cached) {
        const parsed = JSON.parse(cached);
        // Ensure new fields are backward compatible in cached structures
        return {
          momEsencial: parsed.momEsencial || "https://webpay.transbank.cl/KEM-Mom-Esencial",
          momAcompañamiento: parsed.momAcompañamiento || "https://webpay.transbank.cl/KEM-Mom-Acompanamiento",
          momConsulta: parsed.momConsulta || "https://webpay.transbank.cl/KEM-Mom-Consulta",
          proEsencial: parsed.proEsencial || "https://webpay.transbank.cl/KEM-Pro-Esencial",
          proAcompañamiento: parsed.proAcompañamiento || "https://webpay.transbank.cl/KEM-Pro-Acompanamiento",
          proConsulta: parsed.proConsulta || "https://webpay.transbank.cl/KEM-Pro-Consulta",
          whatsapp: parsed.whatsapp || "https://wa.me/56985489624?text=Hola%20Katherinne%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%2520sobre%20KEM%20Nutrition%20Academy"
        };
      }
    } catch (e) {}
    return {
      momEsencial: "https://webpay.transbank.cl/KEM-Mom-Esencial",
      momAcompañamiento: "https://webpay.transbank.cl/KEM-Mom-Acompanamiento",
      momConsulta: "https://webpay.transbank.cl/KEM-Mom-Consulta",
      proEsencial: "https://webpay.transbank.cl/KEM-Pro-Esencial",
      proAcompañamiento: "https://webpay.transbank.cl/KEM-Pro-Acompanamiento",
      proConsulta: "https://webpay.transbank.cl/KEM-Pro-Consulta",
      whatsapp: "https://wa.me/56985489624?text=Hola%20Katherinne%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20KEM%20Nutrition%20Academy"
    };
  });

  // Sync state modifications to LocalStorage automatically
  useEffect(() => {
    localStorage.setItem('kem_price_esencial', priceEsencial);
  }, [priceEsencial]);

  useEffect(() => {
    localStorage.setItem('kem_price_acompañamiento', priceAcompañamiento);
  }, [priceAcompañamiento]);

  useEffect(() => {
    localStorage.setItem('kem_price_consulta', priceConsulta);
  }, [priceConsulta]);

  useEffect(() => {
    localStorage.setItem('kem_checkout_urls', JSON.stringify(urls));
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

