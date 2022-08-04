import { v4 as uuid } from 'uuid';
import { Social } from '../../types/dita';
const facebook = '/icon/facebook.svg';
const instagram = '/icon/instagram.svg';
const whatsapp = '/icon/whatsapp.svg';
const tiktok = '/icon/tiktok.svg';

export const social: Social[] = [
  {
    id: uuid(),
    name: 'Facebook',
    url: 'https://www.facebook.com/wandinha.chinelos',
    image: facebook,
  },
  {
    id: uuid(),
    name: 'Instagram',
    url: 'https://www.instagram.com/dita.chinelos/',
    image: instagram,
  },
  {
    id: uuid(),
    name: 'Whatsapp',
    url: 'wa.me/5534988927023',
    image: whatsapp,
  },
  {
    id: uuid(),
    name: 'Chinelos Customizados',
    url: '#',
    image: tiktok,
  }
]