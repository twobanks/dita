import type { NextPage } from 'next'
import HomeTemplate from '../template/HomeTemplate'
import { NextSeo } from 'next-seo';

const SEO = {
  canonical: "https://www.ditachinelos.com",
  description: "Chinelos Customizados - Conforto e praticidade para seus pés 🦶",
  openGraph: {
    url: 'https://www.ditachinelos.com',
    title: 'Dita Chinelos',
    description: 'Chinelos Customizados - Conforto e praticidade para seus pés 🦶',
    site_name: 'twobanks',
    images: [
      { url: 'https://scontent.fuba1-1.fna.fbcdn.net/v/t39.30808-6/292216855_158643360071025_4010569681402987622_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGsi0hkYBdMH001d79ymztCqCwxFaNw9fyoLDEVo3D1_F2O7OGQIBxwIAuicm0IjWvY9S2BTOmoQ_qiNeeLtV3u&_nc_ohc=0gcoELGoGfUAX8R198c&_nc_oc=AQmLURnUHvQDQgqF1O4yAU7Q-yg92sHfgaVM0YA3JzsBCdbygA3JaZxcwiSKOjPWyv2BrqPB3DpGFsPSqp-6GVvb&_nc_ht=scontent.fuba1-1.fna&oh=00_AfBIO3sYt1UASATAzLG3dIpEVexwZls_mijgLo-DDoTh8g&oe=635FF599' },
    ],
  },
};

const Home: NextPage = () => (
  <>
    <NextSeo
        title="Dita Chinelos - Conforto e praticidade para seus pés"
        {...SEO}
      />
    <HomeTemplate />
  </>
)

export default Home
