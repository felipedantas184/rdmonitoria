import Image from "next/image";
import { BoxWrap, ButtonScorll, CoursesClassesColumn1, CoursesClassesColumn2, CoursesClassesContainer, CoursesClassesHeading, CoursesClassesRow, CoursesClassesWrapper, Heading, Subtitle, TextWrapper } from "./FClasses";

const FClasses = () => {
  return ( 
    <CoursesClassesContainer id="CoursesClasses">
					<CoursesClassesWrapper>
						<CoursesClassesHeading>Cronograma</CoursesClassesHeading>
						<CoursesClassesRow>
							<CoursesClassesColumn1>
								<BoxWrap>
									<Image src='/features/cronogramaI.png' alt="" width={630} height={360} />
								</BoxWrap>
							</CoursesClassesColumn1>
							<CoursesClassesColumn2 style={{alignSelf: 'flex-start'}} >
								<TextWrapper>
									<Heading>Estudo <br/>Inteligente</Heading>
									<Subtitle>Separamos os assuntos das primeiras listas de uma maneira inteligente que facilitará seu aprendizado!</Subtitle>
								</TextWrapper>
							</CoursesClassesColumn2>
						</CoursesClassesRow>

						<CoursesClassesRow style={{marginTop: 40}} >
							<CoursesClassesColumn1>
								<BoxWrap>
									<Image src='/features/cronogramaII.png' alt="" width={630} height={360} />
								</BoxWrap>		
							</CoursesClassesColumn1>
							<CoursesClassesColumn2 style={{alignSelf: 'flex-start'}} >
								<TextWrapper >
									<Heading>Questões &<br />Monitorias</Heading>
									<Subtitle>Além das listas de questões e do grupo de WhatsApp, você também terá direito a monitorias ao vivo para tirar suas dúvidas e buscar orientações!</Subtitle>
								</TextWrapper>
							</CoursesClassesColumn2>
						</CoursesClassesRow>		
						<ButtonScorll to='offer' style={{marginTop: 32}}
							smooth={true} duration={500} spy={true} offset={20}>
							Fazer Inscrição Agora!
						</ButtonScorll>			
					</CoursesClassesWrapper>
				</CoursesClassesContainer>
   );
}
 
export default FClasses;