import Head from 'next/head'
import SignIn from '@/components/SignIn'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { useEffect } from "react"

export default function LoginPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [router, user])

  return (
    <>
      <Head>
        <title>Curso Matemática Ativa | RD Monitoria</title>
        <meta name="description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Curso Matemática Ativa | RD Monitoria"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="RD Monitoria"/>

        <meta property="twitter:title" content="Curso Matemática Ativa | RD Monitoria"/>
        <meta property="twitter:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>
      <SignIn />
    </>
  )
}
