/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, CheckoutUrls } from '../types';
import { proModules, proTestimonials, proFaqs } from '../data';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  X, 
  BookOpen, 
  Award, 
  ChevronDown, 
  Users, 
  FileSpreadsheet, 
  FileText, 
  HelpCircle, 
  CheckCircle,
  FolderOpen,
  AlertTriangle,
  UserCheck
} from 'lucide-react';

interface ProViewProps {
  urls: CheckoutUrls;
  priceEsencial: string;
  priceAcompañamiento: string;
  priceConsulta: string;
  setCurrentPage: (page: PageId) => void;
}

export default function ProView({ urls, priceEsencial, priceAcompañamiento, priceConsulta, setCurrentPage }: ProViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showConfigAlert, setShowConfigAlert] = useState(false);
  const [alertTier, setAlertTier] = useState('');

  // Setup scroll reveals
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
    <div className="pt-24 font-sans overflow-x-hidden bg-gradient-to-b from-[#F9F7FA] to-white">
      
      {/* 1. Hero Profesional */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-violeta/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-violeta/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-verde/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violeta/10 border border-violeta/20 text-violeta">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">Kem Pro Academy</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-carbon-title font-semibold tracking-tight">
                Aprende a atender gestantes con <span className="text-violeta font-bold">seguridad</span> desde la primera consulta
              </h1>

              <p className="text-base sm:text-lg text-carbon-body leading-relaxed max-w-3xl">
                Formación clínica enfocada en la práctica real. Aprende a evaluar a la mujer en preconcepción, embarazo y lactancia, interpretar exámenes bioquímicos, hacer diagnóstico preventivo y diseñar estrategias dietoterapéuticas con seguridad.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#planes-precios"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('planes-precios')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-violeta hover:bg-violeta-dark text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
                  id="pro-hero-cta"
                >
                  Ver Planes de Inscripción
                </a>
                <a
                  href={urls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white border border-stone-200 text-carbon-title font-semibold text-sm hover:bg-stone-50 transition-colors"
                  id="pro-hero-whatsapp"
                >
                  Dudas con Katherinne
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 select-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-violeta/20 to-verde/10 rounded-full rotate-6 scale-105" />
                <div className="absolute inset-0 bg-white rounded-full overflow-hidden border-2 border-stone-100 shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1RZZi3r4gItFgftOk3WG67g7RYtoBNxfN"
                    alt="KEM Pro Academy Hero" 
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              
              <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight">
                ¿Este programa es para mí?
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                La academia está pensada para nutricionistas, profesionales de obstetricia, médicos y profesionales afines al área clínica materno-infantil, incluyendo estudiantes de último año, que quieren ejercer en consulta privada sin improvisar.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-violeta/10 text-violeta flex items-center justify-center shrink-0 mt-0.5">✔</div>
                  <p className="text-xs sm:text-sm text-stone-600">Quieres dejar de dar recomendaciones generales y tomar decisiones clínicas con respaldo bioquímico real.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-violeta/10 text-violeta flex items-center justify-center shrink-0 mt-0.5">✔</div>
                  <p className="text-xs sm:text-sm text-stone-600">Necesitas criterios claros para organizar y priorizar tus consultas sin depender de la intuición.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-violeta/10 text-violeta flex items-center justify-center shrink-0 mt-0.5">✔</div>
                  <p className="text-xs sm:text-sm text-stone-600">Cuando llega una gestante con diabetes gestacional, resistencia a la insulina o restricción del crecimiento, algo en ti duda. Y quieres que eso deje de pasar.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F5FB] border border-violeta/10 rounded-3xl p-6 sm:p-8 space-y-6 text-center">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#6C4BB6] font-bold block">
                Comentarios de las Colegas
              </span>
              <p className="text-base font-serif italic text-carbon-title leading-relaxed">
                "Haber tomado este curso me dio la seguridad clínica para no derivar más embarazadas. Las herramientas de cálculo del requerimiento energético calzan perfecto y facilitan el diseño dietético en minutos."
              </p>
              <div className="flex justify-center gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-violeta/15 text-violeta font-bold text-xs flex items-center justify-center">N</div>
                <span className="text-xs font-bold text-stone-600">Nut. Natalia Ruiz, Atención Privada</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. El problema antes del programa */}
      <section className="py-12 sm:py-20 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-violeta font-mono text-xs uppercase tracking-widest font-bold">El desafío del egresado</span>
          <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight leading-snug">
            La brecha entre la universidad y la consulta real
          </h2>
          <p className="text-base text-[#514F5C] font-light max-w-3xl mx-auto">
            La mayoría de las universidades dedican dos clases al embarazo, y casi todo ese tiempo se va en la curva de incremento de peso. Cuando llega tu primera paciente, te das cuenta de que eso no alcanza. No sabes qué hacer con una glucosa basal que no cuadra, qué hierro recetarle a alguien que ya tuvo mala experiencia con los anteriores, qué hacer con el estreñimiento entre otras sintomatologías ni cómo llevar la consulta para que ella vuelva y el médico tratante confíe en tu criterio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-violeta font-extrabold block mb-2">01</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Sin protocolo claro</h4>
              <p className="text-xs text-stone-505 leading-relaxed font-light">Improvisas la anamnesis o inviertes horas transcribiendo fichas rudimentarias por falta de formatos calibrados.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-[#6FA987] font-extrabold block mb-2">02</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Miedo a patologías</h4>
              <p className="text-xs text-stone-505 leading-relaxed font-light">Incertidumbre al formular pautas para diabetes gestacional con curvas alteradas o hipertiroidismo subclínico.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-naranja font-extrabold block mb-2">03</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Falta de diferenciación</h4>
              <p className="text-xs text-stone-505 leading-relaxed font-light">Ofreces lo mismo que el resto del mercado generalista, compitiendo solo por precio de bono de consulta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. La transformación */}
      <section className="py-12 sm:py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-verde/10 text-verde flex items-center justify-center mx-auto">
            <UserCheck className="w-6 h-6" />
          </div>
          <p className="text-stone-400 font-mono text-xs uppercase tracking-widest font-bold">Nuestra Meta</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">
            La transformación Kem Pro
          </h2>
          <blockquote className="text-xl sm:text-2xl font-serif italic text-stone-700 max-w-3xl mx-auto leading-relaxed">
            "Al terminar este programa vas a sentirte preparada para atender gestantes con absoluta seguridad clínica, con una metodología clara, herramientas profesionales validadas y recursos de autoría listos para aplicar."
          </blockquote>
        </div>
      </section>

      {/* 5. Qué incluye */}
      <section className="py-12 sm:py-20 bg-[#FBF9F6]/40 border-t border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-violeta font-mono text-xs uppercase tracking-widest font-bold">Herramientas Profesionales</span>
            <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight">Un arsenal clínico listo para descargar</h2>
            <p className="text-sm text-stone-500 font-light">Garantizamos recursos de primer nivel que dinamizan tu productividad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#6FA987]/10 text-[#6FA987] flex items-center justify-center font-bold">📁</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Fichas clínicas y anamnesis</h4>
              <p className="text-xs text-[#514F5C] leading-relaxed">Formularios editables estructurados diseñados para guiar la consulta paso a paso, asegurando que no omitas datos metabólicos críticos.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-naranja/10 text-naranja flex items-center justify-center font-bold">📊</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Algoritmos de decisión</h4>
              <p className="text-xs text-[#514F5C] leading-relaxed">Flujogramas en PDF que te indican qué dosis suplementar de calcio, hierro o vitamina D según los resultados bioquímicos.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-violeta/10 text-violeta flex items-center justify-center font-bold">📑</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Material educativo para pacientes</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Infografías clínicas limpias de tu autoría para enviar en PDF a tus pacientes sobre mitos, porciones y manejo de acidez.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#6FA987]/10 text-[#6FA987] flex items-center justify-center font-bold">🔬</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Guía de exámenes bioquímicos</h4>
              <p className="text-xs text-[#514F5C] leading-relaxed">Ebook exclusivo para aprender a interpretar valores de ferritina, hemoglobina, TSH y glicemias específicas de trimestre.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-naranja/10 text-naranja flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-naranja" />
              </div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Casos clínicos resueltos</h4>
              <p className="text-xs text-[#514F5C] leading-relaxed">Análisis paso a paso de resolución dietoterapéutica de gestantes reales con patologías asociadas del mundo clínico.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. De los fundamentos a tu consulta funcionando */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="text-violeta font-mono text-xs uppercase tracking-widest font-bold">Plan de estudios</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-carbon-title tracking-tight text-center">
              De los fundamentos a tu consulta funcionando
            </h2>
            <p className="text-sm text-stone-500 max-w-xl mx-auto font-light">
              10 módulos que terminan en implementación real, no en teoría.
            </p>
          </div>

          {/* Numbered Progression Timeline */}
          <div className="relative border-l-2 border-violeta/20 pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-12">
            
            {/* Módulo 1 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                1
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Fundamentos de la nutrición materna
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">las bases fisiológicas y de evidencia.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">entiendes el porqué de cada requerimiento.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                2
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Evaluación nutricional de la gestante
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">la evaluación antropométrica, clínica y dietética.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">sabes qué medir y cómo dejar el diagnóstico registrado.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                3
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Interpretación de exámenes y suplementación
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">la lectura de exámenes.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">interpretas hierro, vitamina D, glicemia y perfil, e indicas suplementos con seguridad.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 4 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                4
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Requerimientos y planificación alimentaria
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">el cálculo y el diseño de planes.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">construyes planes realistas que la paciente sigue.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 5 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                5
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Diabetes gestacional y resistencia a la insulina
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">el manejo metabólico.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">manejas la condición más temida sin derivar por inseguridad.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 6 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                6
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Situaciones clínicas frecuentes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">las molestias del embarazo y los criterios de derivación.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">resuelves lo cotidiano y sabes cuándo derivar.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 7 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                7
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Postparto y lactancia
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">el acompañamiento del puerperio y la lactancia.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">extiendes la atención más allá del parto y fidelizas.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 8 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                8
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Herramientas para la práctica clínica
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">formatos y registros listos.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">dejas de armar todo desde cero.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 9 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                9
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Casos clínicos reales
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">el razonamiento clínico aplicado.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">ya practicaste con casos antes de tener a la paciente al frente.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 10 */}
            <div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violeta flex items-center justify-center text-white text-xs sm:text-sm font-bold font-serif shadow-sm">
                10
              </div>
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-carbon-title">
                  Implementación y desarrollo profesional
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4">
                  <div className="md:col-span-6 flex items-start gap-2 bg-violeta/5 p-3 rounded-xl border border-violeta/10">
                    <span className="text-xs font-bold text-violeta uppercase tracking-wider shrink-0 mt-0.5">Dominas:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">cómo montar tu atención materna.</span>
                  </div>
                  <div className="md:col-span-6 flex items-start gap-2 bg-[#6FA987]/10 p-3 rounded-xl border border-[#6FA987]/10">
                    <span className="text-xs font-bold text-[#4B7D60] uppercase tracking-wider shrink-0 mt-0.5">En consulta:</span>
                    <span className="text-xs text-stone-700 leading-relaxed">sales con un plan de implementación. Este módulo convierte la formación en un servicio que ofreces.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Franja "Por qué este programa sí se aplica" */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800 space-y-8 mt-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="text-center space-y-2">
              <span className="text-violeta font-mono text-xs uppercase tracking-widest font-bold">Acompañamiento Práctico</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Por qué este programa sí se aplica
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-full bg-violeta/20 text-violeta flex items-center justify-center font-bold text-sm">1</div>
                <h4 className="font-serif font-bold text-white text-base">Clínico, no divulgación</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  Es clínico, no divulgación. Interpretas exámenes, calculas requerimientos y resuelves casos reales.
                </p>
              </div>
              
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-full bg-[#6FA987]/20 text-[#6FA987] flex items-center justify-center font-bold text-sm">2</div>
                <h4 className="font-serif font-bold text-white text-base">Enfoque en acción</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  La diferencia es el módulo 10. Terminas con tu consulta estructurada, no con apuntes.
                </p>
              </div>
              
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-naranja flex items-center justify-center font-bold text-sm">3</div>
                <h4 className="font-serif font-bold text-white text-base">Asíncrono total</h4>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  Es asíncrono. Avanzas a tu ritmo.
                </p>
              </div>
            </div>

            {/* Editable closing block of the certificate */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 justify-between mt-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-violeta/20 text-violeta shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-white font-serif">Certificación Oficial</h4>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    [Al finalizar recibes: certificado de KEM Nutrition Academy — confirmar horas y acreditación]
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <a
                href="#planes-precios"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('planes-precios')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violeta hover:bg-violet-600 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                Ver los planes <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Planes y Precios */}
      <section className="py-12 sm:py-20 bg-[#FBF9F6]" id="planes-precios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-violeta font-mono text-xs uppercase tracking-widest font-bold">Inversión Profesional</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">Elige el nivel de formación</h2>
            <p className="text-sm text-stone-500 max-w-md mx-auto font-light">Opciones de financiamiento rápido con reembolso directo y Webpay de Chile.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Plan Esencial */}
            <div className="bg-white rounded-3xl border border-stone-200/70 p-8 flex flex-col justify-between shadow-xs hover:border-violeta/40 hover:shadow-md transition-all">
              
              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider">
                    Plan Esencial (Asíncrono)
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-carbon-title mt-2">Programa Kem Pro (Para profesionales)</h3>
                  <p className="text-xs text-stone-500 mt-1">Acceso permanente a las herramientas y clases.</p>
                </div>

                <div className="flex items-baseline gap-1 bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <span className="text-xs font-bold text-stone-400 font-sans">CLP</span>
                  <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#2D3142]">${priceEsencial}</span>
                  <span className="text-xs text-stone-500 font-light">Pago Único</span>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Acceso permanente a los 10 módulos grabados.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Biblioteca de protocolos, fichas y herramientas de cálculo clínico.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Foros y resolución de casos en comunidad.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Certificado de finalización firmado por KEM Academy.
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.proEsencial}
                  onClick={(e) => handleCheckoutClick(e, 'Kem Pro Esencial', urls.proEsencial)}
                  className="block text-center w-full py-3.5 rounded-full bg-stone-900 text-white font-bold text-xs tracking-wider uppercase hover:bg-stone-800 transition-colors cursor-pointer"
                  id="pro-checkout-esencial"
                >
                  Inscribirme al Plan Esencial
                </a>
              </div>

            </div>

            {/* Card 2: Plan Acompañamiento - DESTACADO */}
            <div className="bg-white rounded-3xl border-2 border-violeta p-8 flex flex-col justify-between shadow-lg relative transform md:scale-102">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-violeta text-white font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                Formación Recomendada
              </div>

              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-violeta/10 text-violeta text-[10px] font-bold uppercase tracking-wider">
                    Plan Completo + Acompañamiento Vivo
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-carbon-title mt-2">Diferenciación técnica</h3>
                  <p className="text-xs text-stone-505 mt-1">Con mentoría docente, casos y sesiones personalizadas.</p>
                </div>

                <div className="flex items-baseline gap-1 bg-gradient-to-tr from-violeta/5 to-violeta/15 p-4 rounded-xl border border-violeta/10">
                  <span className="text-xs font-bold text-violeta font-sans">CLP</span>
                  <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#2D3142]">${priceAcompañamiento}</span>
                  <span className="text-xs text-stone-505 font-light">Pago Único</span>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violeta shrink-0 font-bold" /> Acceso de por vida a los 10 módulos grabados y herramientas.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violeta shrink-0 font-bold" /> <strong>2 mentorías grupales al mes en vivo</strong> con Katherinne.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violeta shrink-0 font-bold" /> <strong>1 sesión de consultoría técnica individual al mes</strong> para analizar tus propios pacientes.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-violeta shrink-0 font-bold" /> Pauta preferencial para derivación directa de pacientes ginecológicos de Kem Mom.
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.proAcompañamiento}
                  onClick={(e) => handleCheckoutClick(e, 'Kem Pro Acompañamiento', urls.proAcompañamiento)}
                  className="block text-center w-full py-4 rounded-full bg-violeta text-white font-bold text-xs tracking-wider uppercase hover:bg-violeta-dark shadow-md transition-all cursor-pointer animate-pulse-slow"
                  id="pro-checkout-acompanamiento"
                >
                  Inscribirme al Plan Acompañamiento
                </a>
              </div>

            </div>

            {/* Card 3: Consulta Clínica Individual */}
            <div className="bg-white rounded-3xl border border-stone-200/70 p-8 flex flex-col justify-between shadow-xs hover:border-[#6FA987]/40 hover:shadow-md transition-all">
              
              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-verde/10 text-verde text-[10px] font-bold uppercase tracking-wider">
                    Sesión Individual
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-carbon-title mt-2">Mentoría clínica 1:1 para profesionales</h3>
                  <p className="text-xs text-stone-555 mt-2 leading-relaxed font-light">
                    Sesiones personalizadas de 45 a 60 minutos diseñadas para acompañar a los profesionales de la salud que quieren atender gestantes con seguridad clínica y sin improvisar.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <span className="text-xs font-bold text-stone-400 font-sans">CLP</span>
                  <span className="text-3xl font-serif font-extrabold text-[#2D3142]">${priceConsulta}</span>
                  <span className="text-xs text-stone-555 font-light">Por Sesión</span>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#6FA987] shrink-0 mt-0.5" />
                    <span>Revisión y análisis de tus casos reales de gestantes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#6FA987] shrink-0 mt-0.5" />
                    <span>Ordenar el razonamiento clínico: qué mirar, qué priorizar y por qué.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#6FA987] shrink-0 mt-0.5" />
                    <span>Apoyo en interpretación de exámenes y antecedentes para decidir con seguridad.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#6FA987] shrink-0 mt-0.5" />
                    <span>Sugerencias de ajustes en pauta, seguimiento y alertas a considerar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#6FA987] shrink-0 mt-0.5" />
                    <span>Espacio para resolver dudas puntuales que te generan inseguridad en consulta.</span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-400">
                    <X className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>No otorga acceso continuo a los 10 módulos de la certificación.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.proConsulta}
                  onClick={(e) => handleCheckoutClick(e, 'Kem Pro Consulta Individual', urls.proConsulta)}
                  className="block text-center w-full py-3.5 rounded-full bg-[#2D3142] text-white font-bold text-xs tracking-wider uppercase hover:bg-stone-850 transition-colors cursor-pointer"
                  id="pro-checkout-consulta"
                >
                  Agendar Consulta Individual
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Qué NO incluye */}
      <section className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 text-sm leading-relaxed text-stone-700 font-sans space-y-4 shadow-2xs">
            <h4 className="font-serif font-bold text-carbon-title text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Queremos que tomes la mejor decisión, así que te decimos con claridad qué encontrarás aquí y qué no.
            </h4>

            <ul className="space-y-3 text-xs text-stone-600 pl-4 list-disc font-light leading-relaxed">
              <li>No es un postítulo, posgrado ni especialización médica reconocida por CONACEM. Es una formación clínica privada, certificada por KEM Academy.</li>
              <li>El certificado es emitido por KEM Academy, no por una institución universitaria estatal. No tiene efecto directo ante organismos públicos.</li>
              <li>No incluye supervisión clínica continua de pacientes ni disponibilidad fuera de las instancias grupales e individuales contempladas en el programa.</li>
              <li>No garantiza ingresos ni captación automática de pacientes. Lo que sí garantiza es que tendrás las herramientas para construirlo.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Prueba social de profesionales */}
      <section className="py-12 sm:py-20 bg-bg-warm/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold">Confianza de colegas</span>
            <h2 className="font-serif text-3xl font-semibold text-carbon-title tracking-tight text-center">Nutricionistas que ya atienden con total seguridad y confianza</h2>
            <p className="text-sm text-stone-500 font-light">Lee las palabras de otros nutricionistas que aplicaron nuestra metodología de cálculo y pautas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proTestimonials.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl border border-stone-200/60 shadow-2xs hover:-translate-y-1 transition-all">
                <div className="flex gap-1 text-violeta mb-3 text-sm">
                  {"★".repeat(t.rating)}
                </div>
                <p className="text-xs sm:text-sm text-stone-600 italic font-light leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-violeta/10 text-violeta font-serif font-bold text-xs flex items-center justify-center">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-carbon-title tracking-tight">{t.name}</h5>
                    <p className="text-[10px] text-stone-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Sobre Katherinne, versión enfocada en credibilidad académica */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#F6F5FB] border border-violeta/10 flex flex-col sm:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1toiIEgGroES39InEcNVkgpKrEYjwrybk" 
                alt="Katherinne Elgueta Mora" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#6FA987] text-white p-1 rounded-full"><Award className="w-3.5 h-3.5" /></div>
            </div>
            <div className="space-y-3 text-center sm:text-left">
              <span className="px-2 py-0.5 rounded-full bg-violeta/10 text-violeta text-[9px] font-bold uppercase tracking-wider font-mono">Docente</span>
              <h4 className="font-serif text-lg font-bold text-carbon-title">Aprende con Katherinne Elgueta Mora</h4>
              <p className="text-xs text-[#514F5C] leading-relaxed font-light">
                Postgrado en el INTA, Universidad de Chile. No es teoría por teoría: cada contenido está pensado para que lo apliques en tu próxima consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Preguntas frecuentes */}
      <section className="py-25 bg-[#FBF9F6]/40 border-y border-stone-150 font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-verde font-mono text-xs uppercase tracking-widest font-bold">Consultas técnicas</span>
            <h2 className="font-serif text-3xl font-semibold text-carbon-title tracking-tight">Preguntas frecuentes - Kem Pro</h2>
            <p className="text-xs text-stone-505 font-light">Aclaramos rigurosamente cualquier objeción técnica de nuestro currículo.</p>
          </div>

          <div className="space-y-3">
            {proFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-200/80">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left p-5 flex justify-between items-center font-serif text-sm sm:text-base font-bold text-carbon-title cursor-pointer leading-tight"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform shrink-0 ${activeFaq === i ? 'rotate-180 text-violeta' : ''}`} />
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

      {/* 12. CTA Final */}
      <section className="py-12 sm:py-20 bg-gradient-to-tr from-[#2D3142] to-[#14151B] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-violeta/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">Diferénciate hoy mismo en tu consulta</h2>
          <p className="text-sm text-stone-300 max-w-xl mx-auto font-light">
            Suma la nutrición clínica materna a tu cartera de servicios. Adquiere herramientas que tus pacientes y pediatras valorarán de inmediato.
          </p>
          <div className="pt-2">
            <a
              href="#planes-precios"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('planes-precios')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full bg-violeta hover:bg-violeta-dark text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-transform inline-flex gap-2 items-center cursor-pointer"
            >
              <span>Elegir mi Plan Pro KEM</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Configuration Missing Helper Modal popup */}
      {showConfigAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-stone-200 shadow-2xl font-sans text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-violeta/10 text-violeta flex items-center justify-center mx-auto text-xl">💬</div>
            <h4 className="font-serif font-bold text-carbon-title text-lg leading-tight font-serif">Inscripción y consultas</h4>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              Para inscribirte en el plan <strong>{alertTier}</strong> o recibir asistencia sobre el proceso, puedes conversar directamente con Katherinne por WhatsApp. Te guiará con gusto en el registro.
            </p>
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => setShowConfigAlert(false)}
                className="flex-1 py-2.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 cursor-pointer"
              >
                Volver
              </button>
              <a
                href={urls.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowConfigAlert(false)}
                className="flex-1 py-2.5 rounded-lg bg-verde hover:bg-opacity-90 text-white font-semibold text-xs transition-colors flex items-center justify-center"
              >
                Preguntar por WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
