import { BsChevronDoubleDown } from "react-icons/bs";
import { CoursesPerksList } from "./CoursesPerksData";
import { ButtonScorll, CoursesPerksCard, CoursesPerksContainer, CoursesPerksH2, CoursesPerksP, CoursesPerksRow, CoursesPerksTitle, CoursesPerksWrapper } from "./FPerksStyles";

const FPerks = () => {
  return ( 
    <CoursesPerksContainer id="vantagens">
			<CoursesPerksWrapper>
				<CoursesPerksTitle>Vantagens</CoursesPerksTitle>
				<CoursesPerksRow>
					{CoursesPerksList.map((perk) => {
						return (
							<CoursesPerksCard key={perk.id} >
								{perk.icon}
								<CoursesPerksH2>{perk.title}</CoursesPerksH2>
								<CoursesPerksP>{perk.description}</CoursesPerksP> 
							</CoursesPerksCard>
						)
					})}
				</CoursesPerksRow>
				<ButtonScorll to='inscricao' style={{marginTop: 48}}
					smooth={true} duration={500} spy={true} offset={20}>
					<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginRight: 16}} />
					Quero Participar
					<BsChevronDoubleDown size={16} color="#F1F2F3" style={{marginLeft: 16}} />
				</ButtonScorll>
			</CoursesPerksWrapper>
		</CoursesPerksContainer>
   );
}
 
export default FPerks;