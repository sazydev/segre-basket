import { readSingleton } from "@directus/sdk";
import { directus } from "@/lib/directus";

export default async function Hero() {
  const heroStats = await directus.request(readSingleton("hero_stats"));

  return (
    <section className="hero" id="accueil">
      <div className="hero-image-bg"></div>
      <div className="hero-dark-overlay"></div>
      <div className="hero-yellow-glow"></div>

      <div className="hero-content">
        <div className="hero-badge">Saison 2025 — 2026</div>

        <h1 className="hero-title">
          <span className="line1">Segré</span>
          <span className="line2">Basket</span>
          <span className="line3">Club — Maine-et-Loire</span>
        </h1>

        <p className="hero-desc">
          Passion, dépassement de soi et esprit d&apos;équipe. Le Segré Basket
          rassemble joueurs, bénévoles et supporters autour d&apos;un club ambitieux.
        </p>

        <div className="hero-actions">
          <a href="#club" className="btn-primary">
            Découvrir le club
          </a>
          <a href="#equipes" className="btn-outline">
            Nos équipes →
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">{heroStats.teams_count}</div>
            <div className="hero-stat-label">Équipes</div>
          </div>

          <div>
            <div className="hero-stat-num">{heroStats.members_count}</div>
            <div className="hero-stat-label">Licenciés</div>
          </div>

          <div>
            <div className="hero-stat-num">{heroStats.history_years}</div>
            <div className="hero-stat-label">Ans d&apos;histoire</div>
          </div>
        </div>
      </div>
    </section>
  );
}