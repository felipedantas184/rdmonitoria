import Aula from "@/components/Aula"
import { ListasData } from "@/components/Curso/CursoData"
import PDFViewer from "@/components/PDF"
import Layout from "@/layout/Layout"
import Head from "next/head"

import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import fireDB from '@/firebase/initFirebase'

export const getStaticPaths = async () => {
  const paths = ListasData.map(item => {
    return {
      params: { slug: item.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }: any) => {
  const item = ListasData.filter((item: any) => item.slug == params.slug)

  return {
    props: { lista: item[0] },
    revalidate: 1
  }
}

export default function PDFPage({lista}:any) {
  const { user } = useAuth()
  const [userData, setUserData] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function getUser() {
      if (user !== null) {
        const data = await getDoc(doc(fireDB, "users", user?.uid));
        const userData = data.data()
        setUserData(userData)
        setLoading(false)
      }
    }

    getUser()
  }, [user])

  return (
    <>
      <Head>
        <title>Curso Matemática Ativa | RD Monitoria</title>
        <meta name="description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Curso Matemática Ativa | RD Monitoria" />
        <meta property="og:type" content="school" />
        <meta property="og:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta property="og:site_name" content="RD Monitoria" />

        <meta property="twitter:title" content="Curso Matemática Ativa | RD Monitoria" />
        <meta property="twitter:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta property="twitter:image" content="/apple-touch-icon.png" />
      </Head>
      <Layout>
        {(!loading) && (
          <PDFViewer lista={lista} access={userData?.lists} />
        )}      
      </Layout>
    </>
  );
}