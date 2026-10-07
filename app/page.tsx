import Link from "next/link";
import MuralDeVagas from "@/components/MuralDeVagas";
import { vagas } from "@/data/vagas";

export default function Home() {
  const iniciantes = vagas.filter((vaga) => vaga.aceitaIniciante).length;
  const areas = new Set(vagas.map((vaga) => vaga.area)).size;

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            O próximo passo da sua carreira começa aqui
          </p>
          <h1>
            Trabalho bom
            <br />
            muda <span className="highlight">tudo.</span>
          </h1>
          <p className="hero-description">
            Encontre oportunidades que combinam com você — inclusive vagas
            para quem está começando.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#vagas">
              Encontrar minha vaga <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-text" href="/sobre">
              Conheça o Leque
            </Link>
          </div>
          <div className="hero-note">
            <span className="avatar-stack" aria-hidden="true">
              <span>A</span>
              <span>R</span>
              <span>M</span>
            </span>
            <span>Novas possibilidades, no seu tempo.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustração de uma oportunidade">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✳</div>
          <div className="art-card">
            <span className="art-card-label">UM BOM COMEÇO</span>
            <div className="art-card-icon">↗</div>
            <p>Seu talento tem espaço para crescer.</p>
            <div className="art-card-line" />
            <div className="art-card-bottom">
              <span>novas oportunidades</span>
              <span className="art-card-arrow">→</span>
            </div>
          </div>
          <div className="art-caption">
            <span className="caption-dot" />
            Seu próximo capítulo
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Resumo das vagas">
        <div className="stat">
          <strong>{vagas.length.toString().padStart(2, "0")}</strong>
          <span>oportunidades abertas</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <strong>{iniciantes.toString().padStart(2, "0")}</strong>
          <span>aceitam iniciantes</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <strong>{areas.toString().padStart(2, "0")}</strong>
          <span>áreas para explorar</span>
        </div>
        <p>Oportunidades reais para caminhos diferentes.</p>
      </section>

      <section className="jobs-section" id="vagas">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEITAS PARA O SEU MOMENTO</p>
            <h2>Um leque de possibilidades.</h2>
            <p className="section-description">
              Explore as vagas abertas e encontre uma que tenha a ver com você.
            </p>
          </div>
          <span className="open-label">
            <span className="caption-dot" />
            {vagas.length} vagas abertas
          </span>
        </div>
        <MuralDeVagas vagas={vagas} />
      </section>

      <section className="closing-banner">
        <div className="closing-mark" aria-hidden="true">✳</div>
        <div>
          <p className="eyebrow">CADA CAMINHO É ÚNICO</p>
          <h2>Seu próximo passo pode ser hoje.</h2>
        </div>
        <Link className="button button-light" href="#vagas">
          Ver oportunidades <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
