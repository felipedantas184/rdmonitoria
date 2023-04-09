import Image from "next/image";
import { BScroll, Container, Heading, MScoresColumn1, MScoresColumn2, MScoresRow, Subtitle, TextWrapper, Title, Wrapper } from "./MScoresStyles";

const MScores = () => {
  return (
    <Container id="motivos">
      <Wrapper>
        <Title>Motivos</Title>
        <MScoresRow>
          <MScoresColumn2 style={{ display: 'flex', justifyContent: "flex-start" }}>
            <Image src='/ScoresRight.png' alt="Mentoria" width={300} height={517} />
          </MScoresColumn2>
          <MScoresColumn1 style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <TextWrapper first>
              <Heading>Aumente <br />Seus Acertos</Heading>
              <Subtitle>Se você não consegue sair da mesma pontuação nos simulados, a mentoria é definitivamente para você! Tá esperando o quê?</Subtitle>
            </TextWrapper>
            <TextWrapper second style={{ marginTop: 48, marginBottom: 48 }}>
              <Heading>Organização<br />dos Estudos</Heading>
              <Subtitle>Te ajudamos a planejar e a montar uma rotina que realmente funcione para você e que te faça acançar melhores resultados!</Subtitle>
            </TextWrapper>
            <BScroll to='inscricao' style={{ marginTop: 0 }}
              smooth={true} duration={500} spy={true} offset={20}>
              Fazer Inscrição Agora!
            </BScroll>
          </MScoresColumn1>
        </MScoresRow>

        <MScoresRow>
          <MScoresColumn2 style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <TextWrapper third>
              <Heading>Por Onde <br />Começar</Heading>
              <Subtitle>Guiamos seus estudos desde o início e mostramos os atalhos para conseguir chegar confiante e preparado para a prova do Enem!</Subtitle>
            </TextWrapper>
            <TextWrapper fourth style={{ marginTop: 48, marginBottom: 48 }}>
              <Heading>Mais Perto<br /> Da Aprovação</Heading>
              <Subtitle>Sem dúvidas um estudo orientado é muito mais eficiente, ainda mais quando a orientação vem de ex-vestibulando preparados de verdade para te ajudar.</Subtitle>
            </TextWrapper>
            <BScroll to='inscricao' style={{ marginTop: 0 }}
              smooth={true} duration={500} spy={true} offset={20}>
              Fazer Inscrição Agora!
            </BScroll>
          </MScoresColumn2>
          <MScoresColumn1 style={{ display: 'flex', justifyContent: "flex-end" }} >
            <Image src='/Scores.png' alt="Mentoria" width={300 } height={517} />
          </MScoresColumn1>
        </MScoresRow>
      </Wrapper>
    </Container>
  );
}

export default MScores;