import { useHeros } from "../../hooks/useHeros";

import "./modal.scss";

interface ModalProps {
  closeModal: () => void;
}

export function Modal({ closeModal }: ModalProps) {
  const { currentHero } = useHeros();
  return (
    <div className="modalOverlay">
      <header className="modalHeader">
        <div className="headerWrapper">
          <div className="headerTitle">
            <h1 className="title">{currentHero?.name} - Dossier</h1>
          </div>
          <button className="closeModal" onClick={closeModal}>
            <img
              className="closeIcon"
              src="https://cdn-icons.flaticon.com/png/512/3161/premium/3161830.png?token=exp=1637879470~hmac=f9d1e4e57bed21d13c803904b3c4f1d6"
              alt=""
            />
          </button>
        </div>
      </header>

      <div className="modalContent">
        <div className="imgWrapper">
          <img
            className="modalHeroImage"
            src={currentHero?.images.md}
            alt={currentHero?.name}
          />
          <div className="ocupationCard">
            <div className="modalTitleWrapper">
              <h2 className="modalCardTitle">Ocupation</h2>
            </div>
            <div className="ocupation">{currentHero?.work.occupation}</div>
          </div>
        </div>

        <div className="modal-card">
          <div className="modalTitleWrapper">
            <h2>Power Stats</h2>
          </div>
          <ul className="informationTable">
            <li className="hero-information">
              Inteligence: {currentHero?.powerstats.intelligence}
            </li>
            <li className="hero-information">
              Strenght: {currentHero?.powerstats.strength}
            </li>
            <li className="hero-information">
              Speed: {currentHero?.powerstats.speed}
            </li>
            <li className="hero-information">
              Durability: {currentHero?.powerstats.durability}
            </li>
            <li className="hero-information">
              Power: {currentHero?.powerstats.power}
            </li>
            <li className="hero-information">
              Combat: {currentHero?.powerstats.combat}
            </li>
          </ul>
        </div>

        <div className="modal-card1">
          <div className="modalTitleWrapper">
            <h2 className="modalCardTitle">Appearance</h2>
          </div>
          <ul className="informationTable">
            <li className="hero-information">
              Gender: {currentHero?.appearance.gender}
            </li>
            <li className="hero-information">
              Race: {currentHero?.appearance.race}
            </li>
            <li className="hero-information">
              Height: {currentHero?.appearance.height[1]}
            </li>
            <li className="hero-information">
              Weight: {currentHero?.appearance.weight[1]}
            </li>
            <li className="hero-information">
              Eye Color: {currentHero?.appearance.eyeColor}
            </li>
            <li className="hero-information">
              Hair Color: {currentHero?.appearance.hairColor}
            </li>
          </ul>
        </div>

        <div className="modal-card2">
          <div className="modalTitleWrapper">
            <h2 className="modalCardTitle">Biography</h2>
          </div>
          <ul className="informationTable">
            <li className="hero-information">
              Full Name: {currentHero?.biography.fullName}
            </li>
            <li className="hero-information">
              Alter Egos: {currentHero?.biography.alterEgos}
            </li>
            <li className="hero-information">
              Aliases: {currentHero?.biography.aliases[0]}
            </li>
            <li className="hero-information">
              Place of birth: {currentHero?.biography.placeOfBirth}
            </li>
            <li className="hero-information">
              Publisher: {currentHero?.biography.publisher}
            </li>
            <li className="hero-information">
              Alignment: {currentHero?.biography.alignment}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
