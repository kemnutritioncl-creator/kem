/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, CheckoutUrls } from '../types';
import { momModules, momTestimonials, momFaqs } from '../data';
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
  Award
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

  // Setup reveal effects using scroll observers
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
                <span className="text-xs font-bold uppercase tracking-wider">Kem Mom Academy</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-carbon-title font-semibold tracking-tight">
                Vive tu embarazo con <span className="text-naranja font-bold">confianza</span>, no con dudas.
              </h1>

              <p className="text-base sm:text-lg text-[#514F5C] leading-relaxed max-w-3xl">
                Un programa de educación y acompañamiento nutricional para la preconcepción, el embarazo, el postparto y la lactancia. Basado en rigurosa evidencia científica internacional y explicado de manera amable para tu vida real.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#planes-precios"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-naranja hover:bg-orange-500 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
                  id="mom-hero-cta"
                >
                  Ver Planes de Inscripción
                </a>
                <a
                  href={urls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white border border-stone-200 text-carbon-title font-semibold text-sm hover:bg-stone-50 transition-colors"
                  id="mom-hero-whatsapp"
                >
                  Consultar mis dudas
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 select-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-naranja/20 to-verde/10 rounded-full rotate-6 scale-105" />
                <div className="absolute inset-0 bg-white rounded-full overflow-hidden border-2 border-stone-100 shadow-md">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1AKWh181CV8t6qqVM01szMhVBUrLdDlr8"
                    alt="KEM Mom Academy Hero" 
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
              <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold">Público Objetivo</span>
              
              <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight">
                ¿Este programa es idóneo para mí?
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                Este programa ha sido diseñado exclusivamente para mujeres de entre <strong>25 y 40 años</strong> que desean transitar la preconcepción, fertilidad, embarazo activo, postparto o lactancia libre de agobios.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-naranja/10 text-naranja flex items-center justify-center shrink-0 mt-0.5">✔</div>
                  <p className="text-xs sm:text-sm text-stone-600">Buscas información de nutrición validada clínicamente y no consejos anecdóticos de redes sociales.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-naranja/10 text-naranja flex items-center justify-center shrink-0 mt-0.5">✔</div>
                  <p className="text-xs sm:text-sm text-stone-600">Te sientes cansada de las estrictas dietas restrictivas y buscas un camino balanceado y nutritivo.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-naranja/10 text-naranja flex items-center justify-center shrink-0 mt-0.5">✔</div>
                  <p className="text-xs sm:text-sm text-stone-600">Quieres prevenir o controlar condiciones digestivas, fatiga, anemia, o diabetes gestacional con nutrición guiada.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FBF9F6] border border-orange-100/40 rounded-3xl p-6 sm:p-8 space-y-6 text-center">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#6FA987] font-bold block">
                Comentarios de las Alumnas
              </span>
              <p className="text-base font-serif italic text-carbon-title leading-relaxed">
                "Este programa eliminó por completo los constantes temores de qué comer cada noche. Encontré seguridad, respuestas sencillas y un grupo humano maravilloso rodeándome."
              </p>
              <div className="flex justify-center gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-naranja/15 text-naranja font-bold text-xs flex items-center justify-center">L</div>
                <span className="text-xs font-bold text-stone-600">Lorena Cáceres, 14 semanas gestando</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. El problema antes del programa */}
      <section className="py-20 bg-stone-50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">La realidad actual</span>
          <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight leading-snug">
            La confusión y ansiedad constante en el embarazo
          </h2>
          <p className="text-base text-[#514F5C] font-light max-w-3xl mx-auto">
            Pasas horas buscando en google si puedes comer ciertos alimentos, sintiendo miedo de perjudicar el desarrollo de tu bebé. Te enfrentas a subidas de peso preocupantes, náuseas incontrolables, diabetes gestacional, acidez o dudas sobre la suplementación óptima. Todo esto, acompañado de médicos que te atienden en 10 minutos recomendándote solo folatos sin indagar más.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-left">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-naranja font-extrabold block mb-2">01</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Incertidumbre Diaria</h4>
              <p className="text-xs text-stone-500 leading-relaxed font-light">¿Es el sushi seguro? ¿Qué infusiones abortivas existen? Mitos infinitos que limitan tu felicidad diaria.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-[#6FA987] font-extrabold block mb-2">02</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Manejo de Síntomas</h4>
              <p className="text-xs text-stone-500 leading-relaxed font-light">Náuseas severas, reflujo quemante y fatiga de hierro que te dicen que 'es normal en el embarazo' sin darte pautas de alivio.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50">
              <span className="text-xl font-serif text-violeta font-extrabold block mb-2">03</span>
              <h4 className="font-serif font-bold text-sm text-carbon-title mb-1">Preocupación Metabólica</h4>
              <p className="text-xs text-stone-500 leading-relaxed font-light">Exámenes alterados de glucosa y el terror infundado a que nazca con macrosomía fetal por falta de asesoría idónea.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. La transformación */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-verde/10 text-verde flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <p className="text-stone-400 font-mono text-xs uppercase tracking-widest font-bold">Nuestra Promesa</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">
            La Transformación Kem Mom
          </h2>
          <blockquote className="text-xl sm:text-2xl font-serif italic text-stone-700 max-w-3xl mx-auto leading-relaxed">
            "Al terminar este programa vas a sentirte más segura y confiada para decidir sobre tu alimentación y la de tu bebé, con claridad, paz mental y completamente libre de juicios."
          </blockquote>
        </div>
      </section>

      {/* 5. Qué incluye el programa */}
      <section className="py-20 bg-[#FBF9F6]/40 border-t border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">Recursos Académicos</span>
            <h2 className="font-serif text-3xl text-carbon-title font-semibold tracking-tight">¿Qué obtienes exactamente al inscribirte?</h2>
            <p className="text-sm text-stone-500 font-light">Herramientas estructuradas de calidad clínica adaptadas al hogar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            
            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-naranja/10 text-naranja flex items-center justify-center font-bold">▶</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Videoclases Cortas</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Micro-cápsulas directas de 10-15 minutos ideales para ver a tu propio ritmo sin abrumarte del cansancio diario.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#6FA987]/10 text-[#6FA987] flex items-center justify-center font-bold">📄</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Checklists y Resúmenes PDF</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Hojas ágiles visuales por trimestre para monitorear qué comprar, qué suplementos tomar y qué exámenes exigir.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-violeta/10 text-violeta flex items-center justify-center font-bold">💊</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Guía de Suplementación</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Dosis exactas sugeridas, compatibilidad (no juntas hierro con calcio) y las mejores marcas comerciales revisadas.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-naranja/10 text-naranja flex items-center justify-center font-bold">🍽</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Recetarios Anti-síntomas</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Menús semanales adaptados con preparaciones sumamente digestivas ideales para combatir las náuseas y gastritis.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#6FA987]/10 text-[#6FA987] flex items-center justify-center font-bold">🩸</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Protocolo Diabetes Gestacional</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Guía metabólica detallada para modular cargas glucémicas sin pasar hambre, disminuyendo curvas de insulina.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/50 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-violeta/10 text-violeta flex items-center justify-center font-bold">👥</div>
              <h4 className="font-serif font-bold text-base text-carbon-title">Comunidad Privada de Sostén</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Un espacio virtual cerrado con otras mamás gestionado bajo la supervisión docente de Katherinne Elgueta.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Plan de estudios / Currículo (8 módulos) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold">Cronograma de Contenido</span>
            <h2 className="font-serif text-3xl font-semibold text-carbon-title tracking-tight text-center">Plan de Estudios Kem Mom</h2>
            <p className="text-xs text-stone-500 max-w-sm mx-auto font-light">
              Explora en detalle el contenido de los 8 módulos estructurales concebidos para tu evolución.
            </p>
          </div>

          <div className="relative border-l-2 border-orange-100 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-8 pt-2">
            {momModules.map((m) => (
              <div key={m.num} className="relative group">
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-naranja flex items-center justify-center text-white text-xs font-bold font-serif shadow-xs">
                  {m.num}
                </div>
                <div className="space-y-1.5 hover:p-1.5 hover:bg-stone-50 rounded-xl transition-all">
                  <h4 className="font-serif font-bold text-base sm:text-lg text-carbon-title">
                    {m.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-505 leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Planes y Precios */}
      <section className="py-20 bg-[#FBF9F6]" id="planes-precios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">Precios Transparentes</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-carbon-title font-semibold tracking-tight">Elige el nivel de acompañamiento</h2>
            <p className="text-sm text-stone-500 max-w-md mx-auto font-light">Valores en pesos chilenos (CLP). Inscripción inmediata segura vía Webpay.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Card 1: Plan Esencial */}
            <div className="bg-white rounded-3xl border border-stone-200/70 p-8 flex flex-col justify-between shadow-xs hover:border-naranja/40 hover:shadow-md transition-all">
              
              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider">
                    Plan Esencial (Asíncrono)
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-carbon-title mt-2">Embarazo con Confianza</h3>
                  <p className="text-xs text-stone-505 mt-1">Estudia a tu propio ritmo con la guía oficial.</p>
                </div>

                <div className="flex items-baseline gap-1 bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <span className="text-xs font-bold text-stone-400 font-sans">CLP</span>
                  <span className="text-3xl font-serif font-extrabold text-[#2D3142]">${priceEsencial}</span>
                  <span className="text-xs text-stone-505 font-light">Pago Único</span>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Acceso de por vida a los 8 módulos grabados.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Guías descargables en PDF, recetarios y checklists.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Comunidad interactiva de apoyo.
                  </li>
                  <li className="flex items-center gap-2 text-stone-400">
                    <X className="w-4 h-4 shrink-0" /> No incluye sesiones grupales en vivo ni consultas uno a uno.
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.momEsencial}
                  onClick={(e) => handleCheckoutClick(e, 'Kem Mom Esencial', urls.momEsencial)}
                  className="block text-center w-full py-3.5 rounded-full bg-stone-900 text-white font-bold text-xs tracking-wider uppercase hover:bg-stone-800 transition-colors cursor-pointer"
                  id="mom-checkout-esencial"
                >
                  Inscribirme al Plan Esencial
                </a>
              </div>

            </div>

            {/* Card 2: Plan Acompañamiento - DESTACADO */}
            <div className="bg-white rounded-3xl border-2 border-naranja p-8 flex flex-col justify-between shadow-lg relative transform md:scale-102">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-naranja text-white font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                Altamente Recomendado
              </div>

              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-naranja/10 text-naranja text-[10px] font-bold uppercase tracking-wider">
                    Plan Completo + Acompañamiento
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-carbon-title mt-2">Seguridad + Cercanía</h3>
                  <p className="text-xs text-stone-505 mt-1">Con sesiones en vivo y supervisión uno a uno.</p>
                </div>

                <div className="flex items-baseline gap-1 bg-gradient-to-tr from-naranja/5 to-naranja/15 p-4 rounded-xl border border-naranja/10">
                  <span className="text-xs font-bold text-naranja font-sans">CLP</span>
                  <span className="text-3xl font-serif font-extrabold text-[#2D3142]">${priceAcompañamiento}</span>
                  <span className="text-xs text-stone-505 font-light">Pago Único</span>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-naranja shrink-0 font-bold" /> Acceso ilimitado a todos los 8 módulos.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-naranja shrink-0 font-bold" /> <strong>2 sesiones grupales de mentoría en vivo al mes</strong>.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-naranja shrink-0 font-bold" /> <strong>1 sesión clínica individual exclusiva al mes</strong> con Katherinne.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-naranja shrink-0 font-bold" /> Prioridad de consultoría directa por WhatsApp.
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.momAcompañamiento}
                  onClick={(e) => handleCheckoutClick(e, 'Kem Mom Acompañamiento', urls.momAcompañamiento)}
                  className="block text-center w-full py-4 rounded-full bg-naranja text-white font-bold text-xs tracking-wider uppercase hover:bg-orange-600 shadow-md transition-all cursor-pointer animate-pulse-slow"
                  id="mom-checkout-acompanamiento"
                >
                  Inscribirme al Plan Acompañamiento
                </a>
              </div>

            </div>

            {/* Card 3: Consulta Clínica Individual */}
            <div className="bg-white rounded-3xl border border-stone-200/70 p-8 flex flex-col justify-between shadow-xs hover:border-verde/40 hover:shadow-md transition-all">
              
              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-verde/10 text-verde text-[10px] font-bold uppercase tracking-wider">
                    Sesión Individual
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-carbon-title mt-2">Consulta Clínica 1:1</h3>
                  <p className="text-xs text-stone-505 mt-1">Sesión individual exclusiva y 100% personalizada.</p>
                </div>

                <div className="flex items-baseline gap-1 bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <span className="text-xs font-bold text-stone-400 font-sans">CLP</span>
                  <span className="text-3xl font-serif font-extrabold text-[#2D3142]">${priceConsulta}</span>
                  <span className="text-xs text-stone-505 font-light">Por Sesión</span>
                </div>

                <ul className="space-y-3 text-xs text-stone-600 leading-relaxed font-sans">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> <strong>1 sesión clínica personalizada de 45-60 min Obesidad/Embarazo</strong>.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Revisión profunda de exámenes médicos y laboratorios reales.
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-verde shrink-0" /> Diseño y calibración de tu pauta y suplementación a medida.
                  </li>
                  <li className="flex items-center gap-2 text-stone-400">
                    <X className="w-4 h-4 shrink-0" /> No otorga acceso continuo a los 8 módulos de la academia grabada.
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={urls.momConsulta}
                  onClick={(e) => handleCheckoutClick(e, 'Kem Mom Consulta Individual', urls.momConsulta)}
                  className="block text-center w-full py-3.5 rounded-full bg-[#2D3142] text-white font-bold text-xs tracking-wider uppercase hover:bg-stone-850 transition-colors cursor-pointer"
                  id="mom-checkout-consulta"
                >
                  Agendar Consulta Individual
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Qué NO incluye - Gestión de expectativas y confianza real */}
      <section className="py-16 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200/90 text-sm leading-relaxed text-stone-700 font-sans space-y-4 shadow-2xs">
            <h4 className="font-serif font-bold text-amber-800 text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-605" />
              Gestión de Expectativas: Lo que NO incluye este programa
            </h4>
            
            <p className="text-xs text-stone-600 font-light">
              Para garantizar total transparencia técnica y ético-legal en KEM Nutrition Academy, explicitamos lo que esta formación de educación general no contempla:
            </p>

            <ul className="space-y-2 text-xs text-stone-600 pl-4 list-disc font-light">
              <li><strong>No reemplaza consultas clínicas ginecológicas</strong> ni controles obstétricos presenciales de matronería o medicina general.</li>
              <li><strong>No incluye planes de alimentación de reducción rápida de peso</strong> ni promotores restrictivos de pérdida de grasa corporal invasiva.</li>
              <li><strong>No provee seguimiento clínico personalizable fuera de las sesiones contempladas</strong> en el plan de acompañamiento activo contratado.</li>
              <li><strong>No incluye evaluaciones médicas de emergencias o partos</strong>, las cuales deben ser dirigidas de urgencia a tu recinto salud habitual.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Prueba social de madres */}
      <section className="py-20 bg-bg-warm/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-naranja font-mono text-xs uppercase tracking-widest font-bold">Reseñas clínicas</span>
            <h2 className="font-serif text-3xl font-semibold text-carbon-title tracking-tight text-center">La tranquilidad de mamás que ya viven su embarazo sin miedos</h2>
            <p className="text-sm text-stone-500 font-light">Observa los comentarios auténticos de mujeres que redefinieron su proceso de gestación.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {momTestimonials.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl border border-stone-250/50 shadow-2xs hover:-translate-y-1 transition-all">
                <div className="flex gap-1 text-orange-400 mb-3 text-sm">
                  {"★".repeat(t.rating)}
                </div>
                <p className="text-xs sm:text-sm text-stone-600 italic font-light leading-relaxed mb-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-naranja/10 text-naranja font-serif font-bold text-xs flex items-center justify-center">
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
              <span className="px-2 py-0.5 rounded-full bg-naranja/10 text-naranja text-[9px] font-bold uppercase tracking-wider font-mono">Tu mentora experta</span>
              <h4 className="font-serif text-lg font-bold text-carbon-title">Sobre Katherinne Elgueta Mora</h4>
              <p className="text-xs text-[#514F5C] leading-relaxed font-light">
                Especialista con postgrado en el INTA (U. de Chile), entregándote la tranquilidad de un respaldo científico de excelencia combinado con el cuidado empático que merece tu proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Preguntas frecuentes (Respuestas a objeciones) */}
      <section className="py-25 bg-[#FBF9F6]/40 border-y border-stone-150">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#6FA987] font-mono text-xs uppercase tracking-widest font-bold font-sans">Derribando Objeciones</span>
            <h2 className="font-serif text-3xl font-semibold text-carbon-title tracking-tight">Preguntas Frecuentes - Kem Mom</h2>
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
      <section className="py-20 bg-gradient-to-tr from-[#2D3142] to-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-naranja/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">Inicia hoy tu embarazo sin preocupaciones</h2>
          <p className="text-sm text-stone-300 max-w-xl mx-auto font-light">
            Únete a cientos de madres en Chile que redujeron su ansiedad y prepararon un nacimiento saludable con bases científicas.
          </p>
          <div className="pt-2">
            <a
              href="#planes-precios"
              className="px-8 py-4 rounded-full bg-naranja hover:bg-orange-500 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-transform inline-flex gap-2 items-center cursor-pointer"
            >
              <span>Elegir mi Plan & Registrarme</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Configuration Missing Helper Modal popup */}
      {showConfigAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-stone-200 shadow-2xl font-sans text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mx-auto text-xl">⚠️</div>
            <h4 className="font-serif font-bold text-carbon-title text-lg leading-tight">Enlace de Checkout no configurado</h4>
            <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
              El botón que presionaste ({alertTier}) requiere la dirección Webpay de Transbank clínica final para completar la compra. 
              <br/><br/>
              <strong>¿Cómo solucionarlo?</strong> Utiliza el <strong>Panel de Control Flotante (Icono de Tuerca)</strong> situado en la esquina inferior derecha de la pantalla para pegar tu enlace.
            </p>
            <div className="pt-2 flex gap-3">
              <button
                onClick={() => setShowConfigAlert(false)}
                className="flex-1 py-2.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 cursor-pointer"
              >
                Volver al Sitio
              </button>
              <button
                onClick={() => {
                  setShowConfigAlert(false);
                  const btn = document.getElementById('trigger-config-panel');
                  if (btn) btn.click();
                }}
                className="flex-1 py-2.5 rounded-lg bg-violeta text-white font-semibold text-xs hover:bg-[#5A3FA0] transition-colors cursor-pointer"
              >
                Configurar Ahora
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
