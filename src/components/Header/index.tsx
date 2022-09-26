import * as S from './styled'
import { v4 as uuid } from 'uuid';
import Lottie from "lottie-react";
const badge = '/icon/badge.svg'
const dita = '/img/dita.jpg'
import { social } from '../../template/HomeTemplate/links'

const Header = () => (
  <S.Header>
    <S.DitaWrapper image={dita} />
    <S.Content>
      <h2>
        @dita.chinelos
        <img src={badge} alt="Ícone verificado" />
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
      {social.map(item => (
        <li key={uuid()}>
          {/* <Lottie animationData={item.image}  /> */}
          <img src={item.image} alt="" />
        </li>
      ))}
    </ul>
  </S.Header>
)

export default Header;