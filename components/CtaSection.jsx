export default function CtaSection() {
  return (
    <section className="cta-section" id="boutique">
      <div className="cta-label">Rejoignez-nous</div>

      <h2 className="cta-title">
        Prêt à enfiler
        <br />
        le maillot Segréen ?
      </h2>

      <p className="cta-desc">
        Inscriptions ouvertes pour toutes les catégories. Venez nous rejoindre
        et vibrez aux couleurs de Segré Basket.
      </p>

      <div className="cta-actions">
        <a href="/contact" className="btn-dark">
          S&apos;inscrire maintenant
        </a>

        <a href="#actualites" className="btn-secondary-dark">
          Voir les actualités →
        </a>
      </div>
    </section>
  );
}