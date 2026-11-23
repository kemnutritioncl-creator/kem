/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';

interface TermsViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function TermsView({ setCurrentPage }: TermsViewProps) {
  return (
    <div className="pt-24 font-sans bg-bg-warm min-h-screen">
      <section className="py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button
              onClick={() => {
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            >
              Volver al inicio
            </button>
          </div>

          <article className="bg-white rounded-3xl border border-stone-200/70 p-8 sm:p-12 shadow-xs space-y-8 text-stone-700">
            <header className="border-b border-stone-200 pb-6 space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight">
                Términos y condiciones
              </h1>
              <p className="text-xs text-stone-500">
                Última actualización: noviembre de 2026
              </p>
            </header>

            <div className="space-y-6 text-sm leading-relaxed">
              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  1. Identificación del proveedor
                </h2>
                <p>
                  KEM NUTRITION SpA, RUT 78.447.702-9, con domicilio en La Serena, Chile. Correo de contacto: kemnutritioncl@gmail.com. Los servicios clínicos son prestados por Katherinne Elgueta Mora, nutricionista.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  2. Servicios
                </h2>
                <p>
                  KEM Nutrition Academy ofrece el programa Kem Mom en dos modalidades (Plan Esencial y Plan Completo + Acompañamiento) y la consulta clínica individual online. El contenido y alcance de cada servicio es el que se describe en su página al momento de la compra.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  3. Precios y pago
                </h2>
                <p>
                  Los precios están expresados en pesos chilenos. El pago se realiza a través de Flow, con los medios que esa plataforma habilite. Las cuotas precio contado dependen de las condiciones de tu tarjeta. Por cada pago se emite la boleta correspondiente.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  4. Acceso al programa
                </h2>
                <p>
                  Una vez confirmado el pago, habilitamos tu acceso al aula virtual con el correo que indicaste, dentro de 2 días hábiles. El acceso es personal e intransferible y dura 12 meses desde su habilitación. Ingresas con tu cuenta de Google o con un enlace que llega a tu correo.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  5. Plan Completo + Acompañamiento
                </h2>
                <p>
                  Incluye 3 sesiones clínicas individuales online, que se agendan y deben realizarse dentro de los 3 meses siguientes a la habilitación del acceso, y respuesta a dudas de alimentación y suplementación por correo durante ese mismo período, en un plazo de 48 horas hábiles. El soporte por correo no incluye nuevas evaluaciones ni cambios de pauta, que se realizan en las sesiones.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  6. Consultas y sesiones individuales
                </h2>
                <p>
                  Puedes reagendar una sesión avisando con al menos 24 horas de anticipación. Si no asistes sin aviso previo, la sesión se considera realizada.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  7. Derecho a retracto
                </h2>
                <p>
                  Conforme a la Ley N° 19.496, puedes retractarte de la compra dentro de los 10 días siguientes a la contratación, escribiendo a kemnutritioncl@gmail.com. Si en ese plazo ya se realizó alguna sesión individual, se descontará su valor. La devolución se realiza a la mayor brevedad y dentro del plazo legal.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  8. Propiedad intelectual y uso del material
                </h2>
                <p>
                  Todo el contenido del programa (clases, láminas, videos, guías, planillas y recetarios) es de propiedad de KEM NUTRITION SpA. Es para tu uso personal. No está permitido descargarlo, copiarlo, grabarlo, compartirlo ni distribuirlo. El material lleva una marca de agua con tu correo. El incumplimiento permite suspender el acceso sin devolución.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  9. Naturaleza del contenido
                </h2>
                <p>
                  El contenido del programa es educativo y general. No reemplaza la atención clínica individual ni los controles con tu equipo de salud. Las indicaciones personalizadas se entregan solo en las consultas individuales. Ante cualquier síntoma o urgencia, acude a tu centro de salud.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  10. Modificaciones y legislación aplicable
                </h2>
                <p>
                  Podemos actualizar estos términos; los cambios no afectan las compras ya realizadas. Estos términos se rigen por la legislación chilena. Para cualquier consulta o reclamo escríbenos a kemnutritioncl@gmail.com. También puedes recurrir al Servicio Nacional del Consumidor (SERNAC).
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
