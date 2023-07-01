import Image from "next/image";
import { Button } from "../UsefulComponents";
import { Container, FGroup, Form, Input, Label, Logo, Title, Wrapper } from "./SignUpStyles";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import fireDB, { auth } from "@/firebase/initFirebase";
import { updateProfile } from "firebase/auth";
import { sendContactForm } from '../../lib/api'

const SignUp = () => {
  const { signup } = useAuth()
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    cpf: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()
    try {
      await signup(data.email, data.password).then(auth => {
        return setDoc(doc(fireDB, "users", auth.user.uid), {
          name: data.name,
          cpf: data.cpf,
          email: data.email,
          course: 'denied',
          lists: 'denied',
          admin: false,
        })
      }).then(function (docref) {
        sendContactForm({
          name: data.name,
          email: data.email,
          subject: 'Cadastro Realizado com sucesso!',
          observations: 'O acesso ao curso pode levar algum tempo. Caso precise, entre em contato conosco.'
        })
      })
      if (auth.currentUser !== null) {
        updateProfile(auth.currentUser, {
          displayName: data.name,
        })
      }
      router.push('/login')
    } catch (err) {
      alert(err)
    }
  }


  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSignup} >
          <Logo><Image src={'/logo_purple.png'} alt='ADUFPI Logo' fill /></Logo>
          <Title>Cadastro</Title>
          <FGroup>
            <Label>Nome</Label>
            <Input type='text' placeholder="Digite seu nome" required
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
              value={data.name}
            />
          </FGroup>
          <FGroup>
            <Label>CPF</Label>
            <Input type='number' placeholder="Digite seu CPF" required
              onChange={(e) =>
                setData({
                  ...data,
                  cpf: e.target.value,
                })
              }
              value={data.cpf}
            />
          </FGroup>
          <FGroup>
            <Label>E-mail</Label>
            <Input type='text' placeholder="Digite seu e-mail" required
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
            />
          </FGroup>
          <FGroup>
            <Label>Senha</Label>
            <Input type="password" placeholder="Digite sua senha" required
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
            />
          </FGroup>
          <Button>Cadastrar</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignUp;