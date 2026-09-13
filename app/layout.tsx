import Rodape from "@/components/Rodape";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho"

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body className="min-h-full flex flex-col">
        <Cabecalho />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
