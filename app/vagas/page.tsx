import MuralDeVagas from "@/components/MuralDeVagas";
import { vagas } from "@/data/vagas";

export default function Vagas() {
  return (
    <>
      <h1>Encontre sua próxima oportunidade.</h1>
      <MuralDeVagas vagas={vagas} />
    </>
  );
}
