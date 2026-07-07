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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200/85 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-verde" />
                <span className="text-xs font-bold tracking-wider text-carbon-title uppercase font-sans">
                  Para mamás y profesionales de la nutrición
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.12] text-carbon-title font-semibold tracking-tight">
                El eslabón científico entre la <span className="bg-gradient-to-r from-naranja to-orange-500 bg-clip-text text-transparent font-extrabold">nutrición para tu familia</span> y la <span className="bg-gradient-to-r from-violeta to-indigo-600 bg-clip-text text-transparent font-extrabold">especialización profesional</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-carbon-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Nutrición basada en evidencia, explicada con claridad. Si eres gestante, vive tu embarazo sin culpa. Si eres profesional de la salud, atiende con seguridad clínica. Elige tu perfil:
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
                    <span>Área mamás y gestantes</span>
                    <ArrowRight className="w-3.5 h-3.5 text-naranja group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-[12px] text-stone-500 mt-1 lines-clamp-2 leading-relaxed font-light">
                    Planes de nutrición sin mitos para tu gestación, lactancia y postparto con guía experta directa.
                  </p>
                  <div className="mt-3 text-xs font-semibold text-naranja flex items-center gap-1">
                    <span>Entrar a Kem Mom</span>
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
                    <span>Área nutricionistas</span>
                    <ArrowRight className="w-3.5 h-3.5 text-violeta group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-[12px] text-stone-500 mt-1 lines-clamp-2 leading-relaxed font-light">
                    Protocolos clínicos avanzados, dosificación fina y seguridad total para tu consulta profesional.
                  </p>
                  <div className="mt-3 text-xs font-semibold text-violeta flex items-center gap-1">
                    <span>Entrar a Kem Pro</span>
                    <span>→</span>
                  </div>
                </div>

              </div>

              {/* Trust Badge under buttons */}
              <div className="pt-6 border-t border-stone-200/80">
                <p className="text-xs sm:text-sm text-carbon-title font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row items-center gap-2.5 justify-center lg:justify-start text-stone-600">
                  <span className="inline-flex shrink-0 w-7 h-7 rounded-full bg-verde/10 text-verde items-center justify-center font-bold text-xs">✔</span>
                  <span>
                    Dirigida por <strong>Katherinne Elgueta Mora</strong> · Nutricionista clínica. Magíster INTA. Docente universitaria
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
                    src="https://lh3.googleusercontent.com/d/1iUpZgXRYoC2DVXyacp42xhxEFgqahxuC" 
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
                        <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">Tu guía y mentora experta en el proceso</p>
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
      <section className="bg-gradient-to-b from-stone-50 to-white py-16 border-y border-stone-150/70" id="sello-docente-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-verde/10 text-verde text-xs font-bold uppercase tracking-wider font-sans">
              Trayectoria y Respaldo
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-carbon-title tracking-tight">
              Docencia universitaria certificada en Chile
            </h2>
            <p className="text-sm text-stone-500 leading-relaxed font-light">
              Formación avalada por más de 14 años de docencia y dirección académica en las principales escuelas de salud del país.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 justify-center items-stretch">
            {universities.map((uni, i) => (
              <div 
                key={i} 
                className="group bg-white hover:bg-stone-50/30 rounded-2xl border border-stone-200/50 p-6 shadow-2xs hover:shadow-md hover:border-verde/20 transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden"
                title={`Docente en ${uni.name}`}
              >
                {/* Logo Image */}
                <div className="w-full h-16 sm:h-20 flex items-center justify-center mb-4 bg-stone-50/50 rounded-xl p-2 group-hover:bg-white transition-colors duration-300">
                  {('logoUrl' in uni && uni.logoUrl) ? (
                    <img 
                      src={uni.logoUrl as string} 
                      alt={`Logo ${uni.name}`}
                      className="max-h-full max-w-full object-contain filter grayscale-0 group-hover:grayscale opacity-100 group-hover:opacity-75 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-violeta/10 flex items-center justify-center text-violeta font-bold text-sm">
                      {uni.logo}
                    </div>
                  )}
                </div>
                
                {/* University Name */}
                <div className="w-full">
                  <p className="text-[11px] sm:text-[12px] font-bold text-stone-850 font-sans tracking-tight leading-snug line-clamp-2">
                    {uni.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sobre Katherinne (Quién soy) */}
      <section className="py-12 sm:py-20 bg-bg-warm/40" id="sobre-katherinne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Photo representation */}
            <div className="lg:col-span-5 flex justify-center order-last lg:order-first animate-fade-in">
              <div className="relative w-full max-w-sm aspect-4/5">
                <div className="absolute inset-0 bg-stone-100 rounded-3xl overflow-hidden border-8 border-white shadow-xl flex flex-col justify-end">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1e_di3AMU0E7zMi907OMXM30fa5vMdVbG"
                    alt="Katherinne Elgueta Mora"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />

                  <div className="relative z-20 text-white p-6 space-y-1">
                    <span className="text-xs font-mono tracking-wider font-semibold text-naranja uppercase block">
                      Enfoque en evidencia científica
                    </span>
                    <h4 className="font-serif font-bold text-xl block leading-none">
                      Katherinne Elgueta Mora
                    </h4>
                    <p className="text-xs opacity-85 block font-light">
                      Tu mentora experta para una maternidad tranquila
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
                La profesional tras KEM nutrition academy
              </h2>
              
              <p className="text-base text-carbon-body leading-relaxed font-light">
                Mi trabajo combina tres cosas que rara vez van juntas: la práctica clínica directa, la docencia universitaria actualizada y la experiencia propia de la maternidad. Eso define cómo enseño y cómo acompaño.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-100 shadow-2xs">
                  <span className="text-naranja font-serif text-2xl font-bold">14+ años</span>
                  <p className="text-xs text-stone-500">Experiencia en nutrición infantil y materna clínica.</p>
                </div>
                <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-100 shadow-2xs">
                  <span className="text-[#6FA987] font-serif text-2xl font-bold">Postgrado</span>
                  <p className="text-xs text-stone-500">Respaldo científico avanzado para darte total seguridad en la nutrición de tu bebé.</p>
                </div>
                <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-100 shadow-2xs">
                  <span className="text-violeta font-serif text-2xl font-bold">Académica</span>
                  <p className="text-xs text-stone-500">Explicaciones claras y pedagógicas para aplicar de forma sencilla y práctica desde el primer día.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <h5 className="text-xs font-bold text-carbon-title uppercase tracking-wide mb-2">Credenciales científicas</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-600">
                  <li className="flex items-center gap-1.5">
                    <span className="text-verde">✔</span> Nutricionista Dietista, licenciada con distinción máx.
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-verde">✔</span> Respaldo con postgrado INTA (U. de Chile) para brindarte absoluta seguridad.
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-verde">✔</span> Coordinadora de Simulación Clínica en Salud.
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-verde">✔</span> Enfoque pedagógico estructurado para facilitar tu aprendizaje práctico de inmediato.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. El problema (Empatía pura) */}
      <section className="py-12 sm:py-20 bg-white border-y border-stone-100">
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
            
            <div className="group p-8 bg-gradient-to-br from-white to-stone-50/70 rounded-2xl border border-stone-200/60 border-l-4 border-l-naranja shadow-sm hover:shadow-md hover:to-naranja/[0.02] hover:border-naranja/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-4 right-6 text-4xl opacity-10 font-mono font-bold text-naranja">01</div>
              <h4 className="font-serif text-xl font-bold text-carbon-title mb-3 flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-naranja/10 text-naranja"><Heart className="w-4 h-4 fill-naranja/20" /></span>
                Mamá en búsqueda de claridad
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Recibe comentarios opuestos de su suegra, internet y su ginecólogo. Teme suplementarse incorrectamente, se agobia regulando la glicemia por diabetes gestacional o siente inseguridad ante los síntomas digestivos.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-white to-stone-50/70 rounded-2xl border border-stone-200/60 border-l-4 border-l-violeta shadow-sm hover:shadow-md hover:to-violeta/[0.02] hover:border-violeta/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-4 right-6 text-4xl opacity-10 font-mono font-bold text-violeta">02</div>
              <h4 className="font-serif text-xl font-bold text-carbon-title mb-3 flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-violeta/10 text-violeta"><Sparkles className="w-4 h-4" /></span>
                Profesional en sus primeros pasos
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Tiene conocimientos sumamente teóricos, pero carece de un protocolo de campo real, plantillas de requerimientos clínicos eficientes o la seguridad técnica para resolver casos ginecológicos complejos.
              </p>
            </div>

          </div>

          <div className="pt-4">
            <p className="text-sm font-medium text-stone-500 italic">
              "En KEM Nutrition Academy, te ofrecemos una guía de vanguardia basada en evidencia científica robusta y explicaciones claras."
            </p>
          </div>

        </div>
      </section>

      {/* 10. CTA Final con captura de leads */}
      <section className="py-12 sm:py-20 bg-gradient-to-tr from-[#2D3142] to-[#1F212E] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/4 w-[30vw] h-[30vw] bg-naranja/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-violeta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <div className="w-12 h-12 rounded-full bg-naranja/15 text-naranja flex items-center justify-center mx-auto">
            <Inbox className="w-5 h-5 text-naranja" />
          </div>

          <p className="text-xs font-mono font-bold tracking-widest text-[#6FA987] uppercase">
            Guía de Inicio Gratuita
          </p>

          <h3 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            Descarga gratis la guía de nutrición de los primeros 1000 días
          </h3>

          <p className="text-sm text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
            Déjame tu correo y te envío la guía con la dosificación y cronología de suplementos recomendados para preconcepción, embarazo y lactancia. Sin relleno, solo lo que necesitas saber.
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
              Programa Kem Mom (Para madres) →
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => {
                setCurrentPage('kem-pro');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-stone-300 hover:text-violeta font-medium transition-colors cursor-pointer"
            >
              Programa Kem Pro (Para profesionales) →
            </button>
          </div>

        </div>
      </section>

      {/* 5. Mini presentación KEM Mom (Tarjeta integrada con gradiente) */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-bg-warm to-white">
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
                  Programa Kem Mom (Para madres)
                </h3>

                <p className="text-base text-stone-600 leading-relaxed font-light">
                  Un programa para acompañarte desde antes de concebir hasta el postparto. Con información clara, sin mitos, y sin hacerte sentir culpable por lo que comes o dejas de comer.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>8 módulos completos con videoclases cortas.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Checklists y resúmenes descargables en PDF.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Enfoque en síntomas digestivos y suplementos.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Comunidad de apoyo libre de juicios.</span>
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
                    <span>Ver Programa Kem Mom</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

              {/* Right visuals representative card mockup */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-[#F2994A]/5 to-[#F2994A]/15 rounded-2xl border border-naranja/20 p-6 sm:p-8 text-center space-y-4">
                <span className="text-[10px] tracking-widest font-mono font-bold text-naranja uppercase block">
                  ¿Para quién es Kem Mom?
                </span>
                
                <p className="text-sm font-serif italic text-carbon-title leading-relaxed">
                  "Para mujeres que buscan prepararse para concebir o transitan su embarazo con miedos y quieren una guía real basada en la evidencia de salud internacional."
                </p>

                <div className="h-0.5 bg-naranja/20 my-2" />

                <div className="flex justify-around text-xs text-carbon-body font-medium">
                  <div>
                    <span className="block font-bold text-carbon-title text-base">97.000 CLP</span>
                    <span>Plan Esencial</span>
                  </div>
                  <div className="w-px bg-naranja/10" />
                  <div>
                    <span className="block font-bold text-carbon-title text-base">217.000 CLP</span>
                    <span>Acompañamiento</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. Mini presentación KEM Pro (Tarjeta con acento violeta) */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-[32px] border border-stone-200/60 p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute left-0 top-0 w-80 h-80 bg-violeta/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left visual representation card mockup */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-[#6C4BB6]/5 to-[#6C4BB6]/15 rounded-2xl border border-violeta/20 p-6 sm:p-8 text-center space-y-4 order-last lg:order-first">
                <span className="text-[10px] tracking-widest font-mono font-bold text-violeta uppercase block">
                  ¿Para quién es Kem Pro?
                </span>
                
                <p className="text-sm font-serif italic text-carbon-title leading-relaxed">
                  "Para nutricionistas y estudiantes de último año que buscan capacitarse a nivel clínico avanzado para tratar gestantes con patologías, con seguridad desde el primer día."
                </p>

                <div className="h-0.5 bg-violeta/20 my-2" />

                <div className="flex justify-around text-xs text-carbon-body font-medium">
                  <div>
                    <span className="block font-bold text-carbon-title text-base">97.000 CLP</span>
                    <span>Plan Esencial</span>
                  </div>
                  <div className="w-px bg-violeta/10" />
                  <div>
                    <span className="block font-bold text-carbon-title text-base">217.000 CLP</span>
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
                  Programa Kem Pro (Para profesionales)
                </h3>

                <p className="text-base text-stone-600 leading-relaxed font-light">
                  Formación clínica enfocada en la práctica real. Aprende a evaluar a la mujer en preconcepción, embarazo y lactancia, interpretar exámenes bioquímicos, hacer diagnóstico preventivo y diseñar estrategias dietoterapéuticas con seguridad.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>10 módulos estructurados con casos clínicos.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Protocolos clínicos y algoritmos de decisión.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Fichas clínicas editables y anamnesis guiada.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#6FA987] shrink-0" />
                    <span>Certificado de egreso oficial para tu consulta.</span>
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
                    <span>Ver Programa Kem Pro</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. Prueba social segmentada (dos columnas) */}
      <section className="py-12 sm:py-20 bg-bg-warm/60 border-t border-stone-200/55" id="testimonios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold">
              Ambas Perspectivas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">
              La tranquilidad de quienes ya transformaron su bienestar y consulta
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
                Mamás preparadas con Kem Mom
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
                Profesionales capacitadas/os con Kem Pro
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

      {/* 9. Preguntas frecuentes generales (Estilo acordeón limpio) */}
      <section className="py-12 sm:py-20 bg-bg-warm/40 border-y border-stone-150">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-carbon-title font-mono text-xs uppercase tracking-widest font-bold">
              Preguntas frecuentes
            </span>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">
              Preguntas frecuentes
            </h2>
            <p className="text-xs text-stone-500">
              Respuestas rápidas para tus primeras dudas.
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

    </div>
  );
}
