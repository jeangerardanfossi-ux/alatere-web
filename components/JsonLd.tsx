/**
 * Injecte une ou plusieurs données structurées JSON-LD (schema.org).
 *
 * `<` est échappé en `<` : recommandation du guide Next.js
 * (node_modules/next/dist/docs/01-app/02-guides/json-ld.md) pour qu'une chaîne
 * du payload ne puisse pas refermer la balise <script>.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}
