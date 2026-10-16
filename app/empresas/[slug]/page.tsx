import { notFound } from "next/navigation";
import * as api from "@/lib/api";
import AbasDaEmpresa from "@/components/AbasDaEmpresa";

export async function generateStaticParams() {
  const slug = await api.listarEmpresas();
  return slug.map((empresa) => ({slug: empresa.slug}))
}

export default async function PaginaDaEmpresa({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const empresas = await api.listarEmpresas();
  const vagas = await api.listarVagas();

  const { slug } = await params;
  const empresa = empresas.find((e) => e.slug === slug);
  if (!empresa) notFound();

  // O cruzamento acontece AQUI, no servidor, antes de a tela existir.
  const vagasDaEmpresa = vagas.filter((v) => v.empresaSlug === slug);

  return (
    <article>
      <h1>{empresa.nome}</h1>
      {/* Um texto e uma lista de objetos atravessam a fronteira sem susto. */}
      <AbasDaEmpresa sobre={empresa.sobre} vagas={vagasDaEmpresa} />
    </article>
  );
}