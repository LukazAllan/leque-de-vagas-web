import MuralDeVagas from "@/components/MuralDeVagas";
import { listarVagas } from "@/lib/api";

export default async function Vagas() {
  const vagas = await listarVagas();
  return (
    <>
      <h1>Encontre sua próxima oportunidade.</h1>
      <MuralDeVagas vagas={vagas} />
    </>
  );
}
