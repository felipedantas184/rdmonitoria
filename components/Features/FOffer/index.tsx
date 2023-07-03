import { FaCheck } from "react-icons/fa";
import { ButtonLink, GridWrapper, HalfUnicWrapper, ListItem, OfferContainer, OfferHeading, OfferPricingCurrency, OfferPricingCurrencyOlder, OfferPricingFigure, OfferPricingFigureOlder, OfferPricingList, OfferPricingNumber, OfferPricingNumberOlder, OfferSubtitle, OfferTextWrapper, Topline, ToplineTwo } from "./FOfferStyles";
import { sendContactForm } from "@/lib/api";

const FOffer = () => {

	const NovoInteressado = async (e: any) => {
		sendContactForm({
			name: 'Novo Interessado - Curso',
			email: 'felipedantas184@gmail.com',
			subject: 'Clique em link de compra!',
			observations: 'Novo interessado no curso'
		})
	}

	const NovoInteressadoListas = async (e: any) => {
		sendContactForm({
			name: 'Novo Interessado - Listas',
			email: 'felipedantas184@gmail.com',
			subject: 'Clique em link de compra!',
			observations: 'Novo interessado nas listas'
		})
	}

	return (
		<OfferContainer id="inscricao" >
			<GridWrapper>
				<HalfUnicWrapper>
					<Topline>VAGAS LIMITADAS!</Topline>
					<ToplineTwo>Não perca tempo e garanta agora mesmo sua vaga!</ToplineTwo>

					<OfferTextWrapper>
						<div>
							<OfferHeading>MATEMÁTICA<br />ATIVA</OfferHeading>
							<OfferSubtitle>Domine a matemática do Enem com um planejamento inteligente e com um método que funciona!</OfferSubtitle>
						</div>

						<div>
							<OfferPricingFigureOlder>
								<OfferPricingCurrencyOlder>R$ </OfferPricingCurrencyOlder><OfferPricingNumberOlder>197,00</OfferPricingNumberOlder>
							</OfferPricingFigureOlder>
							<OfferPricingFigure>
								<OfferPricingCurrency>2x R$ </OfferPricingCurrency><OfferPricingNumber>98,50</OfferPricingNumber>
							</OfferPricingFigure>
							<OfferPricingList>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Muitas Questões</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Aulas Gravadas</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Planejamento</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Grupo WhatsApp</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Zero enrolação</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Acompanhamento</ListItem>
							</OfferPricingList>

							<ButtonLink onClick={NovoInteressado} href="https://mpago.la/2xvqu6A" rel="noreferrer" target="_blank">
								Fazer Inscrição Agora!
							</ButtonLink>
						</div>
					</OfferTextWrapper>

					<OfferTextWrapper>
						<div>
							<OfferHeading>LISTAS &<br />RESOLUÇÕES</OfferHeading>
							<OfferSubtitle>Para os que querem apenas as listas de questões para treinar para a prova!</OfferSubtitle>
						</div>

						<div>
							<OfferPricingFigureOlder>
								<OfferPricingCurrencyOlder>R$ </OfferPricingCurrencyOlder><OfferPricingNumberOlder>97,00</OfferPricingNumberOlder>
							</OfferPricingFigureOlder>
							<OfferPricingFigure>
								<OfferPricingCurrency>2x R$ </OfferPricingCurrency><OfferPricingNumber>48,50</OfferPricingNumber>
							</OfferPricingFigure>
							<OfferPricingList>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />12 Listas</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Muitas Questões</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Planejamento</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Organização</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Zero enrolação</ListItem>
								<ListItem><FaCheck size={14} color="#D1D1D1" style={{ marginRight: 6 }} />Resoluções</ListItem>
							</OfferPricingList>

							<ButtonLink onClick={NovoInteressadoListas} href="http://mpago.la/2Z3Cyng" rel="noreferrer" target="_blank">
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