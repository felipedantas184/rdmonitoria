import { FaBookOpen, FaRoad, FaVideo, FaWhatsapp } from "react-icons/fa";
import { BScroll, Heading, MentoriaClassesColumn1, MentoriaClassesColumn2, MentoriaClassesContainer, MentoriaClassesHeading, MentoriaClassesRow, MentoriaClassesWrapper, Subtitle, TextWrapper } from "./MClassesStyles";

const MClasses = () => {
  return (
    <MentoriaClassesContainer id="como-funciona">
      <MentoriaClassesWrapper>
        <MentoriaClassesHeading>Como Funciona</MentoriaClassesHeading>
        <MentoriaClassesRow>
          <MentoriaClassesColumn1>
            <TextWrapper>
              <FaVideo size={64} color="#411551" style={{ position: 'absolute', top: 16, right: 32 }} />
              <Heading>Encontros <br />Ao Vivo</Heading>
              <Subtitle>Você terá direito a dois encontros ao vivo de 1h com o seu mentor. O primeiro encontro servirá, sobretudo, para conhecer melhor suas características, rotina e dificuldades.</Subtitle>
              <Subtitle>O segundo encontro será realizado 15 dias após o início da mentoria e terá como intuito analisar o que funcionou ou não para o aluno e definir novas metas.</Subtitle>
              <Subtitle>*Os encontros serão realizados de forma online pela plataforma Google Meet.</Subtitle>
            </TextWrapper>
          </MentoriaClassesColumn1>
          <MentoriaClassesColumn2 style={{ alignSelf: 'flex-start' }} >
            <TextWrapper>
              <FaBookOpen size={64} color="#411551" style={{ position: 'absolute', top: 16, right: 32 }} />
              <Heading>Organização <br />Dos Estudos</Heading>
              <Subtitle>O principal objetico da mentoria é melhorar seu rendimento. Para isso, te ajudaremos a organizar e a planejar seus estudos de forma eficiente e individualizada.</Subtitle>
              <Subtitle>Te ajudaremos com novos métodos de estudo, estratégias de prova para o Enem e até mesmo com a organização de horários de estudo.</Subtitle>
              <Subtitle>Queremos pegar você pela mão e te mostrar o que fazer para ser aprovado com a nota do Enem!</Subtitle>
            </TextWrapper>
          </MentoriaClassesColumn2>
        </MentoriaClassesRow>

        <MentoriaClassesRow style={{ marginTop: 40 }} >
          <MentoriaClassesColumn1>
            <TextWrapper>
              <FaWhatsapp size={64} color="#411551" style={{ position: 'absolute', top: 16, right: 32 }} />
              <Heading>Contato Por<br />WhatsApp</Heading>
              <Subtitle>Além dos encontros ao vivo, manteremos contato sempre que necessário por WhatsApp para ajudar você nas suas dúvidas.</Subtitle>
              <Subtitle>O contato por WhatsApp durará 30 dias (tempo da mentoria) e poderá ser utilizado para alinhar alguns pontos específicos.</Subtitle>
            </TextWrapper>
          </MentoriaClassesColumn1>
          <MentoriaClassesColumn2 style={{ alignSelf: 'flex-start' }} >
            <TextWrapper>
              <FaRoad size={64} color="#411551" style={{ position: 'absolute', top: 16, right: 32 }} />
              <Heading>O Caminho<br />A Seguir</Heading>
              <Subtitle>Você poderá aproveitar todos nossos acertos e erros durante a preparação para o Enem e, assim, encontrar o caminho a ser seguido!</Subtitle>
              <Subtitle>Buscaremos sempre mostrar a você a melhor forma de se preparar para o vestibular, considerando sempre suas individualidades.</Subtitle>
            </TextWrapper>
          </MentoriaClassesColumn2>
        </MentoriaClassesRow>
        <BScroll to='inscricao' style={{ marginTop: 32 }}
          smooth={true} duration={500} spy={true} offset={20}>
          Fazer Inscrição Agora!
        </BScroll>
      </MentoriaClassesWrapper>
    </MentoriaClassesContainer>
  );
}

export default MClasses;