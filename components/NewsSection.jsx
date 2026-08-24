"use client";

import { useState } from "react";

const news = [
  {
    date: "14 Juin 2026",
    category: "Événement",
    title: "Tournoi des Familles 2026",
    excerpt:
      "Pour fêter la fin de saison, Segré Basket organise son grand Tournoi des Familles le dimanche 14 juin, de 9h à 16h, à la Salle Bernard Madiot.",
    images: ["/assets/actus/actus1.jpg"],
    link: "https://www.helloasso.com/associations/essha-basket/evenements/tournoi-des-familles-2026",
    featured: true,
  },
  {
    date: "25 Avril 2026",
    category: "Compétition",
    title: "Demi-finales Coupe et Challenges de l’Anjou Jeunes",
    excerpt:
      "Rendez-vous samedi 25 avril 2026 pour soutenir les jeunes du club lors des demi-finales de la Coupe et des Challenges de l’Anjou.",
    images: ["/assets/actus/actus2.jpg"],
    link: "#contact",
    featured: false,
  },
  {
    date: "Saison 2026-2027",
    category: "Recrutement",
    title: "Segré Basket recrute pour ses équipes",
    excerpt:
      "U18 Féminin D1, Seniors Féminines D2 avec objectif pré-régional, et Seniors Hommes avec objectif création d’une équipe D4.",
    images: [
      "/assets/actus/actus-recrutement1.jpg",
      "/assets/actus/actus-recrutement2.jpg",
      "/assets/actus/actus-recrutement3.jpg",
    ],
    link: "#contact",
    featured: false,
  },
];

export default function NewsSection() {
  const [activeImages, setActiveImages] = useState({});

  const changeImage = (newsIndex, direction, totalImages) => {
    setActiveImages((prev) => {
      const currentIndex = prev[newsIndex] || 0;
      const nextIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;

      return {
        ...prev,
        [newsIndex]: nextIndex,
      };
    });
  };

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
        {news.map((item, index) => {
          const currentImageIndex = activeImages[index] || 0;
          const currentImage = item.images[currentImageIndex];
          const hasSlider = item.images.length > 1;

          return (
            <article
              className={`news-card ${item.featured ? "big" : ""}`}
              key={index}
            >
              <div className="news-thumb">
                <img src={currentImage} alt={item.title} />
                <span className="news-cat">{item.category}</span>

                {hasSlider && (
                  <>
                    <button
                      type="button"
                      className="news-slider-btn news-slider-prev"
                      onClick={() =>
                        changeImage(index, "prev", item.images.length)
                      }
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      className="news-slider-btn news-slider-next"
                      onClick={() =>
                        changeImage(index, "next", item.images.length)
                      }
                    >
                      ›
                    </button>

                    <div className="news-slider-count">
                      {currentImageIndex + 1}/{item.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="news-body">
                <div className="news-date">{item.date}</div>
                <div className="news-title">{item.title}</div>
                <div className="news-excerpt">{item.excerpt}</div>

                <a
                  href={item.link}
                  className="news-read"
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
