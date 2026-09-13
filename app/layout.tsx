import "./globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body className="min-h-full flex flex-col">
        <header>Leque de Vagas</header>
        {children}
        <footer>© 2026</footer>
      </body>
    </html>
  );
}
