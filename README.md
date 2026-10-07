# Leque de Vagas

**Um bom começo para o seu próximo passo.**

O Leque de Vagas é uma plataforma de oportunidades profissionais pensada para
deixar a busca mais simples e acolhedora — inclusive para quem está começando a
carreira. O projeto apresenta vagas por área, permite filtrar oportunidades e
exibe os detalhes de cada anúncio.

## Visão geral

- Página inicial responsiva com apresentação do projeto e resumo das vagas.
- Busca por título ou empresa.
- Filtros de vagas por área.
- Indicadores atualizados a partir dos dados disponíveis.
- Páginas de detalhe da vaga e de oportunidades por empresa.
- Navegação por páginas institucionais.

## Tecnologias

- [Next.js](https://nextjs.org/) 16 com App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4 e CSS global
- [ESLint](https://eslint.org/)

## Comece a usar

### Requisitos

- Node.js 20.9 ou superior
- npm

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd leque-de-vagas-web
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. As alterações
nos arquivos são refletidas automaticamente durante o desenvolvimento.

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor local de desenvolvimento. |
| `npm run lint` | Executa o ESLint no projeto. |
| `npm run build` | Gera a versão de produção. |
| `npm run start` | Inicia o servidor para servir a versão compilada. |

Para testar a versão de produção localmente:

```bash
npm run build
npm run start
```

## Rotas

| Caminho | Conteúdo |
| --- | --- |
| `/` | Página inicial e mural de vagas. |
| `/vagas` | Listagem de oportunidades. |
| `/vagas/[id]` | Detalhes de uma vaga. |
| `/empresa/[slug]` | Vagas associadas a uma empresa. |
| `/sobre` | Informações sobre o projeto e sua equipe. |
| `/contato` | Página de contato. |
| `/termos` | Termos de uso. |
| `/privacidade` | Política de privacidade. |

## Estrutura do projeto

```text
app/
  (institucional)/   Páginas institucionais e layout compartilhado
  empresa/[slug]/    Vagas de uma empresa
  vagas/             Listagem, detalhe e estados de carregamento/erro
components/          Cabeçalho, rodapé, filtros e componentes de vagas
data/                Dados de exemplo usados pela interface
lib/                 Tipos e funções de acesso a dados
```

### Dados de vagas

Os dados locais de exemplo ficam em [`data/vagas.ts`](./data/vagas.ts). Cada vaga
usa os campos `id`, `titulo`, `empresa`, `empresaSlug`, `area`, `senioridade`,
`local`, `aceitaIniciante` e `descricao`.

O módulo [`lib/api.ts`](./lib/api.ts) contém funções para buscar vagas e empresas
na fonte JSON configurada no próprio arquivo, com revalidação em cache. A
interface inicial e as páginas de vagas usam atualmente o conjunto local em
`data/vagas.ts`.

## Desenvolvimento

- Componentes reutilizáveis ficam em `components/`.
- Rotas e layouts são definidos pela estrutura de diretórios dentro de `app/`.
- Estilos compartilhados e responsivos ficam em `app/globals.css`.
- Ao adicionar ou alterar uma vaga de exemplo, atualize `data/vagas.ts`.
- Antes de enviar alterações, execute `npm run lint` e `npm run build`.

## Licença

Consulte o arquivo [`LICENSE`](./LICENSE) para os termos de uso e distribuição.
