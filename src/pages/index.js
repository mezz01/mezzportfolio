import Image from 'next/image'
import { Inter, Sree_Krushnadevaraya } from 'next/font/google'
import Header from '../../components/header'
import Head from 'next/head'
import tailwindConfig from '../../tailwind.config'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <title>Mohamed Amine Mezzat</title>
        <meta name="keywords" content="amine, amine mezzat, web developer maroc, mezzat01, mezz01, nextjs developer maroc"/>
        <h1>Web Developer</h1>
        <Header></Header>
        <i class="fi fi-ts-at"> </i>
        <div>I am a web developer with an eye on design, we can work together to create a better user experience overall on your project, don't hesitate to contact me or even ask questions I'm open for it all .</div>
        <button className='h-10 bg-green'>Contact me</button>
        <Image src='./public/next.svg' width={500} height={500}></Image>
        <h1>amine</h1>
        <p>hasan</p>
        <form>
          <Link>link1</Link>
          <Link>link1</Link>
          <Link>link1</Link>
          <button>hello bn3mi</button>
        </form>
    </main>
  )
}


