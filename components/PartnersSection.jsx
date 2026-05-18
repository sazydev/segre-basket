"use client";

import { useEffect, useState } from "react";

const DIRECTUS_URL = "https://directus-production-8156.up.railway.app";

function getLogoUrl(logo) {
  if (!logo) return null;

  if (typeof logo === "string") {
    return `${DIRECTUS_URL}/assets/${logo}`;
  }

  if (logo.id) {
    return `${DIRECTUS_URL}/assets/${logo.id}`;
  }

  return null;
}

export default function PartnersSection() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSponsors() {
      try {
        const res = await fetch(
          `${DIRECTUS_URL}/items/parteners?sort=sort&limit=-1&fields=*,logo.*&t=${Date.now()}`,
          {
            cache: "no-store",
          }
        );

        const data = await res.json();

        const formattedSponsors = (data.data || [])
          .map((sponsor) => ({
            id: sponsor.id,
            name: sponsor.name,
            logo: getLogoUrl(sponsor.logo),
            link: sponsor.website_url || "#",
          }))
          .filter((sponsor) => sponsor.logo);

        setSponsors(formattedSponsors);
      } catch (error) {
        console.error("Erreur Directus partenaires :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSponsors();
  }, []);

  if (loading) {
    return (
      <section className="partners-section" id="partenaires">
        <div className="partners-label">Chargement des partenaires...</div>
      </section>
    );
  }

  if (!sponsors.length) {
    return (
      <section className="partners-section" id="partenaires">
        <div className="partners-label">
          Aucun partenaire ajouté pour le moment.
        </div>
      </section>
    );
  }

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="partners-section" id="partenaires">
      <div className="partners-label">Nos partenaires</div>

      <div className="sponsors-marquee">
        <div className="sponsors-track">
          {duplicatedSponsors.map((sponsor, index) => (
            <a
              href={sponsor.link}
              className="sponsor-logo-card"
              target={sponsor.link !== "#" ? "_blank" : undefined}
              rel={sponsor.link !== "#" ? "noopener noreferrer" : undefined}
              key={`${sponsor.id}-${index}`}
              aria-label={sponsor.name}
            >
              <img src={sponsor.logo} alt={sponsor.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}