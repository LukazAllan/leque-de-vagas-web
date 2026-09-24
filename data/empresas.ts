export type Empresa = {
  slug: string;
  nome: string;
  sobre: string;
  site: string;
};

export const empresas: Empresa[] = [
  {
    slug: "technova-solutions",
    nome: "TechNova Solutions",
    sobre:
      "Empresa focada na criação de produtos digitais com interfaces " +
      "modernas e responsivas. Atua fortemente com o ecossistema React " +
      "e é conhecida por integrar profissionais juniores aos seus projetos.",
    site: "https://technova.exemplo.br",
  },
  {
    slug: "datamind-analytics",
    nome: "DataMind Analytics",
    sobre:
      "Consultoria especializada em transformar dados em insights estratégicos " +
      "para grandes negócios. Trabalha com tecnologias de ponta em SQL e " +
      "Python, adotando um modelo de trabalho 100% remoto para sua equipe.",
    site: "https://datamind.exemplo.br",
  },
  {
    slug: "growthlab-agency",
    nome: "GrowthLab Agency",
    sobre:
      "Agência de performance com sede no Rio de Janeiro. É especialista em " +
      "SEO, mídia paga e gestão de campanhas, destacando-se por seu programa " +
      "de estágio que forma novos talentos na área de marketing digital.",
    site: "https://growthlab.exemplo.br",
  },
  {
    slug: "cloudbridge-systems",
    nome: "CloudBridge Systems",
    sobre:
      "Empresa mineira referência em infraestrutura em nuvem e arquitetura " +
      "de microsserviços. Atende operações de alta escalabilidade utilizando " +
      "AWS e GCP, com forte cultura de DevOps e mentoria técnica.",
    site: "https://cloudbridge.exemplo.br",
  },
  {
    slug: "pixelcraft-studio",
    nome: "PixelCraft Studio",
    sobre:
      "Estúdio de design de produtos sediado em Curitiba. O foco do time é " +
      "construir experiências digitais centradas no usuário através de " +
      "pesquisas aprofundadas, prototipagem no Figma e integração com os devs.",
    site: "https://pixelcraft.exemplo.br",
  },
  {
    slug: "helpdesk-pro",
    nome: "HelpDesk Pro",
    sobre:
      "Fornecedora de soluções em suporte técnico e infraestrutura em " +
      "Campinas. Investe ativamente no treinamento da equipe de atendimento, " +
      "proporcionando oportunidades reais de crescimento na área de redes.",
    site: "https://helpdeskpro.exemplo.br",
  }
];