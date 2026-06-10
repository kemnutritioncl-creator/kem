/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from '../types';
import { Heart, Sparkles, Instagram, Mail, ShieldAlert, Globe } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  onScrollToTeacher: () => void;
  whatsappUrl: string;
}

export default function Footer({ setCurrentPage, onScrollToTeacher, whatsappUrl }: FooterProps) {
  const [logoError, setLogoError] = useState(false);
  const logoUrl = "https://lh3.googleusercontent.com/d/1p0asa7stCkGKjn1gVpgUglAdt6qzDYG0";

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D3142] text-stone-300 pt-16 pb-12 border-t border-stone-800" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavClick('home')}>
              {!logoError ? (
                <img 
                  src={logoUrl} 
                  alt="KEM Nutrition Academy" 
                  className="h-24 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#2D3142] font-serif font-bold text-lg bg-gradient-to-tr from-naranja via-[#6FA987] to-[#8C6CE6]">
                    K
                  </div>
                  <div>
                    <span className="font-serif font-semibold text-xl text-white block leading-none">
                      KEM Nutrition
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#6FA987] uppercase font-bold block mt-0.5">
                      Academy
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-sm text-stone-400 max-w-sm font-sans leading-relaxed">
              Nutrición clínica materna de excelencia. Acompañamiento empático basado en evidencia científica para madres y capacitación de primer nivel para profesionales de la salud.
            </p>

            {/* Social Link */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://instagram.com/kemnutrition" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-naranja hover:bg-stone-700 transition-colors"
                id="footer-ig-link"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-[#6FA987] hover:bg-stone-700 transition-colors"
                id="footer-wa-link"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs Shortcuts */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-medium text-base tracking-wide">Academias</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNavClick('kem-mom')}
                  className="flex items-center gap-1.5 hover:text-naranja transition-colors cursor-pointer text-stone-400 text-left"
                  id="footer-shortcut-mom"
                >
                  <Heart className="w-3.5 h-3.5 text-naranja fill-naranja/10" />
                  Kem Mom (Para Madres)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('kem-pro')}
                  className="flex items-center gap-1.5 hover:text-[#8C6CE6] transition-colors cursor-pointer text-stone-400 text-left"
                  id="footer-shortcut-pro"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#8C6CE6]" />
                  Kem Pro (Nutricionistas)
                </button>
              </li>
              <li>
                <button 
                  onClick={onScrollToTeacher}
                  className="hover:text-white transition-colors cursor-pointer text-stone-400 text-left"
                >
                  Sobre la Directora
                </button>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-white font-medium text-base tracking-wide">Contacto</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#6FA987]" />
                <span>kemnutrition.cl</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6FA987]" />
                <span>contacto@kemnutrition.cl</span>
              </li>
              <li className="text-[12px] text-stone-500 pt-1">
                Santiago de Chile · Envío nacional e internacional
              </li>
            </ul>
          </div>

        </div>

        {/* Content Warning Notice */}
        <div className="border-t border-stone-800 pt-8 pb-4">
          <div className="bg-stone-800/50 rounded-xl p-4 flex gap-3 text-xs text-stone-400/95 leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-naranja shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#F2994A] block mb-1 uppercase tracking-wider text-[10px]">
                Aviso Importante de Responsabilidad Médica
              </span>
              Todo el contenido educativo provisto en las academias Kem Mom y Kem Pro, guías descargables, checklists, recetarios y charlas, es estrictamente informativo y docente. No sustituye de ninguna forma la consulta clínica individualizada, controles ginecobstétricos, de matonería o pediátricos, ni constituye asesoría clínica vinculante.
            </div>
          </div>
        </div>

        {/* Bottom Credits block */}
        <div className="mt-8 border-t border-stone-800/40 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} KEM Nutrition Academy. Todos los derechos reservados.
          </div>
          <div className="flex gap-4">
            <span className="cursor-default">Chile</span>
            <span>·</span>
            <span className="cursor-default">Evidencia y Confianza</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
