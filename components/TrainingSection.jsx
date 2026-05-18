"use client";

import { useEffect, useState } from "react";

const DIRECTUS_URL = "https://directus-production-8156.up.railway.app";

const daysOrder = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

export default function TrainingSection() {
  const [trainingDays, setTrainingDays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrainings() {
      try {
        const res = await fetch(
          `${DIRECTUS_URL}/items/trainings?sort=sort&limit=-1&t=${Date.now()}`,
          {
            cache: "no-store",
          }
        );

        const data = await res.json();
        const trainings = data.data || [];

        const groupedDays = daysOrder
          .map((day) => {
            const sessions = trainings
              .filter((training) => training.day === day)
              .map((training) => ({
                id: training.id,
                time: `${training.start_time} – ${training.end_time}`,
                category: training.category,
                details: training.details,
                coach: training.coach,
                location: training.location,
              }));

            return {
              day,
              sessions,
            };
          })
          .filter((day) => day.sessions.length > 0);

        setTrainingDays(groupedDays);
      } catch (error) {
        console.error("Erreur Directus entraînements :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrainings();
  }, []);

  if (loading) {
    return (
      <section className="training-section" id="entrainements">
        <p className="section-sub">Chargement du planning...</p>
      </section>
    );
  }

  if (!trainingDays.length) {
    return (
      <section className="training-section" id="entrainements">
        <p className="section-sub">Aucun entraînement renseigné pour le moment.</p>
      </section>
    );
  }

  return (
    <section className="training-section" id="entrainements">
      <div className="training-heading">
        <div className="section-label">Planning</div>

        <h2 className="section-title">
          Planning <em>entraînement</em>
        </h2>

        <p className="section-sub">
          Retrouvez les créneaux d’entraînement 2025-2026 par jour, catégorie,
          horaire et salle.
        </p>
      </div>

      <div className="training-planning">
        {trainingDays.map((day) => (
          <div className="training-day-column" key={day.day}>
            <div className="training-day-title">{day.day}</div>

            <div className="training-sessions">
              {day.sessions.map((session) => (
                <div className="training-session" key={session.id}>
                  <div className="training-session-time">{session.time}</div>

                  <div className="training-session-category">
                    {session.category}
                  </div>

                  {session.details && (
                    <div className="training-session-years">
                      {session.details}
                    </div>
                  )}

                  {session.coach && (
                    <div className="training-session-coaches">
                      {session.coach}
                    </div>
                  )}

                  {session.location && (
                    <div className="training-session-place">
                      {session.location}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}