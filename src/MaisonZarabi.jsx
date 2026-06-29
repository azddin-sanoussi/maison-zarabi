import React, { useState } from "react";

// ---------------------------------------------------------------------------
// Maison Zarabi — landing page (noir et or)
// Single-file React component. No external CSS files.
// ---------------------------------------------------------------------------

const WHATSAPP_NUMBER = "212655541482";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ---------------------------------------------------------------------------
// Small reusable bits
// ---------------------------------------------------------------------------

function DiamondDivider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider-line" />
      <span className="divider-diamond">
        <svg width="14" height="14" viewBox="0 0 14 14">
          <rect
            x="2"
            y="2"
            width="10"
            height="10"
            transform="rotate(45 7 7)"
            fill="none"
            stroke="#c9a14a"
            strokeWidth="1.4"
          />
        </svg>
      </span>
      <span className="divider-line" />
    </div>
  );
}

function SectionEyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

// ---------------------------------------------------------------------------
// SVG icon set — drawn in the gold/beige palette, simple line-art
// ---------------------------------------------------------------------------

const icons = {
  tissage: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <path d="M6 10v28M14 10v28M22 10v28M30 10v28M38 10v28" stroke="#c9a14a" strokeWidth="1.4" />
      <path
        d="M2 16h44M2 24h44M2 32h44"
        stroke="#e9ddc8"
        strokeWidth="1.4"
        strokeDasharray="3 3"
        opacity="0.6"
      />
    </svg>
  ),
  laine: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <circle cx="24" cy="24" r="14" stroke="#c9a14a" strokeWidth="1.4" />
      <path
        d="M14 24c4-6 6 6 10 0s6 6 10 0"
        stroke="#e9ddc8"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path
        d="M16 18c3-4 5 4 8 0s5 4 8 0"
        stroke="#e9ddc8"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </svg>
  ),
  couleur: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <path
        d="M24 6c8 6 14 13 14 21a14 14 0 1 1-28 0c0-8 6-15 14-21Z"
        stroke="#c9a14a"
        strokeWidth="1.4"
      />
      <path d="M24 16v22" stroke="#e9ddc8" strokeWidth="1.2" opacity="0.6" />
    </svg>
  ),
  mesure: (
    <svg viewBox="0 0 48 48" width="32" height="32" fill="none">
      <rect x="6" y="18" width="36" height="12" rx="1" stroke="#c9a14a" strokeWidth="1.4" />
      <path
        d="M12 18v6M18 18v4M24 18v6M30 18v4M36 18v6"
        stroke="#e9ddc8"
        strokeWidth="1.2"
        opacity="0.7"
      />
    </svg>
  ),
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const savoirFaire = [
  {
    key: "tissage",
    titre: "Tissage artisanal",
    texte: "Chaque zarbia est tissee a la main, fil par fil, sur un metier traditionnel.",
  },
  {
    key: "laine",
    titre: "Laine naturelle",
    texte: "Une laine locale, selectionnee pour sa douceur et sa resistance dans le temps.",
  },
  {
    key: "couleur",
    titre: "Teinture naturelle",
    texte: "Des pigments d'origine vegetale et minerale, fideles aux teintes ancestrales.",
  },
  {
    key: "mesure",
    titre: "Sur mesure",
    texte: "Dimensions et motifs adaptes a votre interieur, sur simple demande.",
  },
];

const valeurs = [
  {
    titre: "Authenticite",
    texte: "Des motifs transmis de mere en fille, sans copie ni reproduction industrielle.",
  },
  {
    titre: "Qualite",
    texte: "Une laine choisie a la main et un tissage controle a chaque etape.",
  },
  {
    titre: "Patience",
    texte: "Plusieurs semaines de travail pour une piece qui dure plusieurs generations.",
  },
  {
    titre: "Origine",
    texte: "Chaque zarbia provient directement des ateliers berberes du Maroc.",
  },
];

const produits = [
  {
    nom: "Zarbia Atlas",
    description: "Motifs geometriques inspires des montagnes de l'Atlas, tons chauds.",
  },
  {
    nom: "Beni Ourain",
    description: "Fond ivoire et losanges noirs, le classique intemporel du tissage berbere.",
  },
  {
    nom: "Azilal",
    description: "Couleurs vives et motifs libres, tissee par les femmes de la region d'Azilal.",
  },
  {
    nom: "Kilim",
    description: "Tissage plat traditionnel, motifs en zigzag et tons terre cuite.",
  },
];

const avisInitiaux = [
  {
    nom: "Salma B.",
    date: "12 mai 2026",
    texte:
      "Une qualite qu'on ne trouve plus facilement. On sent que chaque piece a une histoire.",
  },
  {
    nom: "Yassine T.",
    date: "3 avril 2026",
    texte:
      "Tres bel echange sur WhatsApp, reponses rapides et conseils utiles pour choisir la taille.",
  },
];

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function MaisonZarabi() {
  const [avis, setAvis] = useState(avisInitiaux);
  const [nom, setNom] = useState("");
  const [commentaire, setCommentaire] = useState("");

  const scrollToProduits = (e) => {
    e.preventDefault();
    const el = document.getElementById("produits");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handlePublier = (e) => {
    e.preventDefault();
    if (!nom.trim() || !commentaire.trim()) return;

    const nouvelAvis = {
      nom: nom.trim(),
      date: new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      texte: commentaire.trim(),
    };

    setAvis([nouvelAvis, ...avis]);
    setNom("");
    setCommentaire("");
  };

  const messageCommande =
    "Bonjour, je souhaite acheter une zarbia. Pourriez-vous me donner plus d'informations ?";
  const messageCTA =
    "Bonjour, je suis interesse(e) par une zarbia sur mesure. Pouvez-vous me renseigner ?";

  return (
    <div className="mz-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        :root {
          --bg: #0c0a08;
          --bg-soft: #14110d;
          --beige: #e9ddc8;
          --beige-dim: rgba(233, 221, 200, 0.65);
          --gold: #c9a14a;
          --gold-soft: rgba(201, 161, 74, 0.18);
          --gold-border: rgba(201, 161, 74, 0.35);
        }

        * { box-sizing: border-box; }

        .mz-root {
          background: var(--bg);
          color: var(--beige);
          font-family: 'Inter', -apple-system, sans-serif;
          line-height: 1.6;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .mz-root h1, .mz-root h2, .mz-root h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ---------------- Header ---------------- */
        .mz-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(12, 10, 8, 0.88);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--gold-border);
        }

        .mz-header-inner {
          max-width: 720px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.25rem;
          color: var(--beige);
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .logo span { color: var(--gold); }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          padding: 11px 22px;
          border-radius: 2px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.2s ease, opacity 0.2s ease;
          border: 1px solid transparent;
          white-space: nowrap;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn:focus-visible {
          outline: 2px solid var(--gold);
          outline-offset: 2px;
        }

        .btn-gold {
          background: var(--gold);
          color: #18130a;
        }
        .btn-gold:hover { background: #d8b15c; }

        .btn-outline {
          background: transparent;
          color: var(--beige);
          border: 1px solid var(--beige-dim);
        }
        .btn-outline:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .btn-small { padding: 9px 16px; font-size: 0.82rem; }

        /* ---------------- Hero ---------------- */
        .hero {
          padding: 64px 0 48px;
          text-align: center;
        }

        .badge {
          display: inline-block;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid var(--gold-border);
          background: var(--gold-soft);
          padding: 7px 16px;
          border-radius: 100px;
          margin-bottom: 28px;
        }

        .hero h1 {
          font-size: clamp(2.4rem, 9vw, 3.4rem);
          color: var(--beige);
          margin: 0 0 8px;
          line-height: 1.1;
        }
        .hero h1 .gold-word { color: var(--gold); }

        .hero-sub {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 1.15rem;
          color: var(--beige-dim);
          margin: 0 0 22px;
        }

        .hero-text {
          max-width: 480px;
          margin: 0 auto 32px;
          font-size: 0.98rem;
          color: var(--beige-dim);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-bottom: 48px;
        }

        .hero-image-frame {
          border: 1px solid var(--gold-border);
          padding: 10px;
          border-radius: 4px;
          max-width: 520px;
          margin: 0 auto;
          background: var(--bg-soft);
        }
        .hero-image-frame img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 2px;
          filter: sepia(12%) saturate(85%) brightness(0.92);
        }
        .hero-image-caption {
          font-size: 0.78rem;
          color: var(--beige-dim);
          margin-top: 10px;
          letter-spacing: 0.02em;
        }

        /* ---------------- Divider ---------------- */
        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 40px 0;
        }
        .divider-line {
          height: 1px;
          width: 64px;
          background: linear-gradient(90deg, transparent, var(--gold-border));
        }
        .divider-line:last-child {
          background: linear-gradient(90deg, var(--gold-border), transparent);
        }

        /* ---------------- Sections generic ---------------- */
        section { padding: 8px 0 32px; }

        .section-head {
          text-align: center;
          margin-bottom: 36px;
        }

        .eyebrow {
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin: 0 0 10px;
        }

        .section-head h2 {
          font-size: clamp(1.6rem, 6vw, 2.1rem);
          color: var(--beige);
          margin: 0;
        }

        .section-lead {
          max-width: 520px;
          margin: 14px auto 0;
          color: var(--beige-dim);
          font-size: 0.96rem;
          text-align: center;
        }

        /* ---------------- Savoir-faire grid ---------------- */
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .card {
          background: rgba(233, 221, 200, 0.03);
          border: 1px solid var(--gold-border);
          border-radius: 6px;
          padding: 22px 20px;
        }

        .card-icon { margin-bottom: 14px; }

        .card h3 {
          font-size: 1.02rem;
          color: var(--beige);
          margin: 0 0 8px;
        }

        .card p {
          font-size: 0.88rem;
          color: var(--beige-dim);
          margin: 0;
        }

        /* ---------------- Mission / valeurs ---------------- */
        .mission-text {
          max-width: 560px;
          margin: 0 auto 36px;
          text-align: center;
          color: var(--beige-dim);
          font-size: 0.98rem;
        }

        .valeurs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px 28px;
        }

        .valeur {
          border-left: 2px solid var(--gold);
          padding-left: 16px;
        }
        .valeur h3 {
          font-size: 1rem;
          color: var(--beige);
          margin: 0 0 6px;
        }
        .valeur p {
          font-size: 0.86rem;
          color: var(--beige-dim);
          margin: 0;
        }

        /* ---------------- Produits ---------------- */
        .produits-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .produit-card {
          background: rgba(233, 221, 200, 0.03);
          border: 1px solid var(--gold-border);
          border-radius: 6px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .produit-photo {
          aspect-ratio: 4 / 3;
          background:
            repeating-linear-gradient(
              45deg,
              rgba(201, 161, 74, 0.06) 0px,
              rgba(201, 161, 74, 0.06) 10px,
              transparent 10px,
              transparent 20px
            ),
            var(--bg-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .produit-photo span {
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          color: var(--beige-dim);
          text-transform: uppercase;
        }

        .tag-soon {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 0.66rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: var(--gold);
          color: #18130a;
          padding: 4px 9px;
          border-radius: 100px;
          font-weight: 700;
        }

        .produit-body { padding: 16px 18px 18px; }

        .produit-body h3 {
          font-size: 1.02rem;
          color: var(--beige);
          margin: 0 0 6px;
        }

        .produit-body p {
          font-size: 0.85rem;
          color: var(--beige-dim);
          margin: 0;
        }

        /* ---------------- Avis ---------------- */
        .avis-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .avis-card {
          background: rgba(233, 221, 200, 0.03);
          border: 1px solid var(--gold-border);
          border-radius: 6px;
          padding: 18px 20px;
        }

        .avis-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 8px;
          gap: 10px;
        }

        .avis-nom {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          color: var(--gold);
        }

        .avis-date {
          font-size: 0.76rem;
          color: var(--beige-dim);
          white-space: nowrap;
        }

        .avis-texte {
          font-size: 0.9rem;
          color: var(--beige-dim);
          margin: 0;
        }

        .avis-form {
          background: rgba(233, 221, 200, 0.03);
          border: 1px solid var(--gold-border);
          border-radius: 6px;
          padding: 22px;
        }

        .avis-form h3 {
          font-size: 1rem;
          color: var(--beige);
          margin: 0 0 16px;
        }

        .field { margin-bottom: 14px; }

        .field label {
          display: block;
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          color: var(--beige-dim);
          margin-bottom: 6px;
        }

        .field input,
        .field textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--gold-border);
          color: var(--beige);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          padding: 10px 12px;
          border-radius: 4px;
          resize: vertical;
        }
        .field input:focus,
        .field textarea:focus {
          outline: none;
          border-color: var(--gold);
        }
        .field input::placeholder,
        .field textarea::placeholder {
          color: rgba(233, 221, 200, 0.35);
        }

        /* ---------------- CTA final ---------------- */
        .cta-final {
          text-align: center;
          padding: 48px 24px;
          margin: 8px 0 0;
          border-top: 1px solid var(--gold-border);
          border-bottom: 1px solid var(--gold-border);
        }
        .cta-final h2 {
          font-size: clamp(1.5rem, 6vw, 2rem);
          color: var(--beige);
          margin: 0 0 20px;
        }

        /* ---------------- Footer ---------------- */
        footer {
          padding: 32px 24px 40px;
          text-align: center;
        }
        .footer-logo {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.05rem;
          color: var(--beige);
          margin-bottom: 6px;
        }
        .footer-logo span { color: var(--gold); }
        .footer-name {
          font-size: 0.86rem;
          color: var(--beige-dim);
          margin-bottom: 4px;
        }
        .footer-phone {
          font-size: 0.86rem;
          color: var(--gold);
          text-decoration: none;
        }
        .footer-phone:hover { text-decoration: underline; }
        .footer-copy {
          font-size: 0.74rem;
          color: rgba(233, 221, 200, 0.4);
          margin-top: 18px;
        }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 560px) {
          .grid-2,
          .valeurs-grid,
          .produits-grid {
            grid-template-columns: 1fr;
          }
          .hero { padding: 48px 0 36px; }
          .logo { font-size: 1.05rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .btn { transition: none; }
        }
      `}</style>

      {/* ---------------- Header ---------------- */}
      <header className="mz-header">
        <div className="mz-header-inner">
          <span className="logo">
            Maison <span>Zarabi</span>
          </span>
          <a
            href={waLink("Bonjour, je souhaite vous contacter au sujet de vos zarabi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-small"
          >
            Nous contacter
          </a>
        </div>
      </header>

      <main className="wrap">
        {/* ---------------- Hero ---------------- */}
        <section className="hero">
          <span className="badge">Artisanat berbere depuis trois generations</span>
          <h1>
            Maison <span className="gold-word">Zarabi</span>
          </h1>
          <p className="hero-sub">Le fil qui raconte une histoire</p>
          <p className="hero-text">
            Chaque zarbia est tissee a la main par des artisanes berberes, selon des
            motifs transmis depuis des generations. Laine naturelle, teintures
            traditionnelles, et un savoir-faire qui ne se presse jamais.
          </p>

          <div className="hero-actions">
            <a
              href={waLink(
                "Bghit nshri zarbia, wach momkin t3tini ma3lomat?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Commander sur WhatsApp
            </a>
            <a href="#produits" onClick={scrollToProduits} className="btn btn-outline">
              Voir les zarabi
            </a>
          </div>

          <div className="hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop"
              alt="Metier a tisser traditionnel berbere"
              loading="lazy"
            />
            <p className="hero-image-caption">Metier a tisser traditionnel, atelier berbere</p>
          </div>
        </section>

        <DiamondDivider />

        {/* ---------------- Savoir-faire ---------------- */}
        <section>
          <div className="section-head">
            <SectionEyebrow>Le geste</SectionEyebrow>
            <h2>Notre savoir-faire</h2>
          </div>
          <div className="grid-2">
            {savoirFaire.map((item) => (
              <div className="card" key={item.key}>
                <div className="card-icon">{icons[item.key]}</div>
                <h3>{item.titre}</h3>
                <p>{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <DiamondDivider />

        {/* ---------------- Mission ---------------- */}
        <section>
          <div className="section-head">
            <SectionEyebrow>L'engagement</SectionEyebrow>
            <h2>Notre mission</h2>
          </div>
          <p className="mission-text">
            Nous travaillons directement avec des cooperatives d'artisanes dans les
            montagnes du Maroc, pour preserver un artisanat menace par la production
            industrielle. Chaque zarbia vendue soutient un savoir-faire et une
            communaute.
          </p>
          <div className="valeurs-grid">
            {valeurs.map((v) => (
              <div className="valeur" key={v.titre}>
                <h3>{v.titre}</h3>
                <p>{v.texte}</p>
              </div>
            ))}
          </div>
        </section>

        <DiamondDivider />

        {/* ---------------- Produits ---------------- */}
        <section id="produits">
          <div className="section-head">
            <SectionEyebrow>La collection</SectionEyebrow>
            <h2>Nos zarabi</h2>
            <p className="section-lead">
              Une selection en cours de preparation. Les photos de chaque piece
              arrivent tres prochainement.
            </p>
          </div>
          <div className="produits-grid">
            {produits.map((p) => (
              <div className="produit-card" key={p.nom}>
                <div className="produit-photo">
                  <span className="tag-soon">Bientot disponible</span>
                  <span>Photo a venir</span>
                </div>
                <div className="produit-body">
                  <h3>{p.nom}</h3>
                  <p>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <DiamondDivider />

        {/* ---------------- Avis clients ---------------- */}
        <section>
          <div className="section-head">
            <SectionEyebrow>Les voix</SectionEyebrow>
            <h2>Avis clients</h2>
          </div>

          <div className="avis-list">
            {avis.map((a, i) => (
              <div className="avis-card" key={`${a.nom}-${i}`}>
                <div className="avis-top">
                  <span className="avis-nom">{a.nom}</span>
                  <span className="avis-date">{a.date}</span>
                </div>
                <p className="avis-texte">{a.texte}</p>
              </div>
            ))}
          </div>

          <form className="avis-form" onSubmit={handlePublier}>
            <h3>Laisser un avis</h3>
            <div className="field">
              <label htmlFor="nom">Votre nom</label>
              <input
                id="nom"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="commentaire">Votre avis</label>
              <textarea
                id="commentaire"
                rows={3}
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                placeholder="Partagez votre experience..."
                required
              />
            </div>
            <button type="submit" className="btn btn-gold">
              Publier
            </button>
          </form>
        </section>
      </main>

      {/* ---------------- CTA final ---------------- */}
      <section className="cta-final">
        <h2>Envie d'une zarbia unique ?</h2>
        <a
          href={waLink(messageCTA)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold"
        >
          Discuter sur WhatsApp
        </a>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer>
        <p className="footer-logo">
          Maison <span>Zarabi</span>
        </p>
        <p className="footer-name">Massoudi Abdlghafour</p>
        <a href={waLink(messageCommande)} className="footer-phone" target="_blank" rel="noopener noreferrer">
          0655-541482
        </a>
        <p className="footer-copy">
          © {new Date().getFullYear()} Maison Zarabi. Tous droits reserves.
        </p>
      </footer>
    </div>
  );
}
