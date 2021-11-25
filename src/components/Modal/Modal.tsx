import { Hero } from "../types/types";

import CloseIcon from "../../assets/images/window-close-regular.svg";

import "./modal.scss";

interface ModalProps {
  data: Hero | undefined;
  closeModal: () => void;
}

export function Modal({ data, closeModal }: ModalProps) {
  return (
    <div className="modalOverlay">
      <header className="modalHeader">
        <div className="headerWrapper">
          <div className="headerTitle">
            <h1 className="title">{data?.name} - Dossier</h1>
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
            src={data?.images.md}
            alt={data?.name}
          />
          <div className="ocupationCard">
            <div className="modalTitleWrapper">
              <h2 className="modalCardTitle">Ocupation</h2>
            </div>
            <div className="ocupation">{data?.work.occupation}</div>
          </div>
        </div>

        <div className="modal-card">
          <div className="modalTitleWrapper">
            <h2>Power Stats</h2>
          </div>
          <ul className="informationTable">
            <li className="hero-information">
              Inteligence: {data?.powerstats.intelligence}
            </li>
            <li className="hero-information">
              Strenght: {data?.powerstats.strength}
            </li>
            <li className="hero-information">
              Speed: {data?.powerstats.speed}
            </li>
            <li className="hero-information">
              Durability: {data?.powerstats.durability}
            </li>
            <li className="hero-information">
              Power: {data?.powerstats.power}
            </li>
            <li className="hero-information">
              Combat: {data?.powerstats.combat}
            </li>
          </ul>
        </div>

        <div className="modal-card1">
          <div className="modalTitleWrapper">
            <h2 className="modalCardTitle">Appearance</h2>
          </div>
          <ul className="informationTable">
            <li className="hero-information">
              Gender: {data?.appearance.gender}
            </li>
            <li className="hero-information">Race: {data?.appearance.race}</li>
            <li className="hero-information">
              Height: {data?.appearance.height[1]}
            </li>
            <li className="hero-information">
              Weight: {data?.appearance.weight[1]}
            </li>
            <li className="hero-information">
              Eye Color: {data?.appearance.eyeColor}
            </li>
            <li className="hero-information">
              Hair Color: {data?.appearance.hairColor}
            </li>
          </ul>
        </div>

        <div className="modal-card2">
          <div className="modalTitleWrapper">
            <h2 className="modalCardTitle">Biography</h2>
          </div>
          <ul className="informationTable">
            <li className="hero-information">
              Full Name: {data?.biography.fullName}
            </li>
            <li className="hero-information">
              Alter Egos: {data?.biography.alterEgos}
            </li>
            <li className="hero-information">
              Aliases: {data?.biography.aliases[0]}
            </li>
            <li className="hero-information">
              Place of birth: {data?.biography.placeOfBirth}
            </li>
            <li className="hero-information">
              Publisher: {data?.biography.publisher}
            </li>
            <li className="hero-information">
              Alignment: {data?.biography.alignment}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
