/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CourseModule, Testimonial, FaqItem } from './types';

export const universities = [
  { name: "Pontificia Universidad Católica de Chile", logo: "PUC" },
  { name: "Universidad Central", logo: "UCEN" },
  { name: "Universidad Mayor", logo: "UMAYOR" },
  { name: "Universidad Andrés Bello", logo: "UNAB" },
  { name: "Universidad Católica del Norte", logo: "UCN" }
];

export const momModules: CourseModule[] = [
  {
    num: 1,
    title: "Preparándome para el embarazo",
    desc: "Optimiza la fertilidad natural y la preconcepción. Aprende sobre nutrientes críticos, salud digestiva y cómo preparar el nido antes de la gestación."
  },
  {
    num: 2,
    title: "Primer trimestre: Los primeros cambios",
    desc: "Aprende a manejar las náuseas, el cansancio y los primeros síntomas físicos con estrategias de alimentación amables y seguras para tu bebé."
  },
  {
    num: 3,
    title: "Alimentación y nutrición en el embarazo",
    desc: "La guía definitiva sobre porciones, nutrientes clave (hierro, calcio, DHA, colina) y cómo estructurar tus comidas sin caer en mitos obsoletos."
  },
  {
    num: 4,
    title: "Situaciones frecuentes durante el embarazo",
    desc: "Manejo práctico del estreñimiento, gastritis, reflujo y antojos desde un enfoque nutricional seguro y basado en evidencia."
  },
  {
    num: 5,
    title: "Diabetes gestacional y salud metabólica",
    desc: "Estrategias de alimentación inteligente para controlar glicemias, entender los carbohidratos, y cuidar tu bienestar sin restricciones extremas."
  },
  {
    num: 6,
    title: "Preparándome para el nacimiento y la lactancia",
    desc: "Cómo la alimentación en las últimas semanas influye en el parto, y la preparación práctica sobre calostro, banco de leche y primeras tomas."
  },
  {
    num: 7,
    title: "Nutrición integral en el postparto",
    desc: "Recuperación de tejidos, fatiga materna, alimentación idónea para reponer reservas sin prisa, respetando los ritmos de tu cuerpo."
  },
  {
    num: 8,
    title: "Lactancia y bienestar de la madre",
    desc: "Compatibilidad de alimentos, mitos sobre gases, suplementación adecuada durante la lactancia y cómo sostener tu energía física y mental."
  }
];

export const proModules: CourseModule[] = [
  {
    num: 1,
    title: "Fundamentos de la nutrición materna",
    desc: "Bases fisiológicas de la gestación, epigenetic programming y el impacto a largo plazo de la nutrición en el binomio madre-hijo."
  },
  {
    num: 2,
    title: "Evaluación nutricional de la mujer gestante",
    desc: "Medición antropométrica técnica, curvas de incremento de peso (Atalah y OMS) y correcta determinación diagnóstica integral."
  },
  {
    num: 3,
    title: "Interpretación de exámenes y suplementación",
    desc: "Parámetros bioquímicos gestacionales clave, diagnóstico de déficit nutricional y dosificación científica de vitaminas y minerales."
  },
  {
    num: 4,
    title: "Requerimientos y planificación alimentaria",
    desc: "Cálculo preciso de energía y macronutrientes por trimestre, diseño de pautas alimentarias realistas e individualizadas."
  },
  {
    num: 5,
    title: "Diabetes gestacional y resistencia a la insulina",
    desc: "Criterios diagnósticos actuales, monitoreo de glicemia, estructura de carbohidratos y manejo terapéutico no farmacológico integral."
  },
  {
    num: 6,
    title: "Situaciones clínicas de alta consulta",
    desc: "Estrategias para náuseas y vómitos severos, trastornos gastrointestinales, restricción del crecimiento fetal (RCF) e hipertensión."
  },
  {
    num: 7,
    title: "Nutrición en postparto y lactancia clínica",
    desc: "Requerimientos en la lactancia, pérdida de peso postparto segura y acompañamiento clínico en alimentación y suplementos."
  },
  {
    num: 8,
    title: "Herramientas para la consulta práctica",
    desc: "Protocolos estructurados de atención, formatos para el examen físico sutil, checklists y estructuración de la sesión clínica."
  },
  {
    num: 9,
    title: "Casos clínicos aplicados reales",
    desc: "Análisis técnico y resolución grupal de casos reales de gestantes con patologías asociadas, vegetarianismo y embarazos múltiples."
  },
  {
    num: 10,
    title: "Implementación profesional y desarrollo",
    desc: "Estrategias éticas para captar pacientes, valorizar tu consulta, y posicionarte con autoridad científica en el área materno-infantil."
  }
];

export const momTestimonials: Testimonial[] = [
  {
    id: "m1",
    name: "Lucía Valenzuela",
    role: "Mamá de Joaquín (3 meses)",
    text: "Llegué con mucha gastritis y pánico de qué comer en el primer trimestre. El programa me dio la tranquilidad exacta que necesitaba, con recetas prácticas que calmaron mis síntomas de forma amigable.",
    rating: 5
  },
  {
    id: "m2",
    name: "María José Campos",
    role: "Embarazada de 28 semanas con Diabetes Gestacional",
    text: "El módulo de diabetes gestacional me salvó de la angustia absoluta. Logré regular mis glicemias de forma natural sin pasar hambre ni sentirme culpable. Katherinne te enseña sin juzgar.",
    rating: 5
  },
  {
    id: "m3",
    name: "Camila Oteíza",
    role: "Mamá de Sofía (1 año)",
    text: "Tantas opiniones contradictorias en redes me tenían estresada. En esta academia encontré evidencia respaldada pero explicada de forma simple para el día a día. Mi lactancia fue otra historia gracias a esto.",
    rating: 5
  }
];

export const proTestimonials: Testimonial[] = [
  {
    id: "p1",
    name: "Dra. Andrea Beltrán",
    role: "Nutricionista Clínica Pediátrica",
    text: "Mi seguridad para prescribir y evaluar subió al 100%. Las herramientas de cálculo y protocolos de suplementación que comparte Katherinne son de un nivel académico superior. Amorticé la inversión de inmediato.",
    rating: 5
  },
  {
    id: "p2",
    name: "Sebastián Pardo",
    role: "Interno de Nutrición e Investigador",
    text: "En la carrera vemos teoría sumamente general sobre gestantes. Este programa te entrega la metodología del mundo real paso a paso para abrirte paso con un estándar altísimo.",
    rating: 5
  },
  {
    id: "p3",
    name: "Francisca Silva",
    role: "Nutricionista Materno-Infantil",
    text: "Las fichas clínicas editables y la guía de exámenes bioquímicos me ahorran horas de preparación para mis pacientes. Una mentoría excelente por parte de una docente de gran trayectoria.",
    rating: 5
  }
];

export const generalFaqs: FaqItem[] = [
  {
    question: "¿Qué es KEM Nutrition Academy?",
    answer: "Es la plataforma de educación nutricional especializada dirigida por Katherinne Elgueta Mora, Magíster en Nutrición Clínica Pediátrica. Proporcionamos una vía para que las madres vivan su proceso con tranquilidad (KEM Mom) y para que los profesionales se capaciten con base científica aplicada (KEM Pro)."
  },
  {
    question: "¿Los cursos son en vivo o grabados?",
    answer: "Nuestros planes Esenciales son grabados (asíncronos) para que puedas avanzar a tu propio ritmo desde cualquier dispositivo. Los planes de Acompañamiento incluyen además sesiones grupales en vivo cada mes y sesiones individuales personalizadas directamente con Katherinne."
  },
  {
    question: "¿Recibo certificación al terminar?",
    answer: "Sí, todos los inscritos en KEM Pro reciben un certificado de finalización emitido por KEM Nutrition Academy que acredita las horas lectivas del programa clínico. KEM Mom emite una constancia de participación al completar el programa de educación para el hogar."
  },
  {
    question: "¿Qué métodos de pago están disponibles?",
    answer: "Puedes pagar de forma segura vía Webpay (Tarjetas de Débito y Crédito), transferencia bancaria directa o PayPal si te encuentras fuera de Chile."
  }
];

export const momFaqs: FaqItem[] = [
  {
    question: "Ya hay mucha información gratis en internet, ¿por qué pagar por un programa?",
    answer: "En internet abunda la sobreinformación y los consejos contradictorios que generan estrés y culpa. Este programa condensa evidencia científica actualizada, filtrada por una docente universitaria y clínica, dándote respuestas claras y prácticas adaptadas a tu vida real, sin mitos ni restricciones innecesarias."
  },
  {
    question: "Tengo muy poco tiempo y energía durante el embarazo, ¿cómo lo haré?",
    answer: "Cada clase en video está grabada en micro-módulos directos al grano de entre 10 y 15 minutos. Además, tienes checklists y resúmenes descargables en PDF que puedes consultar en un minuto para resolver dudas inmediatas sobre porciones, suplementos o síntomas."
  },
  {
    question: "No sé si este programa se adapta a mi caso específico (diabetes gestacional, hipotiroidismo, etc.)",
    answer: "Contamos con módulos exclusivos dedicados a patologías comunes de la gestación como diabetes gestacional, reflujo, resistencia a la insulina y estreñimiento. Si deseas un análisis individual, el Plan de Acompañamiento incluye una sesión clínica uno a uno con Katherinne para afinar tu plan."
  },
  {
    question: "El precio representa una inversión importante, ¿vale la pena?",
    answer: "La nutrición durante los 1000 primeros días (desde la preconcepción hasta los 2 años) programa la salud futura de tu hijo de por vida. Invertir en guías libres de error te evita pagar múltiples consultas aisladas de médicos y nutricionistas que a menudo se contradicen."
  },
  {
    question: "Prefiero consultar directo cuando tenga una duda particular, ¿cómo me ayuda el programa?",
    answer: "El programa te enseña las bases esenciales para prevenir complicaciones antes de que aparezcan. Te brinda autonomía. Y si tienes inquietudes, cuentas con la comunidad de mamás de KEM Mom y las sesiones de preguntas directas."
  }
];

export const proFaqs: FaqItem[] = [
  {
    question: "¿Qué tan profundo es el contenido técnico de este curso?",
    answer: "El curso está dictado por una académica universitaria con postgrado INTA de la Universidad de Chile. Analizamos curvas antropométricas de incremento de peso, guías de suplementación chilenas e internacionales avanzadas, desgloses hormonales de la diabetes gestacional y pautas de suplementación y análisis de exámenes basados en journals actualizados."
  },
  {
    question: "Ya he tomado otros cursos y todavía no me siento preparada para atender.",
    answer: "La diferencia es nuestro enfoque práctico. No solo te damos teoría; te entregamos herramientas listas para descargar y usar: plantillas de anamnesis, algoritmos en PDF para guiar tu diagnóstico clínico, y excels de cálculo de requerimiento calibrados para gestantes. Terminarás lista para tu primera cita."
  },
  {
    question: "¿Voy a recuperar rápido la inversión económica?",
    answer: "Perfectamente. La consulta en nutrición materna es un área con alta demanda y poca oferta especializada de calidad. Con solo atender a 2 gestantes mensuales con un estándar premium, habrás amortizado la totalidad del programa KEM Pro."
  },
  {
    question: "No tengo el tiempo para destinar horas de estudio por mi carga laboral actual.",
    answer: "El acceso es de por vida y los módulos asíncronos son breves y enfocados en la práctica. Puedes verlos en tus tiempos de traslado, almuerzos or fines de semana. Implementas el aprendizaje a tu propio paso."
  },
  {
    question: "¿Las herramientas que entregan son realmente aplicables en Chile?",
    answer: "Absolutamente. Están adaptadas a las normativas vigentes del MINSAL (Ministerio de Salud), complementadas con las normativas internacionales de la ACOG, de la OMS y las pautas clínicas del INTA de la Universidad de Chile."
  }
];
