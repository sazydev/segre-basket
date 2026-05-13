"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <a href="/" className="nav-logo">
        <img src="/assets/logo/logo.png" alt="Segré Basket" />
      </a>

      <ul className="nav-links">
        <li><a href="/#accueil">Accueil</a></li>
        <li><a href="/#club">Le Club</a></li>
        <li><a href="/#equipes">Équipes</a></li>
        <li><a href="/#entrainements">Entraînements</a></li>
        <li><a href="#galerie">Galerie</a></li>
        <li><a href="/#actualites">Informations</a></li>
        <li>
  <a
    href="https://www.helloasso.com/associations/essha-basket"
    target="_blank"
    rel="noopener noreferrer"
  >
    Boutique
  </a>
</li>
      </ul>

      <div className="nav-right">
        <a href="/contact" className="nav-cta">
          Contact
        </a>
      </div>
    </nav>
  );
}