import { localeImg } from '../locale-img';

export const builder = [
  {
    name: 'valentine',
    path: 'valentine',
    img: (locale) => localeImg('special-valentine', locale, 'webp'),
  },
  {
    name: 'diploma',
    path: 'diploma',
    img: (locale) => localeImg('special-diploma', locale, 'webp'),
  },
  {
    name: 'contract',
    path: 'contract',
    img: (locale) => localeImg('special-contract', locale, 'webp'),
  },
  {
    name: 'delivery',
    path: 'delivery',
    img: (locale) => localeImg('special-delivery', locale, 'webp'),
  },
];
