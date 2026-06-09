/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Heart, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onScrollToTeacher: () => void;
  whatsappUrl: string;
}

export default function Navbar({ currentPage, setCurrentPage, onScrollToTeacher, whatsappUrl }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const logoUrl = "https://lh3.googleusercontent.com/d/1p0asa7stCkGKjn1gVpgUglAdt6qzDYG0";

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTeacherClick = () => {
    setIsOpen(false);
    onScrollToTeacher();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            id="nav-logo-btn"
          >
            {!logoError ? (
              <img 
                src={logoUrl} 
                alt="KEM Nutrition Academy" 
                className="h-20 sm:h-[88px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={() => {
                  console.warn("Logo from Google Drive failed to load, falling back to clean text rendering.");
                  setLogoError(true);
                }}
              />
            ) : (
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg bg-gradient-to-tr from-naranja via-verde to-violeta animate-flow shadow-sm group-hover:scale-105 transition-transform">
                  K
                </div>
                <div>
                  <span className="font-serif font-semibold text-lg sm:text-xl tracking-tight text-carbon-title block leading-none">
                    KEM Nutrition
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#6FA987] uppercase font-bold block mt-0.5">
                    Academy
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-2 cursor-pointer ${
                currentPage === 'home' ? 'text-violeta font-semibold' : 'text-carbon-body hover:text-carbon-title'
              }`}
              id="nav-link-home"
            >
              Inicio
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violeta rounded-full" />
              )}
            </button>
            <button
              onClick={() => handleNavClick('kem-mom')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-2 cursor-pointer ${
                currentPage === 'kem-mom' ? 'text-naranja font-semibold' : 'text-carbon-body hover:text-naranja'
              }`}
              id="nav-link-mom"
            >
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 inline text-naranja fill-naranja/20" />
                KEM Mom
              </span>
              {currentPage === 'kem-mom' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-naranja rounded-full" />
              )}
            </button>
            <button
              onClick={() => handleNavClick('kem-pro')}
              className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-2 cursor-pointer ${
                currentPage === 'kem-pro' ? 'text-violeta font-semibold' : 'text-carbon-body hover:text-violeta'
              }`}
              id="nav-link-pro"
            >
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 inline text-violeta" />
                KEM Pro
              </span>
              {currentPage === 'kem-pro' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violeta rounded-full" />
              )}
            </button>
            <button
              onClick={handleTeacherClick}
              className="font-sans text-sm font-medium tracking-wide text-carbon-body hover:text-carbon-title cursor-pointer py-2"
              id="nav-link-teacher"
            >
              Sobre Katherinne
            </button>
          </div>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-stone-200 text-carbon-title hover:border-violeta hover:text-violeta transition-all bg-stone-50 hover:bg-white"
              id="nav-contact-whatsapp"
            >
              WhatsApp
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => handleNavClick(currentPage === 'home' ? 'kem-mom' : currentPage)}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-violeta hover:bg-violeta-dark transition-all shadow-sm cursor-pointer"
              id="nav-cta-btn"
            >
              {currentPage === 'home' ? 'Ver Academias' : 'Inscribirme'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-carbon-title hover:bg-stone-50 cursor-pointer focus:outline-hidden"
              aria-label="Abrir Menú"
              id="nav-mobile-hamburger"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white/95 border-b border-stone-100 backdrop-blur-md animate-fade-in px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-3 rounded-xl font-sans text-base font-medium transition-colors ${
              currentPage === 'home' ? 'bg-violeta/10 text-violeta font-semibold' : 'text-carbon-body hover:bg-stone-50'
            }`}
            id="mobile-nav-home"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('kem-mom')}
            className={`w-full text-left px-4 py-3 rounded-xl font-sans text-base font-medium transition-colors ${
              currentPage === 'kem-mom' ? 'bg-naranja/10 text-naranja font-semibold' : 'text-carbon-body hover:bg-stone-50'
            }`}
            id="mobile-nav-mom"
          >
            KEM Mom (Para Madres)
          </button>
          <button
            onClick={() => handleNavClick('kem-pro')}
            className={`w-full text-left px-4 py-3 rounded-xl font-sans text-base font-medium transition-colors ${
              currentPage === 'kem-pro' ? 'bg-violeta/10 text-violeta font-semibold' : 'text-carbon-body hover:bg-stone-50'
            }`}
            id="mobile-nav-pro"
          >
            KEM Pro (Nutricionistas)
          </button>
          <button
            onClick={handleTeacherClick}
            className="w-full text-left px-4 py-3 rounded-xl font-sans text-base font-medium text-carbon-body hover:bg-stone-50 transition-colors"
            id="mobile-nav-teacher"
          >
            Sobre Katherinne
          </button>

          <div className="pt-4 border-t border-stone-100 flex flex-col gap-3 px-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl text-sm font-semibold tracking-wider uppercase border border-stone-200 text-carbon-title"
              id="mobile-nav-whatsapp"
            >
              Conversar por WhatsApp
            </a>
            <button
              onClick={() => handleNavClick(currentPage === 'home' ? 'kem-mom' : currentPage)}
              className="w-full text-center py-3 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-violeta"
              id="mobile-nav-cta"
            >
              {currentPage === 'home' ? 'Ver Academias' : 'Inscribirse al Programa'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
