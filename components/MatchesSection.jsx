const matches = [
  {
    day: "26",
    month: "Avr. 2026",
    teams: "Segré Basket vs Châteaubriant BB",
    time: "18h00",
    place: "Salle Omnisports, Segré",
    level: "Régionale 2 — J18",
    type: "Domicile",
    featured: true,
  },
  {
    day: "03",
    month: "Mai 2026",
    teams: "Cholet Basket Académie vs Segré Basket",
    time: "20h30",
    place: "Gymnase de la Madeleine, Cholet",
    level: "Régionale 2 — J19",
    type: "Extérieur",
    featured: false,
  },
  {
    day: "10",
    month: "Mai 2026",
    teams: "Segré Basket vs BC Angers Nord",
    time: "20h00",
    place: "Salle Omnisports, Segré",
    level: "Régionale 2 — J20",
    type: "Domicile",
    featured: false,
  },
  {
    day: "17",
    month: "Mai 2026",
    teams: "Laval Basket vs Segré Basket",
    time: "18h30",
    place: "Palais des Sports, Laval",
    level: "Régionale 2 — J21",
    type: "Extérieur",
    featured: false,
  },
];

export default function MatchesSection() {
  return (
    <section className="matches-section" id="matchs">
      <div className="section-label">Agenda sportif</div>

      <h2 className="section-title">
        Prochains <em>matchs</em>
      </h2>

      <p className="section-sub">
        Venez supporter nos équipes sur le parquet ou en déplacement.
      </p>

      <div className="matches-list">
        {matches.map((match) => (
          <div
            className={`match-card ${match.featured ? "featured" : ""}`}
            key={`${match.day}-${match.teams}`}
          >
            <div className="match-date-block">
              <div className="match-day">{match.day}</div>
              <div className="match-month">{match.month}</div>
            </div>

            <div className="match-info">
              <div className="match-teams">{match.teams}</div>

              <div className="match-details">
                <span>{match.time}</span>
                <span>{match.place}</span>
                <span>{match.level}</span>
              </div>
            </div>

            <div>
              <div
                className={`match-badge ${
                  match.type === "Domicile" ? "domicile" : "exterieur"
                }`}
              >
                {match.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}