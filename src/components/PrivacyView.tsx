/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';

interface PrivacyViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function PrivacyView({ setCurrentPage }: PrivacyViewProps) {
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
                Política de privacidad
              </h1>
              <p className="text-xs text-stone-500">
                Última actualización: noviembre de 2026
              </p>
            </header>

            <div className="space-y-6 text-sm leading-relaxed">
              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  1. Responsable
                </h2>
                <p>
                  KEM NUTRITION SpA, RUT 78.447.702-9, con domicilio en La Serena, Chile. Contacto: kemnutritioncl@gmail.com.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  2. Qué datos recopilamos
                </h2>
                <p>
                  Datos de identificación y contacto (nombre y correo), datos de tu uso del aula (avance en los módulos) y los datos de salud y alimentación que nos entregas voluntariamente en la ficha de ingreso y en las consultas. Los datos de tu tarjeta los procesa Flow; nosotros no los recibimos ni los guardamos.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  3. Para qué los usamos
                </h2>
                <p>
                  Para darte acceso al programa, prestar las consultas, emitir boletas y comunicarnos contigo sobre los servicios que contrataste. No usamos tus datos para publicidad de terceros.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  4. Datos de salud
                </h2>
                <p>
                  Los datos de salud son datos sensibles. Los tratamos solo con tu consentimiento expreso, exclusivamente para tu atención nutricional y bajo confidencialidad profesional.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  5. Con quién los compartimos
                </h2>
                <p>
                  No vendemos ni cedemos tus datos. Para operar usamos proveedores tecnológicos que los tratan por cuenta nuestra: Google (Firebase y Formularios), Flow (pagos), Calendly (agenda), Netlify (alojamiento del sitio) y YouTube (videos). Algunos de ellos almacenan información fuera de Chile.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  6. Cuánto tiempo los guardamos
                </h2>
                <p>
                  Mientras mantengas una relación con nosotros y por los plazos que exija la ley.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  7. Tus derechos
                </h2>
                <p>
                  Puedes pedir acceso, rectificación, eliminación u oposición al tratamiento de tus datos escribiendo a kemnutritioncl@gmail.com. Responderemos dentro de los plazos que establece la normativa chilena de protección de datos personales.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  8. Seguridad
                </h2>
                <p>
                  Aplicamos medidas razonables para proteger tu información, como acceso con inicio de sesión y permisos restringidos.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  9. Cookies y almacenamiento local
                </h2>
                <p>
                  El sitio y el aula usan solo el almacenamiento necesario para funcionar y mantener tu sesión. No usamos cookies publicitarias.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-semibold text-stone-900">
                  10. Cambios
                </h2>
                <p>
                  Si actualizamos esta política, publicaremos la nueva versión en esta página con su fecha.
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
