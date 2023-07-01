import { MdOutlineCancel } from 'react-icons/md'
import { FaEdit, FaSave } from "react-icons/fa";
import { Container, HeaderItem, HeaderItemSmall, Heading, Subtitle, Table, TableHeader, TableItem, TableItemSmall, TableRow, TableWrapper, Title, Wrapper } from "./AdminStyles";
import { useState } from "react";
import { doc, updateDoc } from 'firebase/firestore';
import fireDB from '@/firebase/initFirebase';

const Admin = ({ users }: any) => {
  const [editingUserAccess, setEditingUserAccess] = useState<any>()
  const [updateCourse, setUpdateCourse] = useState<string>()
  const [updateLists, setUpdateLists] = useState<string>()

  const getUserData = (userId: string) => {
    const user = users.filter((user: any) => user.id == userId)
    const userData = user[0]
    return userData
  }

  async function updateData(userId: string) {
    try {
      if (confirm("Você tem certeza de que deseja atualizar o acesso deste usuário?") == true) {
        (updateCourse && updateLists) ? (
          await updateDoc(doc(fireDB, "users", userId), {
            course: updateCourse,
            lists: updateLists
          })
        ) : (updateCourse && !updateLists) ? (
          await updateDoc(doc(fireDB, "users", userId), {
            course: updateCourse
          })
        ) : (!updateCourse && updateLists) ? (
          await updateDoc(doc(fireDB, "users", userId), {
            lists: updateLists
          })
        ) : (!updateCourse && !updateLists) ? (
          alert('Não há nada para atualizar')
        ) : (alert('Nada para realizar'))
        alert("Acesso atualizado!")
        location.reload()
      }
    } catch (error) {
      alert(error)
    }
  }
  async function accessEdit(item:any) {
    setEditingUserAccess(item)
  }

  console.log(editingUserAccess)

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
              <HeaderItem>Curso</HeaderItem>
              <HeaderItem>Listas</HeaderItem>
              <HeaderItemSmall>Ação</HeaderItemSmall>
            </TableHeader>

            {users.map((item: any) => (
              <TableRow key={item.id} >
                <TableItem>{item.name}</TableItem>
                <TableItem>{item.email}</TableItem>
                <TableItem>{item.cpf}</TableItem>
                <TableItem>{item.course}</TableItem>
                <TableItem>{item.lists}</TableItem>
                <TableItemSmall style={{ gap: 8 }}>
                  <FaEdit style={{ cursor: 'pointer' }} size={16} color={'#C4C4C4'} onClick={() => accessEdit(item)}/>
                </TableItemSmall>
              </TableRow>
            ))}
          </Table>
        </TableWrapper>

        {(editingUserAccess) && (
          <TableWrapper>
            <Table>
              <TableHeader style={{ backgroundColor: '#EC5757' }} >
                <HeaderItem>Nome</HeaderItem>
                <HeaderItem>E-mail</HeaderItem>
                <HeaderItem>CPF</HeaderItem>
                <HeaderItem>Curso</HeaderItem>
                <HeaderItem>Listas</HeaderItem>
                <HeaderItemSmall>Ação</HeaderItemSmall>
              </TableHeader>
              <TableRow>
                <TableItem>{editingUserAccess.name}</TableItem>
                <TableItem>{editingUserAccess.email}</TableItem>
                <TableItem>{editingUserAccess.cpf}</TableItem>
                <TableItem>
                  <select defaultValue={"placeholder"}
                    onChange={(e) =>
                      setUpdateCourse(e.target.value)
                    }>
                    <option value={"placeholder"} disabled>Selecione</option>
                    <option value={"denied"}>Bloqueado</option>
                    <option value={"confirmed"}>Liberado</option>
                  </select>
                </TableItem>
                <TableItem>
                  <select defaultValue={"placeholder"} 
                    onChange={(e) =>
                      setUpdateLists(e.target.value)
                    }>
                    <option value={"placeholder"} disabled>Selecione</option>                      
                    <option value={"denied"}>Bloqueado</option>
                    <option value={"confirmed"}>Liberado</option>
                  </select>
                </TableItem>
                <TableItemSmall style={{ justifyContent: 'space-around' }}>
                  <FaSave style={{ cursor: 'pointer' }} size={16} color={'#02AD50'} onClick={() => updateData(editingUserAccess.id)} />
                </TableItemSmall>
              </TableRow>
            </Table>
          </TableWrapper>
        )}
      </Wrapper>
    </Container>
  );
}

export default Admin;