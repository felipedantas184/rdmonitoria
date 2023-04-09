import Image from "next/image";
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from "react-icons/fa";
import { Close, Container, Item, Logo, Menu, SButton, Wrapper } from "./SidebarStyles";

const Sidebar = ({ isOpen, toggle }:any) => {  
  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        <Close onClick={toggle}>
          <FaTimes color="#B4B4B4" />
        </Close>
        <Logo href={'/'} ><Image src={'/logo_white.png'} alt='ADUFPI Logo' fill /></Logo>
        <Menu>
          <Item onClick={toggle}><LinkS to='vantagens' smooth={true} duration={500} spy={true}>Vantagens</LinkS></Item>
          <Item onClick={toggle}><LinkS to='vantagens' smooth={true} duration={500} spy={true}>Motivos</LinkS>s</Item>
          <Item onClick={toggle}><LinkS to='vantagens' smooth={true} duration={500} spy={true}>Como Funciona</LinkS></Item>
          <Item onClick={toggle}><LinkS to='vantagens' smooth={true} duration={500} spy={true}>Sobre Nós</LinkS></Item>
        </Menu>
        <SButton><a href="https://docs.google.com/forms/d/e/1FAIpQLSdBSQoyFAp7dk_R2MC-iv9MeyDJyt9fxBlOQc1MF9si4QZ-yw/viewform?usp=sf_link" rel="noreferrer" target="_blank">Fazer Inscrição</a></SButton>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;