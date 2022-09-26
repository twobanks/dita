import { v4 as uuid } from 'uuid';
import { Social } from '../../types/dita';
const kwai = '/icon/kwai.png';
const instagram = '/icon/instagram.svg';
const whatsapp = '/icon/whatsapp.svg';
const tiktok = '/icon/tiktok.svg';

export const social: Social[] = [
  {
    id: uuid(),
    name: 'Veja meu catálogo',
    url: 'https://wa.me/c/553488927023',
    image: tiktok,
  },
  {
    id: uuid(),
    name: 'Fale comigo',
    url: 'https://wa.me/5534988927023',
    image: whatsapp,
  },
  {
    id: uuid(),
    name: 'blog (EM BREVE!!!)',
    url: 'https://www.instagram.com/dita.chinelos/',
    image: instagram,
  },
  {
    id: uuid(),
    name: 'blog (EM BREVE!!!)',
    url: 'https://www.instagram.com/dita.chinelos/',
    image: kwai,
  },
]