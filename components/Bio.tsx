"use client";
import { useState, useEffect } from "react";

export default function Bio() {
  const images = [
    "/images/noah1.jpg",
    "/images/noah2.jpg",
    "/images/noah3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="bio" className="BioSection">
      <div className="BioContainer">
        {/* Colonne gauche : Slider */}
        <div className="BioSlider">
          <img
            src={images[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            className="BioImage"
          />
          <div className="SliderDots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`Dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Colonne droite : Texte */}
        <div className="BioText">
          <h2>À propos de Noah Belland</h2>
          <p>
            Passionné de tennis de table depuis l’enfance, Noah s’est rapidement imposé comme un
            joueur prometteur sur la scène française. Rigoureux à l’entraînement et déterminé en
            compétition, il poursuit un seul objectif : repousser ses limites et inspirer les
            générations à venir.
          </p>
          <p>
            Objectif : atteindre le haut niveau national et représenter la France sur la scène
            internationale.
          </p>
        </div>
      </div>
    </section>
  );
}
