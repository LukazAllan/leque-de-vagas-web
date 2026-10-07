export default function Loading() {
  return ( //Esqueleto do site (Parte não renderizada que mostrará como ficará após carregamento)
    <ul className="lista">
      {[1, 2, 3, 4].map((n) => (
        <li key={n} className="skeleton" />
      ))}
    </ul>
  );
}