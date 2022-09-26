import * as S from './styled'
import Lottie from "lottie-react";
import { Social } from '../../types/dita';

const SocialMedia = ({ social }: { social: Social[] }) => (
  <S.Wrapper>
    {social.map(item => (
      <S.Item key={item.id} href={item.url} target="_blank">
        <strong>{item.name}</strong>
      </S.Item>
    ))}
  </S.Wrapper>
)

export default SocialMedia