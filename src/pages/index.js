import Image from 'next/image'
import { Inter, Sree_Krushnadevaraya } from 'next/font/google'
import Header from '../../components/header'
import Head from 'next/head'
import tailwindConfig from '../../tailwind.config'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <title>Mohamed Amine Mezzat</title>
        <meta name="keywords" content="amine, amine mezzat, web developer maroc, mezzat01, mezz01, nextjs developer maroc"/>
        <Header></Header>
        <h1>Web Developer</h1>
    </main>
  )
}
