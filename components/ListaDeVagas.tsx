import Link from "next/link";
import { vagas } from "@/data/vagas";

export default function ListaDeVagas() {
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