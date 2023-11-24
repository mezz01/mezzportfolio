import Header from "../../components/header";
import Image from "next/image";

export default function about() {
    return(
        <main>
            <Header></Header>
            <h1> A web worker</h1>
            <p> By having a clear conversation about the ultimate outcome and your desire, I can help you get exactly what you're looking for.</p>
            <p></p>
            <Image src={'/public/favicon.ico'} ></Image>
        </main>
    )    
}