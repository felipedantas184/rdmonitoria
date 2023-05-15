import Image from "next/image";
import { ButtonScorll, CoursesScoresColumn1, CoursesScoresColumn2, CoursesScoresContainer, CoursesScoresHeading, CoursesScoresRow, CoursesScoresWrapper, Heading, Subtitle, TextWrapper } from "./FScores";

const FScores = () => {
  return (
    <CoursesScoresContainer id="CoursesScores">
      <CoursesScoresWrapper>
        <CoursesScoresHeading>Motivos</CoursesScoresHeading>
        <CoursesScoresRow>
          <CoursesScoresColumn2 style={{ display: 'flex', justifyContent: "flex-start" }}>
            <Image src='/features/ScoresRight.png' alt="" width={400} height={690} />
          </CoursesScoresColumn2>
          <CoursesScoresColumn1 style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <TextWrapper>
              <Heading>Método Que<br /> Dá Resultado</Heading>
              <Subtitle>Fazer uma boa prova de matemática aumenta bastante sua pontuação no Enem e te deixa muito mais próximo de uma vaga na universidade.</Subtitle>
            </TextWrapper>
            <TextWrapper style={{ marginTop: 48, marginBottom: 48 }}>
              <Heading>Planejamento<br />dos Estudos</Heading>
              <Subtitle>Não fique mais perdido em matemática e estude com um planejamento inteligente e que funciona para aumentar sua nota no Enem!</Subtitle>
            </TextWrapper>
            <ButtonScorll to='offer' style={{ marginTop: 0 }}
              smooth={true} duration={500} spy={true} offset={20}>
              Fazer Inscrição Agora!
            </ButtonScorll>
          </CoursesScoresColumn1>
        </CoursesScoresRow>

        <CoursesScoresRow>
          <CoursesScoresColumn2 style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <TextWrapper>
              <Heading>Foco em <br /> Exercícios</Heading>
              <Subtitle>Pare de perder tempo só estudando a teoria e coloque em prática seu conhecimento de uma maneira planejada e estratégica.</Subtitle>
            </TextWrapper>
            <TextWrapper style={{ marginTop: 48, marginBottom: 48 }}>
              <Heading>Mais Perto<br /> Da Aprovação</Heading>
              <Subtitle>Sem dúvidas matemática é uma das chaves para a aprovação! Não deixe essa chance escapar e se prepare da melhor forma para essa prova!</Subtitle>
            </TextWrapper>
            <ButtonScorll to='offer' style={{ marginTop: 0 }}
              smooth={true} duration={500} spy={true} offset={20}>
              Fazer Inscrição Agora!
            </ButtonScorll>
          </CoursesScoresColumn2>
          <CoursesScoresColumn1 style={{ display: 'flex', justifyContent: "flex-end" }} >
            <Image src='/features/scoresThumb.png' alt="" width={335} height={595} />
          </CoursesScoresColumn1>
        </CoursesScoresRow>
      </CoursesScoresWrapper>
    </CoursesScoresContainer>
  );
}

export default FScores;