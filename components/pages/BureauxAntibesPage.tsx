'use client';

/**
 * Page « Bureaux à louer à Antibes » (FR uniquement) - plan SEO S46.
 * Répond à l'intention « louer un bureau à Antibes » (location bureau(x) antibes,
 * louer bureau antibes, locaux à louer antibes) et renvoie vers /alatere-cowo pour réserver.
 * Mêmes tarifs que la page coWo : les modifier aux deux endroits.
 */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider, useReservations } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { Icon, ImageSlot } from '@/components/grommet/icons';
import { Email } from '@/components/grommet/Email';
import { faqBureauxAntibes, BUREAUX_TITLE } from '@/lib/faq-bureaux-antibes';

const TITLE = { fr: BUREAUX_TITLE, en: BUREAUX_TITLE };

const ACCENT = {
  '--accent': '#b86137',
  '--accent-dark': '#9a4d26',
  '--accent-soft': '#f7e7dc',
} as React.CSSProperties;

export default function BureauxAntibesPage() {
  return (
    <div className="g-home" style={ACCENT}>
      <LangProvider titles={TITLE}>
        <Header active="cowo" frOnly />
        <Body />
        <Footer />
      </LangProvider>
    </div>
  );
}

function Body() {
  const resa = useReservations();
  return (
    <>
      <main id="top">
        {/* HERO */}
        <section className="ap-hero">
          <div>
            <div className="ap-breadcrumb">
              <Link href="/">Accueil</Link> <span>›</span>{' '}
              <Link href="/alatere-cowo">Alatere coWo</Link> <span>›</span>{' '}
              <span>Bureaux à louer à Antibes</span>
            </div>
            <span className="g-label">
              <span className="g-tag g-tag--clay">Location de bureau · Antibes centre</span>
            </span>
            <h1 className="g-h1 ap-hero__h1" style={{ marginTop: 14 }}>
              Bureau à louer à Antibes, à la journée ou au mois
            </h1>
            <p className="g-lead">
              Vous cherchez un bureau à Antibes sans signer de bail commercial ? Alatere coWo loue
              des postes de travail et des salles dans l&rsquo;immeuble La Caravelle, un immeuble Art
              déco méditerranéen au 9 boulevard Albert 1er. Vous venez avec votre ordinateur : la
              fibre, le café et la cuisine équipée sont compris.
            </p>
            <div className="ap-hero__cta">
              <a href={resa('/visite')} target="_blank" rel="noopener noreferrer" className="g-btn ap-btn g-btn--lg">
                Planifier une visite <span className="g-arrow">→</span>
              </a>
              <a href="#formules" className="g-btn g-btn--secondary g-btn--lg">
                Voir les formules
              </a>
            </div>
            <p className="ap-hero__note">Ou appelez-nous : 07 61 56 45 56</p>
          </div>
          <aside className="ap-aside">
            <span className="g-label">En bref</span>
            <div className="ap-statgrid">
              <div className="ap-stat">
                <strong>30 €</strong>
                <span>la journée, TTC</span>
              </div>
              <div className="ap-stat">
                <strong>360 €</strong>
                <span>le mois, TTC</span>
              </div>
              <div className="ap-stat">
                <strong>0</strong>
                <span>bail ni dépôt de garantie</span>
              </div>
              <div className="ap-stat">
                <strong>24/7</strong>
                <span>accès pour les abonnés</span>
              </div>
            </div>
          </aside>
        </section>

        {/* FORMULES */}
        <section className="ap-section--alt" id="formules">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--clay">Formules</span>
              </span>
              <h2 className="g-h2">Les formules de location de bureau</h2>
              <p>Tarifs TTC, sans frais de dossier ni engagement de durée pour le poste de travail.</p>
            </div>
            <div className="ap-grid">
              <div className="ap-card">
                <div className="ap-card__ic">
                  <Icon name="calendar-days" />
                </div>
                <h3>Un poste à la journée · 30 €</h3>
                <p>
                  Une journée de travail au calme, un rendez-vous à Antibes, un professionnel de
                  passage. Du lundi au vendredi, de 9 h à 18 h, café compris.
                </p>
              </div>
              <div className="ap-card">
                <div className="ap-card__ic">
                  <Icon name="users-round" />
                </div>
                <h3>Un poste au mois · 360 €</h3>
                <p>
                  Votre bureau au quotidien, sans bail : accès illimité à l&rsquo;open-space, badge
                  d&rsquo;accès à l&rsquo;immeuble 24 h/24 et 7 j/7, tarifs préférentiels sur les
                  salles.
                </p>
              </div>
              <div className="ap-card">
                <div className="ap-card__ic">
                  <Icon name="map-pin" />
                </div>
                <h3>Un bureau privatif à l&rsquo;année</h3>
                <p>
                  Un bureau fermé pour une ou plusieurs personnes. Actuellement complet :{' '}
                  <Link className="g-inline" href="/contact?pole=cowo">
                    contactez-nous
                  </Link>{' '}
                  pour être prévenu de la prochaine disponibilité.
                </p>
              </div>
              <div className="ap-card">
                <div className="ap-card__ic">
                  <Icon name="snowflake" />
                </div>
                <h3>Une salle de réunion · 180 €</h3>
                <p>
                  Recevoir des clients, réunir une équipe, faire passer des entretiens : 180 € la
                  journée, ou 80 € après 16 h. Ouverte aux non-membres, sur réservation.
                </p>
              </div>
            </div>
            <p className="ap-hero__note" style={{ marginTop: 18 }}>
              <a href={resa('/reserver')} target="_blank" rel="noopener noreferrer">
                Réserver un poste ou une salle en ligne →
              </a>
            </p>
          </div>
        </section>

        {/* POURQUOI PAS UN BAIL */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">Sans bail</span>
            </span>
            <h2 className="g-h2">Pourquoi louer en coworking plutôt qu&rsquo;en bail commercial</h2>
            <p>
              Un bureau en location classique à Antibes, c&rsquo;est un loyer de plusieurs centaines
              d&rsquo;euros par mois, auquel s&rsquo;ajoutent les charges, l&rsquo;assurance,
              l&rsquo;abonnement internet, le mobilier et un bail de 3, 6 ou 9 ans, souvent avec un
              dépôt de garantie. Pour un indépendant ou une petite équipe dont l&rsquo;activité évolue,
              c&rsquo;est un engagement lourd.
            </p>
          </div>
          <div className="ap-grid">
            <div className="ap-card">
              <h3>Aucun bail</h3>
              <p>Vous payez à la journée ou au mois, sans dépôt de garantie.</p>
            </div>
            <div className="ap-card">
              <h3>Tout est compris</h3>
              <p>Fibre et Wi-Fi sécurisé, café à volonté, cuisine équipée, salles climatisées.</p>
            </div>
            <div className="ap-card">
              <h3>Vous ajustez</h3>
              <p>Passez du pass journée à l&rsquo;abonnement, réservez une salle quand il le faut.</p>
            </div>
            <div className="ap-card">
              <h3>Vous n&rsquo;êtes pas seul</h3>
              <p>Une communauté d&rsquo;entrepreneurs et une rencontre business chaque mois.</p>
            </div>
          </div>
          <p className="ap-hero__note" style={{ marginTop: 18 }}>
            Pour comparer les coûts d&rsquo;un bureau, de la domiciliation et du coworking, lisez{' '}
            <Link className="g-inline" href="/blog/domiciliation-ou-bureau-antibes">
              Domiciliation ou location de bureau : que choisir à Antibes ?
            </Link>
          </p>
        </section>

        {/* EMPLACEMENT */}
        <section className="ap-section--alt">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--clay">Emplacement</span>
              </span>
              <h2 className="g-h2">Un bureau en plein centre d&rsquo;Antibes</h2>
              <p>
                L&rsquo;espace compte 15 postes répartis dans 5 salles climatisées. On vient y
                travailler au calme, à deux pas du port Vauban.
              </p>
            </div>
            <div className="ap-gallery">
              <ImageSlot cap="Bureau privatif" src="/photos/cowo-bureau.jpg" objectPosition="50% 5%" />
              <ImageSlot cap="Salle de réunion" src="/photos/cowo-salle.jpg" />
              <ImageSlot cap="Open-space" src="/photos/cowo.webp" />
              <ImageSlot cap="Immeuble La Caravelle" src="/photos/cowo-immeuble.jpg" objectPosition="50% 0%" />
            </div>
            <div className="ap-rows" style={{ marginTop: 24 }}>
              <div>
                <Icon name="map-pin" />
                <span>
                  <strong>Adresse : </strong>9 boulevard Albert 1er, 06600 Antibes, immeuble La Caravelle
                </span>
              </div>
              <div>
                <Icon name="navigation" />
                <span>
                  <strong>Accès : </strong>place de Gaulle à 100 m, gare SNCF à 700 m (10 minutes à
                  pied), gare routière à 200 m, Sophia Antipolis à environ 20 minutes en voiture
                </span>
              </div>
              <div>
                <Icon name="phone" />
                <span>
                  <strong>Téléphone : </strong>07 61 56 45 56
                </span>
              </div>
              <div>
                <Icon name="mail" />
                <span>
                  <strong>E-mail : </strong>
                  <Email user="coworking" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DOMICILIATION */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">Domiciliation</span>
            </span>
            <h2 className="g-h2">Une adresse pour votre entreprise, en plus du bureau</h2>
            <p>
              Vous pouvez installer le siège social de votre société à la même adresse. Alatere
              doMo, domiciliataire agréé par la préfecture, gère votre courrier et déclare votre
              domiciliation aux impôts et au greffe. Les membres du coworking bénéficient de
              conditions avantageuses.{' '}
              <Link className="g-inline" href="/alatere-domo">
                Découvrir la domiciliation à Antibes
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">FAQ</span>
            </span>
            <h2 className="g-h2">Questions fréquentes</h2>
          </div>
          <div className="ap-faq">
            {faqBureauxAntibes.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <div className="ap-ans">{f.a}</div>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="ap-cta" id="contact">
        <div className="ap-cta__in">
          <div>
            <h2>Venez voir les bureaux</h2>
            <p>Choisissez un créneau de visite en ligne. Le café est offert.</p>
          </div>
          <div className="ap-cta__btns">
            <a href={resa('/visite')} target="_blank" rel="noopener noreferrer" className="g-btn g-btn--light g-btn--lg">
              Planifier une visite <span className="g-arrow">→</span>
            </a>
            <Link href="/alatere-cowo" className="g-btn g-btn--ghost-light g-btn--lg">
              Toutes les offres coWo
            </Link>
            <Link href="/contact?pole=cowo" className="g-btn g-btn--ghost-light g-btn--lg">
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
