'use client';

/**
 * Page « Salle de réunion à Antibes » (FR uniquement) - plan SEO S47.
 * Répond à « salle de réunion Antibes » / « location salle de réunion Antibes ».
 * Seule la grande salle (6 personnes) est proposée à la location ponctuelle.
 * Tarifs identiques à coWo, Bureaux et lib/faq.ts : les modifier partout.
 * Réservation par téléphone uniquement (choix du 16/11/2026).
 */

import Link from '@/components/grommet/LocalizedLink';
import { LangProvider } from '@/components/grommet/lang';
import Header from '@/components/grommet/Header';
import Footer from '@/components/grommet/Footer';
import { ImageSlot } from '@/components/grommet/icons';
import { ImgIcon } from '@/components/grommet/ImgIcon';
import { Email } from '@/components/grommet/Email';
import { faqSalleReunionAntibes, SALLE_TITLE } from '@/lib/faq-salle-reunion-antibes';

const TITLE = { fr: SALLE_TITLE, en: SALLE_TITLE };
const PHONE = 'tel:+33761564556';

const ACCENT = {
  '--accent': '#b86137',
  '--accent-dark': '#9a4d26',
  '--accent-soft': '#f7e7dc',
} as React.CSSProperties;

export default function SalleReunionAntibesPage() {
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
  return (
    <>
      <main id="top">
        {/* HERO */}
        <section className="ap-hero">
          <div>
            <div className="ap-breadcrumb">
              <Link href="/">Accueil</Link> <span>›</span>{' '}
              <Link href="/alatere-cowo">Alatere coWo</Link> <span>›</span>{' '}
              <span>Salle de réunion à Antibes</span>
            </div>
            <span className="g-label">
              <span className="g-tag g-tag--clay">Location de salle · Antibes centre</span>
            </span>
            <h1 className="g-h1 ap-hero__h1" style={{ marginTop: 14 }}>
              Salle de réunion à Antibes, équipée pour 6 personnes
            </h1>
            <p className="g-lead">
              Pour une réunion d&rsquo;équipe, un rendez-vous client ou une formation en petit
              groupe, nous louons notre grande salle de réunion dans l&rsquo;immeuble La Caravelle,
              au 9 boulevard Albert 1er, en plein centre d&rsquo;Antibes. Écran mural, climatisation
              et café sont compris.
            </p>
            <div className="ap-hero__cta">
              <a href={PHONE} className="g-btn ap-btn g-btn--lg">
                Réserver au 07 61 56 45 56 <span className="g-arrow">→</span>
              </a>
              <a href="#tarifs" className="g-btn g-btn--secondary g-btn--lg">
                Voir les tarifs
              </a>
            </div>
          </div>
          <aside className="ap-aside">
            <span className="g-label">En bref</span>
            <div className="ap-statgrid">
              <div className="ap-stat">
                <strong>6</strong>
                <span>personnes</span>
              </div>
              <div className="ap-stat">
                <strong>80 €</strong>
                <span>de 16 h à 20 h, TTC</span>
              </div>
              <div className="ap-stat">
                <strong>180 €</strong>
                <span>la journée, TTC</span>
              </div>
              <div className="ap-stat">
                <strong>Café</strong>
                <span>compris</span>
              </div>
            </div>
          </aside>
        </section>

        {/* ÉQUIPEMENTS */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">Équipements</span>
            </span>
            <h2 className="g-h2">Une salle prête à l&rsquo;emploi</h2>
            <p>
              La table ovale se reconfigure selon votre format : réunion autour d&rsquo;une table,
              atelier en petits groupes ou présentation face à l&rsquo;écran.
            </p>
          </div>
          <div className="ap-grid">
            <div className="ap-card">
              <div className="ap-card__ic ap-card__ic--color">
                <ImgIcon name="reunion" ext="svg" dir="cowo-icons" />
              </div>
              <h3>6 places</h3>
              <p>Une table ovale modulable et 6 chaises.</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic ap-card__ic--color">
                <ImgIcon name="wifi" ext="svg" dir="cowo-icons" />
              </div>
              <h3>Écrans et Wi-Fi</h3>
              <p>Un écran digital mural, 6 écrans de bureau (un par participant) et le Wi-Fi pour vos visioconférences.</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic ap-card__ic--color">
                <ImgIcon name="clim" ext="svg" dir="cowo-icons" />
              </div>
              <h3>Climatisation</h3>
              <p>La salle est climatisée.</p>
            </div>
            <div className="ap-card">
              <div className="ap-card__ic ap-card__ic--color">
                <ImgIcon name="cafe" ext="svg" dir="cowo-icons" />
              </div>
              <h3>Cuisine et café</h3>
              <p>Café compris, et accès à la cuisine et à la salle de bain pendant la location.</p>
            </div>
          </div>
        </section>

        {/* TARIFS */}
        <section className="ap-section--alt" id="tarifs">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--clay">Tarifs</span>
              </span>
              <h2 className="g-h2">Horaires et tarifs</h2>
              <p>
                Tarifs TTC, équipements et café compris. Pas de location à l&rsquo;heure. La salle
                n&rsquo;est pas disponible le dimanche.
              </p>
            </div>
            <div className="ap-grid">
              <div className="ap-card">
                <div className="ap-card__ic ap-card__ic--color">
                  <ImgIcon name="horaires" ext="svg" dir="cowo-icons" />
                </div>
                <h3>Fin de journée · 80 €</h3>
                <p>Du lundi au vendredi, de 16 h à 20 h.</p>
              </div>
              <div className="ap-card">
                <div className="ap-card__ic ap-card__ic--color">
                  <ImgIcon name="agenda" ext="svg" dir="cowo-icons" />
                </div>
                <h3>Journée · 180 €</h3>
                <p>Du lundi au vendredi, de 8 h 30 à 20 h.</p>
              </div>
              <div className="ap-card">
                <div className="ap-card__ic ap-card__ic--color">
                  <ImgIcon name="agenda-check" ext="svg" dir="cowo-icons" />
                </div>
                <h3>Samedi · 234 €</h3>
                <p>Sur demande, la journée. Tarif de la journée majoré de 30 %.</p>
              </div>
            </div>
          </div>
        </section>

        {/* USAGES */}
        <section className="ap-section">
          <div className="ap-head">
            <span className="g-label">
              <span className="g-tag g-tag--clay">Usages</span>
            </span>
            <h2 className="g-h2">Pour quels usages</h2>
          </div>
          <ul className="g-lead" style={{ paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Réunions d&rsquo;équipe et comités de direction</li>
            <li>Rendez-vous clients et entretiens de recrutement</li>
            <li>Formations et ateliers en petit groupe</li>
            <li>Visioconférences, avec l&rsquo;écran mural et le Wi-Fi</li>
          </ul>
          <p className="ap-hero__note" style={{ marginTop: 18 }}>
            Pour un poste de travail au quotidien, voyez aussi{' '}
            <Link className="g-inline" href="/alatere-cowo">
              notre espace de coworking
            </Link>{' '}
            et{' '}
            <Link className="g-inline" href="/bureaux-a-louer-antibes">
              nos bureaux à louer à Antibes
            </Link>
            .
          </p>
        </section>

        {/* EMPLACEMENT */}
        <section className="ap-section--alt">
          <div className="ap-inner">
            <div className="ap-head">
              <span className="g-label">
                <span className="g-tag g-tag--clay">Emplacement</span>
              </span>
              <h2 className="g-h2">Une salle en plein centre d&rsquo;Antibes</h2>
            </div>
            <div className="ap-gallery ap-gallery--2 ap-gallery--tall">
              <ImageSlot cap="La salle de réunion et son écran mural" src="/photos/salle-reunion-vue-ensemble.webp" />
              <ImageSlot cap="La table ovale et ses 6 places" src="/photos/salle-reunion-table.webp" />
            </div>
            <div className="ap-rows" style={{ marginTop: 24 }}>
              <div>
                <ImgIcon name="localisation" ext="svg" dir="cowo-icons" className="ap-rows__ic" />
                <span>
                  <strong>Adresse : </strong>9 boulevard Albert 1er, 06600 Antibes, immeuble La Caravelle
                </span>
              </div>
              <div>
                <ImgIcon name="acces" ext="svg" dir="cowo-icons" className="ap-rows__ic" />
                <span>
                  <strong>Accès : </strong>place de Gaulle à 100 m, gare SNCF à 700 m (10 minutes à
                  pied), gare routière à 200 m
                </span>
              </div>
              <div>
                <ImgIcon name="telephone" ext="svg" dir="cowo-icons" className="ap-rows__ic" />
                <span>
                  <strong>Réservation : </strong>
                  <a href={PHONE}>07 61 56 45 56</a>
                </span>
              </div>
              <div>
                <ImgIcon name="email" ext="svg" dir="cowo-icons" className="ap-rows__ic" />
                <span>
                  <strong>E-mail : </strong>
                  <Email user="coworking" />
                </span>
              </div>
            </div>
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
            {faqSalleReunionAntibes.map((f, i) => (
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
            <h2>Réservez la salle par téléphone</h2>
            <p>Indiquez la date et la formule : nous confirmons la disponibilité et vous envoyons le devis.</p>
          </div>
          <div className="ap-cta__btns">
            <a href={PHONE} className="g-btn g-btn--light g-btn--lg">
              07 61 56 45 56 <span className="g-arrow">→</span>
            </a>
            <Link href="/alatere-cowo" className="g-btn g-btn--ghost-light g-btn--lg">
              Toutes les offres coWo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
