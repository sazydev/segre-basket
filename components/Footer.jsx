export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="/#accueil" className="footer-logo">
            <img src="/assets/logo/logo.png" alt="Segré Basket" />
          </a>

          <p>
            Club de basketball à Segré-en-Anjou Bleu. Un club familial,
            dynamique et ouvert à tous les niveaux.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>

          <ul>
            <li><a href="/#accueil">Accueil</a></li>
            <li><a href="/#club">Le Club</a></li>
            <li><a href="/#equipes">Équipes</a></li>
            <li><a href="/#entrainements">Entraînements</a></li>
            <li><a href="/#galerie">Galerie</a></li>
            <li><a href="/#actualites">Actualités</a></li>
        <li>
  <a
    href="https://www.helloasso.com/associations/essha-basket"
    target="_blank"
    rel="noopener noreferrer"
  >
    Boutique
  </a>
</li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>

          <ul>
            <li>
              <a href="mailto:esshabasket@hotmail.com">
                esshabasket@hotmail.com
              </a>
            </li>

            <li>
              <a href="tel:0628288695">06.28.28.86.95</a>
            </li>

            <li>
              <span>
                Salle Omnisports
                <br />
                Segré-en-Anjou Bleu
              </span>
            </li>
          </ul>
        </div>

        <div className="footer-col footer-social-col">
          <h4>Réseaux</h4>

          <div className="footer-social">
            <a href="#" className="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8.5V6.7c0-.8.2-1.2 1.3-1.2H17V2.2c-.8-.1-1.7-.2-2.5-.2-2.8 0-4.7 1.7-4.7 4.8v1.7H7v3.7h2.8V22h4.1v-9.8h2.8l.5-3.7H14z" />
              </svg>
            </a>

            <a href="#" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm0 2C5.7 4 4 5.7 4 7.8v8.4C4 18.3 5.7 20 7.8 20h8.4c2.1 0 3.8-1.7 3.8-3.8V7.8C20 5.7 18.3 4 16.2 4H7.8zm4.2 3.5A4.5 4.5 0 1 1 12 16.5 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5zM17 6.7a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 6.7z" />
              </svg>
            </a>

            <a href="#" className="social-btn" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.6 5.3c.8.9 1.8 1.5 3.1 1.7v3.5c-1.2 0-2.4-.4-3.4-1v5.7c0 3.8-2.6 6.8-6.4 6.8A6.1 6.1 0 0 1 3.7 16c0-3.4 2.7-6.1 6.1-6.1.4 0 .8 0 1.2.1v3.7c-.4-.1-.8-.2-1.2-.2A2.5 2.5 0 1 0 12.3 16V2h4.3v3.3z" />
              </svg>
            </a>
          </div>

          <div className="footer-fox">
            <img src="/assets/img/fox.png" alt="Fox" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Segré Basket. Tous droits réservés.</span>

        <div className="footer-legal">
          <a href="/mentions-legales">Mentions légales</a>
          <span>·</span>
          <a href="/politique-confidentialite">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}