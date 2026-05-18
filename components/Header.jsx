"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="nav" className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <a href="/" className="nav-logo" onClick={closeMenu}>
        <img src="/assets/logo/logo.png" alt="Segré Basket" />
      </a>

      {/* MENU PC */}
      <ul className="nav-links desktop-links">
        <li><a href="/#accueil">Accueil</a></li>
        <li><a href="/#club">Le Club</a></li>
        <li><a href="/#equipes">Équipes</a></li>
        <li><a href="/#entrainements">Entraînements</a></li>
        <li><a href="/#galerie">Galerie</a></li>
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

      <div className="nav-right desktop-contact">
        <a href="/contact" className="nav-cta">
          Contact
        </a>
      </div>

      {/* BURGER MOBILE */}
      <button
        className={`burger-btn ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul className="mobile-links">
          <li><a href="/#accueil" onClick={closeMenu}>Accueil</a></li>
          <li><a href="/#club" onClick={closeMenu}>Le Club</a></li>
          <li><a href="/#equipes" onClick={closeMenu}>Équipes</a></li>
          <li><a href="/#entrainements" onClick={closeMenu}>Entraînements</a></li>
          <li><a href="/#galerie" onClick={closeMenu}>Galerie</a></li>
          <li><a href="/#actualites" onClick={closeMenu}>Informations</a></li>
          <li>
            <a
              href="https://www.helloasso.com/associations/essha-basket"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Boutique
            </a>
          </li>
        </ul>

        <a href="/contact" className="mobile-cta" onClick={closeMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}