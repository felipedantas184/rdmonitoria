import { MdOutlineCancel } from 'react-icons/md'
import { FaEdit, FaSave } from "react-icons/fa";
import { Container, HeaderItem, HeaderItemSmall, Heading, Subtitle, Table, TableHeader, TableItem, TableItemSmall, TableRow, TableWrapper, Title, Wrapper } from "./AdminStyles";

const Admin = ({users}:any) => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <Title>Administração</Title>
          <Subtitle>Você está vendo as reservas referentes a</Subtitle>
        </Heading>
        <TableWrapper>
          <Table>
            <TableHeader>
              <HeaderItem>Nome</HeaderItem>
              <HeaderItem>E-mail</HeaderItem>
              <HeaderItem>CPF</HeaderItem>
              <HeaderItem>Acesso</HeaderItem>
              <HeaderItem>Status</HeaderItem>
              <HeaderItemSmall>Ação</HeaderItemSmall>
            </TableHeader>

            {users.map((item:any) => (
              <TableRow key={item.id} >
              <TableItem>{item.name}</TableItem>
              <TableItem>{item.email}</TableItem>
              <TableItem>{item.cpf}</TableItem>
              <TableItem>{item.cpf}</TableItem>
              <TableItem>{item.name}</TableItem>
              <TableItemSmall style={{ gap: 8 }}>
                <MdOutlineCancel style={{ cursor: 'pointer' }} size={16} color={'#EC5757'} />
                <FaEdit style={{ cursor: 'pointer' }} size={16} color={'#C4C4C4'} />
              </TableItemSmall>
            </TableRow>
            ))}
            
          </Table>
        </TableWrapper>
      </Wrapper>
    </Container>
  );
}

export default Admin;