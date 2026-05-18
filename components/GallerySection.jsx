"use client";

import { useEffect, useState } from "react";

const DIRECTUS_URL = "https://directus-production-8156.up.railway.app";

export default function GallerySection() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch(
          `${DIRECTUS_URL}/items/gallery?sort=sort&limit=-1`
        );

        const data = await res.json();

        const formattedPhotos = (data.data || []).map((photo, index) => ({
          id: photo.id,
          src: `${DIRECTUS_URL}/assets/${photo.image}`,
          alt: photo.title || "Photo du club Segré Basket",
          className:
            index === 0
              ? "gallery-main"
              : index === 3 || index === 4
              ? "gallery-wide"
              : "gallery-small",
        }));

        setPhotos(formattedPhotos);
      } catch (error) {
        console.error("Erreur Directus galerie :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <section className="gallery-section" id="galerie">
        <p className="section-sub">Chargement de la galerie...</p>
      </section>
    );
  }

  if (!photos.length) {
    return (
      <section className="gallery-section" id="galerie">
        <p className="section-sub">Aucune photo ajoutée pour le moment.</p>
      </section>
    );
  }

  return (
    <section className="gallery-section" id="galerie">
      <div className="gallery-heading">
        <div className="section-label">Vie du club</div>

        <h2 className="section-title">
          Le basket <em>au quotidien</em>
        </h2>

        <p className="section-sub">
          Matchs, entraînements, tournois et moments partagés tout au long de la saison.
        </p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <div className={`gallery-card ${photo.className}`} key={photo.id}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}