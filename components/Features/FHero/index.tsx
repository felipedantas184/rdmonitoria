import Image from "next/image";
import { ButtonScorll, ButtonScorllBlack, ButtonWrapper, GridWrapper, HalfWrapper, Heading, HeroContainer, ImageWrapper, Subtitle, TextWrapper } from "./FHeroStyles";

const FHero = () => {
  return (
    <HeroContainer id="hero">
      <GridWrapper>
        <HalfWrapper>
          <TextWrapper>
            <Heading>MATEMÁTICA <br />ATIVA<span style={{color: '#D4D4D4'}} > | ENEM</span></Heading>
            <Subtitle>Estude matemática para o Enem de forma correta e fique mais próximo da sua aprovação!</Subtitle>
          </TextWrapper>
          <ButtonWrapper>
            <ButtonScorll to='inscricao'
              smooth={true} duration={500} spy={true} offset={20}>
              FAZER INSCRIÇÃO!
            </ButtonScorll>
            <ButtonScorllBlack to='vantagens'
              smooth={true} duration={1000} spy={true} offset={0}>
              CONHECER MAIS
            </ButtonScorllBlack>
          </ButtonWrapper>
        </HalfWrapper>
        <HalfWrapper>
          <ImageWrapper>
            <Image src='/features/coursesImage.png' alt="MeuProf Aula Particular & Enem" layout="fill" />
          </ImageWrapper>
        </HalfWrapper>
      </GridWrapper>
    </HeroContainer>
  );
}

export default FHero;