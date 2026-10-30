/**
 * Nom de marque coloré lettre par lettre (couleurs du logo Alatere), identique
 * au bento de l'accueil. Ex. : « Alatere doMo ».
 */
export type PoleBrand = 'ecom' | 'forma' | 'domo' | 'cowo';

const BRAND: Record<PoleBrand, [string, string][]> = {
  ecom: [['e', 'lg-navy'], ['c', 'lg-teal'], ['o', 'lg-gold'], ['M', 'lg-clay']],
  forma: [['f', 'lg-gold'], ['o', 'lg-clay'], ['r', 'lg-navy'], ['M', 'lg-teal'], ['a', 'lg-green']],
  domo: [['d', 'lg-teal'], ['o', 'lg-teal'], ['M', 'lg-green'], ['o', 'lg-gold']],
  cowo: [['c', 'lg-gold'], ['o', 'lg-green'], ['W', 'lg-navy'], ['o', 'lg-clay']],
};

export const POLE_HREF: Record<PoleBrand, string> = {
  ecom: '/alatere-ecom',
  forma: '/alatere-forma',
  domo: '/alatere-domo',
  cowo: '/alatere-cowo',
};

/** Suffixe coloré seul (ex. « ecoM » avec les couleurs du logo), sans « Alatere ». */
export function BrandSuffix({ pole }: { pole: PoleBrand }) {
  return (
    <span className="g-subword">
      {BRAND[pole].map(([ch, c], i) => (
        <span key={i} className={c}>
          {ch}
        </span>
      ))}
    </span>
  );
}

export function BrandName({ pole }: { pole: PoleBrand }) {
  return (
    <>
      Alatere <BrandSuffix pole={pole} />
    </>
  );
}

/** Libellé affiché par la pastille (identique dans les deux langues). */
const SUFFIXE: Record<PoleBrand, string> = { ecom: 'ecoM', forma: 'forMa', domo: 'doMo', cowo: 'coWo' };

/** Dimensions natives des visuels de `public/marques/`. */
const PASTILLE: Record<PoleBrand, [number, number]> = {
  ecom: [269, 133], forma: [277, 133], domo: [271, 133], cowo: [266, 133],
};
const TITRE: Record<PoleBrand, [number, number]> = {
  ecom: [931, 149], forma: [955, 152], domo: [952, 157], cowo: [956, 149],
};

/**
 * Pastille de marque (menu et chips du héros). Le fichier est un stade plein :
 * les coins navy du JPEG d'origine sont retirés par le `border-radius` du CSS.
 */
export function BrandChip({ pole }: { pole: PoleBrand }) {
  const [w, h] = PASTILLE[pole];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="g-marque g-marque--pastille"
      src={`/marques/${pole}-pastille.webp`}
      alt={SUFFIXE[pole]}
      width={w}
      height={h}
      decoding="async"
    />
  );
}

/**
 * Titre de marque « Alatere xxxX » (cartes de l'accueil). Le visuel est sur
 * fond blanc : le CSS le fond dans le crème de la carte par `multiply`.
 */
export function BrandTitle({ pole }: { pole: PoleBrand }) {
  const [w, h] = TITRE[pole];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="g-marque g-marque--titre"
      src={`/marques/${pole}-titre.webp`}
      alt={`Alatere ${SUFFIXE[pole]}`}
      width={w}
      height={h}
      decoding="async"
    />
  );
}
