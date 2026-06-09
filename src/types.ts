/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'kem-mom' | 'kem-pro';

export interface CheckoutUrls {
  momEsencial: string;
  momAcompañamiento: string;
  proEsencial: string;
  proAcompañamiento: string;
  whatsapp: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl?: string;
}

export interface CourseModule {
  num: number;
  title: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
