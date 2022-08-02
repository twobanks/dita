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
    url: '#',
    image: facebook,
  },
  {
    id: uuid(),
    name: 'Instagram',
    url: '#',
    image: instagram,
  },
  {
    id: uuid(),
    name: 'Whatsapp',
    url: '#',
    image: whatsapp,
  },
  {
    id: uuid(),
    name: 'Tik-Tok',
    url: '#',
    image: tiktok,
  }
]