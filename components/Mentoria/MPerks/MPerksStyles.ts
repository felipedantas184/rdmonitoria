import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.section`
  background-color: #FFF;
  font-family: 'Poppins', sans-serif;
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
export const Perks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;

  width: 100%;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 16px;
  }
`
export const PerkCard = styled.div`
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
  text-align: center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const PerkTitle = styled.p`
  color: #13131A;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 4px;
`
export const PerkResume = styled.p`
  color: #33333A;
  font-size: 14px;
  font-weight: 500;
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