export type Vaga = {
  id: string;
  titulo: string;
  empresa: string;
  empresaSlug: string;
  area: string;
  senioridade: string;
  local: string;
  aceitaIniciante: boolean;
  descricao: string;
};

export const vagas: Vaga[] = [
  {
    "id": "1",
    "titulo": "Desenvolvedor Front-end Júnior",
    "empresa": "TechNova Solutions",
    "empresaSlug": "technova-solutions",
    "area": "Desenvolvimento",
    "senioridade": "Júnior",
    "local": "São Paulo, SP",
    "aceitaIniciante": true,
    "descricao": "Buscamos desenvolvedor front-end com conhecimentos em HTML, CSS e JavaScript para integrar nosso time de produtos digitais. Você trabalhará em projetos desafiadores com React e contribuirá para a evolução de interfaces modernas e responsivas."
  },
  {
    "id": "2",
    "titulo": "Analista de Dados Pleno",
    "empresa": "DataMind Analytics",
    "empresaSlug": "datamind-analytics",
    "area": "Dados",
    "senioridade": "Pleno",
    "local": "Remoto",
    "aceitaIniciante": false,
    "descricao": "Procuramos profissional com experiência em SQL, Python e ferramentas de BI para transformar dados em insights estratégicos. Você será responsável por construir dashboards, realizar análises exploratórias e apoiar decisões orientadas por dados."
  },
  {
    "id": "3",
    "titulo": "Estágio em Marketing Digital",
    "empresa": "GrowthLab Agency",
    "empresaSlug": "growthlab-agency",
    "area": "Marketing",
    "senioridade": "Estágio",
    "local": "Rio de Janeiro, RJ",
    "aceitaIniciante": true,
    "descricao": "Vaga de estágio para estudantes que desejam aprender sobre gestão de campanhas, SEO, mídia paga e análise de métricas. Você dará suporte ao time de performance na criação e otimização de anúncios online."
  },
  {
    "id": "4",
    "titulo": "Engenheiro de Software Sênior",
    "empresa": "CloudBridge Systems",
    "empresaSlug": "cloudbridge-systems",
    "area": "Desenvolvimento",
    "senioridade": "Sênior",
    "local": "Belo Horizonte, MG",
    "aceitaIniciante": false,
    "descricao": "Buscamos engenheiro sênior com sólida experiência em arquitetura de microsserviços, cloud computing (AWS/GCP) e boas práticas de DevOps. Você liderará decisões técnicas e mentorará desenvolvedores mais juniores."
  },
  {
    "id": "5",
    "titulo": "Designer UX/UI",
    "empresa": "PixelCraft Studio",
    "empresaSlug": "pixelcraft-studio",
    "area": "Design",
    "senioridade": "Pleno",
    "local": "Curitiba, PR",
    "aceitaIniciante": false,
    "descricao": "Procuramos designer com portfólio em UX/UI para criar experiências digitais centradas no usuário. Responsabilidades incluem pesquisa com usuários, prototipagem no Figma e colaboração com times de desenvolvimento."
  },
  {
    "id": "6",
    "titulo": "Assistente de Suporte Técnico",
    "empresa": "HelpDesk Pro",
    "empresaSlug": "helpdesk-pro",
    "area": "Suporte",
    "senioridade": "Júnior",
    "local": "Campinas, SP",
    "aceitaIniciante": true,
    "descricao": "Vaga para assistente de suporte com foco em atendimento ao cliente e resolução de chamados técnicos. Oferecemos treinamento completo e oportunidades de crescimento em infraestrutura e redes."
  }
]