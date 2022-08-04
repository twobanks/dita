import * as S from './styled'
import Image from 'next/image'
import { Social } from '../../types/dita';

const SocialMedia = ({ social }: { social: Social[] }) => (
  <S.WrapperSocialNetworks>
    <S.Description>
      <h2>Minhas redes sociais</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam blanditiis qui nihil, rerum nulla minus quibusdam eaque dolores enim. Eos eum at dolore ratione tempore velit ipsa ipsum aperiam fuga!</p>
    </S.Description>
    {social.map(item => (
      <S.Item key={item.id} href={item.url} target="_blank">
        <S.Content>
          <S.Detail />
          <S.ImageWrapper>
            <Image src={item.image} alt={`Ícone referente a ${item.name}`} layout="fill" />
          </S.ImageWrapper>
          <h3>{item.name}</h3>
        </S.Content>
        <S.Detail />
      </S.Item>
    ))}
  </S.WrapperSocialNetworks>
)

export default SocialMedia