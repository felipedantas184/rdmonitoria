import Image from "next/image";
import { Container, Item, IWrap, Logo, Logout, Menu, Mobile, Wrapper } from "./NavbarStyles";
import { FaBars, FaBook, FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa';

const Navbar = ({toggle}:any) => {
  return ( 
    <Container>
      <Wrapper>
        <Logo href={'/'} ><Image src={'/logo_white.png'} alt='ADUFPI Logo' fill /></Logo>
        <Menu>
          <IWrap><Item to='vantagens' smooth={true} duration={500} spy={true} href={'/'} ><>Vantagens</></Item></IWrap>
          <IWrap><Item to='motivos' smooth={true} duration={500} spy={true} href={'/bookings'} ><>Motivos</></Item></IWrap>
          <IWrap><Item to='como-funciona' smooth={true} duration={500} spy={true} href={'/profile'} ><>Como Funciona</></Item></IWrap>
          <IWrap><Item to='sobre' smooth={true} duration={500} spy={true} href={'/profile'} ><>Sobre Nós</></Item></IWrap>
          <IWrap><Item to='inscricao' smooth={true} duration={500} spy={true} href={'/profile'} ><>Fazer Inscrição</></Item></IWrap>
        
        </Menu>
        <Mobile onClick={toggle}>
          <FaBars color="#C4C4C4" />
        </Mobile>
      </Wrapper>
    </Container>
   );
}
 
export default Navbar;