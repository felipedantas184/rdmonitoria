import Image from "next/image";
import { BScroll, BWrapper, ButtonScorll, Container, Heading, ImageWrapper, Subtitle, Title, Wrapper } from "./MHeroStyles";

const MHero = () => {
  return ( 
    <Container>
      <Wrapper>
        <Heading>
          <Title>MENTORIA ENEM<br />RD MONITORIA</Title>
          <Subtitle>Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!</Subtitle>
          <BWrapper>
          <ButtonScorll to='inscricao' smooth={true} duration={1000} spy={true} offset={0} >
            Quero Participar!
          </ButtonScorll>
          <BScroll to='vantagens' smooth={true} duration={1000} spy={true} offset={0} >
            Conhecer Mais
          </BScroll>
        </BWrapper>
        </Heading>
        <ImageWrapper>
          <Image src='/coursesImage.png' alt="Mentoria RD" fill />
        </ImageWrapper>
      </Wrapper>
    </Container>
   );
}
 
export default MHero;