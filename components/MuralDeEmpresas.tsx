"use client";

import { useState } from "react";
import Filtros from "./Filtro";
import CardDeVaga from "./CardDeVagas";
import type * as tipo from "@/lib/tipos";
import CardDeEmpresa from "./CardDeEmpresas";

export default function MuralDeEmpresas(
  { empresas}: { empresas:tipo.Empresa[]}) {
  //const [busca, setBusca] = useState("");
  //const [area, setArea] = useState("Todas");

  
  return (
    <section>
      <p className="numeros">
        <strong>{empresas.length}</strong> empresas conosco
      </p>

      {
        empresas.length === 0 ? (
          <p>Seu requerimento obteve nenhuma empresa</p>
        ) : (
          <ul className="lista">
            {empresas.map(
              (empresa) => (
                <CardDeEmpresa key={empresa.slug} empresa={empresa} />
              ))}
          </ul>
        )
      }
    </section>
  );
}