import Image from 'next/image';
import * as S from './styled';
const chinelo = '/img/chinelo.jpeg';

const Card = () => {
  return (
    <S.Wrapper>
      <Image src={chinelo} height={145} width={145} alt="" />
      <S.Content>
        <S.Title>
          <h3>Coleção Sublime</h3>
          <strong>R$60,00</strong>
        </S.Title>
        <p>
          O mais vendido. <br /> Numeração disponível: 35/36, 37/38 e 39/40.
        </p>
        <button>Faça sua encomenda!</button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Card;