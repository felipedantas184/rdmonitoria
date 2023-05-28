import Image from "next/image";
import { Container, FGroup, Form, Input, Label, Logo, Title, Wrapper } from "./ResetStyles";
import { Button } from "../UsefulComponents";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Reset = () => {
  const router = useRouter()
  const { forgotPassword } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleResetPassword = async (e:any) => {
    e.preventDefault()
    
    try {
      setLoading(true)
      await forgotPassword(email)
      alert('E-mail de redefinição de senha enviado! Clique no link presente no email e redefina sua senha!')
      router.push('/')
    } catch (err) {
      setLoading(false)
      console.log(err)
      alert('Não foi possível realizar essa tarefa!')
    }
  }

  return ( 
    <Container>
      <Wrapper>
        <Form onSubmit={handleResetPassword}>
          <Logo><Image src={'/logo_purple.png'} alt='ADUFPI Logo' fill /></Logo>
          <Title>Login</Title>
          <FGroup>
            <Label>E-mail</Label>
            <Input type='text' placeholder="Digite seu e-mail" required
              onChange={(e) =>
                setEmail(e.target.value)
              }
              value={email}
            />
          </FGroup>
          <Button type="submit" >Entrar</Button>
        </Form>
      </Wrapper>
    </Container>
   );
}
 
export default Reset;