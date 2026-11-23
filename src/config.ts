/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckoutUrls } from './types';

export const PRICES = {
  esencial: '97.000',
  acompanamiento: '217.000',
  consulta: '35.000',
} as const;

export const CALENDLY_URL = 'https://calendly.com/kemnutritioncl/30min';

export const CHECKOUT_URLS: CheckoutUrls = {
  momEsencial: 'https://www.flow.cl/btn.php?token=md684de16d889abef823b66ec6fddbe277647f6c',
  momAcompañamiento: 'https://www.flow.cl/btn.php?token=l6eca65398973d28641a3de344ef16e6c008cd77',
  momConsulta: CALENDLY_URL,
  proEsencial: 'https://www.flow.cl/btn.php?token=md684de16d889abef823b66ec6fddbe277647f6c',
  proAcompañamiento: 'https://www.flow.cl/btn.php?token=l6eca65398973d28641a3de344ef16e6c008cd77',
  proConsulta: CALENDLY_URL,
};
