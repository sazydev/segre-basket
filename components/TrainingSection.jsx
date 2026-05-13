const trainingDays = [
  {
    day: "Lundi",
    sessions: [
      {
        time: "17h30 – 19h00",
        category: "U15 F",
        years: "Années 2011-2012",
        coaches: "Nicolas / Anthony",
        place: "Salle Bernard Madiot",
      },
      {
        time: "19h00 – 20h30",
        category: "U18 F",
        years: "Du 04/11/2025 au 10/04/2026",
        coaches: "Nicolas / Anthony",
        place: "Salle Bernard Madiot",
      },
    ],
  },
  {
    day: "Mardi",
    sessions: [
      {
        time: "17h30 – 18h45",
        category: "U13M - U15M",
        years: "Années 2011-2012-2013-2014",
        coaches: "Valentin Cau",
        place: "Salle Bernard Madiot",
      },
      {
        time: "19h30 – 21h00",
        category: "U18 M - Seniors M",
        years: "Année 2008-2009-2010 et moins",
        coaches: "Matis Joly & Mathieu Derouet",
        place: "Salle Bernard Madiot",
      },
    ],
  },
  {
    day: "Mercredi",
    sessions: [
      {
        time: "13h30 – 15h00",
        category: "U11 - U13F",
        years: "2013-2014-2015-2016",
        coaches: "Matis Joly & Valentin Cau",
        place: "Salle Bernard Madiot",
      },
      {
        time: "15h00 – 16h30",
        category: "U13M - U15M",
        years: "Années 2011-2012-2013-2014",
        coaches: "Valentin Cau",
        place: "Salle Bernard Madiot",
      },
      {
        time: "16h30 – 18h00",
        category: "U7 - U9",
        years: "2017-2018-2019-2020",
        coaches: "Matis Joly & bénévoles",
        place: "Salle Bernard Madiot",
      },
      {
        time: "18h00 – 20h00",
        category: "U18F",
        years: "Année 2008-2009-2010",
        coaches: "Nicolas, Anthony & Matis Joly",
        place: "Salle Bernard Madiot",
      },
      {
        time: "20h30 – 22h00",
        category: "Seniors F",
        years: "",
        coaches: "Antoine Phellipot",
        place: "Salle Pinelier",
      },
    ],
  },
  {
    day: "Jeudi",
    sessions: [
      {
        time: "17h30 – 19h00",
        category: "U15 F + U13F",
        years: "Années 2011-2012-2013-2014",
        coaches: "Valentin Cau & Matis Joly",
        place: "Salle Bernard Madiot",
      },
      {
        time: "20h30 – 22h00",
        category: "Loisirs",
        years: "",
        coaches: "",
        place: "Salle Bernard Madiot",
      },
    ],
  },
  {
    day: "Vendredi",
    sessions: [
      {
        time: "17h00 – 18h00",
        category: "Musculation",
        years: "Sur inscription · 12 personnes max",
        coaches: "Valentin Cau & Matis Joly",
        place: "Salle Bernard Madiot",
      },
      {
        time: "18h15 – 19h45",
        category: "U18F",
        years: "Du 01/09/2025 au 04/11/2025 puis du 11/04/2026 au 30/06/2026",
        coaches: "Nicolas, Anthony & Matis Joly",
        place: "Salle Bernard Madiot",
      },
      {
        time: "19h30 – 21h00",
        category: "U18M - Seniors M",
        years: "Année 2008-2009-2010 et moins",
        coaches: "Matis Joly & Guillaume Mignot",
        place: "Salle Bernard Madiot",
      },
      {
        time: "21h00 – 23h00",
        category: "Seniors F",
        years: "",
        coaches: "Antoine Phellipot",
        place: "Salle Bernard Madiot",
      },
    ],
  },
];

export default function TrainingSection() {
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
              {day.sessions.map((session, index) => (
                <div className="training-session" key={`${session.category}-${index}`}>
                  <div className="training-session-time">{session.time}</div>
                  <div className="training-session-category">{session.category}</div>

                  {session.years && (
                    <div className="training-session-years">{session.years}</div>
                  )}

                  {session.coaches && (
                    <div className="training-session-coaches">{session.coaches}</div>
                  )}

                  <div className="training-session-place">{session.place}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}