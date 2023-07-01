import Image from "next/image";
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from "react-icons/fa";
import { Close, Container, Item, Logo, Menu, SButton, Wrapper } from "./SidebarStyles";
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }:any) => {  
  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        <Close onClick={toggle}>
          <FaTimes color="#B4B4B4" />
        </Close>
        <Logo href={'/'} ><Image src={'/logo_white.png'} alt='ADUFPI Logo' fill /></Logo>
        <Menu>
          <Item><LinkS onClick={toggle} to='vantagens' smooth={true} duration={500} spy={true}>Vantagens</LinkS></Item>
          <Item><LinkS onClick={toggle} to='motivos' smooth={true} duration={500} spy={true}>Motivos</LinkS></Item>
          <Item><LinkS onClick={toggle} to='como-funciona' smooth={true} duration={500} spy={true}>Como Funciona</LinkS></Item>
          <Item><LinkS onClick={toggle} to='sobre' smooth={true} duration={500} spy={true}>Sobre Nós</LinkS></Item>
        </Menu>
        <SButton onClick={toggle}><Link href={'/dashboard'}>Área do Aluno</Link></SButton>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;