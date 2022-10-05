import * as S from './styled'
import { v4 as uuid } from 'uuid';
const badge = '/icon/badge.svg'
const dita = '/img/dita.jpg'
import { items } from '../../template/HomeTemplate/links'
import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <S.Header>
    <S.DitaWrapper image={dita} />
    <S.Content>
      <h2>
        @dita.chinelos
        <Image src={badge} alt="Ícone verificado" height={30} width={30} />
      </h2>
      <strong>Chinelos Customizados</strong>
      <p>
        Conforto e praticidade para seus pés 🦶
      </p>
      <p>
        Uberaba/MG
      </p>
    </S.Content>
    <ul>
      {items.map(item => (
        <li key={uuid()}>
          <Link href={item.url}>
            <a target="_blank" rel='noopener noreferrer'>
              <Image src={item?.image} alt={item.name} height={28} width={30} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </S.Header>
)

export default Header;