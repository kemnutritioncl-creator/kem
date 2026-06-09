/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckoutUrls } from '../types';
import { Settings, X, Check, RefreshCw, Link2, DollarSign, HelpCircle } from 'lucide-react';

interface ConfigDrawerProps {
  urls: CheckoutUrls;
  setUrls: (urls: CheckoutUrls) => void;
  priceEsencial: string;
  setPriceEsencial: (price: string) => void;
  priceAcompañamiento: string;
  setPriceAcompañamiento: (price: string) => void;
}

export default function ConfigDrawer({
  urls,
  setUrls,
  priceEsencial,
  setPriceEsencial,
  priceAcompañamiento,
  setPriceAcompañamiento
}: ConfigDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleUrlChange = (key: keyof CheckoutUrls, value: string) => {
    setUrls({
      ...urls,
      [key]: value
    });
  };

  const loadDefaults = () => {
    setUrls({
      momEsencial: "https://webpay.transbank.cl/KEM-Mom-Esencial",
      momAcompañamiento: "https://webpay.transbank.cl/KEM-Mom-Acompanamiento",
      proEsencial: "https://webpay.transbank.cl/KEM-Pro-Esencial",
      proAcompañamiento: "https://webpay.transbank.cl/KEM-Pro-Acompanamiento",
      whatsapp: "https://wa.me/56985489624?text=Hola%20Katherinne%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20KEM%20Nutrition%20Academy"
    });
    setPriceEsencial("97.000");
    setPriceAcompañamiento("217.000");
  };

  return (
    <>
      {/* Floating Gear Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-violeta hover:bg-violeta-dark text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
        title="Configurar Variables y Enlaces de Checkout"
        id="trigger-config-panel"
      >
        <Settings className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#2D3142] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:inline">
          Panel de Configuración de Enlaces
        </span>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#2D3142]/40 backdrop-blur-xs transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transition-transform duration-300 transform font-sans flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="config-sidebar"
      >
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-[#2D3142] text-white">
          <div>
            <h3 className="font-serif font-semibold text-lg flex items-center gap-2">
              <Settings className="w-5 h-5 text-naranja animate-spin-slow" />
              Configurar Enlaces y Precios
            </h3>
            <p className="text-xs text-stone-300 mt-0.5">
              Personaliza tus botones de Webpay/WhatsApp
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg hover:bg-stone-800 text-stone-400 hover:text-white cursor-pointer"
            id="close-config-drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="bg-stone-50 rounded-xl p-4 text-xs text-carbon-body border border-stone-200/60 leading-relaxed">
            <span className="font-bold text-carbon-title block mb-1">💡 ¿Cómo funciona?</span>
            Modifica aquí las variables del sitio. Las tarjetas de precios, los enlaces de WhatsApp y los botones de inscripción se actualizarán de forma inmediata en todas las páginas.
          </div>

          {/* Pricing Config */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-carbon-title text-sm border-b border-stone-100 pb-2 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-verde" />
              Precios CLP (Formato texto)
            </h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-carbon-body uppercase mb-1.5">Plan Esencial</label>
                <input
                  type="text"
                  value={priceEsencial}
                  onChange={(e) => setPriceEsencial(e.target.value)}
                  placeholder="97.000"
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-violeta focus:border-violeta"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-carbon-body uppercase mb-1.5">Plan Acompañamiento</label>
                <input
                  type="text"
                  value={priceAcompañamiento}
                  onChange={(e) => setPriceAcompañamiento(e.target.value)}
                  placeholder="217.000"
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-violeta focus:border-violeta"
                />
              </div>
            </div>
          </div>

          {/* Links config */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-carbon-title text-sm border-b border-stone-100 pb-2 flex items-center gap-1.5">
              <Link2 className="w-4 h-4 text-naranja" />
              Enlaces de Checkout (KEM Mom)
            </h4>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-carbon-body mb-1">
                  KEM Mom Esencial (Webpay)
                </label>
                <input
                  type="text"
                  value={urls.momEsencial}
                  onChange={(e) => handleUrlChange('momEsencial', e.target.value)}
                  placeholder="Ej: https://webpay.cl/..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg font-mono focus:outline-hidden focus:ring-1 focus:ring-naranja focus:border-naranja"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-carbon-body mb-1">
                  KEM Mom Acompañamiento (Webpay)
                </label>
                <input
                  type="text"
                  value={urls.momAcompañamiento}
                  onChange={(e) => handleUrlChange('momAcompañamiento', e.target.value)}
                  placeholder="Ej: https://webpay.cl/..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg font-mono focus:outline-hidden focus:ring-1 focus:ring-naranja focus:border-naranja"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif font-bold text-carbon-title text-sm border-b border-stone-100 pb-2 flex items-center gap-1.5">
              <Link2 className="w-4 h-4 text-violeta" />
              Enlaces de Checkout (KEM Pro)
            </h4>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-carbon-body mb-1">
                  KEM Pro Esencial (Webpay)
                </label>
                <input
                  type="text"
                  value={urls.proEsencial}
                  onChange={(e) => handleUrlChange('proEsencial', e.target.value)}
                  placeholder="Ej: https://webpay.cl/..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg font-mono focus:outline-hidden focus:ring-1 focus:ring-violeta focus:border-violeta"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-carbon-body mb-1">
                  KEM Pro Acompañamiento (Webpay)
                </label>
                <input
                  type="text"
                  value={urls.proAcompañamiento}
                  onChange={(e) => handleUrlChange('proAcompañamiento', e.target.value)}
                  placeholder="Ej: https://webpay.cl/..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg font-mono focus:outline-hidden focus:ring-1 focus:ring-violeta focus:border-violeta"
                />
              </div>
            </div>
          </div>

          {/* WhatsApp config */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-carbon-title text-sm border-b border-stone-100 pb-2 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-verde" />
              Contacto WhatsApp
            </h4>

            <div>
              <label className="block text-xs font-bold text-carbon-body mb-1">
                WhatsApp Link completo
              </label>
              <textarea
                rows={2}
                value={urls.whatsapp}
                onChange={(e) => handleUrlChange('whatsapp', e.target.value)}
                placeholder="Ej: https://wa.me/..."
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg font-mono focus:outline-hidden focus:ring-1 focus:ring-verde focus:border-verde"
              />
            </div>
          </div>
        </div>

        {/* Footer actions of drawer */}
        <div className="p-6 border-t border-stone-100 bg-stone-50 flex gap-3 text-sm">
          <button
            onClick={loadDefaults}
            className="flex-1 py-2.5 rounded-lg border border-stone-300 text-carbon-title text-xs font-semibold bg-white hover:bg-stone-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Cargar Demos
          </button>
          
          <button
            onClick={() => {
              setIsOpen(false);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="flex-1 py-2.5 rounded-lg bg-verde text-white font-semibold text-xs hover:bg-[#5E9374] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            Aplicar Cambios
          </button>
        </div>
      </div>

      {/* Copy Alert Toast */}
      {copied && (
        <div className="fixed bottom-24 right-6 z-50 bg-[#2D3142] text-white px-4 py-3 rounded-xl shadow-lg animate-fade-in flex items-center gap-2 text-sm font-sans">
          <Check className="w-4 h-4 text-verde" />
          <span>¡Configuración aplicada dinámicamente!</span>
        </div>
      )}
    </>
  );
}
