import MuralDeEsqueleto from "@/components/MuralDeEsqueleto";
import MuralDeVagas from "@/components/MuralDeVagas";
import { listarVagas } from "@/lib/api";
import { Suspense } from "react";

export default async function Vagas() {
  const vagas = await listarVagas();
  return (
    <section className="area-vagas">
      <p className="secao">Vagas abertas</p>
      <h1>Encontre sua próxima oportunidade.</h1>
      <Suspense fallback={<MuralDeEsqueleto   />}>
        <MuralDeVagas vagas={vagas} />
      </Suspense>
    </section>
  );
}
