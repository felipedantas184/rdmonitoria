import styled from "styled-components"; 
import { Link as LinkS } from "react-scroll";

export const CoursesPerksContainer = styled.section`
	background: #FFF;
  color: #13131A;
	font-family: 'Josefin Sans';

  border-radius: 0 0 150px 0;
`
export const CoursesPerksWrapper = styled.div`
	max-width: 1100px;
	height: auto;
  min-height: 90vh;
	margin-left: auto;
	margin-right: auto;
  padding: 75px 24px;

	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const CoursesPerksRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`
export const CoursesPerksCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 30%;
  max-height: 300px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }
`
export const CoursesPerksIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`
export const CoursesPerksH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 6px;
  margin-top: 12px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.5px;
`
export const CoursesPerksP = styled.p`
  font-size: 16px;
  text-align: center;
`
export const CoursesPerksTitle = styled.h2`
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

export const BtnWrap = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 48px;
`
export const ButtonScorll = styled(LinkS)`
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

	@media screen and (min-width: 768px) {
		max-width: 350px;
		margin-left: auto;
		margin-right: auto;
	}
`