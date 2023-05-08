import Image from "next/image";
import { AText, Card, Cards, Container, DText, Details, HeadWrapper, Heading, ImgWrap, RText, Subtitle, Title, Wrapper } from "./DashboardStyles";
import Link from "next/link";
import { FaPlayCircle, FaTimesCircle } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <Container>
      <HeadWrapper>
        <Heading>
          <Title>Dashboard de {user?.displayName?.split(' ')[0]}</Title>
          <Subtitle>O acesso aos cursos pode demorar algum tempo até aprovação.</Subtitle>
        </Heading>
      </HeadWrapper>
      <Wrapper>
        <Cards>
          <Card>
            <ImgWrap><Image src={'/course_slug.png'} alt='Curso Matemática Ativa' fill /></ImgWrap>
            <Details>
              <DText>Curso Matemática Ativa</DText>
              <Link href={'/curso'} style={{ display: "flex", alignItems: 'center' }} ><FaPlayCircle size={32} color="#240046" /></Link>
            </Details>
            <AText>Acesso Liberado</AText>
          </Card>
          <Card>
            <ImgWrap><Image src={'/course_slug.png'} alt='Curso Matemática Ativa' fill /></ImgWrap>
            <Details>
              <DText>Listas de Questões</DText>
              <FaTimesCircle size={32} color="#b33e0c" />
            </Details>
            <RText>Acesso Pendente</RText>
          </Card>
        </Cards>
      </Wrapper>
    </Container>
  );
}

export default Dashboard;