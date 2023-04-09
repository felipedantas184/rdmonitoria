import Image from "next/image";
import { Container, ELink, Logo, Rights, SIcon, Social, Wrapper } from "./FooterStyles";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return ( 
    <Container>
      <Wrapper>
        <Logo href={'/'} ><Image src={'/logo_white.png'} alt='ADUFPI Logo' fill /></Logo>
        <Rights>RD MENTORIA © {new Date().getFullYear()} Criado por Felipe Dantas.</Rights>
        <Social>
          <SIcon><ELink rel="noreferrer" href='https://www.instagram.com/rdmonitoria/' target='_blank' arial-label='Instagram' ><FaInstagram/></ELink></SIcon>
          <SIcon><ELink rel="noreferrer" href='mailto:rdmonitoria.contato@gmail.com' target='_blank' arial-label='Email' ><FaEnvelope /></ELink></SIcon>
        </Social>
      </Wrapper>
    </Container>
   );
}
 
export default Footer;