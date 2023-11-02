import Image from 'next/image'
import { Inter, Sree_Krushnadevaraya } from 'next/font/google'
import Header from '../../components/header'
import Head from 'next/head'
import tailwindConfig from '../../tailwind.config'

const inter = Inter({ subsets: ['latin'] })

function Clicked() {
  return(
    alert('alou test test')
  )
}

export default function Home() {
  return (
    <main>
        <title>Mohamed Amine Mezzat</title>
        <meta name="keywords" content="amine, amine mezzat, web developer maroc, mezzat01, mezz01, nextjs developer maroc"/>
        <h1>Web Developer</h1>
        <Header></Header>
        <div>I am a web developer with an eye on design, we can work together to create a better user experience overall on your project, don't hesitate to contact me or even ask questions I'm open for it all .</div>
        <button className='h-10 bg-green' onClick={Clicked}>Contact me</button>
    </main>
  )
}


