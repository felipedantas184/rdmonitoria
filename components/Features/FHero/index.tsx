import Image from "next/image";
import { ButtonScorll, ButtonWrapper, GridWrapper, HalfWrapper, Heading, HeroContainer, ImageWrapper, Subtitle, TextWrapper } from "./FHeroStyles";

const FHero = () => {
  return (
    <HeroContainer id="hero">
      <GridWrapper>
        <HalfWrapper>
          <TextWrapper>
            <Heading>MATEMÁTICA <br />ATIVA MEUPROF</Heading>
            <Subtitle>Estude matemática para o Enem de forma correta e fique mais próximo da sua aprovação!</Subtitle>
          </TextWrapper>
          <ButtonWrapper>
            <ButtonScorll to='offer'
              smooth={true} duration={500} spy={true} offset={20}>
              FAZER INSCRIÇÃO!
            </ButtonScorll>
            <ButtonScorll to='coursesPerks'
              smooth={true} duration={1000} spy={true} offset={0}>
              CONHECER MAIS
            </ButtonScorll>
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