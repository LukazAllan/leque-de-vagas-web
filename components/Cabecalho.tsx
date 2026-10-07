import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <Link className="brand" href="/" aria-label="Leque de Vagas, página inicial">
        <span className="brand-mark" aria-hidden="true">✳</span>
        <span>leque<span className="highlight">.</span></span>
      </Link>
      <nav aria-label="Navegação principal">
        <Link href="/vagas">Vagas</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
        <Link className="nav-cta" href="/vagas">Explorar vagas <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}