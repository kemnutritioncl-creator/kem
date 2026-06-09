/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, CheckoutUrls } from '../types';
import { universities, momTestimonials, proTestimonials, generalFaqs } from '../data';
import { 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Award, 
  CheckCircle, 
  X, 
  Users, 
  ChevronDown, 
  Inbox, 
  UserCheck, 
  FileText, 
  BookOpen 
} from 'lucide-react';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  urls: CheckoutUrls;
}

export default function HomeView({ setCurrentPage, urls }: HomeViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [leadSuccess, setLeadSuccess] = useState(false);

  // Setup Scroll Reveal animations behavior using custom IntersectionObserver
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal');
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

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setLeadSuccess(true);
      setEmailInput('');
      setTimeout(() => setLeadSuccess(false), 5000);
    }
  };

  return (
    <div className="pt-24 font-sans overflow-x-hidden">
      
      {/* 1. Hero animado de doble entrada */}
      <section className="relative min-h-[95vh] flex items-center bg-gradient-to-b from-bg-warm to-white py-12 sm:py-20 lg:py-24 overflow-hidden" id="hero-section">
        {/* Animated Background Gradients Halo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] bg-naranja/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-violeta/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 right-10 w-[30vh] h-[30vh] bg-verde/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center animate-fade-in">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Taglet */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200/85 shadow-xs animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-verde animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-carbon-title uppercase font-sans">
                  KEM Nutrition Academy · Doble Enfoque
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12] text-carbon-title font-semibold tracking-tight">
                El eslabón científico entre la <span className="bg-gradient-to-r from-naranja to-orange-500 bg-clip-text text-transparent font-extrabold">nutrición para tu familia</span> y la <span className="bg-gradient-to-r from-violeta to-indigo-600 bg-clip-text text-transparent font-extrabold">especialización profesional</span>.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-carbon-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Unimos la empatia de la maternidad y la rigurosidad de la medicina basada en evidencia para entregarte pautas claras. Selecciona tu área de interés:
              </p>

              {/* Interactive Twin Panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-2xl mx-auto lg:mx-0">
                
                {/* Mom quick selector card */}
                <div 
                  onClick={() => {
                    setCurrentPage('kem-mom');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200/70 shadow-xs hover:shadow-md hover:border-naranja/20 transition-all cursor-pointer text-left relative overflow-hidden"
                  id="hero-selector-mom"
                >
                  <div className="absolute right-0 bottom-0 w-16 h-16 bg-naranja/5 rounded-tl-full group-hover:bg-naranja/10 transition-colors" />
                  <div className="w-10 h-10 rounded-xl bg-naranja/10 flex items-center justify-center text-naranja mb-3 group-hover:scale-105 transition-transform">
                    <Heart className="w-5 h-5 fill-naranja/10" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-carbon-title flex items-center gap-1">
                    <span>Área Mamás y Gestantes</span>
                    <ArrowRight className="w-3.5 h-3.5 text-naranja group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-[12px] text-stone-500 mt-1 lines-clamp-2 leading-relaxed font-light">
                    Planes de nutrición sin mitos para tu gestación, lactancia y postparto con guía experta directa.
                  </p>
                  <div className="mt-3 text-xs font-semibold text-naranja flex items-center gap-1">
                    <span>Entrar a KEM MOMS</span>
                    <span>→</span>
                  </div>
                </div>

                {/* Pro quick selector card */}
                <div 
                  onClick={() => {
                    setCurrentPage('kem-pro');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-white hover:bg-stone-50/50 p-5 rounded-2xl border border-stone-200/70 shadow-xs hover:shadow-md hover:border-violeta/20 transition-all cursor-pointer text-left relative overflow-hidden"
                  id="hero-selector-pro"
                >
                  <div className="absolute right-0 bottom-0 w-16 h-16 bg-violeta/5 rounded-tl-full group-hover:bg-violeta/10 transition-colors" />
                  <div className="w-10 h-10 rounded-xl bg-violeta/10 flex items-center justify-center text-violeta mb-3 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-carbon-title flex items-center gap-1">
                    <span>Área Nutricionistas</span>
                    <ArrowRight className="w-3.5 h-3.5 text-violeta group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-[12px] text-stone-500 mt-1 lines-clamp-2 leading-relaxed font-light">
                    Protocolos clínicos avanzados, dosificación fina y seguridad total para tu consulta profesional.
                  </p>
                  <div className="mt-3 text-xs font-semibold text-violeta flex items-center gap-1">
                    <span>Entrar a KEM PRO</span>
                    <span>→</span>
                  </div>
                </div>

              </div>

              {/* Trust Badge under buttons */}
              <div className="pt-6 border-t border-stone-200/80">
                <p className="text-xs sm:text-sm text-carbon-title font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row items-center gap-2.5 justify-center lg:justify-start text-stone-600">
                  <span className="inline-flex shrink-0 w-7 h-7 rounded-full bg-verde/10 text-verde items-center justify-center font-bold text-xs">✔</span>
                  <span>
                    Dirigida por <strong>Katherinne Elgueta Mora</strong> · Magíster en Nutrición Clínica Pediátrica, INTA Universidad de Chile · 14+ años en docencia universitaria.
                  </span>
                </p>
              </div>

            </div>

            {/* Right Column Interactive Dynamic Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-80 h-[380px] sm:w-[350px] sm:h-[450px] lg:w-[410px] lg:h-[500px]">
                
                {/* Decorative Halo behind frame */}
                <div className="absolute inset-0 bg-gradient-to-tr from-naranja via-verde to-violeta rounded-[42px] rotate-2 blur-xs scale-102 opacity-75 animate-float" />
                
                {/* Image Wrap */}
                <div className="absolute inset-2 bg-stone-100 rounded-[36px] overflow-hidden border-4 border-white shadow-xl flex flex-col justify-end">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1toiIEgGroES39InEcNVkgpKrEYjwrybk" 
                    alt="Katherinne Elgueta Mora - KEM Nutrition Academy" 
                    className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Backdrop Overlay for credentials card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200/50 shadow-lg">
                    <div className="flex justify-between items-center gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900 leading-tight">
                          Katherinne Elgueta Mora
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">Directora Académica de KEM Academy</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-verde/10 text-verde flex items-center justify-center font-bold text-xs border border-verde/20 shrink-0">
                        🎓
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Barra de respaldo universitario (Sello de credibilidad) */}
      <section className="bg-white py-12 border-y border-stone-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-mono font-bold tracking-widest text-stone-400 uppercase">
            Sello de Credibilidad Docente Universitaria en Chile
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 opacity-85">
            {universities.map((uni, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2.5 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all cursor-default py-2"
                title={`Docente en ${uni.name}`}
              >
                <div className="w-8 h-8 rounded-lg bg-stone-100 font-serif font-extrabold text-[#6C4BB6]/80 flex items-center justify-center text-sm border border-stone-200 shadow-2xs">
                  {uni.logo}
                </div>
                <span className="text-xs font-bold font-sans tracking-tight text-[#2D3142]">
                  {uni.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sobre Katherinne (Quién soy) */}
      <section className="py-20 bg-bg-warm/40" id="sobre-katherinne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo representation */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first animate-fade-in">
              <div className="relative w-full max-w-sm aspect-4/5">
                <div className="absolute inset-0 bg-stone-100 rounded-3xl overflow-hidden border-8 border-white shadow-xl flex flex-col justify-end">
                  <img 
                    src="https://lh3.googleusercontent.com/d/182tRseOnk85WfGJxQDENj88gI65hZLoj"
                    alt="Katherinne Elgueta Mora"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />

                  <div className="relative z-20 text-white p-6 space-y-1">
                    <span className="text-xs font-mono tracking-wider font-semibold text-naranja uppercase block">
                      Enfoque en Evidencia Científica
                    </span>
                    <h4 className="font-serif font-bold text-xl block leading-none">
                      Katherinne Elgueta Mora
                    </h4>
                    <p className="text-xs opacity-85 block font-light">
                      Magíster y Directora de Clínicas Maternas
                    </p>
                  </div>
                </div>
                
                {/* Absolute element overlays */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-naranja/10 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-violeta/10 rounded-full blur-xl pointer-events-none" />
              </div>
            </div>

            {/* Right Story details */}
            <div className="lg:col-span-7 space-y-6 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold">
                Quién te acompaña
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">
                La profesional tras KEM Nutrition Academy
              </h2>
              
              <p className="text-base text-carbon-body leading-relaxed font-light">
                Soy Katherinne, y mi carrera se fundamente en integrar tres dimensiones que rara vez coinciden en una sola pauta de acompañamiento: la <strong>rigurosidad de la práctica clínica directa</strong>, la <strong>actualización técnica de la docencia universitaria</strong> y la empatía única que se adquiere con la <strong>maternidad propia</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-100 shadow-2xs">
                  <span className="text-naranja font-serif text-2xl font-bold">14+ años</span>
                  <p className="text-xs text-stone-500">Experiencia en nutrición infantil y materna clínica.</p>
                </div>
                <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-100 shadow-2xs">
                  <span className="text-[#6FA987] font-serif text-2xl font-bold">Postgrado</span>
                  <p className="text-xs text-stone-500">Magíster en Nutrición Clínica del renombrado INTA.</p>
                </div>
                <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-100 shadow-2xs">
                  <span className="text-violeta font-serif text-2xl font-bold">Académica</span>
                  <p className="text-xs text-stone-500">Docente titular en medicina y nutrición chilena.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <h5 className="text-xs font-bold text-carbon-title uppercase tracking-wide mb-2">Credenciales científicas oficiales:</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-600">
                  <li className="flex items-center gap-1.5">
                    <span className="text-verde">✔</span> Nutricionista Dietista, licenciada con distinción máx.
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-verde">✔</span> Magíster en Nutrición Clínica Pediátrica (INTA U. de Chile).
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-verde">✔</span> Coordinadora de Simulación Clínica en Salud.
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-verde">✔</span> Docente titular de asignaturas materno-infantil.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. El problema (Empatía pura) */}
      <section className="py-20 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          
          <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">
            ¿Te sientes identificada?
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight max-w-2xl mx-auto leading-tight">
            Tanto gestantes como profesionales comparten la misma raíz de confusión
          </h2>
          
          <p className="text-base sm:text-lg text-carbon-body font-light leading-relaxed max-w-3xl mx-auto">
            Vivimos en una época repleta de sobreinformación, mitos de internet y recomendaciones contradictorias. La gestante se siente juzgada por lo que come u omite, mientras que la profesional recién egresada a menudo carece de pautas seguras y herramientas clínicas para atender con absoluta seguridad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-6">
            
            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200/50 relative">
              <div className="absolute top-4 right-4 text-3xl opacity-20 font-serif font-bold text-naranja">01</div>
              <h4 className="font-serif text-lg font-bold text-carbon-title mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-naranja" /> La Mamá Confundida
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Recibe comentarios opuestos de su suegra, internet y su ginecólogo. Teme suplementarse incorrectamente, se estresa regulando la glicemia por diabetes gestacional o siente culpa si experimenta síntomas digestivos.
              </p>
            </div>

            <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200/50 relative">
              <div className="absolute top-4 right-4 text-3xl opacity-20 font-serif font-bold text-violeta">02</div>
              <h4 className="font-serif text-lg font-bold text-carbon-title mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violeta" /> La Nutricionista Temerosa
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Tiene conocimientos sumamente teóricos, pero carece de un protocolo de campo real, plantillas de requerimientos clínicos eficientes o la seguridad técnica para resolver casos ginecológicos complejos.
              </p>
            </div>

          </div>

          <div className="pt-4">
            <p className="text-sm font-medium text-stone-500 italic">
              "En KEM Nutrition Academy, proveemos un puerto seguro basado en estudios reales y explicaciones sencillas."
            </p>
          </div>

        </div>
      </section>

      {/* 5. Mini presentación KEM Mom (Tarjeta integrada con gradiente) */}
      <section className="py-20 bg-gradient-to-br from-bg-warm to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[32px] border border-stone-200/60 p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-naranja/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 animate-fade-in">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-naranja/10 border border-naranja/20 text-naranja">
                  <Heart className="w-3.5 h-3.5 fill-naranja/10" />
                  <span className="text-xs font-bold uppercase tracking-wider">Academia para Mamás</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold leading-tight">
                  Programa: Embarazo con Confianza
                </h3>

                <p className="text-base text-stone-600 leading-relaxed font-light">
                  Acompañamiento integral para la mujer en etapa preconcepcional, embarazo activo, lactancia y postparto inmediato. Diseñado minuciosamente para erradicar el estrés y la culpa, estructurando una nutrición idónea para ti y tu bebé.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>8 módulos completos con videoclases cortas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Checklists y resúmenes descargables en PDF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Enfoque en síntomas digestivos y suplementos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Comunidad de apoyo libre de juicios</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setCurrentPage('kem-mom');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 py-4 rounded-full bg-[#2D3142] hover:bg-[#1a1c27] text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center sm:inline-flex gap-2 cursor-pointer group"
                    id="mini-nav-mom-btn"
                  >
                    <span>Ver Programa Embarazo con Confianza</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

              {/* Right visuals representative card mockup */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-[#F2994A]/5 to-[#F2994A]/15 rounded-2xl border border-naranja/20 p-6 sm:p-8 text-center space-y-4">
                <span className="text-[10px] tracking-widest font-mono font-bold text-naranja uppercase block">
                  ¿Para quién es KEM Mom?
                </span>
                
                <p className="text-sm font-serif italic text-carbon-title leading-relaxed">
                  "Para mujeres que buscan prepararse para concebir o transitan su embarazo con miedos y quieren una guía real basada en la evidencia de salud internacional."
                </p>

                <div className="h-0.5 bg-naranja/20 my-2" />

                <div className="flex justify-around text-xs text-carbon-body font-medium">
                  <div>
                    <span className="block font-bold text-carbon-title text-base">97k</span>
                    <span>Plan Esencial</span>
                  </div>
                  <div className="w-px bg-naranja/10" />
                  <div>
                    <span className="block font-bold text-carbon-title text-base">217k</span>
                    <span>Acompañamiento</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. Mini presentación KEM Pro (Tarjeta con acento violeta) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[32px] border border-stone-200/60 p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute left-0 top-0 w-80 h-80 bg-violeta/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left visual representation card mockup */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-[#6C4BB6]/5 to-[#6C4BB6]/15 rounded-2xl border border-violeta/20 p-6 sm:p-8 text-center space-y-4 order-last lg:order-first">
                <span className="text-[10px] tracking-widest font-mono font-bold text-violeta uppercase block">
                  ¿Para quién es KEM Pro?
                </span>
                
                <p className="text-sm font-serif italic text-carbon-title leading-relaxed">
                  "Para nutricionistas y estudiantes de último año que buscan capacitarse a nivel clínico avanzado para tratar gestantes con patologías, con seguridad desde el primer día."
                </p>

                <div className="h-0.5 bg-violeta/20 my-2" />

                <div className="flex justify-around text-xs text-carbon-body font-medium">
                  <div>
                    <span className="block font-bold text-carbon-title text-base">97k</span>
                    <span>Plan Esencial</span>
                  </div>
                  <div className="w-px bg-violeta/10" />
                  <div>
                    <span className="block font-bold text-carbon-title text-base">217k</span>
                    <span>Acompañamiento</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violeta/10 border border-violeta/20 text-violeta">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Academia para Profesionales</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold leading-tight">
                  Programa: Consulta Materna desde Cero
                </h3>

                <p className="text-base text-stone-600 leading-relaxed font-light">
                  Formación de postgrado clínico enfocada en la práctica directa. Domina la evaluación antropométrica de embarazadas, interpretación fina de exámenes bioquímicos, diagnóstico preventivo y estrategias dietoterapéuticas eficientes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>10 módulos estructurados con casos clínicos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Calculadoras excels clibradas de requerimientos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Fichas clínicas editables y anamnesis guiada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Certificado de egreso oficial para tu consulta</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setCurrentPage('kem-pro');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 py-4 rounded-full bg-violeta hover:bg-violeta-dark text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center sm:inline-flex gap-2 cursor-pointer group"
                    id="mini-nav-pro-btn"
                  >
                    <span>Ver Programa Consulta Materna desde Cero</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. Prueba social segmentada (dos columnas) */}
      <section className="py-20 bg-bg-warm/60 border-t border-stone-200/55" id="testimonios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold">
              Ambas Perspectivas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">
              Acompañamiento que transforma realidades
            </h2>
            <p className="text-sm text-stone-500 font-light">
              Lee las historias y testimonios de las mamás que vivieron su embarazo con paz, y las colegas que elevaron su calidad de consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Column 1: KEM MOM Testimonials */}
            <div className="space-y-6">
              <h4 className="font-serif font-bold text-xl text-carbon-title border-b border-naranja/20 pb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-naranja fill-naranja/10" />
                Mamás preparadas con KEM Mom
              </h4>

              <div className="space-y-4">
                {momTestimonials.map((t) => (
                  <div key={t.id} className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-2xs hover:-translate-y-1 transition-all">
                    <p className="text-sm text-stone-600 leading-relaxed font-light italic mb-4">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-naranja/10 text-naranja font-serif font-semibold text-sm flex items-center justify-center">
                        {t.name[0]}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-carbon-title tracking-tight">{t.name}</h5>
                        <p className="text-[10px] text-stone-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: KEM PRO Testimonials */}
            <div className="space-y-6">
              <h4 className="font-serif font-bold text-xl text-carbon-title border-b border-violeta/20 pb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violeta" />
                Colegas capacitadas con KEM Pro
              </h4>

              <div className="space-y-4">
                {proTestimonials.map((t) => (
                  <div key={t.id} className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-2xs hover:-translate-y-1 transition-all">
                    <p className="text-sm text-stone-600 leading-relaxed font-light italic mb-4">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-violeta/10 text-violeta font-serif font-semibold text-sm flex items-center justify-center">
                        {t.name[0]}
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-carbon-title tracking-tight">{t.name}</h5>
                        <p className="text-[10px] text-stone-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. El Método KEM (Tres Pilares) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-violeta font-mono text-xs uppercase tracking-widest font-bold">
              Nuestra Filosofía
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">
              Los Tres Pilares del Método KEM
            </h2>
            <p className="text-sm text-stone-500 font-light max-w-lg mx-auto">
              Diseño estructural pedagógico y clínico concebido exclusivamente para tu éxito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 bg-stone-50 rounded-2xl border border-stone-200/70 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-naranja/10 text-naranja flex items-center justify-center">
                <Award className="w-6 h-6 animate-float" />
              </div>
              <h4 className="font-serif font-bold text-lg text-carbon-title">
                1. Evidencia Científica Sin Mitos
              </h4>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                Cada módulo práctico, recomendación nutricional, porción o dosis analizada está alineada directamente con journals indexados mundiales y normativas de salud oficiales, asegurando absoluta inocuidad y vanguardia clínica.
              </p>
            </div>

            <div className="p-8 bg-stone-50 rounded-2xl border border-stone-200/70 space-y-4 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-12 h-12 rounded-xl bg-verde/10 text-verde flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-carbon-title">
                2. Sencillez Pedagógica
              </h4>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                La experiencia docente nos permite saber cómo explicar cosas complejas de forma amigable. Clases concisas y resúmenes ágiles para que asimiles conceptos sin sobreesfuerzo ni pérdida de tiempo valioso.
              </p>
            </div>

            <div className="p-8 bg-stone-50 rounded-2xl border border-stone-200/70 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-violeta/10 text-violeta flex items-center justify-center">
                <FileText className="w-6 h-6 animate-float-reverse" />
              </div>
              <h4 className="font-serif font-bold text-lg text-carbon-title">
                3. Herramientas de Aplicación Inmediata
              </h4>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                No te damos solo ideas de estudio teórico; te brindamos guías descargables en un clic para tu vida familiar o Excels estructurados con tablas automatizadas de kilocalorías para tu consulta médica y pautas.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 9. Preguntas frecuentes generales (Estilo acordeón limpio) */}
      <section className="py-20 bg-bg-warm/40 border-y border-stone-150">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-carbon-title font-mono text-xs uppercase tracking-widest font-bold">
              FAQS
            </span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="text-xs text-stone-500">
              Respuestas rápidas para tus primeras inquietudes académicas.
            </p>
          </div>

          <div className="space-y-3">
            {generalFaqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl border border-stone-250 hover:border-stone-300 transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-5 flex justify-between items-center font-serif text-base font-bold text-carbon-title leading-tight cursor-pointer"
                  id={`faq-btn-${i}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${activeFaq === i ? 'rotate-180 text-violeta' : ''}`} />
                </button>
                
                {activeFaq === i && (
                  <div className="px-5 pb-5 pt-1 text-sm text-stone-600 font-light leading-relaxed border-t border-stone-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. CTA Final con captura de leads */}
      <section className="py-20 bg-gradient-to-tr from-[#2D3142] to-[#1F212E] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/4 w-[30vw] h-[30vw] bg-naranja/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-violeta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="w-12 h-12 rounded-full bg-naranja/15 text-naranja flex items-center justify-center mx-auto">
            <Inbox className="w-5 h-5" />
          </div>

          <p className="text-xs font-mono font-bold tracking-widest text-[#6FA987] uppercase">
            Guía de Inicio Gratuita
          </p>

          <h3 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            Descarga gratis la Guía de Nutrición de 1000 Días
          </h3>

          <p className="text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Escribe tu email para recibir un PDF exclusivo con la dosificación y cronología de suplementos críticos sugeridos para la preconcepción, embarazo y lactancia.
          </p>

          {/* Form */}
          <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
            <input
              type="email"
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Tu mejor correo electrónico"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-stone-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-naranja"
              id="lead-input-email"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-full bg-naranja hover:bg-orange-500 font-semibold text-xs tracking-wider uppercase text-white transition-all cursor-pointer shadow-md text-nowrap"
              id="lead-submit-btn"
            >
              Recibir Guía PDF
            </button>
          </form>

          {leadSuccess && (
            <div className="p-4 bg-verde/20 border border-verde/30 rounded-xl max-w-md mx-auto text-xs text-stone-200 animate-fade-in">
              ✔ ¡Felicidades! Te hemos enviado la guía técnica directo a tu bandeja. Revisa también tu carpeta de spam.
            </div>
          )}

          <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-xs text-stone-400">
            <button 
              onClick={() => {
                setCurrentPage('kem-mom');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-stone-300 hover:text-naranja font-medium transition-colors cursor-pointer"
            >
              Programa Embarazo con Confianza →
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => {
                setCurrentPage('kem-pro');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-stone-300 hover:text-violeta font-medium transition-colors cursor-pointer"
            >
              Programa Consulta Materna →
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
