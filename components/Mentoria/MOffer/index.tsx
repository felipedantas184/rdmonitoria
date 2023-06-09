import { FaCheck } from "react-icons/fa";
import { ButtonLink, Container, Heading, ListItem, OSubtitle, OTitle, OWrapper, OfferPricingCurrency, OfferPricingCurrencyOlder, OfferPricingFigure, OfferPricingFigureOlder, OfferPricingList, OfferPricingNumber, OfferPricingNumberOlder, Subtitle, Title, Wrapper } from "./MOfferStyles";

const MOffer = () => {
  return (
    <Container id="inscricao">
      <Wrapper>
        <Heading>
          <Title>Vagas Limitadas!</Title>
          <Subtitle>Não perca tempo e garanta agora mesmo sua vaga!</Subtitle>
        </Heading>
        <OWrapper>
          <div>
            <OTitle>MENTORIA<br />ENEM 2023</OTitle>
            <OSubtitle>Encontre o melhor caminho e organize seus estudos de maneira eficiente para a Enem 2022!</OSubtitle>
          </div>

          <div>
            <OfferPricingFigureOlder>
              <OfferPricingCurrencyOlder>R$ </OfferPricingCurrencyOlder><OfferPricingNumberOlder>140,00</OfferPricingNumberOlder>
            </OfferPricingFigureOlder>
            <OfferPricingFigure>
              <OfferPricingCurrency></OfferPricingCurrency><OfferPricingNumber>70,00</OfferPricingNumber>
            </OfferPricingFigure>
            <OfferPricingList>
              <ListItem><FaCheck size={12} color="#D1D1D1" style={{ marginRight: 6 }} />Encontros ao vivo</ListItem>
              <ListItem><FaCheck size={12} color="#D1D1D1" style={{ marginRight: 6 }} />Acompanhamento</ListItem>
              <ListItem><FaCheck size={12} color="#D1D1D1" style={{ marginRight: 6 }} />Organização</ListItem>
              <ListItem><FaCheck size={12} color="#D1D1D1" style={{ marginRight: 6 }} />Contato WhatsApp</ListItem>
              <ListItem><FaCheck size={12} color="#D1D1D1" style={{ marginRight: 6 }} />Zero enrolação</ListItem>
              <ListItem><FaCheck size={12} color="#D1D1D1" style={{ marginRight: 6 }} />Resultado</ListItem>
            </OfferPricingList>

            <ButtonLink href="https://docs.google.com/forms/d/e/1FAIpQLSeg_jazvnTMd0i7XI7XACSB7RS_KrMv-wUpK1PhmJWhAZeiBQ/viewform?usp=sf_link" rel="noreferrer" target="_blank">
              Fazer Inscrição Agora!
            </ButtonLink>
          </div>
      </OWrapper>
    </Wrapper>
    </Container >
   );
}

export default MOffer;