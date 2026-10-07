import Link from "next/link";

export default function Rodape() {
  return (
    <footer>
      <Link className="footer-brand" href="/">
        <span className="footer-mark" aria-hidden="true">✳</span>
        Leque de Vagas
      </Link>
      <span>© 2026 Leque de Vagas. Um bom começo para o seu próximo passo.</span>
      <nav className="footer-links" aria-label="Links institucionais">
        <Link href="/sobre">Sobre</Link>
        <Link href="/termos">Termos</Link>
        <Link href="/privacidade">Privacidade</Link>
      </nav>
    </footer>
  );
}