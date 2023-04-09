import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.section`
  background: #411551;
	background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 75%);
	margin-top: -60px;
`
export const Wrapper = styled.div`
  max-width: 1080px;
	margin-left: auto;
	margin-right: auto;
  padding: 84px 16px 24px 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const ImageWrapper = styled.div`
	width: 400px;
	height: 400px;

  display: flex;
	justify-content: center;
	align-items: center;

	position: relative;

	@media screen and (max-width: 768px) {
    width: 250px;
		height: 250px;
  }
`
export const Heading = styled.div`
	flex: 1;
  display: flex;
	flex-direction: column;
	gap: 16px;

	max-width: 540px;
`
export const Title = styled.h1`
  color: #F6F6F6;
  font-size: 48px;
  font-weight: 700;
  font-family: 'Josefin Sans', sans-serif;

	@media screen and (max-width: 768px) {
		font-size: 32px;
  }
`
export const Subtitle = styled.h1`
  color: #F6F6F6;
  font-size: 16px;
  font-weight: 500;
	font-family: 'Poppins', sans-serif;

	@media screen and (max-width: 768px) {
		font-size: 14px;
  }
`
export const BWrapper = styled.div`
	width: 100%;
	padding: 8px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`
export const BScroll = styled(LinkS)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	padding: 14px 20px;
	background-color: #000;
	color: #FFF;

	font-family: 'Anton';
	letter-spacing: 0.5px;
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
`