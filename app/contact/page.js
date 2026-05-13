import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./contact.css";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <span className="contact-label">Contact</span>

          <h1>
            Contactez <span>le club</span>
          </h1>

          <p>
            Une question sur les entraînements, une séance d’essai, une inscription
            ou un renseignement ? Retrouvez ici tous les moyens pour contacter
            le Segré Basket.
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-map-card">
            <span className="contact-label">Localisation</span>

            <h2>
              Où nous <span>trouver ?</span>
            </h2>

            <p className="contact-card-text">
              Le club se situe à la Salle Omnisport de Segré, facilement accessible
              pour les entraînements, matchs et événements du club.
            </p>

            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d652.3333692449977!2d-0.8867375510669204!3d47.68844659646703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480893dc456efabb%3A0x865ba6f9345c6be9!2sSalle%20OmniSport%20de%20Segr%C3%A9!5e0!3m2!1sfr!2sfr!4v1778625522123!5m2!1sfr!2sfr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-info-card">
            <span className="contact-label">Infos utiles</span>

            <h2>
              Parler à <span>la bonne personne</span>
            </h2>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span>Président du club</span>
                <strong>Anthony LEBRETON</strong>
                <a href="tel:0628288695">06.28.28.86.95</a>
              </div>

              <div className="contact-info-item">
                <span>Contact club</span>
                <strong>Eloïse Robin</strong>
                <a href="tel:0687289839">06.87.28.98.39</a>
              </div>

              <div className="contact-info-item">
                <span>Email du club</span>
                <strong>Segré Basket</strong>
                <a href="mailto:esshabasket@hotmail.com">
                  esshabasket@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="contact-form-text">
            <span className="contact-label">Formulaire</span>

            <h2>
              Envoyer un <span>message</span>
            </h2>

            <p>
              Expliquez votre demande en quelques lignes, et nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Prénom" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Adresse email" />
              <input type="tel" placeholder="Téléphone" />
            </div>

            <select defaultValue="">
              <option value="" disabled>
                Type de demande
              </option>
              <option>Demande d’information</option>
              <option>Séance d’essai</option>
              <option>Inscription</option>
              <option>Partenariat</option>
              <option>Autre demande</option>
            </select>

            <textarea placeholder="Votre message" rows="6"></textarea>

            <button type="submit">Envoyer le message</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}