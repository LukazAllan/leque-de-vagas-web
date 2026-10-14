import type { Vaga, Empresa } from "@/lib/tipos";

const URL:String = "https://raw.githubusercontent.com/Um-Leque-de-Tecnologia/lequedevagas-web/refs/heads/main/dados";
// URL:String -> Contém a URL para o respctivo json no projeto principal da prof.


export async function listarVagas(){
  const response = await fetch(`${URL}/vagas.json`, { next: { revalidate: 60, tags: ["vagas"] } });
  const vagas:Vaga[] = await response.json();
  return vagas;
}

export async function listarEmpresas(){
  const response = await fetch(`${URL}/empresas.json`, { next: { revalidate: 3600, tags: ["empresas"] } });
  const empresas:Empresa[] = await response.json();
  return empresas;
}

