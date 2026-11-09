/** Icônes illustrées de la page forMa (détourées depuis les maquettes, /public/images/forma-icons). */
export function ImgIcon({
  name,
  className,
  alt = '',
  ext = 'png',
}: {
  name: string;
  className?: string;
  alt?: string;
  /** « png » pour les icônes détourées des maquettes, « svg » pour celles redessinées. */
  ext?: 'png' | 'svg';
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/forma-icons/${name}.${ext}`}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
