import Head from 'next/head'
import Layout from '@/layout/Layout'
import Mentoria from '@/components/Mentoria'

export default function MentoriaPage() {
  return (
    <>
      <Head>
        <title>Mentoria ENEM | RD Monitoria</title>
        <meta name="description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Mentoria ENEM | RD Monitoria"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="RD Monitoria"/>

        <meta property="twitter:title" content="Mentoria ENEM | RD Monitoria"/>
        <meta property="twitter:description" content="Acompanhamento individual e preparação o Enem com a eficiência e qualidade de quem já trilhou esse caminho!"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>
      <Layout>
        <Mentoria />
      </Layout>
    </>
  )
}
