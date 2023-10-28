import Link from "next/link";

export default function Header(params) {
    return(
        <div>
            <ul>
                <Link href='/'>Amine Mezzat</Link>
            </ul>
            <ul>
                <Link href='/contact'>Contact</Link>
                <Link href='/work'>Work</Link>
                <Link href='/about'>About</Link>
            </ul>
        </div>
    )
}