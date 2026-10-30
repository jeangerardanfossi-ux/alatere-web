'use client';

import Link from '@/components/grommet/LocalizedLink';
import { useLang } from '@/components/grommet/lang';

const REPRO = 'https://www.repro-tableaux.com';
const REPRO_GMAPS = 'https://maps.app.goo.gl/j4NBQ2m7p529wLZ29';
const REPRO_FACEBOOK = 'https://www.facebook.com/reprotableaux';

/** Corps de l'article « Les 4 piliers d'une activité e-commerce qui dure » - bilingue FR/EN. */
export default function QuatrePiliersEcommerce() {
  const { lang } = useLang();
  return lang === 'en' ? <En /> : <Fr />;
}

function Fr() {
  return (
    <>
      <p>
        <strong>Une activité e-commerce tient sur quatre piliers : le produit, le site internet, la communication et le service client. Quand l&rsquo;un d&rsquo;eux faiblit, les trois autres en pâtissent.</strong>{' '}
        C&rsquo;est ce que m&rsquo;ont appris plus de vingt ans de vente en ligne, sur plusieurs marchés et dans plusieurs langues.
      </p>
      <p>
        Depuis <strong>septembre 2003</strong>, je dirige des boutiques d&rsquo;art en ligne qui fabriquent des reproductions de tableaux sur mesure :{' '}
        <a className="g-inline" href={REPRO} target="_blank" rel="noopener noreferrer">Repro-Tableaux.com</a>{' '}
        pour le marché francophone et <strong>Copia-di-Arte.com</strong>{' '}pour le marché italien, en partenariat de production avec l&rsquo;atelier Kunstkopie de Hambourg. À nos débuts, Google AdWords était encore un outil neuf, les réseaux sociaux n&rsquo;existaient pas (Facebook n&rsquo;ouvrira qu&rsquo;en 2004) et personne n&rsquo;imaginait qu&rsquo;une intelligence artificielle rédigerait un jour des réponses de recherche. Presque tous les outils ont changé depuis ; les quatre piliers sont restés les mêmes.
      </p>
      <p>
        Voici comment je les définis, avec ce qu&rsquo;en disent les avis publiés par nos clients depuis vingt ans.
      </p>

      <section>
        <h2>Pilier n°1 : le produit, de la confection à la livraison</h2>
        <p>
          <strong>Sans un bon produit, aucune stratégie ne tient. Et le produit comprend toute la chaîne : fabrication, emballage, livraison.</strong>
        </p>
        <p>
          Dans notre métier, cela veut dire une reproduction fidèle au centimètre près, des couleurs justes, un support et un encadrement solides, puis un emballage conçu pour qu&rsquo;une œuvre parfois très grande arrive intacte. L&rsquo;emballage n&rsquo;est pas accessoire : c&rsquo;est de lui que dépend l&rsquo;état de l&rsquo;œuvre à l&rsquo;arrivée.
        </p>
        <p>
          Sur les plateformes d&rsquo;avis, les deux thèmes qui reviennent le plus sont la <strong>qualité de la reproduction</strong>{' '}(fidélité des couleurs, rendu de l&rsquo;impression, travail des peintres pour les copies à l&rsquo;huile) et le <strong>soin de l&rsquo;emballage</strong>, souvent décrit comme « soigné » et « protecteur ». Plusieurs acheteurs racontent avoir reçu sans aucun dommage une commande volumineuse, parfois de plus de deux mètres. Le client juge le produit quand il ouvre le colis, pas quand il sort de l&rsquo;atelier.
        </p>
      </section>

      <section>
        <h2>Pilier n°2 : un site clair et conforme aux standards Google</h2>
        <p>
          <strong>Le site est le seul vendeur ouvert 24 h/24. S&rsquo;il est lent, confus ou mal référencé, le visiteur part avant d&rsquo;avoir vu le produit.</strong>
        </p>
        <p>
          Concrètement, trois exigences pèsent bien plus qu&rsquo;en 2003 :
        </p>
        <ul>
          <li>
            Des pages rapides et conformes : temps de chargement, Core Web Vitals, affichage mobile, données structurées (Schema.org). Google en a fait des critères de classement.
          </li>
          <li>
            Un parcours d&rsquo;achat évident : une fiche produit qui montre le rendu réel (l&rsquo;œuvre avec différents cadres, dans différents décors) et une commande sans friction.
          </li>
          <li>
            Le suivi de commande étape par étape, du paiement à l&rsquo;expédition.
          </li>
        </ul>
        <p>
          Les avis décrivent un site « clair » et « intuitif », où il est facile de commander, et citent souvent la possibilité de <strong>suivre la fabrication en temps réel</strong>{' '}depuis son compte. Pendant l&rsquo;attente, ce suivi rassure le client.
        </p>
      </section>

      <section>
        <h2>Pilier n°3 : la communication, mesurer et réajuster en permanence</h2>
        <p>
          <strong>En communication, on cible, on mesure le retour sur investissement, on réajuste et on teste chaque nouvel outil. Ce qui marchait il y a trois ans peut ne plus rien rapporter aujourd&rsquo;hui.</strong>{' '}
          C&rsquo;est le pilier qui change le plus vite.
        </p>
        <p>
          Quand j&rsquo;ai lancé ma première boutique en <strong>septembre 2003</strong>, on disposait d&rsquo;un Google AdWords balbutiant et de quelques annuaires. Pas de Facebook, pas d&rsquo;Instagram, pas de Pinterest, pas de retargeting, aucune IA. En vingt ans, il a fallu adopter tour à tour le référencement naturel moderne, les réseaux sociaux, la publicité programmatique, les flux produits dynamiques, l&rsquo;agrégation de données multi-canal et, désormais, l&rsquo;<strong>AI SEO</strong>{' '}: se faire citer par ChatGPT, Perplexity, Google AI Overviews ou Claude, en plus d&rsquo;être bien classé dans les liens bleus de Google.
        </p>
        <p>
          Une règle, elle, n&rsquo;a pas changé : <strong>aucun canal ne se pilote sans mesure</strong>. Chaque euro investi doit se retrouver dans un chiffre (coût par acquisition, taux de conversion, valeur vie client), et chaque campagne doit pouvoir être coupée, doublée ou réorientée selon ce qu&rsquo;elle rapporte vraiment. C&rsquo;est ce qui a permis à nos deux boutiques de passer vingt ans de changements techniques.
        </p>
      </section>

      <section>
        <h2>Pilier n°4 : le service client, avant et après la commande</h2>
        <p>
          <strong>Le service client intervient avant, pendant et après l&rsquo;achat. Avant, il répond aux questions qui retiennent la commande ; après, il règle les incidents.</strong>{' '}
          Sur des produits fabriqués à la demande, où rien n&rsquo;est standard, c&rsquo;est souvent lui qui fait revenir un client.
        </p>
        <p>
          Un conseil avant la commande évite une erreur de support ou de format. Des nouvelles pendant la fabrication rassurent. Et quand un problème survient (cela arrive, aucune fabrication sur mesure n&rsquo;est infaillible), la façon de le régler compte plus que l&rsquo;incident.
        </p>
        <p>
          C&rsquo;est le pilier dont nos avis parlent le plus. Les clients y citent un service <strong>réactif</strong>, un suivi « à chaque étape de la confection » et la <strong>prise en charge des réclamations</strong>{' '}: plusieurs racontent un support qui ne convenait pas, un dossier repris et une solution trouvée. Une phrase revient souvent : « on peut leur faire confiance ».
        </p>
      </section>

      <section>
        <h2>Les chiffres : 20 ans d&rsquo;avis vérifiés</h2>
        <p>
          Voici les notes publiques de Repro-Tableaux.com sur les plateformes d&rsquo;avis indépendantes, relevées au moment de la rédaction (juillet 2026) :
        </p>
        <table>
          <thead>
            <tr>
              <th>Indicateur (Repro-Tableaux.com)</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Note Trusted Shops</td>
              <td><strong>4,93 / 5</strong>{' '}sur près de <strong>600 avis</strong>{' '}vérifiés</td>
            </tr>
            <tr>
              <td>Certification Trusted Shops</td>
              <td>Certifié depuis le <strong>27 novembre 2013</strong>{' '}(plus de 10 ans)</td>
            </tr>
            <tr>
              <td>Note Trustpilot</td>
              <td><strong>4 étoiles</strong>{' '}sur <strong>plus de 370 avis</strong></td>
            </tr>
            <tr>
              <td>Avis Google (<a className="g-inline" href={REPRO_GMAPS} target="_blank" rel="noopener noreferrer">fiche Repro-tableaux.FR, Antibes</a>)</td>
              <td><strong>4,7 / 5</strong>{' '}sur <strong>88 avis</strong></td>
            </tr>
            <tr>
              <td>Recommandations <a className="g-inline" href={REPRO_FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a></td>
              <td>Recommandé par <strong>92 %</strong>{' '}(<strong>63 avis</strong>)</td>
            </tr>
            <tr>
              <td>Indice de confiance ScamDoc</td>
              <td><strong>97 %</strong>{' '}(« excellent »)</td>
            </tr>
          </tbody>
        </table>
        <p>
          Sur Trusted Shops comme sur{' '}
          <a className="g-inline" href={REPRO_GMAPS} target="_blank" rel="noopener noreferrer">Google</a>{' '}
          ou{' '}
          <a className="g-inline" href={REPRO_FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
          , les points forts cités par les clients recouvrent presque exactement les quatre piliers : <strong>qualité de la reproduction</strong>{' '}(pilier produit), <strong>site clair et suivi de commande</strong>{' '}(pilier site), <strong>rapport qualité-prix et fidélité</strong>{' '}(fruit d&rsquo;une communication bien ciblée) et <strong>service client réactif</strong>{' '}(pilier service). Sur Facebook, les recommandations évoquent une « très belle copie » à l&rsquo;huile, des « échanges parfaits » et un « envoi rapide et parfaitement sécurisé ». Sur Google, les mots les plus fréquents des avis sont « reproduction », « commande », « livraison » et « emballage ».
        </p>
      </section>

      <section>
        <h2>Foire aux questions</h2>

        <h3>Quels sont les 4 piliers d&rsquo;une activité e-commerce ?</h3>
        <p>
          Une activité e-commerce durable repose sur quatre piliers : <strong>le produit</strong>{' '}(qualité de la confection à la livraison, emballage compris), <strong>le site internet</strong>{' '}(navigation, performance, conformité aux standards Google), <strong>la communication</strong>{' '}(ciblage, mesure du ROI, réajustement permanent) et <strong>le service client</strong>{' '}(satisfaction avant et après la commande). Ils sont interdépendants : négliger l&rsquo;un affaiblit les trois autres.
        </p>

        <h3>Par quel pilier faut-il commencer quand on lance une boutique en ligne ?</h3>
        <p>
          Par le produit. Un article irréprochable, bien emballé et livré dans les délais est la condition de base : sans lui, ni la meilleure publicité ni le meilleur service client ne suffisent à fidéliser. Une fois le produit maîtrisé, on solidifie le site, puis on active la communication, en gardant le service client présent à chaque étape.
        </p>

        <h3>Le e-commerce a-t-il vraiment changé depuis les années 2000 ?</h3>
        <p>
          Les outils, oui, radicalement ; les fondamentaux, non. En 2003, il n&rsquo;existait ni réseaux sociaux, ni retargeting, ni IA, et Google AdWords démarrait tout juste. Aujourd&rsquo;hui s&rsquo;ajoutent l&rsquo;AI SEO, la publicité programmatique et l&rsquo;analyse de données en temps réel. Les quatre piliers, eux, sont restés identiques.
        </p>

        <h3>Comment l&rsquo;intelligence artificielle transforme-t-elle le e-commerce en 2026 ?</h3>
        <p>
          L&rsquo;IA agit surtout sur le pilier communication : elle déplace l&rsquo;enjeu du référencement classique vers l&rsquo;<strong>AI SEO</strong>, c&rsquo;est-à-dire être cité comme source dans les réponses de ChatGPT, Perplexity, Google AI Overviews ou Claude. Elle transforme aussi la relation client (assistance, recommandations) et la production de contenu. Mais elle ne remplace pas la qualité produit ni un service client humain.
        </p>

        <h3>Pourquoi le service client est-il un pilier et pas un simple « détail » ?</h3>
        <p>
          Parce qu&rsquo;il agit avant la vente (lever les doutes, conseiller sur le bon support ou format) autant qu&rsquo;après (traiter un incident). Sur des produits fabriqués sur mesure, c&rsquo;est souvent le service client qui transforme une réclamation en preuve de fiabilité, et un acheteur ponctuel en client fidèle.
        </p>
      </section>

      <section>
        <h2>Pour aller plus loin</h2>
        <p>
          Je transmets cette expérience dans les{' '}
          <Link className="g-inline" href="/alatere-forma">formations d&rsquo;Alatere forMa</Link>{' '}
          en e-commerce, webmarketing, communication digitale et intelligence artificielle, et le pôle{' '}
          <Link className="g-inline" href="/alatere-ecom">Alatere ecoM</Link>{' '}
          la met en pratique chaque jour.
        </p>
      </section>
    </>
  );
}

function En() {
  return (
    <>
      <p>
        <strong>An e-commerce business stands on four pillars: the product, the website, marketing and customer service. When one of them weakens, the other three suffer.</strong>{' '}
        That is what more than twenty years of selling online, across several markets and languages, have taught me.
      </p>
      <p>
        Since <strong>September 2003</strong>{' '}I have been running online art shops that produce made-to-measure reproductions of paintings:{' '}
        <a className="g-inline" href={REPRO} target="_blank" rel="noopener noreferrer">Repro-Tableaux.com</a>{' '}
        for the French-speaking market and <strong>Copia-di-Arte.com</strong>{' '}for the Italian market, in a production partnership with the Kunstkopie workshop in Hamburg. When we started, Google AdWords was still a new tool, social networks did not exist (Facebook would only open in 2004) and nobody imagined that an artificial intelligence would one day write search answers. Almost every tool has changed since; the four pillars have stayed the same.
      </p>
      <p>
        Here is how I define them, along with what our customers have said about them in reviews over the past twenty years.
      </p>

      <section>
        <h2>Pillar no. 1: the product, from crafting to delivery</h2>
        <p>
          <strong>Without a good product, no strategy holds. And the product covers the whole chain: manufacturing, packaging, delivery.</strong>
        </p>
        <p>
          In our trade, that means a reproduction faithful to the centimetre, accurate colours, a sturdy medium and frame, then packaging designed so that a sometimes very large artwork arrives intact. Packaging is not an afterthought: it decides the condition the artwork arrives in.
        </p>
        <p>
          On review platforms, the two themes that come up most are the <strong>quality of the reproduction</strong>{' '}(colour fidelity, print rendering, the painters&rsquo; work on oil copies) and the <strong>care taken with packaging</strong>, often described as &ldquo;careful&rdquo; and &ldquo;protective&rdquo;. Several buyers describe receiving a bulky order, sometimes over two metres, without the slightest damage. Customers judge the product when they open the parcel, not when it leaves the workshop.
        </p>
      </section>

      <section>
        <h2>Pillar no. 2: a clear website that meets Google standards</h2>
        <p>
          <strong>The website is the only salesperson open 24/7. If it is slow, confusing or poorly ranked, visitors leave before they have seen the product.</strong>
        </p>
        <p>
          In practice, three requirements matter far more than they did in 2003:
        </p>
        <ul>
          <li>
            Fast, compliant pages: loading times, Core Web Vitals, mobile display, structured data (Schema.org). Google uses them as ranking criteria.
          </li>
          <li>
            An obvious purchase path: a product page that shows the real result (the artwork with different frames, in different settings) and a friction-free checkout.
          </li>
          <li>
            Step-by-step order tracking, from payment to dispatch.
          </li>
        </ul>
        <p>
          Reviews describe a &ldquo;clear&rdquo; and &ldquo;intuitive&rdquo; site that makes ordering easy, and often mention being able to <strong>follow production in real time</strong>{' '}from your account. While customers wait, that tracking reassures them.
        </p>
      </section>

      <section>
        <h2>Pillar no. 3: marketing, measuring and readjusting constantly</h2>
        <p>
          <strong>In marketing, you target, measure return on investment, readjust and test every new tool. What worked three years ago may bring in nothing today.</strong>{' '}
          It is the pillar that changes fastest.
        </p>
        <p>
          When I launched my first shop in <strong>September 2003</strong>, we had a fledgling Google AdWords and a few directories. No Facebook, no Instagram, no Pinterest, no retargeting, no AI. Over twenty years we have had to adopt, in turn, modern search optimisation, social networks, programmatic advertising, dynamic product feeds, multi-channel data aggregation and now <strong>AI SEO</strong>: getting cited by ChatGPT, Perplexity, Google AI Overviews or Claude, as well as ranking well in Google&rsquo;s blue links.
        </p>
        <p>
          One rule has not changed: <strong>no channel can be steered without measurement</strong>. Every euro invested must show up in a figure (cost per acquisition, conversion rate, customer lifetime value), and every campaign must be cut, doubled or redirected according to what it actually brings in. That is how our two shops have come through twenty years of technical change.
        </p>
      </section>

      <section>
        <h2>Pillar no. 4: customer service, before and after the order</h2>
        <p>
          <strong>Customer service works before, during and after the purchase. Before, it answers the questions that hold up an order; after, it resolves incidents.</strong>{' '}
          With made-to-order products, where nothing is standard, it is often what brings a customer back.
        </p>
        <p>
          Advice before ordering avoids a mistake in medium or format. Updates during production reassure. And when a problem arises (it happens, no made-to-measure production is infallible), the way it is handled matters more than the incident itself.
        </p>
        <p>
          It is the pillar our reviews mention most. Customers cite a <strong>responsive</strong>{' '}service, updates &ldquo;at every stage of production&rdquo; and the <strong>handling of complaints</strong>: several describe an unsuitable medium, a case taken back in hand and a solution found. One phrase keeps coming back: &ldquo;you can trust them&rdquo;.
        </p>
      </section>

      <section>
        <h2>The figures: 20 years of verified reviews</h2>
        <p>
          Here are Repro-Tableaux.com&rsquo;s public ratings on independent review platforms at the time of writing (July 2026):
        </p>
        <table>
          <thead>
            <tr>
              <th>Indicator (Repro-Tableaux.com)</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trusted Shops rating</td>
              <td><strong>4.93 / 5</strong>{' '}across nearly <strong>600 verified reviews</strong></td>
            </tr>
            <tr>
              <td>Trusted Shops certification</td>
              <td>Certified since <strong>27 November 2013</strong>{' '}(more than 10 years)</td>
            </tr>
            <tr>
              <td>Trustpilot rating</td>
              <td><strong>4 stars</strong>{' '}across <strong>more than 370 reviews</strong></td>
            </tr>
            <tr>
              <td>Google reviews (<a className="g-inline" href={REPRO_GMAPS} target="_blank" rel="noopener noreferrer">Repro-tableaux.FR listing, Antibes</a>)</td>
              <td><strong>4.7 / 5</strong>{' '}across <strong>88 reviews</strong></td>
            </tr>
            <tr>
              <td><a className="g-inline" href={REPRO_FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>{' '}recommendations</td>
              <td>Recommended by <strong>92%</strong>{' '}(<strong>63 reviews</strong>)</td>
            </tr>
            <tr>
              <td>ScamDoc trust score</td>
              <td><strong>97%</strong>{' '}(&ldquo;excellent&rdquo;)</td>
            </tr>
          </tbody>
        </table>
        <p>
          On Trusted Shops as well as on{' '}
          <a className="g-inline" href={REPRO_GMAPS} target="_blank" rel="noopener noreferrer">Google</a>{' '}
          or{' '}
          <a className="g-inline" href={REPRO_FACEBOOK} target="_blank" rel="noopener noreferrer">Facebook</a>
          , the strengths customers cite map almost exactly onto the four pillars: <strong>quality of the reproduction</strong>{' '}(product pillar), <strong>clear site and order tracking</strong>{' '}(website pillar), <strong>value for money and loyalty</strong>{' '}(the result of well-targeted marketing) and <strong>responsive customer service</strong>{' '}(service pillar). On Facebook, recommendations mention a &ldquo;beautiful copy&rdquo; in oils, &ldquo;perfect exchanges&rdquo; and a &ldquo;fast and perfectly secure shipment&rdquo;. On Google, the most frequent words in reviews are &ldquo;reproduction&rdquo;, &ldquo;order&rdquo;, &ldquo;delivery&rdquo; and &ldquo;packaging&rdquo;.
        </p>
      </section>

      <section>
        <h2>Frequently asked questions</h2>

        <h3>What are the 4 pillars of an e-commerce business?</h3>
        <p>
          A lasting e-commerce business rests on four pillars: <strong>the product</strong>{' '}(quality from crafting to delivery, packaging included), <strong>the website</strong>{' '}(navigation, performance, compliance with Google standards), <strong>marketing</strong>{' '}(targeting, ROI measurement, constant readjustment) and <strong>customer service</strong>{' '}(satisfaction before and after the order). They are interdependent: neglecting one weakens the other three.
        </p>

        <h3>Which pillar should you start with when launching an online shop?</h3>
        <p>
          The product. A flawless item, well packaged and delivered on time, is the baseline: without it, neither the best advertising nor the best customer service is enough to build loyalty. Once the product is mastered, strengthen the website, then activate marketing, keeping customer service present at every step.
        </p>

        <h3>Has e-commerce really changed since the 2000s?</h3>
        <p>
          In its tools, yes, radically; in its fundamentals, no. In 2003 there were no social networks, no retargeting, no AI, and Google AdWords was just getting started. Today AI SEO, programmatic advertising and real-time data analysis have been added. The four pillars, though, have stayed the same.
        </p>

        <h3>How is artificial intelligence transforming e-commerce in 2026?</h3>
        <p>
          AI mainly affects the marketing pillar: it shifts the focus from classic search rankings to <strong>AI SEO</strong>, meaning being cited as a source in the answers of ChatGPT, Perplexity, Google AI Overviews or Claude. It also transforms customer relations (assistance, recommendations) and content production. But it does not replace product quality or human customer service.
        </p>

        <h3>Why is customer service a pillar and not just a &ldquo;detail&rdquo;?</h3>
        <p>
          Because it acts before the sale (clearing up doubts, advising on the right medium or format) as much as after (handling an incident). With made-to-order products, it is often customer service that turns a complaint into proof of reliability, and a one-off buyer into a loyal customer.
        </p>
      </section>

      <section>
        <h2>Going further</h2>
        <p>
          I pass this experience on in the{' '}
          <Link className="g-inline" href="/alatere-forma">Alatere forMa training courses</Link>{' '}
          in e-commerce, web marketing, digital communication and artificial intelligence, and the{' '}
          <Link className="g-inline" href="/alatere-ecom">Alatere ecoM</Link>{' '}
          division puts it into practice every day.
        </p>
      </section>
    </>
  );
}
