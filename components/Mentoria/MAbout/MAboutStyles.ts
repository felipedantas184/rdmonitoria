import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

interface Props {
  invert?: any;
  noAdjust?: any;
}


export const CoursesAboutContainer = styled.section`
	background: #411551;
	background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 125%);


	font-family: 'Josefin Sans';

  border-radius: 50px 0 0 0;
`
export const CoursesAboutWrapper = styled.div`
	max-width: 1100px;
	height: auto;
	margin-left: auto;
	margin-right: auto;
  padding: 75px 16px;
`
export const CoursesAboutHeading = styled.h1`
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
export const CoursesAboutRow = styled.div<Props>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';
  grid-template-areas: ${({ invert }) => (invert ? '"col1 col2"' : '"col2 col1"')};;

  width: 100%;

  
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`
export const CoursesAboutColumn1 = styled.div`
  padding: 0 15px;
  grid-area: col1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 48px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const CoursesAboutColumn2 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 48px;

  @media screen and (max-width: 768px) {
    padding: 0;
    margin-top: 24px;
  }
`
export const TextWrapper = styled.div`
	position: relative;
  width: 100%;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.3;
  text-transform: uppercase;
  color: #FFF;

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
  color: #F6F6F6;

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

export const ProfilePicWrap = styled.div`
  position: relative;
  width: 350px;
  height: 350px;

  display: flex;
  justify-content: center;
  align-items: center;

	border-radius: 50px;
	overflow: hidden;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px;
  transition: all 0.5s ease-in-out;
  
  &:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    
    margin-bottom: 32px;
  }
`;
export const SbjWrap = styled.div`
  display:flex;
  flex-wrap: wrap;
  row-gap: 8px;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 32px;
`;
export const ButtonTransparent = styled.div<Props>`
    border-radius: 6px;
    background: transparent;
    color: #F0EDEE;
    white-space: nowrap;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 600;
    outline: none;
    border: 1px solid #F0EDEE;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
    transition: all 0.5s ease-in-out;
    background: #F0EDEE;
    color: #411551;
    transform: scale(1.025);
    }
    &:not(:last-child) {
    margin-right: 8px;
    }

    @media screen and (max-width: 768px) {
        width: ${({noAdjust}) => (noAdjust ? 'auto' : '100%')};;
        padding: ${({noAdjust}) => (noAdjust ? '8px 16px' : '16px 32px')};;
        font-weight: 600;
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