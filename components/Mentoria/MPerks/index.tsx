import { MPerksList } from "./MPerksData";
import { BScroll, Container, PerkCard, PerkResume, Perks, PerkTitle, Title, Wrapper } from "./MPerksStyles";
import { BsChevronDoubleDown } from "react-icons/bs";

const MPerks = () => {
  return (
    <Container id="vantagens">
      <Wrapper>
        <Title>Vantagens</Title>
        <Perks>
          {MPerksList.map((perk) => (
            <PerkCard key={perk.id} >
              {perk.icon}
              <PerkTitle>{perk.title}</PerkTitle>
              <PerkResume>{perk.description}</PerkResume>
            </PerkCard>
          ))}
        </Perks>
        <BScroll to='inscricao'
          smooth={true} duration={500} spy={true} offset={20}>
          <BsChevronDoubleDown size={16} color="#F1F2F3" style={{ marginRight: 16 }} />
          Quero Participar
          <BsChevronDoubleDown size={16} color="#F1F2F3" style={{ marginLeft: 16 }} />
        </BScroll>
      </Wrapper>
    </Container>
  );
}

export default MPerks;