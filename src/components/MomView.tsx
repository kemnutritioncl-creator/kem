/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, CheckoutUrls } from '../types';
import { momModules, momFaqs, OPINIONES_KEM_MOM } from '../data';
import { 
  Heart, 
  ArrowRight, 
  Check, 
  X, 
  BookOpen, 
  Sparkles, 
  ChevronDown, 
  Users, 
  Clock, 
  Calendar, 
  HelpCircle, 
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Award,
  Play,
  FileText,
  Pill,
  Utensils,
  Droplets,
  Mail
} from 'lucide-react';

interface MomViewProps {
  urls: CheckoutUrls;
  priceEsencial: string;
  priceAcompañamiento: string;
  priceConsulta: string;
  setCurrentPage: (page: PageId) => void;
}

export default function MomView({ urls, priceEsencial, priceAcompañamiento, priceConsulta, setCurrentPage }: MomViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showConfigAlert, setShowConfigAlert] = useState(false);
  const [alertTier, setAlertTier] = useState('');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  // Setup reveal effects using scroll observers
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal');
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      elements.forEach(el => {
        el.classList.add('visible');
        el.classList.remove('opacity-0', 'translate-y-8');
      });
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCheckoutClick = (e: React.MouseEvent, tierName: string, url: string) => {
    if (!url || url.includes('PEGAR_URL') || url === '#' || url.endsWith('Esencial') || url.endsWith('Acompanamiento') || url.endsWith('Consulta')) {
      e.preventDefault();
      setAlertTier(tierName);
      setShowConfigAlert(true);
    }
  };

  return (
    <div className="pt-24 font-sans overflow-x-hidden bg-gradient-to-b from-[#FDFBF7] to-white">
      
      {/* 1. Hero Cálido */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-orange-100/30">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-naranja/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-verde/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-naranja/10 border border-naranja/20 text-naranja">
                <Heart className="w-3.5 h-3.5 fill-naranja/10" />
                <span className="text-xs font-bold uppercase tracking-wider">KEM Mom</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-carbon-title font-semibold tracking-tight">
                Vive tu embarazo con <span className="text-naranja font-bold">confianza</span>, no con dudas
              </h1>

              <p className="text-base sm:text-lg text-[#514F5C] leading-relaxed max-w-3xl">
                Un programa de acompañamiento nutricional para la preconcepción, el embarazo, el posparto y la lactancia. Basado en evidencia y explicado de forma simple para tu día a día.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#planes-precios"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('planes-precios')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-naranja hover:bg-orange-500 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
                  id="mom-hero-cta"
                >
                  Ver planes
                </a>
                <a
                  href="mailto:kemnutritioncl@gmail.com"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white border border-stone-200 text-carbon-title font-semibold text-sm hover:bg-stone-50 transition-colors"
                  id="mom-hero-contact-email"
                >
                  Consultar por correo
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 select-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-naranja/20 to-verde/10 rounded-full rotate-6 scale-105" />
                <div className="absolute inset-0 bg-white rounded-full overflow-hidden border-2 border-stone-100 shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1pBHcfrQ4Uf0MIzL3Fb-JsqAOaEyjK1m3"
                    alt="KEM Mom Hero" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Para quién es */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold">Público objetivo</span>
            
            <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight">
              ¿Este programa es idóneo para mí?
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Este programa está pensado para mujeres que buscan embarazarse, gestantes y mamás, y también para quien las acompaña en este proceso, que desean transitar la preconcepción, fertilidad, embarazo activo, posparto o lactancia libre de agobios.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-naranja/10 text-naranja flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <p className="text-xs sm:text-sm text-stone-600">Buscas información de nutrición validada clínicamente y no consejos anecdóticos de redes sociales.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-naranja/10 text-naranja flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <p className="text-xs sm:text-sm text-stone-600">Te sientes cansada de las estrictas dietas restrictivas y buscas un camino balanceado y nutritivo.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-naranja/10 text-naranja flex items-center justify-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5" /></div>
                <p className="text-xs sm:text-sm text-stone-600">Quieres entender mejor las molestias digestivas, el cansancio, la anemia o la diabetes gestacional, y acompañar tu tratamiento con tu equipo de salud.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. El problema antes del programa */}
      <section className="py-12 sm:py-20 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">La realidad actual</span>
          <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight leading-snug">
            La incertidumbre y sobreinformación constante en el embarazo
          </h2>
          <p className="text-base text-[#514F5C] font-light max-w-3xl mx-auto">
            Pasas horas en buscadores de internet sobre si puedes comer tal o cual alimento, con miedo de que algo le haga daño al desarrollo de tu bebé. Subes más peso del que esperabas, las náuseas no se te quitan con nada, te diagnostican diabetes gestacional, la acidez o estreñimiento no te deja ni comer tranquila y nadie te explica cómo suplementarte bien. Para colmo, el médico te recibe en pocos minutos, te manda a tomar vitaminas y ya, sin preguntar más detalles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-naranja font-extrabold block mb-2">01</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Dudas con cada comida</h4>
              <p className="text-xs text-stone-500 leading-relaxed font-light">¿Es seguro comer sushi? ¿Puedo tomar infusiones? Un mar de mitos cotidianos que te llenan de dudas antes de sentarte a la mesa.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-[#6FA987] font-extrabold block mb-2">02</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Síntomas sin respuesta</h4>
              <p className="text-xs text-stone-500 leading-relaxed font-light">Náuseas constantes, reflujo insoportable, acidez y un estreñimiento molesto que te hace sentir pesada y nadie te enseña a aliviar de verdad.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-violeta font-extrabold block mb-2">03</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Miedo a complicaciones</h4>
              <p className="text-xs text-stone-500 leading-relaxed font-light">El susto por exámenes de glucosa alterados, temor al diagnóstico de diabetes gestacional o a no saber si estás subiendo más peso de lo normal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. La transformación */}
      <section className="py-12 sm:py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-verde/10 text-verde flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <p className="text-stone-400 font-mono text-xs uppercase tracking-widest font-bold">Nuestra promesa</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">
            La transformación KEM Mom
          </h2>
          <blockquote className="text-xl sm:text-2xl font-serif italic text-stone-700 max-w-3xl mx-auto leading-relaxed">
            "Al terminar este programa vas a sentirte más segura y confiada para decidir sobre tu alimentación y la de tu bebé, con claridad, paz mental y completamente libre de juicios."
          </blockquote>
        </div>
      </section>

      {/* 5. Qué incluye el programa */}
      <section className="py-12 sm:py-20 bg-[#FBF9F6]/40 border-t border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">Qué incluye</span>
            <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight">¿Qué obtienes exactamente al inscribirte?</h2>
            <p className="text-sm text-stone-500 font-light">Herramientas estructuradas de calidad clínica adaptadas al hogar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-naranja/10 text-naranja flex items-center justify-center"><Play className="w-5 h-5" /></div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Presentaciones y videos resumen</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Cada módulo incluye presentaciones y videos resumen, para revisar a tu propio ritmo sin abrumarte del cansancio diario.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#6FA987]/10 text-[#6FA987] flex items-center justify-center"><FileText className="w-5 h-5" /></div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Checklists y resúmenes</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Hojas ágiles visuales por trimestre para monitorear qué comprar, qué suplementos tomar y qué exámenes conversar con tu equipo de salud.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-violeta/10 text-violeta flex items-center justify-center"><Pill className="w-5 h-5" /></div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Guía de suplementación</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Dosis de referencia y cómo combinar tus suplementos (por ejemplo, hierro y calcio por separado).</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-naranja/10 text-naranja flex items-center justify-center"><Utensils className="w-5 h-5" /></div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Recetarios anti-síntomas</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Recetas fáciles de digerir, pensadas para las náuseas, la acidez y el reflujo.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#6FA987]/10 text-[#6FA987] flex items-center justify-center"><Droplets className="w-5 h-5" /></div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Protocolo diabetes gestacional</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Guía para ordenar tus carbohidratos y acompañar tu monitoreo junto a tu equipo tratante.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Tu recorrido, etapa por etapa */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold">Tu recorrido, etapa por etapa</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-carbon-title tracking-tight text-center">
              8 etapas, un mismo acompañamiento
            </h2>
            <p className="text-sm text-stone-500 max-w-xl mx-auto font-light">
              Entra en el momento en el que estás hoy.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-orange-100 pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-12">
            
            {/* Etapa 1 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                1
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Prepara tu cuerpo antes de buscar el embarazo
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-4 flex items-start gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-100/40">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider shrink-0 mt-0.5">Resuelve:</span>
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">llegar sin déficits.</span>
                  </div>
                  <div className="md:col-span-8 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">Logras:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">priorizar ácido fólico, hierro, yodo, vitamina D y zinc, cuidar tu microbiota y ajustar hábitos de fertilidad.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                2
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Sobrevive al primer trimestre sin dejar de nutrir a tu bebé
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-4 flex items-start gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-100/40">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider shrink-0 mt-0.5">Resuelve:</span>
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">náuseas y cansancio.</span>
                  </div>
                  <div className="md:col-span-8 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">Logras:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">aliviar las náuseas con seguridad y sostener tu energía cuando baja el apetito.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                3
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Deja de preguntarte si comes bien
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-4 flex items-start gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-100/40">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider shrink-0 mt-0.5">Resuelve:</span>
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">la duda constante.</span>
                  </div>
                  <div className="md:col-span-8 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">Logras:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">armar comidas que cubren hierro, calcio, DHA, colina y fibra, y ordenar tu semana.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                4
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Maneja las molestias del embarazo con comida
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-4 flex items-start gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-100/40">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider shrink-0 mt-0.5">Resuelve:</span>
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">estreñimiento, acidez, reflujo y antojos.</span>
                  </div>
                  <div className="md:col-span-8 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">Logras:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">aliviarlos de forma natural y sin culpa.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 5 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                5
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Enfrenta la diabetes gestacional sin miedo
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-4 flex items-start gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-100/40">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider shrink-0 mt-0.5">Resuelve:</span>
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">el susto del diagnóstico.</span>
                  </div>
                  <div className="md:col-span-8 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">Logras:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">entenderla, distribuir tus carbohidratos y acompañar tu monitoreo con calma.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 6 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                6
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Llega al parto preparada para lo que viene
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-4 flex items-start gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-100/40">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider shrink-0 mt-0.5">Resuelve:</span>
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">la recta final a ciegas.</span>
                  </div>
                  <div className="md:col-span-8 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">Logras:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">ajustar tu alimentación, entender la extracción prenatal de calostro y prepararte para la lactancia.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 7 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                7
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Recupérate en el posparto sin olvidarte de ti
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-4 flex items-start gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-100/40">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider shrink-0 mt-0.5">Resuelve:</span>
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">el puerperio en que la madre queda al final.</span>
                  </div>
                  <div className="md:col-span-8 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">Logras:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">reponer reservas, recuperar energía y cuidar tu bienestar físico y emocional.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 8 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                8
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Alimenta tu lactancia sin caer en los mitos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-4 flex items-start gap-2 bg-orange-50/60 p-3 rounded-xl border border-orange-100/40">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wider shrink-0 mt-0.5">Resuelve:</span>
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">las mil versiones sobre qué comer.</span>
                  </div>
                  <div className="md:col-span-8 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">Logras:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">alimentarte bien, separar mitos de evidencia y sostener tu energía.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Franja "Por qué esto no es más información de internet" */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800 space-y-8 mt-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-center space-y-2">
              <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">Diferenciación clave</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Por qué esto no es más información de internet
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-full bg-naranja/20 text-naranja flex items-center justify-center font-bold text-sm">1</div>
                <h4 className="font-serif font-bold text-white text-base">Ordenada y validada</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  No necesitas más información, la necesitas ordenada por tu etapa y validada por una nutricionista clínica.
                </p>
              </div>
              
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-full bg-[#6FA987]/20 text-[#6FA987] flex items-center justify-center font-bold text-sm">2</div>
                <h4 className="font-serif font-bold text-white text-base">Al grano</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  Videos cortos y directos. Ves solo lo de tu momento.
                </p>
              </div>
              
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-full bg-violeta/20 text-violeta flex items-center justify-center font-bold text-sm">3</div>
                <h4 className="font-serif font-bold text-white text-base">Cobertura completa</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  Cubre de la preconcepción a la lactancia y situaciones como diabetes gestacional. Tu etapa siempre está.
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <a
                href="#planes-precios"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('planes-precios')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-naranja hover:bg-orange-500 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                Ver los planes <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Capturas reales del espacio privado */}
      <section className="py-12 sm:py-20 bg-white border-t border-stone-200/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">Capturas reales</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">Así se ve tu espacio KEM Mom</h2>
            <p className="text-sm sm:text-base text-stone-500 font-light">
              Al comprar, entras a un espacio privado con tu correo. Esto es lo que vas a encontrar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {[
              {
                src: '/aula/aula-inicio.webp',
                alt: 'Captura del inicio del espacio privado KEM Mom con el porcentaje de avance y el acceso a los módulos del programa',
                caption: 'Tu avance y por dónde seguir'
              },
              {
                src: '/aula/aula-material.webp',
                alt: 'Captura del visor protegido de presentaciones con las diapositivas de cada tema en KEM Mom',
                caption: 'Material de cada tema en un visor protegido'
              },
              {
                src: '/aula/aula-recursos.webp',
                alt: 'Captura de la biblioteca científica de KEM Mom con checklists, guías y planillas de seguimiento',
                caption: 'Guías y planillas para tu día a día'
              },
              {
                src: '/aula/aula-recetas.webp',
                alt: 'Captura de la sección de recetas de KEM Mom organizadas por temporada con fichas nutricionales',
                caption: 'Recetas por temporada'
              }
            ].map((item) => (
              <figure key={item.src} className="space-y-3">
                <button
                  type="button"
                  onClick={() => setLightboxImage(item)}
                  className="w-full block rounded-2xl border border-stone-200/80 shadow-xs overflow-hidden bg-white cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-naranja/40"
                  aria-label={`Ampliar imagen: ${item.caption}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </button>
                <figcaption className="text-xs sm:text-sm text-stone-600 font-light px-1">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Planes y Precios */}
      <section className="py-12 sm:py-20 bg-[#FBF9F6]" id="planes-precios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">Precios transparentes</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">Elige el nivel de acompañamiento</h2>
            <p className="text-sm text-stone-500 max-w-md mx-auto font-light">Valores en pesos chilenos (CLP). Pago seguro vía Flow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Plan Esencial */}
            <div className="bg-white rounded-3xl border border-stone-200/70 p-8 flex flex-col justify-between shadow-xs hover:border-naranja/40 hover:shadow-md transition-all text-left">
              
              <div className="space-y-6 text-left">
                <div>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider inline-block">
                    Plan Esencial (asíncrono)
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-carbon-title mt-2 text-left">Programa KEM Mom (para gestantes y familias)</h3>
                  <p className="text-xs text-stone-500 mt-1 text-left">Avanza a tu ritmo.</p>
                </div>

                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 flex flex-col items-center justify-center text-center gap-1">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-xs font-bold text-stone-400 font-sans">CLP</span>
                    <span className="text-3xl font-serif font-extrabold text-[#2D3142] tracking-tight whitespace-nowrap">${priceEsencial}</span>
                  </div>
                  <span className="text-xs text-stone-500 font-medium">Pago único</span>
                  <span className="text-[11px] text-stone-500 font-normal">Paga en cuotas con tu tarjeta de crédito, según las condiciones de tu banco</span>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0 mt-0.5" />
                    <span>Acceso por 12 meses a los 8 módulos, con presentaciones y videos resumen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0 mt-0.5" />
                    <span>Guías, recetarios y checklists.</span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-400">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>No incluye sesiones individuales ni soporte por correo.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.momEsencial}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleCheckoutClick(e, 'KEM Mom Esencial', urls.momEsencial)}
                  className="block text-center w-full py-3.5 rounded-full bg-stone-900 text-white font-bold text-xs tracking-wider uppercase hover:bg-stone-800 transition-colors cursor-pointer"
                  id="mom-checkout-esencial"
                >
                  Inscribirme al Plan Esencial
                </a>
              </div>

            </div>

            {/* Card 2: Plan Acompañamiento - DESTACADO */}
            <div className="bg-white rounded-3xl border-2 border-naranja p-8 flex flex-col justify-between shadow-xl relative transform md:scale-102 ring-2 ring-naranja/20 text-left">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-naranja text-white font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                Altamente recomendado
              </div>

              <div className="space-y-6 text-left">
                <div>
                  <span className="px-3 py-1 rounded-full bg-naranja/10 text-naranja text-[10px] font-bold uppercase tracking-wider inline-block">
                    Plan Completo + Acompañamiento (para gestantes y familias)
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-carbon-title mt-2 text-left">Programa KEM Mom (para gestantes y familias)</h3>
                  <p className="text-xs text-stone-500 mt-1 text-left">Todo el programa más seguimiento individual con Katherinne.</p>
                </div>

                <div className="bg-gradient-to-tr from-naranja/5 to-naranja/15 p-4 rounded-xl border border-naranja/10 flex flex-col items-center justify-center text-center gap-1">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-xs font-bold text-naranja font-sans">CLP</span>
                    <span className="text-3xl font-serif font-extrabold text-[#2D3142] tracking-tight whitespace-nowrap">${priceAcompañamiento}</span>
                  </div>
                  <span className="text-xs text-stone-500 font-medium">Pago único</span>
                  <span className="text-[11px] text-stone-500 font-normal">Paga en cuotas con tu tarjeta de crédito, según las condiciones de tu banco</span>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-naranja shrink-0 font-bold mt-0.5" />
                    <span>Acceso por 12 meses a los 8 módulos, con presentaciones y videos resumen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-naranja shrink-0 font-bold mt-0.5" />
                    <span>3 sesiones clínicas individuales online con Katherinne, con pauta e indicaciones personalizadas, agendadas en los momentos clave de tu etapa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-naranja shrink-0 font-bold mt-0.5" />
                    <span>Respuesta a tus dudas de alimentación y suplementación por correo durante 3 meses, en un plazo de 48 horas hábiles.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-naranja shrink-0 font-bold mt-0.5" />
                    <span>Agenda preferente para tus sesiones.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.momAcompañamiento}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleCheckoutClick(e, 'KEM Mom Acompañamiento', urls.momAcompañamiento)}
                  className="w-full py-4.5 px-6 rounded-full bg-gradient-to-r from-[#F2994A] via-orange-500 to-[#E86A58] text-white font-extrabold text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ring-4 ring-orange-300/60 flex items-center justify-center gap-2 cursor-pointer group"
                  id="mom-checkout-acompanamiento"
                >
                  <Sparkles className="w-4 h-4 text-amber-100 group-hover:rotate-12 transition-transform" />
                  <span>Inscribirme al Plan Completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* Card 3: Consulta Clínica Individual */}
            <div className="bg-white rounded-3xl border border-stone-200/70 p-8 flex flex-col justify-between shadow-xs hover:border-verde/40 hover:shadow-md transition-all text-left">
              
              <div className="space-y-6 text-left">
                <div>
                  <span className="px-3 py-1 rounded-full bg-verde/10 text-verde text-[10px] font-bold uppercase tracking-wider inline-block">
                    Sesión individual online
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-carbon-title mt-2 text-left">Consulta clínica 1:1</h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed text-left">
                    Consulta nutricional online individual de 45 a 60 minutos. Evaluación clínica completa, análisis de tus exámenes y generación de indicaciones nutricionales según tus objetivos.
                  </p>
                </div>

                <div className="space-y-2 bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <div className="flex flex-col items-center justify-center text-center gap-1">
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className="text-xs font-bold text-stone-400 font-sans">CLP</span>
                      <span className="text-3xl font-serif font-extrabold text-[#2D3142] tracking-tight whitespace-nowrap">${priceConsulta}</span>
                    </div>
                    <span className="text-xs text-stone-500 font-medium">Por sesión</span>
                  </div>
                  <div className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200/70 flex items-start gap-1.5 leading-snug text-left">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Beneficiarias Fonasa:</strong> $30.000, enviando el certificado de afiliación vigente antes de pagar.</span>
                  </div>
                  <p className="text-[10px] text-stone-500 leading-tight text-left">
                    Pacientes Isapre: pueden solicitar reembolso con la boleta, según su plan. Algunas Isapres exigen orden médica.
                  </p>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans text-left">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0 mt-0.5" />
                    <span>Consulta nutricional online individual de 45 a 60 minutos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0 mt-0.5" />
                    <span>Evaluación clínica completa y análisis exhaustivo de exámenes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0 mt-0.5" />
                    <span>Pauta alimentaria e indicaciones nutricionales adaptadas a tus metas.</span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-400">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>No incluye acceso a los 8 módulos de KEM Mom.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.momConsulta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-3.5 px-4 rounded-full bg-[#2D3142] hover:bg-[#1E212D] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-sm hover:shadow-md cursor-pointer"
                  id="mom-checkout-consulta"
                >
                  Agenda tu consulta online aquí
                </a>
              </div>

            </div>

          </div>

          <p className="text-xs text-stone-500 text-center font-light">
            Al comprar aceptas los{' '}
            <a
              href="#terminos"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('terminos');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="underline underline-offset-2 hover:text-stone-800 transition-colors"
              id="mom-pricing-legal-terms"
            >
              Términos y condiciones
            </a>{' '}
            y la{' '}
            <a
              href="#privacidad"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('privacidad');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="underline underline-offset-2 hover:text-stone-800 transition-colors"
              id="mom-pricing-legal-privacy"
            >
              Política de privacidad
            </a>
            .
          </p>

        </div>
      </section>

      {/* 8. Qué NO incluye - Gestión de expectativas y confianza real */}
      <section className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200/90 text-sm leading-relaxed text-stone-700 font-sans space-y-4 shadow-2xs">
            <h4 className="font-serif font-bold text-amber-800 text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-605" />
              Gestión de expectativas: lo que NO incluye este programa
            </h4>
            
            <p className="text-xs text-stone-600 font-light">
              Para que sepas exactamente qué esperar, esto es lo que el programa no incluye:
            </p>

            <ul className="space-y-2 text-xs text-stone-600 pl-4 list-disc font-light">
              <li><strong>No reemplaza consultas clínicas ginecológicas</strong> ni controles obstétricos presenciales de matronería o medicina general.</li>
              <li><strong>No incluye dietas para bajar de peso rápido ni planes restrictivos.</strong></li>
              <li><strong>No provee seguimiento clínico personalizable fuera de las sesiones contempladas</strong> en el plan de acompañamiento activo contratado.</li>
              <li><strong>No incluye evaluaciones médicas de emergencias o partos</strong>, las cuales deben ser dirigidas de urgencia a tu centro de salud habitual.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Opiniones reales de KEM Mom (oculto mientras esté vacío) */}
      {OPINIONES_KEM_MOM.length > 0 && (
        <section className="py-12 sm:py-20 bg-bg-warm/40 border-b border-stone-100" id="opiniones-kem-mom">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-carbon-title tracking-tight">
                Opiniones de quienes usan KEM Mom
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OPINIONES_KEM_MOM.map((opinion, index) => (
                <article
                  key={`${opinion.nombre}-${index}`}
                  className="bg-white rounded-2xl border border-stone-200/70 p-6 shadow-xs flex flex-col justify-between space-y-4"
                >
                  <p className="text-sm text-stone-700 font-light leading-relaxed italic">
                    "{opinion.texto}"
                  </p>

                  <div className="pt-3 border-t border-stone-100 space-y-1">
                    <p className="font-serif font-bold text-sm text-carbon-title">
                      {opinion.nombre}
                    </p>
                    <p className="text-xs text-stone-500">
                      {opinion.etapa}
                    </p>
                    <p className="text-xs text-stone-400">
                      {opinion.ciudad ? `${opinion.ciudad}, ${opinion.fecha}` : opinion.fecha}
                    </p>
                    {opinion.accesoSinCosto && (
                      <p className="text-[11px] text-stone-400 pt-1">
                        Recibió acceso sin costo para probar el programa.
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <p className="text-xs text-stone-500 text-center font-light">
              Publicamos opiniones reales con autorización de cada persona. Solo corregimos ortografía.
            </p>
          </div>
        </section>
      )}

      {/* 10. Sobre Katherinne (Breve) */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#FBF9F6]/80 border border-stone-200/50 flex flex-col sm:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1toiIEgGroES39InEcNVkgpKrEYjwrybk" 
                alt="Katherinne Elgueta Mora" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-verde text-white p-1 rounded-full"><Award className="w-3.5 h-3.5" /></div>
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <span className="px-2 py-0.5 rounded-full bg-naranja/10 text-naranja text-[9px] font-bold uppercase tracking-wider font-mono">Tu nutricionista</span>
              <h4 className="font-serif text-lg font-bold text-carbon-title">Sobre Katherinne Elgueta Mora</h4>
              <p className="text-xs text-[#514F5C] leading-relaxed font-light">
                Nutricionista con magíster en el INTA (U. de Chile), con experiencia clínica en nutrición materna e infantil y un trato cercano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Preguntas frecuentes (Respuestas a objeciones) */}
      <section className="py-25 bg-[#FBF9F6]/40 border-y border-stone-150">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold font-sans">Derribando objeciones</span>
            <h2 className="font-serif text-3xl font-semibold text-carbon-title tracking-tight">Preguntas frecuentes - KEM Mom</h2>
            <p className="text-xs text-stone-505 font-light">Resolvemos con total transparencia tus principales dudas iniciales.</p>
          </div>

          <div className="space-y-3">
            {momFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-200/80">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-5 flex justify-between items-center font-serif text-sm sm:text-base font-bold text-carbon-title cursor-pointer leading-tight"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform shrink-0 ${activeFaq === i ? 'rotate-180 text-naranja' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. CTA Final hacia checkout */}
      <section className="py-12 sm:py-20 bg-gradient-to-tr from-[#2D3142] to-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-naranja/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">Inicia hoy tu embarazo sin preocupaciones</h2>
          <p className="text-sm text-stone-300 max-w-xl mx-auto font-light">
            Empieza hoy tu embarazo con más claridad y tranquilidad.
          </p>
          <div className="pt-2">
            <a
              href="#planes-precios"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('planes-precios')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-naranja hover:bg-orange-500 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-transform inline-flex gap-2 items-center cursor-pointer"
            >
              <span>Elegir mi plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Configuration Missing Helper Modal popup */}
      {showConfigAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-stone-200 shadow-2xl font-sans text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-naranja/10 text-naranja flex items-center justify-center mx-auto"><Mail className="w-5 h-5" /></div>
            <h4 className="font-serif font-bold text-carbon-title text-lg leading-tight">Inscripción y consultas</h4>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Para inscribirte en el plan <strong>{alertTier}</strong> o recibir asistencia sobre el proceso, puedes enviarnos un correo directamente a <strong>kemnutritioncl@gmail.com</strong>.
            </p>
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => setShowConfigAlert(false)}
                className="flex-1 py-2.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 cursor-pointer"
              >
                Volver
              </button>
              <a
                href="mailto:kemnutritioncl@gmail.com"
                onClick={() => setShowConfigAlert(false)}
                className="flex-1 py-2.5 rounded-lg bg-naranja hover:bg-opacity-90 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1 animate-pulse-slow"
              >
                <span>Enviar correo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox simple para capturas del aula */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.caption}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="self-end w-10 h-10 rounded-full bg-white/90 hover:bg-white text-carbon-title flex items-center justify-center shadow-md cursor-pointer"
              aria-label="Cerrar imagen"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden border border-stone-200/30 bg-white shadow-2xl max-h-[82vh] w-full flex items-center justify-center">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="max-h-[82vh] w-auto max-w-full object-contain block"
              />
            </div>
            <p className="text-xs sm:text-sm text-stone-200 font-light text-center">
              {lightboxImage.caption}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
