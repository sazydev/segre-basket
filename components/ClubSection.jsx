"use client";

import { useEffect, useState } from "react";

const DIRECTUS_URL = "https://directus-production-8156.up.railway.app";

export default function ClubSection() {
  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    async function fetchClub() {
      try {
        const res = await fetch(
          `${DIRECTUS_URL}/items/club_section?limit=1&t=${Date.now()}`,
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

        if (data.data?.length > 0) {
          setClubData(data.data[0]);
        }
      } catch (error) {
        console.error("Erreur Directus club :", error);
      }
    }

    fetchClub();
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
            <div className="num">
              {clubData?.highlight_number || "2026"}
            </div>

            <div className="lab">
              {clubData?.highlight_label || "En compétition"}
            </div>
          </div>

        </div>

        <div>
          <div className="section-label">
            {clubData?.section_label || "Le Club"}
          </div>

          <h2 className="section-title">
            {clubData?.title_line_1 || "Plus qu’un club,"}
            <br />
            <em>{clubData?.title_line_2 || "une famille"}</em>
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "24px",
            }}
          >
            {clubData?.description_1 ||
              "Le Segré Basket est bien plus qu’une association sportive. C’est un lieu de vie, de rencontres et de partage où chaque licencié trouve sa place."}
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "40px",
            }}
          >
            {clubData?.description_2 ||
              "Fondé sur des valeurs fortes de solidarité, de respect et de persévérance, notre club s’engage à former des joueurs et des citoyens."}
          </p>

          <div className="club-values">

            <div className="value-card">
              <span className="value-number">01</span>

              <div>
                <div className="value-title">
                  {clubData?.value_1_title || "Progresser ensemble"}
                </div>

                <div className="value-desc">
                  {clubData?.value_1_desc ||
                    "Des entraînements pensés pour faire évoluer chaque joueur."}
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">02</span>

              <div>
                <div className="value-title">
                  {clubData?.value_2_title || "Un vrai esprit d’équipe"}
                </div>

                <div className="value-desc">
                  {clubData?.value_2_desc ||
                    "Le collectif passe toujours avant le reste."}
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">03</span>

              <div>
                <div className="value-title">
                  {clubData?.value_3_title || "Former les jeunes"}
                </div>

                <div className="value-desc">
                  {clubData?.value_3_desc ||
                    "Le club accompagne les plus jeunes avec des coachs investis."}
                </div>
              </div>
            </div>

            <div className="value-card">
              <span className="value-number">04</span>

              <div>
                <div className="value-title">
                  {clubData?.value_4_title || "Vivre le basket"}
                </div>

                <div className="value-desc">
                  {clubData?.value_4_desc ||
                    "Matchs, tournois et moments partagés avec les bénévoles."}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}