import styled from "styled-components"; 
import { Link as LinkS } from "react-scroll";

export const CoursesClassesContainer = styled.section`
	background: #FFF;
  color: #13131A;

	font-family: 'Josefin Sans';

  border-radius: 50px 0 50px 0;
`
export const CoursesClassesWrapper = styled.div`
	max-width: 1100px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
  padding: 75px 16px;
`
export const CoursesClassesHeading = styled.h1`
  margin-bottom: 48px;
  font-size: 48px;
  line-height: 1.3;
  color: #000;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`
export const CoursesClassesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  gap: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const CoursesClassesColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const CoursesClassesColumn2 = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 24px;
  }
`
export const TextWrapper = styled.div`
	position: relative;
  width: 100%;

  background: #F6F6F6;
  border: 2px solid #411551;

	padding: 16px;
	border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.45) 1.95px 1.95px 2.6px;
  transition: all 0.5s ease-in-out;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
  line-height: 1.3;
  text-transform: uppercase;
  color: #000;

  letter-spacing: -0.5px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 16px;
  }
`
export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 1.2;
  font-family: 'Josefin Sans';
  color: #13131A;

  @media screen and (max-width: 768px) {
    font-size: 18px;
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

export const BoxWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

	border-radius: 20px;
	overflow: hidden;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px;
  transition: all 0.5s ease-in-out;
  
  &:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
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