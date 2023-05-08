import Image from "next/image";
import { Authors, CSubtitle, CTitle, Class, ClassHeading, Classes, ContentBox, First, Fixed, GTitle, ImageWrapper, Info, PreviewBox, Second, Section, Subtitle, Title, Wrapper } from "./CursoStyles";
import { Button } from "../UsefulComponents";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";
import { CursoData, ListasData } from "./CursoData";
import { BsFiletypePdf } from "react-icons/bs";

const Curso = () => {
  return (
    <Section>
      <Fixed />
      <Wrapper>
        <First>
          <PreviewBox>
            <ImageWrapper>
              <Image src={'/course_slug.png'} alt='Curso de Matemática' fill />
            </ImageWrapper>
          </PreviewBox>
        </First>
        <Second>
          <Info>
            <Title>Matemática Ativa - Enem</Title>
            <Subtitle>Aprenda a matemática do ENEM e aumente sua nota!</Subtitle>
            <Authors>RD Monitoria | André Isac | Felipe Dantas</Authors>
          </Info>
          <ContentBox>
            <GTitle>Aulas Gravadas</GTitle>
            <Classes>
              {CursoData.map((item:any) => (
                <Class key={item?.id} >
                  <ClassHeading>
                    <CTitle>{item?.title}</CTitle>
                    <CSubtitle>{item?.subject}</CSubtitle>
                  </ClassHeading>
                  <Link href={`/aulas/${item?.slug}`} ><FaPlayCircle size={32} color="#240046" /></Link>
                </Class>
              ))}
            </Classes>
          </ContentBox>
          <ContentBox>
            <GTitle>Listas de Exercícios</GTitle>
            <Classes>
              {ListasData.map((item:any) => (
                <Class key={item?.id} >
                  <ClassHeading>
                    <CTitle>{item?.title}</CTitle>
                    <CSubtitle>{item?.subject}</CSubtitle>
                  </ClassHeading>
                  <Link href={`/listas/${item?.slug}`} ><BsFiletypePdf size={32} color="#240046" /></Link>
                </Class>
              ))}
            </Classes>
          </ContentBox>
        </Second>
      </Wrapper>
    </Section>
  );
}

export default Curso;