/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  BookOpen, 
  Calendar, 
  Table, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Heart, 
  ChevronRight,
  Sparkles,
  Share2,
  Check
} from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuideModal({ isOpen, onClose }: GuideModalProps) {
  const [activeTab, setActiveTab] = useState<'resumen' | 'cronologia' | 'tabla' | 'nutrientes' | 'mitos' | 'rutina'>('resumen');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const guideShareMessage = `📚 Guía Gratuita: Suplementos en los primeros 1.000 días 🌸
Dosis y cronología para preconcepción, embarazo y lactancia según la Guía Perinatal MINSAL y revisiones vigentes.
Por Katherinne Elgueta Mora · KEM Nutrition Academy 🥑

✨ 12 páginas · 9 nutrientes clave · 1 tabla maestra de dosificación
✔ Acceso 100% libre sin registros ni correos

📖 Léela gratis aquí:
👉 https://kemnutritionacademy.com/`;

    if (navigator.share) {
      navigator.share({
        title: '🌸 Guía de Suplementos en los primeros 1.000 días | KEM Nutrition Academy 🥑',
        text: guideShareMessage,
        url: 'https://kemnutritionacademy.com/',
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(guideShareMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-stone-900/80 backdrop-blur-sm animate-fade-in overflow-y-auto">
      
      {/* Modal Container */}
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header bar */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-naranja/20 text-naranja flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#6FA987] uppercase font-bold block">
                Guía de Inicio Gratuita · Edición 2026
              </span>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                Suplementos en los primeros 1.000 días
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer hidden sm:inline-flex"
              title="Imprimir / Guardar en PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title="Compartir enlace"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              title="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-stone-50 px-6 py-2.5 border-b border-stone-200 flex items-center gap-2 overflow-x-auto text-xs shrink-0 no-scrollbar">
          <button
            onClick={() => setActiveTab('resumen')}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'resumen' 
                ? 'bg-stone-900 text-white shadow-xs' 
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Portada & Resumen
          </button>
          <button
            onClick={() => setActiveTab('cronologia')}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'cronologia' 
                ? 'bg-stone-900 text-white shadow-xs' 
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Cronología por Etapas
          </button>
          <button
            onClick={() => setActiveTab('tabla')}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'tabla' 
                ? 'bg-naranja text-white shadow-xs' 
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Tabla Maestra de Dosis ⭐
          </button>
          <button
            onClick={() => setActiveTab('nutrientes')}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'nutrientes' 
                ? 'bg-stone-900 text-white shadow-xs' 
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Nutriente por Nutriente
          </button>
          <button
            onClick={() => setActiveTab('mitos')}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'mitos' 
                ? 'bg-stone-900 text-white shadow-xs' 
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Sin Respaldo (Mitos)
          </button>
          <button
            onClick={() => setActiveTab('rutina')}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'rutina' 
                ? 'bg-stone-900 text-white shadow-xs' 
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            Rutina & Preguntas
          </button>
        </div>

        {/* Modal Body - Scrollable content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 print:p-0">
          
          {/* TAB 1: RESUMEN */}
          {activeTab === 'resumen' && (
            <div className="space-y-8 animate-fade-in">
              
              {/* Header Hero of Guide */}
              <div className="bg-gradient-to-br from-bg-warm to-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 text-center space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#6FA987] uppercase">
                  Guía de Inicio · Descarga y Consulta Libre
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-stone-900 font-bold tracking-tight">
                  Suplementos en los primeros 1.000 días
                </h2>
                <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Dosis y cronología para preconcepción, embarazo y lactancia, con los valores que usa el sistema de salud chileno. Sin relleno, solo lo que necesitas saber.
                </p>

                {/* 3 Badges */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
                  <div className="bg-white px-5 py-3 rounded-xl border border-stone-200 shadow-2xs text-center min-w-[110px]">
                    <span className="block font-serif font-extrabold text-2xl text-naranja">12</span>
                    <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Páginas</span>
                  </div>
                  <div className="bg-white px-5 py-3 rounded-xl border border-stone-200 shadow-2xs text-center min-w-[110px]">
                    <span className="block font-serif font-extrabold text-2xl text-[#6FA987]">9</span>
                    <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Nutrientes</span>
                  </div>
                  <div className="bg-white px-5 py-3 rounded-xl border border-stone-200 shadow-2xs text-center min-w-[110px]">
                    <span className="block font-serif font-extrabold text-2xl text-violeta">1</span>
                    <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">Tabla Maestra</span>
                  </div>
                </div>

                <div className="text-xs text-stone-500 pt-2">
                  Por <strong>Katherinne Elgueta Mora</strong> · Nutricionista Especialista en nutrición materno infantil. <br/>
                  <span className="text-stone-400">Edición 2026 · Basada en Guía Perinatal MINSAL y revisiones sistemáticas vigentes.</span>
                </div>
              </div>

              {/* What are the 1000 days */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  ¿Qué son los primeros 1.000 días?
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  Son los <strong>270 días de gestación</strong> más los dos primeros años de vida (365 días cada uno). En esa ventana el cuerpo de tu hijo o hija construye cerebro, sistema inmune y metabolismo a una velocidad que no vuelve a repetirse. Lo que comes y lo que suplementas en ese periodo deja huella medible años después.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <span className="text-[10px] font-mono font-bold text-naranja uppercase">Etapa 1 · 270 días</span>
                    <h4 className="font-serif font-bold text-stone-900 mt-1">Embarazo</h4>
                    <p className="text-xs text-stone-500 mt-1 font-light leading-relaxed">
                      Formación del tubo neural, la placenta y las reservas de hierro del bebé.
                    </p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <span className="text-[10px] font-mono font-bold text-[#6FA987] uppercase">Etapa 2 · 365 días</span>
                    <h4 className="font-serif font-bold text-stone-900 mt-1">Primer año</h4>
                    <p className="text-xs text-stone-500 mt-1 font-light leading-relaxed">
                      Lactancia, alimentación complementaria y crecimiento acelerado.
                    </p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <span className="text-[10px] font-mono font-bold text-violeta uppercase">Etapa 3 · 365 días</span>
                    <h4 className="font-serif font-bold text-stone-900 mt-1">Segundo año</h4>
                    <p className="text-xs text-stone-500 mt-1 font-light leading-relaxed">
                      Consolidación de hábitos alimentarios y curva de crecimiento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Honest limit */}
              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Un límite honesto:</strong> Esta guía cubre la mitad materna de esa ventana (preconcepción, embarazo y lactancia). No reemplaza tu control prenatal. Las dosis son las indicaciones poblacionales vigentes en Chile; tu matrona, médico o nutricionista ajustan según tus exámenes, historia clínica y patologías.
                </div>
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => setActiveTab('tabla')}
                  className="px-6 py-3 rounded-full bg-naranja hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Ver la Tabla Maestra de Dosificación</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: CRONOLOGÍA */}
          {activeTab === 'cronologia' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-stone-200 pb-3">
                <span className="text-xs font-mono font-bold text-[#6FA987] uppercase tracking-wider">Cronología</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Cuándo entra cada cosa</h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Los suplementos del embarazo no empiezan todos el mismo día. Cada uno tiene una ventana en la que sirve y fuera de la cual estorba o no aporta.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* 3 Meses Antes */}
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
                  <div className="px-3 py-1 rounded-full bg-violeta/10 text-violeta font-mono text-xs font-bold shrink-0">
                    3 meses antes
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-stone-900 text-base">Preconcepción</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      <strong>Entra ácido fólico 0,4 mg al día.</strong> El tubo neural se cierra entre el día 21 y el 28 tras la concepción, cuando muchas mujeres aún no saben que están embarazadas. Empezar después de la falta ya llega tarde para ese efecto. Se revisa también ferritina, vitamina D, TSH y hemograma. Si hay déficit, se corrige antes.
                    </p>
                  </div>
                </div>

                {/* Semana 0 a 12 */}
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
                  <div className="px-3 py-1 rounded-full bg-naranja/10 text-naranja font-mono text-xs font-bold shrink-0">
                    Semana 0 a 12
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-stone-900 text-base">Primer trimestre</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      Continúa el ácido fólico hasta la semana 12. Se mantiene vitamina D y yodo. El requerimiento de energía no sube en este trimestre: <em>comer por dos en el primero no tiene base científica</em>. El hierro en dosis de suplementación no se indica de rutina todavía, salvo anemia confirmada.
                    </p>
                  </div>
                </div>

                {/* Semana 16 */}
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
                  <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-mono text-xs font-bold shrink-0">
                    Semana 16
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-stone-900 text-base">Entra el hierro</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      <strong>30 a 60 mg de hierro elemental al día.</strong> Se parte en la semana 16 porque ahí despega la expansión del volumen sanguíneo y la demanda fetal, y porque antes agrava las náuseas sin beneficio adicional.
                    </p>
                  </div>
                </div>

                {/* Semana 20 */}
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
                  <div className="px-3 py-1 rounded-full bg-[#6FA987]/20 text-[#3b6e51] font-mono text-xs font-bold shrink-0">
                    Semana 20
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-stone-900 text-base">Calcio y DHA</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      <strong>Calcio hasta completar 1.000 mg al día</strong> contando la dieta, en mujeres con ingesta láctea baja. <strong>DHA 200 mg al día</strong> si no comes pescado graso dos veces por semana. El tercer trimestre concentra el depósito cerebral de DHA del bebé.
                    </p>
                  </div>
                </div>

                {/* Parto y Después */}
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col sm:flex-row gap-4 items-start">
                  <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold shrink-0">
                    Parto y después
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-stone-900 text-base">Lactancia</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      El hierro sigue hasta los 3 meses postparto para reponer las pérdidas del parto. Sube el yodo, sube la colina, baja el requerimiento de hierro dietario. El ácido fólico en dosis de suplemento ya no es necesario de rutina.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: TABLA MAESTRA */}
          {activeTab === 'tabla' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-stone-200 pb-3">
                <span className="text-xs font-mono font-bold text-naranja uppercase tracking-wider">La página que importa</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Tabla maestra de dosificación</h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Valores de referencia para población chilena sana. Ácido fólico, hierro, calcio y vitamina D siguen la Guía Perinatal del MINSAL.
                </p>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-2xs">
                <table className="w-full text-left text-xs border-collapse font-sans">
                  <thead>
                    <tr className="bg-stone-900 text-white font-medium">
                      <th className="p-3">Nutriente</th>
                      <th className="p-3">Preconcepción</th>
                      <th className="p-3">Embarazo</th>
                      <th className="p-3">Lactancia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-semibold text-stone-900">Ácido fólico (suplemento)</td>
                      <td className="p-3 text-stone-600">0,4 mg/día <span className="text-[10px] text-stone-400 block">(desde 3 meses antes)</span></td>
                      <td className="p-3 font-bold text-naranja">0,4 a 0,8 mg/día <span className="text-[10px] text-stone-400 block font-normal">(hasta semana 12)</span></td>
                      <td className="p-3 text-stone-400">No de rutina</td>
                    </tr>
                    <tr className="hover:bg-stone-50 bg-stone-50/40">
                      <td className="p-3 font-semibold text-stone-900">Ácido fólico (alto riesgo)*</td>
                      <td className="p-3 text-stone-600">4 a 5 mg/día</td>
                      <td className="p-3 font-bold text-stone-800">4 a 5 mg/día hasta sem 12</td>
                      <td className="p-3 text-stone-400">—</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-semibold text-stone-900">Hierro elemental</td>
                      <td className="p-3 text-stone-600">Según ferritina</td>
                      <td className="p-3 font-bold text-naranja">30 a 60 mg/día <span className="text-[10px] text-stone-400 block font-normal">(desde sem 16)</span></td>
                      <td className="p-3 text-stone-600">Hasta 3 meses postparto</td>
                    </tr>
                    <tr className="hover:bg-stone-50 bg-stone-50/40">
                      <td className="p-3 font-semibold text-stone-900">Calcio (dieta + suplemento)</td>
                      <td className="p-3 text-stone-600">1.000 mg/día</td>
                      <td className="p-3 font-bold text-stone-800">1.000 mg/día</td>
                      <td className="p-3 text-stone-600">1.000 mg/día</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-semibold text-stone-900">Vitamina D</td>
                      <td className="p-3 text-stone-600">400 a 600 UI/día</td>
                      <td className="p-3 font-bold text-stone-800">400 UI/día</td>
                      <td className="p-3 text-stone-600">400 UI/día</td>
                    </tr>
                    <tr className="hover:bg-stone-50 bg-stone-50/40">
                      <td className="p-3 font-semibold text-stone-900">Yodo</td>
                      <td className="p-3 text-stone-600">150 µg/día</td>
                      <td className="p-3 font-bold text-stone-800">250 µg/día</td>
                      <td className="p-3 text-stone-600">250 a 290 µg/día</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-semibold text-stone-900">DHA</td>
                      <td className="p-3 text-stone-600">200 mg/día</td>
                      <td className="p-3 font-bold text-stone-800">200 mg/día</td>
                      <td className="p-3 text-stone-600">200 a 300 mg/día</td>
                    </tr>
                    <tr className="hover:bg-stone-50 bg-stone-50/40">
                      <td className="p-3 font-semibold text-stone-900">Colina</td>
                      <td className="p-3 text-stone-600">425 mg/día</td>
                      <td className="p-3 font-bold text-stone-800">450 mg/día</td>
                      <td className="p-3 text-stone-600">550 mg/día</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-semibold text-stone-900">Zinc</td>
                      <td className="p-3 text-stone-600">8 mg/día</td>
                      <td className="p-3 font-bold text-stone-800">11 mg/día</td>
                      <td className="p-3 text-stone-600">12 mg/día</td>
                    </tr>
                    <tr className="hover:bg-amber-50/60 bg-amber-50/30">
                      <td className="p-3 font-semibold text-amber-900">Cafeína (límite máximo)</td>
                      <td className="p-3 text-stone-400">—</td>
                      <td className="p-3 font-bold text-amber-900">Máx 200 mg/día <span className="text-[10px] text-stone-500 block font-normal">(≈ 2 tazas café filtrado)</span></td>
                      <td className="p-3 text-amber-900">Máx 200 a 300 mg/día</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Two critical warning callouts from page 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs space-y-1">
                  <h5 className="font-serif font-bold text-stone-900">
                    Hierro elemental NO es lo mismo que sal de hierro
                  </h5>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Un comprimido de sulfato ferroso de 200 mg aporta cerca de <strong>40 mg de hierro elemental</strong>. Lee siempre la etiqueta: la cifra que importa es la de hierro elemental.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs space-y-1">
                  <h5 className="font-serif font-bold text-stone-900">
                    *Alto riesgo de defecto del tubo neural
                  </h5>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Antecedente de embarazo con DTN, diabetes pregestacional, anticonvulsivantes, obesidad o malabsorción. Esa es la indicación de 4 a 5 mg, no una dosis para todas.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Cómo usar esta tabla:</strong> Sácale una foto o llévala en tu teléfono al control. Compara columna por columna lo que dice tu frasco con la tabla. Si algo no cuadra, esa es tu pregunta exacta para tu médico o matrona.
                </span>
              </div>
            </div>
          )}

          {/* TAB 4: NUTRIENTES CLAVE */}
          {activeTab === 'nutrientes' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-stone-200 pb-3">
                <span className="text-xs font-mono font-bold text-[#6FA987] uppercase tracking-wider">Detalle técnico</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Nutriente por nutriente</h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Para qué sirve, cuándo tomarlo y qué lo bloquea.
                </p>
              </div>

              <div className="space-y-6 text-xs text-stone-600 leading-relaxed font-light">
                
                {/* 1. Ácido fólico */}
                <div className="border border-stone-200 rounded-2xl p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <h4 className="font-serif font-bold text-stone-900 text-base">01. Ácido fólico</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-naranja/10 text-naranja font-mono font-bold text-[10px]">Preconcepción a sem 12</span>
                  </div>
                  <p>
                    <strong>Para qué:</strong> Reduce drásticamente el riesgo de defectos del tubo neural (espina bífida y anencefalia). Evidencia sólida desde 1991.
                  </p>
                  <p>
                    <strong>En Chile la harina está fortificada desde el año 2000:</strong> Eso bajó los defectos a la mitad a nivel país. No reemplaza el suplemento, pero explica por qué la dosis estándar chilena (0,4 mg) es suficiente.
                  </p>
                  <p>
                    <strong>La pregunta del metilfolato:</strong> La evidencia disponible no muestra mejores resultados que el ácido fólico en población general. Si te cobran el triple por metilfolato diciendo que es indispensable, pide el estudio clínico que lo respalde.
                  </p>
                </div>

                {/* 2. Hierro */}
                <div className="border border-stone-200 rounded-2xl p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <h4 className="font-serif font-bold text-stone-900 text-base">02. Hierro elemental (30 a 60 mg/día)</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono font-bold text-[10px]">Semana 16 a 3 meses postparto</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                      <strong className="text-emerald-800 block mb-1">Lo que mejora su absorción:</strong>
                      <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                        <li>Con el estómago vacío, 1 hora antes de comer</li>
                        <li>Con vitamina C (jugo de naranja, kiwi, pimentón)</li>
                        <li>Con agua, no con otra bebida</li>
                      </ul>
                    </div>
                    <div className="bg-rose-50/70 p-3 rounded-xl border border-rose-100">
                      <strong className="text-rose-800 block mb-1">Lo que lo bloquea:</strong>
                      <ul className="list-disc pl-4 space-y-1 text-rose-900">
                        <li>Té, café y mate (separar 2 horas)</li>
                        <li>Lácteos y suplementos de calcio (separar 2 horas)</li>
                        <li>Tomarlo junto al multivitamínico con calcio</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-500">
                    <em>Si te da náuseas o constipación:</em> prueba tomarlo de noche o consulta a tu equipo cambiar la sal de hierro.
                  </p>
                </div>

                {/* 3. Calcio y Vitamina D */}
                <div className="border border-stone-200 rounded-2xl p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <h4 className="font-serif font-bold text-stone-900 text-base">03 & 04. Calcio (1.000 mg) & Vitamina D (400 UI)</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-mono font-bold text-[10px]">Semana 20 en adelante</span>
                  </div>
                  <p>
                    <strong>La meta es la ingesta total:</strong> Tres porciones de lácteos al día cubren cerca de 900 mg de calcio (leche 240 mg/taza, yogur 180 mg, quesillo 140 mg). Si lo cubres con comida, el suplemento no agrega nada.
                  </p>
                  <p>
                    <strong>¡Separa las tomas!:</strong> El calcio y el hierro compiten por el mismo transportador intestinal. Hierro en la mañana en ayunas; calcio en la tarde o con la cena. Si tu multivitamínico trae los dos juntos, estás perdiendo parte del hierro.
                  </p>
                </div>

                {/* 4. DHA, Yodo y Colina */}
                <div className="border border-stone-200 rounded-2xl p-5 space-y-3 bg-white">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <h4 className="font-serif font-bold text-stone-900 text-base">05, 06 & 07. DHA, Yodo y Colina</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-mono font-bold text-[10px]">Desarrollo neurológico</span>
                  </div>
                  <p>
                    <strong>DHA (200 mg/día):</strong> Se acumula en cerebro y retina fetal en el tercer trimestre. 2 porciones de pescado graso bajo en mercurio a la semana (jurel, sardina, salmón) cubren la meta. Evita pez espada y tiburón por mercurio.
                  </p>
                  <p>
                    <strong>Yodo (250 µg/día):</strong> Clave para tiroides fetal. En Chile la sal está yodada desde 1979. Si usas sal rosada o de mar sin yodar, no aporta yodo.
                  </p>
                  <p>
                    <strong>Colina (450 mg/día):</strong> 2 huevos diarios más legumbres cubren la meta sin gastar en suplementos costosos.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: MITOS Y SIN RESPALDO */}
          {activeTab === 'mitos' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-stone-200 pb-3">
                <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">Higiene informativa</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Lo que se vende y no tiene respaldo</h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Una guía de suplementos sirve igual de poco si solo te dice qué comprar. Esta es la lista de lo que se promociona a embarazadas sin evidencia que lo sostenga.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-mono font-bold text-rose-600 text-[11px]">01</span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Prenatales con veinte ingredientes</h4>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Un frasco con más componentes no rinde más. Muchos traen calcio y hierro juntos (bloqueándose mutuamente) y colina en dosis simbólicas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-mono font-bold text-rose-600 text-[11px]">02</span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Probióticos para prevenir preeclampsia</h4>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Una revisión sistemática de 29 ensayos con 7.735 embarazadas no encontró diferencia en riesgo de preeclampsia. No te dejes engañar con esa promesa.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-mono font-bold text-rose-600 text-[11px]">03</span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Colina en dosis de 3 gramos</h4>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Confunde el límite superior tolerable con la recomendación. Sobre ese límite causa hipotensión, sudoración y olor corporal a pescado. La dosis es 450 mg.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-mono font-bold text-rose-600 text-[11px]">04</span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Vitamina A en dosis altas</h4>
                  <p className="text-stone-600 font-light leading-relaxed">
                    El retinol sobre 3.000 µg al día es <strong>teratogénico</strong> (causa malformaciones). Revisa que tu multivitamínico no la traiga en exceso y evita hígado más de 1 vez por semana.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-mono font-bold text-rose-600 text-[11px]">05</span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Infusiones y hierbas "naturales"</h4>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Boldo, ruda, poleo y matico tienen actividad uterina documentada. Que sea de origen vegetal no significa que sea inocuo en gestación.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="font-mono font-bold text-rose-600 text-[11px]">06</span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Colágeno, detox y batidos depurativos</h4>
                  <p className="text-stone-600 font-light leading-relaxed">
                    Sin evidencia de beneficio en embarazo y sin control de contaminantes. Ese presupuesto rinde infinitamente mejor en pescado, huevos y lácteos reales.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 6: RUTINA HORA POR HORA */}
          {activeTab === 'rutina' && (
            <div className="space-y-6 animate-fade-in">
              <div className="border-b border-stone-200 pb-3">
                <span className="text-xs font-mono font-bold text-[#6FA987] uppercase tracking-wider">Aplicación Práctica</span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">Tu día, hora por hora</h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Ejemplo de distribución para una mujer en segundo trimestre con hierro, calcio y vitamina D indicados.
                </p>
              </div>

              {/* Schedule timeline */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-24 shrink-0 font-bold text-stone-900 font-mono">Al despertar</div>
                  <div>
                    <strong className="text-stone-900">Hierro + vaso de jugo de naranja o agua</strong>
                    <p className="text-stone-500 font-light">Estómago vacío y vitamina C mejoran notablemente la absorción.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-24 shrink-0 font-bold text-stone-900 font-mono">1 hora después</div>
                  <div>
                    <strong className="text-stone-900">Desayuno habitual</strong>
                    <p className="text-stone-500 font-light">Se respeta la ventana óptima de absorción del hierro.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-24 shrink-0 font-bold text-stone-900 font-mono">Almuerzo</div>
                  <div>
                    <strong className="text-stone-900">DHA (o el pescado del día)</strong>
                    <p className="text-stone-500 font-light">La grasa saludable de la comida mejora la absorción de los omega-3.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-24 shrink-0 font-bold text-stone-900 font-mono">Once o cena</div>
                  <div>
                    <strong className="text-stone-900">Calcio + Vitamina D</strong>
                    <p className="text-stone-500 font-light">Bien lejos del hierro matinal y junto con comida.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="w-24 shrink-0 font-bold text-stone-900 font-mono">Todo el día</div>
                  <div>
                    <strong className="text-stone-900">Café o té (máx 200 mg cafeína)</strong>
                    <p className="text-stone-500 font-light">Siempre a mínimo 2 horas de la toma de hierro.</p>
                  </div>
                </div>
              </div>

              {/* 5 Questions for your next checkup */}
              <div className="p-5 rounded-2xl bg-[#2D3142] text-white space-y-3">
                <h4 className="font-serif font-bold text-base text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#6FA987]" />
                  Lleva estas 5 preguntas a tu próximo control prenatal
                </h4>
                <ul className="space-y-2 text-xs text-stone-300 font-light list-disc pl-5">
                  <li>¿Cuánto <strong>hierro elemental</strong> tiene el comprimido que me indicaste y desde qué semana lo tomo?</li>
                  <li>¿Cuánto <strong>calcio</strong> estoy cubriendo con mi dieta diaria y cuánto necesito completar?</li>
                  <li>¿Tengo alguna condición que me ponga en el grupo de 4 a 5 mg de <strong>ácido fólico</strong>?</li>
                  <li>¿Cuándo se controlan de nuevo mi <strong>ferritina, hemoglobina y vitamina D</strong>?</li>
                  <li>¿Hay algo en lo que tomo hoy que se esté <strong>anulando</strong> entre sí?</li>
                </ul>
              </div>

              <div className="bg-stone-100 p-4 rounded-xl text-center text-xs text-stone-700">
                <strong>Una regla que resume todo:</strong> Hierro solo y temprano. Calcio con comida y tarde. Dos horas entre ellos. Café lejos del hierro.
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 print:hidden">
          <div className="text-xs text-stone-500 font-light text-center sm:text-left">
            Guía de distribución libre · Compártela con quien la necesite.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-stone-300 hover:bg-stone-200 text-stone-700 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Cerrar Guía
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
