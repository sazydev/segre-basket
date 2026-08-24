const sponsors = [
  {
    name: "Chesneau",
    logo: "/assets/sponsors/chesneau.png",
    link: "https://www.auto-chesneau.com/accueil",
  },
  {
    name: "La Colonnade",
    logo: "/assets/sponsors/colonnade.png",
    link: "https://www.la-colonnade.com/",
  },
  {
    name: "Crédit Mutuel",
    logo: "/assets/sponsors/creditmutuel.png",
    link: "https://www.creditmutuel.fr/fr/caisses-et-distributeurs/ResultatsRechercheGeographique.aspx?inseeCode=49331",
  },
  {
    name: "Eiffage",
    logo: "/assets/sponsors/eiffage.png",
    link: "https://www.eiffage.com/",
  },
  {
    name: "L'Équip",
    logo: "/assets/sponsors/equipe.png",
    link: "https://www.lequip49.fr/",
  },
  {
    name: "Foliard",
    logo: "/assets/sponsors/foliard.jpg",
    link: "https://www.foliard.fr/",
  },
  {
    name: "LAD",
    logo: "/assets/sponsors/lad.jpg",
    link: "https://www.facebook.com/lad49/?locale=fr_FR",
  },
  {
    name: "E.Leclerc Segré",
    logo: "/assets/sponsors/leclerc.png",
    link: "https://www.e.leclerc/mag/e-leclerc-segre",
  },
  {
    name: "MMA",
    logo: "/assets/sponsors/mma.jpg",
    link: "https://agence.mma.fr/segre-en-anjou-bleu/",
  },
];

export default function PartnersSection() {
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
              target="_blank"
              rel="noopener noreferrer"
              key={`${sponsor.name}-${index}`}
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
