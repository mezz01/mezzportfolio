import Image from 'next/image'
import { Inter, Sree_Krushnadevaraya } from 'next/font/google'
import Header from '../../components/header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <Head>
        <title>My page title</title>
        <meta name="keywords" content="amine, amine mezzat, web developer maroc, mezzat01, mezz01, nextjs developer maroc"/>
        <Header></Header>
      </Head>
      <h1 className="">Web Developer</h1>
    </main>
  )
}
