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
