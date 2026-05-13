export default function GallerySection() {
  const photos = [
    {
      src: "/assets/gallery/gallery-1.jpg",
      alt: "Jeunes joueuses du club",
      className: "gallery-main",
    },
    {
      src: "/assets/gallery/gallery-2.jpg",
      alt: "Briefing pendant un entraînement",
      className: "gallery-small",
    },
    {
      src: "/assets/gallery/gallery-3.jpg",
      alt: "Action de match",
      className: "gallery-small",
    },
    {
      src: "/assets/gallery/gallery-4.jpg",
      alt: "Joueuse en match",
      className: "gallery-wide",
    },
    {
      src: "/assets/gallery/gallery-5.jpg",
      alt: "Joueuses sur le banc",
      className: "gallery-wide",
    },
  ];

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
        {photos.map((photo, index) => (
          <div className={`gallery-card ${photo.className}`} key={index}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}