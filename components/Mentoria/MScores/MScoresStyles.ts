import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

interface Props {
  first?: any;
  second?: any;
  third?: any;
  fourth?: any;
}


export const Container = styled.section`
  background-color: #F1F1F1;
  font-family: 'Poppins', sans-serif;
  border-radius: 50px 0 50px 0;
`
export const Wrapper = styled.div`
  max-width: 1080px;
	margin-left: auto;
	margin-right: auto;
  padding: 24px 8px;
	display: flex;
  flex-direction: column;
	justify-content: space-between;
	align-items: center;
  gap: 32px;
`
export const Title = styled.h1`
  color: #411551;
  font-size: 32px;
  font-weight: 600;
`
export const MScoresRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';
  
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`
export const MScoresColumn1 = styled.div`
  flex: 1;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const MScoresColumn2 = styled.div`
  flex: 1;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 24px;
  }
`
export const TextWrapper = styled.div<Props>`
  flex: 1;

	position: relative;
  width: 100%; 
	background: #521b66;

	padding: 30px 15px 15px 30px;
	border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.45) 1.95px 1.95px 2.6px;
  transition: all 0.5s ease-in-out;

	&:after {
		content: ${({first, second, third, fourth}) => (first ? '"01"' : second ? '"02"' : third ? '"03"' : fourth ? '"04"' : '""')};
		position: absolute;
		top: 15px;
		right: 15px;
		color: #E1E2E3;
		font-size: 40px;
		font-family: "Josefin Sans";
		opacity: 0.7;
	}
	&:hover {
  transition: all 0.5s ease-in-out;
  transform: scale(1.025);
}
`
export const Heading = styled.h3`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.3;
  text-transform: uppercase;
  color: #FFF;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.5px;
  font-family: 'Josefin Sans';
  color: #F6F6F6;

  @media screen and (max-width: 768px) {
    font-size: 16px;
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