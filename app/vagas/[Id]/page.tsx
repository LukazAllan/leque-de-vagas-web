import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { vagas } from "@/data/vagas";

// EXTRA: faz o título da aba virar o nome da vaga.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const vaga = vagas.find((v) => v.id === id);
  return { title: vaga ? `${vaga.titulo} · Leque de Vagas` : "Vaga não encontrada" };
}

export default async function PaginaDaVaga({params,}: {params: Promise<{ id: string }>;}) 
{
  const { id } = await params;//A função vai esperar pelo valor id
  const vaga = vagas.find((v) => v.id === id);// Após, ele ultilza o valor e procura pela vaga.
  if (!vaga) {notFound();}//Em caso de não encontrar ele dará error;

  return (<article className="vaga">
      <h1>{vaga.titulo}</h1>

      <p>  <Link href={`/empresas/${vaga.empresaSlug}`}>{vaga.empresa}</Link>
        {" · "}{vaga.area} · {vaga.senioridade} · {vaga.local}</p>

      {vaga.aceitaIniciante && <p className="selo">Aceita quem está começando</p>}

      <p>{vaga.descricao}</p>

      <Link href="/vagas">← todas as vagas</Link>
    </article>
  );
}