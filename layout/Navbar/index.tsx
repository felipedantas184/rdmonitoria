import Image from "next/image";
import { Container, Item, IWrap, Login, Logo, Logout, Menu, Mobile, Wrapper } from "./NavbarStyles";
import { FaBars } from 'react-icons/fa';
import { useAuth } from "@/context/AuthContext";

const Navbar = ({toggle}:any) => {
  const { user, logout } = useAuth()

  return ( 
    <Container>
      <Wrapper>
        <Logo href={'/'} ><Image src={'/logo_white.png'} alt='ADUFPI Logo' fill /></Logo>
        <Menu>
          <IWrap><Item to='vantagens' smooth={true} duration={500} spy={true}  ><>Vantagens</></Item></IWrap>
          <IWrap><Item to='motivos' smooth={true} duration={500} spy={true}><>Motivos</></Item></IWrap>
          <IWrap><Item to='como-funciona' smooth={true} duration={500} spy={true}><>Como Funciona</></Item></IWrap>
          <IWrap><Item to='sobre' smooth={true} duration={500} spy={true}><>Sobre Nós</></Item></IWrap>
          {(!user) ? (
            <Login href={'/login'}>Entrar</Login>
          ) : (
            <Logout onClick={() => logout()}>Logout</Logout>
          )}
        </Menu>
        <Mobile onClick={toggle}>
          <FaBars color="#C4C4C4" />
        </Mobile>
      </Wrapper>
    </Container>
   );
}
 
export default Navbar;