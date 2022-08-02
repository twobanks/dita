import * as S from './styled'
import Image from 'next/image'
import { Social } from '../../types/dita';

const SocialMedia = ({ social }: { social: Social[] }) => (
  <S.WrapperSocialNetworks>
    {social.map(item => (
      <S.Item key={item.id}>
        <S.Content>
          <S.Detail />
          <S.ImageWrapper>
            <Image src={item.image} alt={`Ícone referente a ${item.name}`} layout="fill" />
          </S.ImageWrapper>
          <h2>{item.name}</h2>
        </S.Content>
        <S.Detail />
      </S.Item>
    ))}
  </S.WrapperSocialNetworks>
)

export default SocialMedia