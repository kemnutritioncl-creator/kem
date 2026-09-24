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
    try {
      return localStorage.getItem('kem_price_esencial') || '97.000';
    } catch (e) {
      return '97.000';
    }
  });
  
  const [priceAcompañamiento, setPriceAcompañamiento] = useState<string>(() => {
    try {
      return localStorage.getItem('kem_price_acompañamiento') || '217.000';
    } catch (e) {
      return '217.000';
    }
  });

  const [priceConsulta, setPriceConsulta] = useState<string>(() => {
    try {
      return localStorage.getItem('kem_price_consulta') || '47.000';
    } catch (e) {
      return '47.000';
    }
  });

  // Unique Flow, Calendly and WhatsApp links
  const defaultCheckoutUrls: CheckoutUrls = {
    momEsencial: "https://www.flow.cl/btn.php?token=md684de16d889abef823b66ec6fddbe277647f6c",
    momAcompañamiento: "https://www.flow.cl/btn.php?token=l6eca65398973d28641a3de344ef16e6c008cd77",
    momConsulta: "https://calendly.com/kemnutritioncl/30min",
    proEsencial: "https://www.flow.cl/btn.php?token=md684de16d889abef823b66ec6fddbe277647f6c",
    proAcompañamiento: "https://www.flow.cl/btn.php?token=l6eca65398973d28641a3de344ef16e6c008cd77",
    proConsulta: "https://calendly.com/kemnutritioncl/30min",
    whatsapp: "https://wa.me/56985489624?text=Hola%20Katherinne%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20KEM%20Nutrition%20Academy"
  };

  const [urls, setUrls] = useState<CheckoutUrls>(() => {
    try {
      const cached = localStorage.getItem('kem_checkout_urls');
      if (cached) {
        const parsed = JSON.parse(cached);
        // Replace old transbank placeholders with active production links
        return {
          momEsencial: parsed.momEsencial && !parsed.momEsencial.includes('transbank.cl')
            ? parsed.momEsencial
            : defaultCheckoutUrls.momEsencial,
          momAcompañamiento: parsed.momAcompañamiento && !parsed.momAcompañamiento.includes('transbank.cl')
            ? parsed.momAcompañamiento
            : defaultCheckoutUrls.momAcompañamiento,
          momConsulta: defaultCheckoutUrls.momConsulta,
          proEsencial: parsed.proEsencial && !parsed.proEsencial.includes('transbank.cl')
            ? parsed.proEsencial
            : defaultCheckoutUrls.proEsencial,
          proAcompañamiento: parsed.proAcompañamiento && !parsed.proAcompañamiento.includes('transbank.cl')
            ? parsed.proAcompañamiento
            : defaultCheckoutUrls.proAcompañamiento,
          proConsulta: defaultCheckoutUrls.proConsulta,
          whatsapp: parsed.whatsapp || defaultCheckoutUrls.whatsapp
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

