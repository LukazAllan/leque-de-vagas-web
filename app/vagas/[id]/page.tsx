import { notFound } from "next/navigation";
import { listarVagas } from "@/lib/api";

export default async function PaginaDaVaga({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const vagas = await listarVagas();
  const { id } = await params;
  const vaga = vagas.find((v) => v.id === id);

  if (!vaga) {
    notFound();
  }

  return (
    <article>
      <h1>{vaga.titulo}</h1>
      <p>{vaga.empresa} · {vaga.local}</p>
      <p>{vaga.descricao}</p>
    </article>
  );
}