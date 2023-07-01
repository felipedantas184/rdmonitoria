import Image from "next/image";
import { Button, ButtonWhite, Container, ELink, ImageWrapper, LogoWrapper, Menu, Option, PreviewBox, SIcon, SubMenu, Title, Wrapper } from "./HomeStyles";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Image src={'/logo_white.png'} alt="RD Monitoria" fill />
        </LogoWrapper>
        <Menu>
          <Option>
            <PreviewBox>
              <ImageWrapper>
                <Image src={'/course_slug.png'} alt='Curso de Matemática' fill />
              </ImageWrapper>
            </PreviewBox>
            <Title>Curso Matemática Ativa</Title>
            <Button href={'/matematica-ativa'} >Conhecer Mais</Button>
          </Option>
          <Option>
            <PreviewBox>
              <ImageWrapper>
                <Image src={'/mentoria_slug.png'} alt='Curso de Matemática' fill />
              </ImageWrapper>
            </PreviewBox>
            <Title>Mentoria Enem</Title>
            <ButtonWhite href={'/mentoria'} >Conhecer Mais</ButtonWhite>
          </Option>
        </Menu>
        <SubMenu>
          <Button href={'/dashboard'} style={{minWidth: 200, backgroundColor: '#120530'}} >Área do Aluno</Button>
        </SubMenu>
        <SubMenu>
          <SIcon><ELink rel="noreferrer" href='https://www.instagram.com/rdmonitoria/' target='_blank' arial-label='Instagram' ><FaInstagram /></ELink></SIcon>
          <SIcon><ELink rel="noreferrer" href='mailto:rdmonitoria.contato@gmail.com' target='_blank' arial-label='Email' ><FaEnvelope /></ELink></SIcon>
        </SubMenu>
      </Wrapper>
    </Container>
  );
}

export default Home;