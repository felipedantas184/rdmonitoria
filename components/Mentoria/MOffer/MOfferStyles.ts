import styled from "styled-components";

export const Container = styled.section`
  background-color: #F1F1F1;
  font-family: 'Poppins', sans-serif;
`
export const Wrapper = styled.div`
  max-width: 1080px;
	margin-left: auto;
	margin-right: auto;
  padding: 54px 8px 24px 8px;
	display: flex;
  flex-direction: column;
	justify-content: space-between;
	align-items: center;
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
	margin-bottom: 24px;
`
export const Title = styled.h1`
  color: #411551;
  font-size: 32px;
  font-weight: 600;
`
export const Subtitle = styled.h3`
  color: #44444A;
  font-size: 16px;
  font-weight: 500;
	text-align: center;
`
export const OWrapper = styled.div`
  background: #411551;
	background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 125%);
	
	padding: 24px 16px;
	border-radius: 10px;
	margin-bottom: 32px;

	border: 2.5px solid #C4C4C4;

  box-shadow: rgba(0, 0, 0, 0.45) 1.95px 1.95px 2.6px;
  transition: all 0.5s ease-in-out;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 16px;

	box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`
export const OTitle = styled.h4`
  font-size: 80px;
  font-family: 'Anton';
  line-height: 88px;
  color: #F6F6F6;
  font-weight: 500;

	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 65px;
		line-height: 1.2;
		margin-bottom: 16px;
	}

	@media screen and (max-width: 370px) {
		font-size: 44px;
	}
`
export const OSubtitle = styled.h5`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.5px;
  font-family: 'Josefin Sans';
  color: #E6E6E6;

	max-width: 450px;
	text-align: center;

	@media screen and (min-width: 768px) {
		margin-top: 16px;
	}
`
export const OfferPricingFigure = styled.div`
  font-size: 60px;

	text-align: center;
	margin-bottom: 16px;
`
export const OfferPricingFigureOlder = styled.div`
  font-size: 40px;
	color: #C4C4C4;

	text-align: center;
`
export const OfferPricingCurrency = styled.span`
  vertical-align: super;
	font-size: 26px;
	-webkit-opacity: 0.6;
	-moz-opacity: 0.6;
	opacity: 0.6;
	color: #C4C4C4;
`
export const OfferPricingCurrencyOlder = styled.span`
  vertical-align: super;
	font-size: 18px;
	-webkit-opacity: 0.6;
	-moz-opacity: 0.6;
	opacity: 0.6;
	text-decoration: line-through;
`
export const OfferPricingNumber = styled.span`
  font-weight: 500;
  font-family: 'Anton';

  color: #25D366;
`
export const OfferPricingNumberOlder = styled.span`
  font-weight: 300;
  font-family: 'Anton';
	text-decoration: line-through;

  color: #A4A4A4;
`
export const OfferPricingInterval = styled.span`
  font-weight: 400;
  font-size: 16px;
  opacity: 0.8;
`
export const OfferPricingList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr 1fr;

  row-gap: 12px;
  column-gap: 24px;

  margin-bottom: 32px;

  color: #C4C4C4;
	text-align: center;

  @media screen and (max-width: 768px) {
		row-gap: 8px;
		column-gap: 0px;
  }
`
export const ListItem = styled.li`
	text-align: left;
	font-size: 14px;
`
export const ButtonLink = styled.a`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	padding: 14px 20px;
	background-color: #000;
	color: #FFF;

	font-family: 'Anton';
	font-size: 18px;
	text-transform: uppercase;

	border-radius: 6px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	box-shadow: rgba(240, 46, 170, 0.2) -5px 5px;

	text-decoration: none;

	&:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}

	@media screen and (min-width: 768px) {
		max-width: 350px;
		margin-left: auto;
		margin-right: auto;
	}
`