"use client";

import { useEffect, useState } from "react";

const DIRECTUS_URL = "https://directus-production-8156.up.railway.app";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [activeImages, setActiveImages] = useState({});
  const [loading, setLoading] = useState(true);

  function changeImage(newsId, direction, totalImages) {
    setActiveImages((prev) => {
      const currentIndex = prev[newsId] ?? 0;

      const nextIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;

      return {
        ...prev,
        [newsId]: nextIndex,
      };
    });
  }

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(
          `${DIRECTUS_URL}/items/news?sort=sort&limit=-1&fields=*`,
          { cache: "no-store" }
        );

        const data = await res.json();

        const formattedNews = (data.data || []).map((item, index) => {
          const images = [item.poster, item.poster_2, item.poster_3]
            .filter((image) => image && image !== "null")
            .map((image) => `${DIRECTUS_URL}/assets/${image}`);

          return {
            id: item.id,
            title: item.title,
            date: item.event_date
              ? new Date(item.event_date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "",
            excerpt: item.description,
            images,
            featured: index === 0,
          };
        });

        setNews(formattedNews);
      } catch (error) {
        console.error("Erreur Directus actualités :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="news-section" id="actualites">
        <p className="section-sub">Chargement des actualités...</p>
      </section>
    );
  }

  if (!news.length) {
    return (
      <section className="news-section" id="actualites">
        <p className="section-sub">Aucune actualité ajoutée pour le moment.</p>
      </section>
    );
  }

  return (
    <section className="news-section" id="actualites">
      <div className="news-heading">
        <div className="section-label">Actualités</div>

        <h2 className="section-title">
          La vie <em>du club</em>
        </h2>

        <p className="section-sub">
          Tournois, compétitions, recrutements et temps forts de Segré Basket.
        </p>
      </div>

      <div className="news-grid">
        {news.map((item) => {
          const currentIndex = activeImages[item.id] ?? 0;
          const currentImage = item.images[currentIndex];
          const hasSlider = item.images.length >= 2;

          return (
            <article
              className={`news-card ${item.featured ? "big" : ""}`}
              key={item.id}
            >
              <div className="news-thumb">
                {currentImage ? (
                  <img
                    key={currentImage}
                    src={currentImage}
                    alt={item.title}
                  />
                ) : (
                  <div className="news-empty-image">Image à ajouter</div>
                )}

                <span className="news-cat">Actualité</span>

                {hasSlider && (
                  <>
                    <button
                      type="button"
                      className="news-slider-btn news-slider-prev"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        changeImage(item.id, "prev", item.images.length);
                      }}
                      aria-label="Image précédente"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      className="news-slider-btn news-slider-next"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        changeImage(item.id, "next", item.images.length);
                      }}
                      aria-label="Image suivante"
                    >
                      ›
                    </button>

                    <div className="news-slider-count">
                      {currentIndex + 1}/{item.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="news-body">
                {item.date && <div className="news-date">{item.date}</div>}
                <div className="news-title">{item.title}</div>
                {item.excerpt && (
                  <div className="news-excerpt">{item.excerpt}</div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}