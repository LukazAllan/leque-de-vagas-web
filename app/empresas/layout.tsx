export default function LayoutEmpresas({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="area-vagas">
      <p className="secao">Empresas</p>
      {children}
    </section>
  );
}