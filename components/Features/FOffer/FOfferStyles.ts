import styled from "styled-components";

export const OfferContainer = styled.section`
	background: #411551;
	background: linear-gradient(0deg, #000 0%, rgba(2,0,36,1) 100%);
	
	color: #FFF;
	font-family: 'Josefin Sans';

	@media screen and (max-width: 768px) {
  }
`
export const GridWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 100vh;
	margin-left: auto;
	margin-right: auto;
  padding: 100px 16px 75px 16px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	gap: 24px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`
export const HalfUnicWrapper = styled.div`
	flex: 1;
	height: auto;
	max-width: 880px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	position: relative;

	@media screen and (min-width: 768px) {
		justify-content: center;
	}
`
export const Topline = styled.h3`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.1;
  font-family: 'Anton';
  color: #B00020;
  text-transform: uppercase;
  text-align: center;

	margin-bottom: 16px;
`
export const ToplineTwo = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  font-family: 'Anton';
  color: #C4C4C4;
  text-transform: uppercase;
  text-align: center;

  margin-bottom: 48px;

	@media screen and (max-width: 768px) {
		margin-bottom: 32px;
	}
`
export const OfferTextWrapper = styled.div`
  width: auto;
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
export const OfferHeading = styled.h1`
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
export const OfferSubtitle = styled.h2`
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

	text-align: center;
`
export const OfferPricingCurrency = styled.span`
  vertical-align: super;
	font-size: 26px;
	-webkit-opacity: 0.6;
	-moz-opacity: 0.6;
	opacity: 0.6;
`
export const OfferPricingCurrencyOlder = styled.span`
  vertical-align: super;
	font-size: 18px;
	-webkit-opacity: 0.6;
	-moz-opacity: 0.6;
	opacity: 0.6;
`
export const OfferPricingNumber = styled.span`
  font-weight: 500;
  font-family: 'Anton';

  color: #25D366;
`
export const OfferPricingNumberOlder = styled.span`
  font-weight: 300;
  font-family: 'Anton';

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
export const Divider = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`
export const ButtonLink = styled.a`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	padding: 14px 20px;
	background-color: #FFF;
	color: #000;

	font-family: 'Anton';
	font-size: 18px;
	text-transform: uppercase;

	border-radius: 6px;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	box-shadow: rgba(240, 46, 170, 0.2) -5px 5px;

	&:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}

	@media screen and (min-width: 768px) {
		max-width: 350px;
		margin-left: auto;
		margin-right: auto;
	}
`