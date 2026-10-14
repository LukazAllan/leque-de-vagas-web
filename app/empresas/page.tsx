import MuralDeEmpresas from "@/components/MuralDeEmpresas";
import { listarEmpresas } from "@/lib/api";

export default async function PaginaEmpresas(){
  const empresas = await listarEmpresas();
  return (
    <>
      <h1>Encontre sua próxima oportunidade.</h1>
      <MuralDeEmpresas empresas={empresas} />
    </>
  );
}