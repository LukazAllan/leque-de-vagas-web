'use client';
import { useActionState } from "react";
import { criarVaga, type EstadoCriacaoVaga } from "./acoes";

const INICIAL: EstadoCriacaoVaga = { ok: false, erros: [], mensagem: "" };

export default function NovaVaga() {
  const [estado, acaoDoForm, pendente] = useActionState(criarVaga, INICIAL);
  return (
    <div className="form-vaga-page">
      <p className="form-vaga-eyebrow">Compartilhe uma oportunidade</p>
      <h1>Publique uma nova vaga</h1>
      <p className="form-vaga-intro">
        Conte os detalhes da oportunidade para ajudar as pessoas certas a
        encontrarem o próximo passo da carreira.
      </p>

      <form className="form-vaga" action={acaoDoForm}>
        <div className="form-vaga-grid">
          <label className="form-vaga-field form-vaga-field-wide" htmlFor="titulo">
            <span>Título da vaga</span>
            <input id="titulo" name="titulo" type="text" 
                    placeholder="Ex.: Pessoa desenvolvedora front-end" minLength={5} required />
          </label>


          <label className="form-vaga-field" htmlFor="empresa">
            <span>Empresa</span>
            <input id="empresa" name="empresa" type="text" 
                    placeholder="Nome da empresa" minLength={5} required />
          </label>

          <label className="form-vaga-field" htmlFor="empresaSlug">
            <span>Identificador da empresa</span>
            <input id="empresaSlug" name="empresaSlug" type="text" 
                    placeholder="ex: minha-empresa" required />
            <small>Use o identificador da página da empresa.</small>
          </label>

          <label className="form-vaga-field" htmlFor="area">
            <span>Área</span>
            <input id="area" name="area" type="text" placeholder="Ex.: Tecnologia" required />
          </label>

          <label className="form-vaga-field" htmlFor="senioridade">
            <span>Senioridade</span>
            <select id="senioridade" name="senioridade" defaultValue="" required>
              <option value="" disabled>
                Selecione uma senioridade
              </option>
              <option value="Estágio">Estágio</option>
              <option value="Júnior">Júnior</option>
              <option value="Pleno">Pleno</option>
              <option value="Sênior">Sênior</option>
            </select>
          </label>

          <label className="form-vaga-field form-vaga-field-wide" htmlFor="local">
            <span>Local de trabalho</span>
            <input id="local" name="local" type="text"
                    placeholder="Ex.: São Paulo, SP ou remoto" required />
          </label>

          <label className="form-vaga-field form-vaga-field-wide" htmlFor="descricao">
            <span>Descrição da vaga</span>
            <textarea id="descricao" name="descricao" 
                    placeholder="Descreva as responsabilidades, requisitos e benefícios da oportunidade."
                    minLength={5} rows={6} required />
          </label>
        </div>

        <label className="form-vaga-checkbox" htmlFor="aceitaIniciante">
          <input id="aceitaIniciante" name="aceitaIniciante" type="checkbox" value="on" />
          <span>Esta vaga também é adequada para quem está começando</span>
        </label>

        {estado.erros.length > 0 && (
          <ul className="form-vaga-feedback form-vaga-feedback-error" aria-live="polite">
            {estado.erros.map((erro, indice) => (
              <li key={`${indice}-${erro}`}>{erro}</li>
            ))}
          </ul>
        )}
        {estado.mensagem && (
          <p className="form-vaga-feedback" role="status">
            {estado.mensagem}
          </p>
        )}

        <div className="form-vaga-footer">
          <p>Revise as informações antes de publicar.</p>
          <button className="button button-primary" type="submit" disabled={pendente}>
            {pendente ? "Publicando..." : "Publicar vaga"} <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
