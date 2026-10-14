import { listarVagas } from "@/lib/api";
import Link from "next/link";

export default async function ListaDeVagas() {
  const vagas = await listarVagas();
  return (
    <ul>
      {vagas.map((vaga) => (
        <li key={vaga.id}>
          <Link href={`/vagas/${vaga.id}`}>{vaga.titulo}</Link>
        </li>
      ))}
    </ul>
  );
}