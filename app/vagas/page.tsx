import Link from "next/link";
import { vagas } from "@/data/vagas";
import { listarVagas } from "@/lib/api";
import NumerosDoCatalogo from "@/components/NumerosDoCatalogo";
import NumerosEsqueleto from "@/components/NumerosEsqueleto";

import { Suspense } from "react";

export default function Vagas() {        // repare: NÃO é async
  return (
    <>
      <h1>Vagas</h1>                      

      <Suspense fallback={<NumerosEsqueleto />}>
        <NumerosDoCatalogo />               
      </Suspense>
    </>
  );
}

export default function listarVagas() {
  return (
    <ul className="lista">
      {vagas.map((vaga) => (
        // key: um identificador único por item da lista.
        // Sem ele o Next avisa no terminal.
        // E no href: crases + ${} = texto com um buraco
        // preenchido na hora com o id daquela vaga.
        <li key={vaga.id}>
          <Link href={`/vagas/${vaga.id}`}>
            <strong>{vaga.titulo}</strong>
            <span>{vaga.empresa} · {vaga.local}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}