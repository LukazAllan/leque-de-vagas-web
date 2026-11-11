import Link from "next/link";
import type { Empresa } from "@/lib/tipos";


export default function CardDeEmpresa({ empresa }: { empresa: Empresa }) {
  return (
    <li>
      <div className="empresaTag">
        <img src={`${empresa.slug}.png`} alt={empresa.slug} />
      </div>
      <Link href={`/empresas/${empresa.slug}`}>
        {empresa.nome}
        <span>
          {empresa.sobre}
        </span>
      </Link>
      {empresa.site}
    </li>
  );
}