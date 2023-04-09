import Image from "next/image";
import { BScroll, ButtonTransparent, CoursesAboutColumn1, CoursesAboutColumn2, CoursesAboutContainer, CoursesAboutHeading, CoursesAboutRow, CoursesAboutWrapper, Heading, ProfilePicWrap, SbjWrap, Subtitle, TextWrapper } from "./MAboutStyles";

const MAbout = () => {
  return (
    <CoursesAboutContainer id="sobre">
      <CoursesAboutWrapper>
        <CoursesAboutHeading>Sobre Nós</CoursesAboutHeading>
        <CoursesAboutRow>
          <CoursesAboutColumn1>
            <ProfilePicWrap>
              <Image src='/AndreMeuProf.jpg' alt="" fill />
            </ProfilePicWrap>
          </CoursesAboutColumn1>
          <CoursesAboutColumn2>
            <TextWrapper>
              <Heading>André Isac</Heading>
              <SbjWrap>
                <ButtonTransparent noAdjust>Medicina UFPI</ButtonTransparent>
                <ButtonTransparent noAdjust>Medicina UESPI</ButtonTransparent>
                <ButtonTransparent noAdjust>926 em Matemática</ButtonTransparent>
                <ButtonTransparent noAdjust>813 Média Geral</ButtonTransparent>
              </SbjWrap>
              <Subtitle>Me chamo André e fui aprovado para Medicina na UFPI e na UESPI. Atualmente ajudo alunos a conquistarem sua aprovação com a nota do Enem!</Subtitle>
            </TextWrapper>
            <BScroll to='inscricao'
              smooth={true} duration={500} spy={true} offset={20}>
              Fazer Inscrição Agora!
            </BScroll>
          </CoursesAboutColumn2>
        </CoursesAboutRow>

        <CoursesAboutRow style={{ marginTop: 80 }} invert >
          <CoursesAboutColumn2>
            <TextWrapper>
              <Heading>Felipe Dantas</Heading>
              <SbjWrap>
                <ButtonTransparent noAdjust>Medicina UFPI</ButtonTransparent>
                <ButtonTransparent noAdjust>980,6 em Matemática</ButtonTransparent>
                <ButtonTransparent noAdjust>820,8 de Média Geral</ButtonTransparent>
              </SbjWrap>
              <Subtitle>Me chamo Felipe e sou acadêmico de Medicina pela UFPI. Eu e o André nos juntamos para ajudar cada vez mais estudantes a conquistarem uma vaga na Universidade!</Subtitle>
            </TextWrapper>
            <BScroll to='inscricao'
              smooth={true} duration={500} spy={true} offset={20}>
              Fazer Inscrição Agora!
            </BScroll>
          </CoursesAboutColumn2>
          <CoursesAboutColumn1>
            <ProfilePicWrap>
              <Image src='/FelipeMeuProf.jpg' alt="" fill />
            </ProfilePicWrap>
          </CoursesAboutColumn1>
        </CoursesAboutRow>
      </CoursesAboutWrapper>
    </CoursesAboutContainer>
  );
}

export default MAbout;