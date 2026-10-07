import Rodape from "@/components/Rodape";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leque de Vagas | Um bom começo para o seu próximo passo",
  description:
    "Encontre oportunidades de trabalho para diferentes momentos da sua carreira, inclusive vagas para quem está começando.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
