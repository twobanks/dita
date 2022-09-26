import * as S from './styled'
import { Header, SocialMedia } from '../../components'
import { social } from './links'

const HomeTemplate = () => (
  <>
    <S.Bar />
    <S.Wrapper>
      <Header />
      <SocialMedia social={social} />
    </S.Wrapper>
  </>
)

export default HomeTemplate