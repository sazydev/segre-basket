"use client";

import { useState } from "react";

const teams = [
  {
    name: "Senior Homme",
    level: "Seniors Masculins",
    scorecoUrl: "https://app.scorenco.com/teams/241031",
    players: [
      "Stéphane AFFEDJOU",
      "Antoine DEHENNOT",
      "Antoine PHÉLIPPOT",
      "Tom RONFLÉ",
      "Maxime GUINEHUT",
      "Nathan ROBIN",
      "Ronan LE BODO",
      "Ethan DEROUET",
      "Armel BRANCHEREAU",
      "Johann ANGELLIAUME",
      "Charly PÉGÉ",
      "Matthieu BLASUTTO",
    ],
    coaches: ["Maëlle SÉJOURNÉ"],
  },
  {
    name: "Senior Femme",
    level: "Seniors Féminines",
    scorecoUrl: "https://app.scorenco.com/teams/158943",
    players: [
      "Raphaëlle AUGEUL",
      "Salomé BARBONNAT",
      "Léane GASTINEAU",
      "Mélanie GILLES",
      "Sarah BENMANSOUR - LARDEUX",
      "Charlotte CHAUVIN",
      "Emmie ROBERT",
      "Maëlle SÉJOURNÉ",
      "Chloé BENMANSOUR - LARDEUX",
      "Chloé BERNIER",
    ],
    coaches: ["Antoine PHÉLIPPOT"],
  },
  {
    name: "U18 Masculins",
    level: "Jeunes Masculins",
    scorecoUrl: "https://app.scorenco.com/teams/553635",
    players: [
      "Alexis GUILLET",
      "Jessy FATTON",
      "Tibault LE BRETON",
      "Elyo TROUILLARD",
      "Nathan ROBIN",
      "Jules BOUVERET",
      "Arthur MIGNOT",
      "Carl CORABOEUF",
    ],
    coaches: ["Léane GASTINEAU", "Maëlle SÉJOURNÉ"],
  },
  {
    name: "U18-1 Féminines",
    level: "Jeunes Féminines",
    scorecoUrl:
      "https://scorenco.com/basket/clubs/essha-segre-basket-2prk/1-u18-feminine-2cvu",
    players: [
      "Eloane MARCK",
      "Eloise POUESSEL",
      "Apolline TRIMOREAU",
      "Apolline LAURENT",
      "Adèle BELLANGER",
      "Emilie CHANTEUX",
      "Lena HAMON",
      "Emma BERNARD",
      "Louane LEBRETON",
      "Zaia EVIN",
    ],
    coaches: ["Anthony LEBRETON"],
  },
  {
    name: "U18-2 Féminines",
    level: "Jeunes Féminines",
    scorecoUrl:
      "https://scorenco.com/basket/clubs/essha-segre-basket-2prk/u18-f2-17xab",
    players: [
      "Adèle SEYEUX",
      "Anais BEDOUET",
      "Emma CHAUVIN",
      "Aimie LANCELOT",
      "Lise FOLIARD",
      "Loane CHOLLEY",
      "Lola ALBERT",
      "Maelys VERRON",
    ],
    coaches: ["Nicolas BEDOUET"],
  },
  {
    name: "U15 Masculins",
    level: "Jeunes Masculins",
    scorecoUrl:
      "https://scorenco.com/basket/clubs/essha-segre-basket-2prk/1-u15-560c",
    players: [
      "Jérémy FORGEAU",
      "Maxime GALAND",
      "Noah VAILLE IANCU",
      "Eliott BARET PLISSON",
      "Elliot MERCIER",
      "Noa ROBIN",
      "Malone JOUNY",
      "Clément PILET",
      "Mael JAROUSSEAU",
      "Thaïs MAINFROID",
      "Nael LE ROUX",
    ],
    coaches: ["Nathan ROBIN"],
  },
  {
    name: "U15 Féminines",
    level: "Jeunes Féminines",
    scorecoUrl:
      "https://scorenco.com/basket/clubs/essha-segre-basket-2prk/1-u15-feminine-2d4m",
    players: [
      "Maelys PETIT DIT GREZERIAT",
      "Ilyana DUCROS",
      "Emma LERIDON",
      "Cassandre LEBRETON",
      "Lou-Anne MACHU",
      "Thalia ABAR",
      "Jade DE LA CROIX LLUHI",
      "Kayline DE SPIEGELEER",
      "Leana SIAMPIRAVE",
    ],
    coaches: ["David DUCROS", "Louane LEBRETON"],
  },
  {
    name: "U13 Masculins",
    level: "Jeunes Masculins",
    scorecoUrl:
      "https://scorenco.com/basket/clubs/essha-segre-basket-2prk/1-u13-3f1s",
    players: [
      "Enzo ALIGAND",
      "Swann ARCHAMBEAUD",
      "Nathanael BRANCHEREAU",
      "Mahé CLAUDE",
      "Loan GRIMAUD",
      "Antoine GUINEHEUX",
      "Thibault REGEF",
      "Tim POLIDORI",
      "Mathis ROUSSEAU",
      "Naël ROBIN",
    ],
    coaches: ["Alex ROUSSEAU"],
  },
  {
    name: "U13 Féminines",
    level: "Jeunes Féminines",
    scorecoUrl:
      "https://scorenco.com/basket/clubs/essha-segre-basket-2prk/1-u13-feminine-3evt",
    players: [
      "Lizae GAULLIER",
      "Tessa GAULTIER",
      "Apolline HAMARD",
      "Adèle BOUVIER",
      "Inaya ANGELLIAUME",
      "Carla ALBERT",
      "Andréa BESSODES",
    ],
    coaches: ["Jessy GAULLIER", "Apolline LAURENT"],
  },
  {
    name: "U11 Mixte",
    level: "École de basket",
    players: [
      "Emma KNULL",
      "Sean BRAULT",
      "Laurina RENAUX",
      "Tania RICOU",
      "Camille MIGNOT",
      "Flavien MENARD",
      "Timéo MOUCHEL",
    ],
    coaches: ["Guillaume MIGNOT", "Maëlle SÉJOURNÉ"],
  },
  {
    name: "U9 Garçons",
    level: "École de basket",
    scorecoUrl:
      "https://scorenco.com/basket/clubs/essha-segre-basket-2prk/u9-1-zh2h",
    players: ["Noé ABLIN", "Eliot LAUNAY", "Izack MELINARD RENAULT"],
    coaches: ["Arthur MIGNOT"],
  },
  {
    name: "U9 Filles",
    level: "École de basket",
    scorecoUrl:
      "https://scorenco.com/basket/clubs/essha-segre-basket-2prk/1-u9-feminine-5x6v",
    players: [
      "Eloane GILLIER LECLERC",
      "Eliot LAUNAY",
      "Zélie RAMAGE",
      "Adèle HARDOU",
      "Ambre GAULTIER",
      "Roxane BRETON",
      "Shanna DUCROS",
      "Louna ROUSSEAU",
    ],
    coaches: ["Thomas BRETON", "Cassandre LEBRETON"],
  },
  {
    name: "U7 Mixte",
    level: "Éveil basket",
    players: ["Leo PONTONNIER", "Tiago TUSSEAU"],
    coaches: [],
  },
  {
    name: "Loisirs Masculins",
    level: "Loisirs",
    players: [
      "Abdirahman ABAR",
      "Anthony LEBRETON",
      "David UGOLINI",
      "Ronan LE BODO",
      "Thomas BRETON",
      "Benoist CLOCHARD",
      "Antoine RENOU",
      "Mathieu BELKHIRI",
      "Thomas KNULL",
      "David DUCROS",
      "Jérémy ROBIN",
    ],
    coaches: ["Antoine RENOU"],
  },
  {
    name: "Loisirs Féminins",
    level: "Loisirs",
    players: [
      "Pauline GALISSON",
      "Charlène LESTRADE",
      "Audrey MAHÉ",
      "Séverine MONGAZON",
      "Florence LECLERC",
      "Céline CHAUVEAU",
      "Alexandra CHANTEUX",
      "Cécile CHOPIN",
      "Aline HARDOU",
    ],
    coaches: [],
  },
];

export default function TeamsSection() {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const activeTeam = teams[activeTeamIndex];

  return (
    <section className="teams-section" id="equipes">
<div className="teams-heading">
  <div className="section-label">Nos équipes</div>

  <h2 className="section-title">
    Les équipes <br />
    <em>du club</em>
  </h2>

  <p className="section-sub">
    Sélectionnez une équipe pour afficher son effectif, ses coachs et accéder
    directement à ses matchs et résultats.
  </p>
</div>

      <div className="teams-layout">
        <div className="teams-tabs">
          {teams.map((team, index) => (
            <button
              type="button"
              key={team.name}
              className={`team-tab ${activeTeamIndex === index ? "active" : ""}`}
              onClick={() => setActiveTeamIndex(index)}
            >
              {team.name}
            </button>
          ))}
        </div>

        <div className="team-detail-card">
          <div className="team-detail-header">
            <div>
              <span className="team-detail-label">{activeTeam.level}</span>
              <h3>{activeTeam.name}</h3>
            </div>

            <div className="team-detail-stats">
              <div>
                <strong>{activeTeam.players.length}</strong>
                <span>Joueurs</span>
              </div>

              <div>
                <strong>{activeTeam.coaches.length}</strong>
                <span>Coachs</span>
              </div>
            </div>
          </div>

          <div className="team-detail-content">
            <div>
              <h4>Effectif</h4>

              <div className="players-grid">
                {activeTeam.players.map((player) => (
                  <div className="player-card" key={player}>
                    {player}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4>Encadrement</h4>

              {activeTeam.coaches.length > 0 ? (
                <div className="coaches-list">
                  {activeTeam.coaches.map((coach) => (
                    <div className="coach-card" key={coach}>
                      {coach}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="empty-team-info">Coach à renseigner.</p>
              )}
            </div>
          </div>

          {activeTeam.scorecoUrl ? (
            <div className="team-scoreco-box">
              <div>
                <span>Matchs & résultats</span>
                <p>Consultez le calendrier, les scores et les prochains matchs.</p>
              </div>

              <a
                href={activeTeam.scorecoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="scoreco-btn"
              >
                Voir sur Score&apos;n&apos;co
              </a>
            </div>
          ) : (
            <div className="team-scoreco-box unavailable">
              <div>
                <span>Matchs & résultats</span>
                <p>Aucun calendrier disponible actuellement pour cette équipe.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
