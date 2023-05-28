import Image from "next/image";
import { Button } from "../UsefulComponents";
import { Container, FGroup, FOption, Form, Input, Label, Logo, Title, Wrapper } from "./SignInStyles";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const SignIn = () => {
  const { login } = useAuth()
  const router = useRouter()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
      alert('Email ou senha incorretos!')
    }
  }

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleLogin}>
          <Logo><Image src={'/logo_purple.png'} alt='ADUFPI Logo' fill /></Logo>
          <Title>Login</Title>
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
          <Button type="submit" >Entrar</Button>
          <FOption href={'/reset'} >Esqueci minha senha</FOption>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignIn;