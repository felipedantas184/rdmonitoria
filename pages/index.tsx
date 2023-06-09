import Head from 'next/head'
import Home from '@/components/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>RD Monitoria | Página Inicial</title>
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
      <Home />
    </>
  )
}
