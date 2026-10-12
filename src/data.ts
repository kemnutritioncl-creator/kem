/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CourseModule, Testimonial, FaqItem } from './types';

export const universities = [
  { 
    name: "Pontificia Universidad Católica de Chile", 
    logo: "PUC",
    logoUrl: "https://lh3.googleusercontent.com/d/1AAzyqhfPV_Y5b2P_7jdlE__0sCfTn0IP"
  },
  { 
    name: "Universidad Central", 
    logo: "UCEN",
    logoUrl: "https://lh3.googleusercontent.com/d/1latn_BGOX01IuZJ51-iJkYdsf-Ip7K_o"
  },
  { 
    name: "Universidad Mayor", 
    logo: "UMAYOR",
    logoUrl: "https://lh3.googleusercontent.com/d/11dN4Bd8fJAbTCHqZ8OshXUIonxDT2UrT"
  },
  { 
    name: "Universidad Andrés Bello", 
    logo: "UNAB",
    logoUrl: "https://lh3.googleusercontent.com/d/14M101YO6AK16HKmTCQJJPPdak8THMNAy"
  },
  { 
    name: "Universidad Católica del Norte", 
    logo: "UCN",
    logoUrl: "https://lh3.googleusercontent.com/d/1aPSkuQWTTokcWOl2EcDEG43XNWE-Y0aY"
  }
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
    desc: "Manejo práctico del estreñimiento, náuseas, acidez, reflujo y antojos desde un enfoque nutricional seguro y basado en evidencia."
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
    desc: "Entiende qué pasa fisiológicamente en el embarazo, cómo la programación epigenética moldea la salud del bebé a largo plazo y por qué la nutrición en esta etapa importa más de lo que te enseñaron."
  },
  {
    num: 2,
    title: "Evaluación nutricional de la mujer gestante",
    desc: "Domina la antropometría materna y el uso práctico de las curvas de incremento de peso, peso recomendado a subir por semana y al término del embarazo para dejar de intuir y comenzar a tomar decisiones nutricionales sólidas y defendibles en cada control."
  },
  {
    num: 3,
    title: "Interpretación de exámenes y suplementación",
    desc: "Lee un examen de laboratorio con criterio, identifica déficits antes de que se vuelvan problema y prescribe micronutrientes con respaldo real, no por costumbre."
  },
  {
    num: 4,
    title: "Requerimientos y planificación alimentaria",
    desc: "Calcula energía y macronutrientes por trimestre y diseña planes que tu paciente realmente pueda seguir, adaptados a su contexto y cultura."
  },
  {
    num: 5,
    title: "Diabetes gestacional y resistencia a la insulina",
    desc: "Criterios diagnósticos actualizados, monitoreo glicémico, distribución de carbohidratos y manejo nutricional no farmacológico para los casos que más te complican en consulta."
  },
  {
    num: 6,
    title: "Situaciones clínicas frecuentes",
    desc: "Náuseas severas, trastornos gastrointestinales, restricción del crecimiento fetal e hipertensión gestacional. Los casos que llegan todo el tiempo y para los que nadie te preparó bien."
  },
  {
    num: 7,
    title: "Postparto y lactancia",
    desc: "Requerimientos en lactancia, pérdida de peso postparto sin comprometer la producción de leche y acompañamiento clínico en suplementación."
  },
  {
    num: 8,
    title: "Herramientas para la práctica clínica",
    desc: "Protocolos de atención, formatos de evaluación y una estructura de consulta que te ahorra tiempo y le da al paciente una experiencia profesional desde el primer día."
  },
  {
    num: 9,
    title: "Casos clínicos reales",
    desc: "Resolución guiada de casos con patologías asociadas, alimentación vegetariana y embarazos múltiples. Practicas la toma de decisiones antes de enfrentarla sola."
  },
  {
    num: 10,
    title: "Implementación y desarrollo profesional",
    desc: "Cómo valorizar tu consulta, captar pacientes de forma ética y construir un ejercicio profesional sostenible en el área materno-infantil."
  }
];

export const momTestimonials: Testimonial[] = [
  {
    id: "m1",
    name: "Lucía Valenzuela",
    role: "Mamá de Joaquín (3 meses)",
    text: "Llegué con muchas náuseas, acidez y pánico de qué comer en el primer trimestre. El programa me dio la tranquilidad exacta que necesitaba, con recetas prácticas que calmaron mis síntomas de forma amigable.",
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
    text: "Tantas opiniones contradictorias en redes me tenían abrumada. En esta academia encontré evidencia respaldada pero explicada de forma simple para el día a día. Mi lactancia fue otra historia gracias a esto.",
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
    answer: "Es un espacio de acompañamiento nutricional dirigido por Katherinne Elgueta Mora, nutricionista con Magíster en Alimentación y Nutrición, mención Nutrición Clínica Pediátrica, del INTA, Universidad de Chile. A través de Kem Mom acompañamos a gestantes y mamás para que vivan su proceso con tranquilidad. Próximamente, Kem Pro estará disponible para nutricionistas titulados."
  },
  {
    question: "¿Los programas son en vivo o grabados?",
    answer: "Los planes Esenciales son grabados (asíncronos), para que avances a tu ritmo desde cualquier dispositivo. Los planes de Acompañamiento incluyen además sesiones grupales en vivo y una sesión individual al mes con Katherinne, durante 3 meses."
  },
  {
    question: "¿Recibo certificación al terminar?",
    answer: "Kem Mom entrega una constancia de participación al completar el programa. Kem Pro, cuando esté disponible, entregará una constancia de participación de KEM Nutrition Academy."
  },
  {
    question: "¿Qué métodos de pago están disponibles?",
    answer: "Puedes pagar de forma segura a través de Flow, con tarjetas de débito, crédito o transferencia bancaria. Los planes de Kem Mom se pueden pagar en hasta 12 cuotas precio contado con tarjeta de crédito."
  }
];

export const momFaqs: FaqItem[] = [
  {
    question: "Ya hay mucha información gratis en internet, ¿por qué pagar por un programa?",
    answer: "En internet abunda la sobreinformación y los consejos contradictorios que generan confusión y dudas. Este programa condensa evidencia científica actualizada, seleccionada por una nutricionista clínica, dándote respuestas claras y prácticas adaptadas a tu vida real, sin mitos ni restricciones innecesarias."
  },
  {
    question: "Tengo muy poco tiempo y energía durante el embarazo, ¿cómo lo haré?",
    answer: "Cada video es corto y directo al grano, para que avances a tu ritmo. Además, tienes checklists y resúmenes que puedes consultar en un minuto para resolver dudas inmediatas sobre porciones, suplementos o síntomas."
  },
  {
    question: "No sé si este programa se adapta a mi caso específico (diabetes gestacional, hipotiroidismo, etc.)",
    answer: "Contamos con módulos exclusivos dedicados a patologías comunes de la gestación como diabetes gestacional, reflujo, resistencia a la insulina y estreñimiento. Si deseas un análisis individual, el Plan de Acompañamiento incluye una sesión clínica individual al mes con Katherinne, durante 3 meses."
  },
  {
    question: "El precio representa una inversión importante, ¿vale la pena?",
    answer: "La nutrición durante los primeros 1.000 días, desde la preconcepción hasta los 2 años, influye en la salud futura de tu hijo. Tener información ordenada y confiable desde el inicio te ayuda a tomar mejores decisiones y a aprovechar mejor tus controles con tu equipo de salud."
  },
  {
    question: "Prefiero consultar directo cuando tenga una duda particular, ¿cómo me ayuda el programa?",
    answer: "El programa te entrega las bases para entender tu alimentación en cada etapa y reconocer a tiempo cuándo consultar. Te da autonomía. Y si tomas el Plan Acompañamiento, cuentas además con sesiones grupales e individuales con Katherinne."
  }
];

export const proFaqs: FaqItem[] = [
  {
    question: "¿Qué tan profundo es el contenido técnico de este programa?",
    answer: "El programa está dictado por Katherinne Elgueta Mora, nutricionista con Magíster en Alimentación y Nutrición, mención Nutrición Clínica Pediátrica, del INTA, Universidad de Chile, y experiencia clínica en atención pediátrica, adulta y de personas mayores. Abordará la evaluación del incremento de peso gestacional, las guías de suplementación chilenas e internacionales, el manejo metabólico de la diabetes gestacional y la interpretación de exámenes, con base en publicaciones científicas actualizadas."
  },
  {
    question: "Ya he estudiado por mi cuenta y todavía no me siento preparada para atender.",
    answer: "La diferencia está en el enfoque práctico. Además de la base teórica, el programa incluirá herramientas listas para usar: plantillas de anamnesis, algoritmos de apoyo a la decisión clínica y planillas de cálculo de requerimientos para gestantes, pensadas para que llegues con más seguridad a tu primera consulta."
  },
  {
    question: "No tengo el tiempo para destinar horas de estudio por mi carga laboral actual.",
    answer: "El acceso es de por vida y los módulos asíncronos son breves y enfocados en la práctica. Puedes verlos en tus tiempos de traslado, almuerzos o fines de semana. Implementas el aprendizaje a tu propio paso."
  },
  {
    question: "¿Las herramientas que entregan son realmente aplicables en Chile?",
    answer: "Sí. Están basadas en las normas vigentes del MINSAL y en recomendaciones internacionales, como las de la OMS y el ACOG."
  }
];
