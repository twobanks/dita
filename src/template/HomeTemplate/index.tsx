import * as S from './styled'
import { Card, Header, SocialMedia } from '../../components'
import { social } from './links'

const HomeTemplate = () => (
  <>
    <S.Bar />
    <S.Wrapper>
      <Header />
      <Card />
      <SocialMedia social={social} />
    </S.Wrapper>
  </>
)

export default HomeTemplate