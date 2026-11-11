import MuralDeEmpresas from "@/components/MuralDeEmpresas";
import MuralDeEsqueleto from "@/components/MuralDeEsqueleto";
import { listarEmpresas } from "@/lib/api";
import { Suspense } from "react";

export default async function PaginaEmpresas(){
  const empresas = await listarEmpresas();
  return (
    <>
      <h1>Encontre sua próxima oportunidade.</h1>
      <Suspense fallback={<MuralDeEsqueleto />}>
        <MuralDeEmpresas empresas={empresas} />
      </Suspense>
      
    </>
  );
}