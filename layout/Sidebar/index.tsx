import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { Close, Container, Item, Logo, Menu, SButton, Wrapper } from "./SidebarStyles";

const Sidebar = ({ isOpen, toggle }:any) => {  
  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        <Close onClick={toggle}>
          <FaTimes color="#13131A" />
        </Close>
        <Logo href={'/'} ><Image src={'/logo_white.png'} alt='ADUFPI Logo' fill /></Logo>
        <Menu>
          <Item><Link href={'/'}>Quartos</Link></Item>
          <Item><Link href={'/bookings'}>Minhas Reserva</Link>s</Item>
          <Item><Link href={'/profile'}>Meu Perfil</Link></Item>
        </Menu>
        <SButton>Contato</SButton>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;