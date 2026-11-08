/** Icônes illustrées de la page forMa (PNG détourés depuis les maquettes, /public/images/forma-icons). */
export function ImgIcon({ name, className, alt = '' }: { name: string; className?: string; alt?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/images/forma-icons/${name}.png`} alt={alt} className={className} loading="lazy" decoding="async" />
  );
}
