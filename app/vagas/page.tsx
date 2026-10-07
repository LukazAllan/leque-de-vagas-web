import Link from "next/link";
import { vagas } from "@/data/vagas";
import { listarVagas } from "@/lib/api";
import NumerosDoCatalogo from "@/components/NumerosDoCatalogo";
import NumerosEsqueleto from "@/components/NumerosEsqueleto";

import { Suspense } from "react";

export default function Vagas() {        // repare: NÃO é async
  return (
    <>
      <h1>Vagas</h1>                      

      <Suspense fallback={<NumerosEsqueleto />}>
        <NumerosDoCatalogo />               
      </Suspense>
    </>
  );
}
