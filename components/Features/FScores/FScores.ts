import styled from "styled-components"; 
import { Link as LinkS } from "react-scroll";

export const CoursesScoresContainer = styled.section`
	background: #411551;
	background: linear-gradient(100deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 125%);

  color: #13131A;
	font-family: 'Josefin Sans';

  border-radius: 50px 0 50px 0;
`
export const CoursesScoresWrapper = styled.div`
	max-width: 1100px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
  padding: 75px 16px;
`
export const CoursesScoresHeading = styled.h1`
  margin-bottom: 48px;
  font-size: 48px;
  line-height: 1.3;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`
export const CoursesScoresRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';

  width: 100%;

  
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`
export const CoursesScoresColumn1 = styled.div`
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const CoursesScoresColumn2 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 24px;
  }
`
export const TextWrapper = styled.div`
	position: relative;
  width: 100%; 
	background: #521b66;

	padding: 30px 15px 15px 30px;
	border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.45) 1.95px 1.95px 2.6px;
  transition: all 0.5s ease-in-out;

	&:after {
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
export const Heading = styled.h1`
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


export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 80%;
    height: 80%;
  }
`;



export const ServicesRow = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const ServicesCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 300px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  transition: all 0.2s ease-in-out;

  color: #E1E2E3;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`
export const ServicesH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`
export const ButtonScorll = styled(LinkS)`
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
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  @media screen and (max-width: 768px) {
    height: 550px;
  }
` 