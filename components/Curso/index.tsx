import Image from "next/image";
import { Authors, CSubtitle, CTitle, Class, ClassHeading, Classes, ContentBox, First, Fixed, GTitle, ImageWrapper, Info, MoreButton, PreviewBox, Second, Section, Subtitle, Title, Wrapper } from "./CursoStyles";
import { FaPlayCircle, FaVideo } from "react-icons/fa";
import Link from "next/link";
import { CursoData, ListasData } from "./CursoData";
import { BsFiletypePdf, BsJournalBookmarkFill, BsPencilSquare } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Curso = ({ access }: any) => {
  const router = useRouter()
  const [showAllVideos, setShowAllVideos] = useState(false)
  const [showAllLists, setShowAllLists] = useState(false)
  const [showAllMaterials, setShowAllMaterials] = useState(false)

  useEffect(() => {
    if (access === "denied") {
      router.push('/')
    }
  }, [access, router])

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
        {(access === "confirmed") ? (
          <Second>
            <Info>
              <Title>Matemática Ativa - Enem</Title>
              <Subtitle>Aprenda a matemática do ENEM e aumente sua nota!</Subtitle>
              <Authors>RD Monitoria | André Isac | Felipe Dantas</Authors>
            </Info>
            <ContentBox>
              <div style={{ width: '100%', padding: 8, marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <GTitle>Aulas Gravadas</GTitle>
                <FaVideo size={24} color="#120530" />
              </div>
              {(!showAllVideos) ? (
                <Classes>
                  {CursoData.slice(0, 5).map((item: any) => (
                    <Class key={item?.id} >
                      <ClassHeading>
                        <CTitle>{item?.title}</CTitle>
                        <CSubtitle>{item?.subject}</CSubtitle>
                      </ClassHeading>
                      <Link href={`/aulas/${item?.slug}`} ><FaPlayCircle size={32} color="#240046" /></Link>
                    </Class>
                  ))}
                  <MoreButton onClick={() => setShowAllVideos(!showAllVideos)}>Ver Mais</MoreButton>
                </Classes>
              ) : (
                <Classes>
                  {CursoData.map((item: any) => (
                    <Class key={item?.id} >
                      <ClassHeading>
                        <CTitle>{item?.title}</CTitle>
                        <CSubtitle>{item?.subject}</CSubtitle>
                      </ClassHeading>
                      <Link href={`/aulas/${item?.slug}`} ><FaPlayCircle size={32} color="#240046" /></Link>
                    </Class>
                  ))}
                  <MoreButton onClick={() => setShowAllVideos(!showAllVideos)}>Ver Menos</MoreButton>
                </Classes>
              )}
            </ContentBox>
            <ContentBox>
              <div style={{ width: '100%', padding: 8, marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <GTitle>Listas de Exercícios</GTitle>
                <BsPencilSquare size={24} color="#120530" />
              </div>
              {(!showAllLists) ? (
                <Classes>
                  {ListasData.slice(0, 5).map((item: any) => (
                    <Class key={item?.id} >
                      <ClassHeading>
                        <CTitle>{item?.title}</CTitle>
                        <CSubtitle>{item?.subject}</CSubtitle>
                      </ClassHeading>
                      <Link href={`/listas/${item?.slug}`} ><BsFiletypePdf size={32} color="#240046" /></Link>
                    </Class>
                  ))}
                  <MoreButton onClick={() => setShowAllLists(!showAllVideos)}>Ver Mais</MoreButton>
                </Classes>
              ) : (
                <Classes>
                  {ListasData.map((item: any) => (
                    <Class key={item?.id} >
                      <ClassHeading>
                        <CTitle>{item?.title}</CTitle>
                        <CSubtitle>{item?.subject}</CSubtitle>
                      </ClassHeading>
                      <Link href={`/listas/${item?.slug}`} ><BsFiletypePdf size={32} color="#240046" /></Link>
                    </Class>
                  ))}
                  <MoreButton onClick={() => setShowAllLists(!showAllLists)}>Ver Menos</MoreButton>
                </Classes>
              )}
            </ContentBox>
            <ContentBox>
              <div style={{ width: '100%', padding: 8, marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <GTitle>Materiais de Estudo</GTitle>
                <BsJournalBookmarkFill size={24} color="#120530" />
              </div>
              {(!showAllMaterials) ? (
                <Classes>
                  {ListasData.slice(0, 5).map((item: any) => (
                    <Class key={item?.id} >
                      <ClassHeading>
                        <CTitle>{item?.title}</CTitle>
                        <CSubtitle>{item?.subject}</CSubtitle>
                      </ClassHeading>
                      <Link href={`/slides/${item?.slug}`} ><BsFiletypePdf size={32} color="#240046" /></Link>
                    </Class>
                  ))}
                  <MoreButton onClick={() => setShowAllMaterials(!showAllMaterials)}>Ver Mais</MoreButton>
                </Classes>
              ) : (
                <Classes>
                  {ListasData.map((item: any) => (
                    <Class key={item?.id} >
                      <ClassHeading>
                        <CTitle>{item?.title}</CTitle>
                        <CSubtitle>{item?.subject}</CSubtitle>
                      </ClassHeading>
                      <Link href={`/listas/${item?.slug}`} ><BsFiletypePdf size={32} color="#240046" /></Link>
                    </Class>
                  ))}
                  <MoreButton onClick={() => setShowAllMaterials(!showAllMaterials)}>Ver Menos</MoreButton>
                </Classes>
              )}
            </ContentBox>
            <ContentBox>
              <div style={{ width: '100%', padding: 8, marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <GTitle>Resoluções</GTitle>
                <BsJournalBookmarkFill size={24} color="#120530" />
              </div>
              {(!showAllMaterials) ? (
                <Classes>
                  {ListasData.slice(0, 5).map((item: any) => (
                    <Class key={item?.id} >
                      <ClassHeading>
                        <CTitle>{item?.title}</CTitle>
                        <CSubtitle>{item?.subject}</CSubtitle>
                      </ClassHeading>
                      <Link href={`/resolucoes/${item?.slug}`} ><BsFiletypePdf size={32} color="#240046" /></Link>
                    </Class>
                  ))}
                  <MoreButton onClick={() => setShowAllMaterials(!showAllMaterials)}>Ver Mais</MoreButton>
                </Classes>
              ) : (
                <Classes>
                  {ListasData.map((item: any) => (
                    <Class key={item?.id} >
                      <ClassHeading>
                        <CTitle>{item?.title}</CTitle>
                        <CSubtitle>{item?.subject}</CSubtitle>
                      </ClassHeading>
                      <Link href={`/resolucoes/${item?.slug}`} ><BsFiletypePdf size={32} color="#240046" /></Link>
                    </Class>
                  ))}
                  <MoreButton onClick={() => setShowAllMaterials(!showAllMaterials)}>Ver Menos</MoreButton>
                </Classes>
              )}
            </ContentBox>
          </Second>
        ) : (
          <Second>
            <Info>
              <Title>Matemática Ativa - Enem</Title>
              <Subtitle>Aprenda a matemática do ENEM e aumente sua nota!</Subtitle>
              <Authors>RD Monitoria | André Isac | Felipe Dantas</Authors>
            </Info>
          </Second>
        )}
      </Wrapper>
    </Section>
  );
}

export default Curso;