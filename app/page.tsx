"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Bio from "../components/Bio";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import Legal from "../components/Legal";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showContent && <Loader />}

      {showContent && (
        <main className="Header">
          {/* Hero Section */}
          <section className="Presentation">
            <h1>Noah Belland 🏓</h1>
            <p>Joueur de tennis de table – Objectif : performance & partenariats</p>
            <a href="#sponsors" className="Button">
              Devenir partenaire
            </a>
          </section>

          <Bio />
          <Sponsors />
          <Contact />

        <footer className="Footer">
          © {new Date().getFullYear()} Noah Belland – Tous droits réservés
            <Legal />
        </footer>
        </main>
      )}
    </>
  );
}
