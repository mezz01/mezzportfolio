import Link from "next/link";

export default function Header(params) {
    return(
        <div>
            <ul>
                <Link>Amine Mezzat</Link>
            </ul>
            <ul>
                <Link>Contact</Link>
                <Link>Work</Link>
                <Link>About</Link>
            </ul>
        </div>
    )
}