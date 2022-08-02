import * as S from './styled'
import Image from 'next/image'
const dita = '/img/dita.jpg'

const Header = () => (
  <S.Header>
    <S.DitaWrapper>
      <Image src={dita} layout="fill" alt="Dita Ateliê" />
    </S.DitaWrapper>
    <S.Info>
      <h2>Dita Ateliê</h2>
    </S.Info>
  </S.Header>
)

export default Header;