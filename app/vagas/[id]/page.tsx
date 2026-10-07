import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";

export default async function PaginaDaVaga({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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