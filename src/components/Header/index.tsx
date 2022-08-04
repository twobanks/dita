import * as S from './styled'
import Image from 'next/image'
const dita = '/img/dita.jpg'

const Header = () => (
  <S.Header>
    <S.DitaWrapper>
      <Image src={dita} layout="fill" alt="Dita Ateliê" />
    </S.DitaWrapper>
  </S.Header>
)

export default Header;