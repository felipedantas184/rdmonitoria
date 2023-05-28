import styled from "styled-components";
import Link from "next/link";

export const Container = styled.section`
  background-color: #120530;
  background: linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(65,21,81,1) 100%);
  min-height: 100vh;
`
export const Wrapper = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
`
export const Menu = styled.div`
  width: 100%;
  padding: 0 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 48px;
  }
`
export const Option = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 8px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`
export const PreviewBox = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
	box-shadow: rgba(240, 46, 170, 0.2) -5px 5px;

  &:hover {
		box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px;
	}`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

  @media screen and (max-width: 768px) {
    height: 200px;
  }
` 
export const Title = styled.h1`
  color: #FFF;
  font-size: 24px;
  font-family: 'Josefin Sans', sans-serif;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Button = styled(Link)`
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
export const ButtonWhite = styled(Link)`
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
`
export const SubMenu = styled.ul`
  list-style: none;
  margin-top: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
export const SIcon = styled.li`
  color: #F1F1F1;
  font-size: 24px;
  cursor: pointer;
  
  &:hover {
    color: #EB5757;
  }
  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #EB5757;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`
export const ELink = styled.a`
  
`