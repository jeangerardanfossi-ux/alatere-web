/**
 * Icônes illustrées multicolores (palette #2b5f94 → #5d812e → #eaa93d).
 * `dir` choisit le jeu : « forma-icons » (détourées des maquettes forMa),
 * « cowo-icons », « domo-icons » et « ecom-icons » (redessinés en SVG, mêmes teintes).
 */
export function ImgIcon({
  name,
  className,
  alt = '',
  ext = 'png',
  dir = 'forma-icons',
}: {
  name: string;
  className?: string;
  alt?: string;
  /** « png » pour les icônes détourées des maquettes, « svg » pour celles redessinées. */
  ext?: 'png' | 'svg';
  /** Dossier du jeu d'icônes sous /public/images. */
  dir?: 'forma-icons' | 'cowo-icons' | 'domo-icons' | 'ecom-icons';
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${dir}/${name}.${ext}`}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}
