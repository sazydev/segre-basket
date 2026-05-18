"use client";

import { useEffect, useState } from "react";

const DIRECTUS_URL = "https://directus-production-8156.up.railway.app";

export default function TeamsSection() {
  const [teams, setTeams] = useState([]);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const timestamp = Date.now();

        const [teamsRes, playersRes] = await Promise.all([
          fetch(
            `${DIRECTUS_URL}/items/teams?sort=sort&limit=-1&t=${timestamp}`,
            { cache: "no-store" }
          ),
          fetch(
            `${DIRECTUS_URL}/items/players?sort=sort&limit=-1&t=${timestamp}`,
            { cache: "no-store" }
          ),
        ]);

        const teamsData = await teamsRes.json();
        const playersData = await playersRes.json();

        const formattedTeams = (teamsData.data || []).map((team) => {
          const teamPlayers = (playersData.data || []).filter(
            (player) => player.team === team.id
          );

          const players = teamPlayers
            .filter((player) => player.role === "joueur")
            .map((player) =>
              `${player.firstname || ""} ${player.lastname || ""}`.trim()
            );

          const coaches = teamPlayers
            .filter((player) => player.role === "coach")
            .map((player) =>
              `${player.firstname || ""} ${player.lastname || ""}`.trim()
            );

          return {
            id: team.id,
            name: team.name,
            level: team.label || team.category,
            scorecoUrl: team.scorenco_url,
            players,
            coaches,
            playersCount: players.length,
            coachesCount: coaches.length,
          };
        });

        setTeams(formattedTeams);
        setActiveTeamIndex(0);
      } catch (error) {
        console.error("Erreur Directus équipes :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <section className="teams-section" id="equipes">
        <p className="section-sub">Chargement des équipes...</p>
      </section>
    );
  }

  if (!teams.length) {
    return (
      <section className="teams-section" id="equipes">
        <p className="section-sub">Aucune équipe renseignée pour le moment.</p>
      </section>
    );
  }

  const activeTeam = teams[activeTeamIndex] || teams[0];

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
              key={team.id}
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
                <strong>{activeTeam.playersCount}</strong>
                <span>Joueurs</span>
              </div>

              <div>
                <strong>{activeTeam.coachesCount}</strong>
                <span>Coachs</span>
              </div>
            </div>
          </div>

          <div className="team-detail-content">
            <div>
              <h4>Effectif</h4>

              <div className="players-grid">
                {activeTeam.players.length > 0 ? (
                  activeTeam.players.map((player, index) => (
                    <div className="player-card" key={`${player}-${index}`}>
                      {player}
                    </div>
                  ))
                ) : (
                  <p className="empty-team-info">Aucun joueur renseigné.</p>
                )}
              </div>
            </div>

            <div>
              <h4>Encadrement</h4>

              {activeTeam.coaches.length > 0 ? (
                <div className="coaches-list">
                  {activeTeam.coaches.map((coach, index) => (
                    <div className="coach-card" key={`${coach}-${index}`}>
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