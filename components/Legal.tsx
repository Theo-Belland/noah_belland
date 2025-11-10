"use client";
import { useState } from "react";

export default function LegalModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bouton pour ouvrir le pop-up */}
      <button className="mentions" onClick={() => setIsOpen(true)}>
        Mentions légales
      </button>

      {/* Pop-up modal */}
      {isOpen && (
        <div className="ModalOverlay" onClick={() => setIsOpen(false)}>
          <div
            className="ModalContent"
            onClick={(e) => e.stopPropagation()} // empêcher la fermeture quand on clique dans la modal
          >
            <h1>Mentions légales</h1>

            <h2>Éditeur du site</h2>
            <p>
              Nom : Noah Belland <br />
              Ville : [Votre ville], France <br />
              Email : <a href="mailto:contact@noahbelland.com">contact@noahbelland.com</a>
            </p>

            <h2>Hébergeur</h2>
            <p>
              Nom : Vercel (ou OVH/Netlify selon l’hébergeur) <br />
              Adresse : [Adresse complète de l’hébergeur] <br />
              Téléphone : [Téléphone]
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              Tous les contenus présents sur ce site (textes, images, vidéos, logos) sont la
              propriété de Noah Belland. Toute reproduction totale ou partielle sans autorisation
              est interdite.
            </p>

            <h2>Politique de confidentialité</h2>
            <p>
              Les informations recueillies via le formulaire de contact sont utilisées uniquement
              pour répondre aux demandes. Conformément au RGPD, vous pouvez demander la suppression
              de vos données à <a href="mailto:contact@noahbelland.com">contact@noahbelland.com</a>.
            </p>

            <h2>Clause de non-responsabilité</h2>
            <p>
              Les informations publiées sur ce site sont fournies à titre indicatif. L’éditeur ne
              saurait être tenu responsable des éventuelles erreurs ou omissions.
            </p>

            <button className="Button CloseButton" onClick={() => setIsOpen(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
