import Link from "next/link";

export default function Cabecalho(){
    return (
        <header className="cabecalho">
            <h1>Leque de Vagas</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/vagas">Vagas</Link>
                <Link href="/sobre">Sobre</Link>
            </nav>
        </header>
    );
}