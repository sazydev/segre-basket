"use client";

import { useEffect, useState } from "react";

const DIRECTUS_URL = "https://directus-production-8156.up.railway.app";

export default function ClubSection() {
  const [clubInfo, setClubInfo] = useState({
    accent_number: "2026",
    accent_label: "En compétition",
  });

  useEffect(() => {
    async function fetchClubInfo() {
      try {
        const res = await fetch(
          `${DIRECTUS_URL}/items/club_info?t=${Date.now()}`,
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

        if (data.data) {
          setClubInfo(data.data);
        }
      } catch (error) {
        console.error("Erreur Directus club_info :", error);
      }
    }

    fetchClubInfo();
  }, []);

  return (
    <section className="club-section" id="club">
      <div className="club-grid">
        <div className="club-visual">
          <div className="club-image-frame">
            <img
              src="/assets/img/heroimg.jpg"
              alt="Segré Basket"
              className="club-real-image"
            />

            <div className="club-image-overlay"></div>
          </div>

          <div className="club-accent-box">
            <div className="num">{clubInfo.accent_number}</div>
            <div className="lab">{clubInfo.accent_label}</div>
          </div>
        </div>

        <div>
          <div className="section-label">Le Club</div>

          <h2 className="section-title">
            Plus qu&apos;un club,
            <br />
            <em>une famille</em>
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "24px",
            }}
          >
            Le Segré Basket est bien plus qu&apos;une association sportive.
            C&apos;est un lieu de vie, de rencontres et de partage où chaque licencié,
            du jeune poussé à l&apos;adulte confirmé, trouve sa place et progresse à son rythme.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "40px",
            }}
          >
            Fondé sur des valeurs fortes de solidarité, de respect et de persévérance,
            notre club s&apos;engage à former des joueurs et des citoyens.
          </p>

          <div className="club-values">
            <div className="value-card">
              <span className="value-number">01</span>
              <div>
                <div className="value-title">Progresser ensemble</div>
                <div className="value-desc">
                  Des entraînements pensés pour faire évoluer chaque joueur,
                  peu importe son niveau.
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">02</span>
              <div>
                <div className="value-title">Un vrai esprit d&apos;équipe</div>
                <div className="value-desc">
                  Sur le terrain comme en dehors, le collectif passe toujours avant le reste.
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">03</span>
              <div>
                <div className="value-title">Former les jeunes</div>
                <div className="value-desc">
                  Le club accompagne les plus jeunes avec des coachs présents,
                  sérieux et investis.
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">04</span>
              <div>
                <div className="value-title">Vivre le basket</div>
                <div className="value-desc">
                  Matchs, tournois, moments partagés : le club avance avec ses joueurs
                  et bénévoles.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}