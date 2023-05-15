import { FaCheck } from "react-icons/fa";
import { ButtonLink, GridWrapper, HalfUnicWrapper, ListItem, OfferContainer, OfferHeading, OfferPricingCurrency, OfferPricingCurrencyOlder, OfferPricingFigure, OfferPricingFigureOlder, OfferPricingList, OfferPricingNumber, OfferPricingNumberOlder, OfferSubtitle, OfferTextWrapper, Topline, ToplineTwo } from "./FOfferStyles";

const FOffer = () => {
  return ( 
    <OfferContainer id="offer" >
			<GridWrapper>
				<HalfUnicWrapper>
					<Topline>VAGAS LIMITADAS!</Topline>
					<ToplineTwo>Não perca tempo e garanta agora mesmo sua vaga!</ToplineTwo>
					
					<OfferTextWrapper>
					<div>
						<OfferHeading>MATEMÁTICA<br/>ATIVA</OfferHeading>
						<OfferSubtitle>Domine a matemática do Enem com um planejamento inteligente e com um método que funciona!</OfferSubtitle>
					</div>
					
					<div>
						<OfferPricingFigureOlder>
							<OfferPricingCurrencyOlder>R$ </OfferPricingCurrencyOlder><OfferPricingNumberOlder>200,00</OfferPricingNumberOlder>
						</OfferPricingFigureOlder>
						<OfferPricingFigure>
							<OfferPricingCurrency>4x R$ </OfferPricingCurrency><OfferPricingNumber>50,00</OfferPricingNumber>
						</OfferPricingFigure>
						<OfferPricingList>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Muitas Questões</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Monitorias</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Planejamento</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Grupo WhatsApp</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Zero enrolação</ListItem>
							<ListItem><FaCheck size={14} color="#D1D1D1" style={{marginRight: 6}}/>Acompanhamento</ListItem>
						</OfferPricingList>
						
						<ButtonLink href="https://mpago.la/2xvqu6A" rel="noreferrer" target="_blank">
							Fazer Inscrição Agora!
						</ButtonLink>
					</div>
					</OfferTextWrapper>
				</HalfUnicWrapper>
			</GridWrapper>
		</OfferContainer>
   );
}
 
export default FOffer;