import Image from "next/image";
import { Card, Cards, CourseClass, CourseTitle, DText, Description, Details, Fixed, Heading, ImgWrap, Section, StatusBox, Subtitle, Title, VideoBox, VideoWrapper, Wrapper } from "./AulaStyles";
import { CursoData } from "../Curso/CursoData";
import { FaArrowLeft, FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Aula = ({ aula, access }: any) => {
  const router = useRouter()

  useEffect(() => {
    if (access === "denied") {
      router.push('/')
    }
  }, [access, router])

  return (
    <Section>
      <Fixed />
      {(access === "confirmed") ? (
        <Wrapper>
          <VideoBox>
            <Heading>
              <DText><FaArrowLeft size={14} color="#13131A" /> <Link href={"/curso"}> Voltar - Página do Curso</Link></DText>
              <Title>{aula?.title}</Title>
              <Subtitle>{aula?.subject}</Subtitle>
            </Heading>
            <VideoWrapper>
              <iframe src={aula?.videoUrl} title="Encontro 09- MIX 03 _ Turma 02 Video" allow="autoplay; fullscreen" allowFullScreen width="100%" height="100%"></iframe>
            </VideoWrapper>
          </VideoBox>
          <StatusBox>
            <CourseTitle>Curso Matemática Ativa</CourseTitle>
            <CourseClass>Porcentagem e Estatística</CourseClass>
            <Cards>
              {CursoData.map((item: any) => (
                <Card key={item.id}>
                  <ImgWrap><Image src={item.imgUrl} alt={item.title} fill /></ImgWrap>
                  <Details>
                    <DText>{item.title}</DText>
                    <Link href={`/aulas/${item.slug}`} style={{ display: "flex", alignItems: 'center' }} ><FaPlayCircle size={20} color="#240046" /></Link>
                  </Details>
                </Card>
              ))}
            </Cards>
          </StatusBox>
        </Wrapper>
      ) : (<></>)
      }
    </Section>
  );
}

export default Aula;