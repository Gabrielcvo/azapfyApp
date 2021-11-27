import "./card.scss";

import { useHeros } from "../../hooks/useHeros";

import { useState } from "react";
import { Modal } from "../Modal/Modal";

export function Card() {
  const { heros, selectCurrentHero } = useHeros();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mainContent">
      {heros?.map((hero, idx) => (
        <div
          onClick={() => {
            setOpenModal(true);
            selectCurrentHero(idx);
          }}
          className="card"
          key={hero.id}
        >
          <img className="card-image" src={hero.images.sm} alt={hero.name} />
          <h1 className="card-title">{hero.name}</h1>
        </div>
      ))}

      {openModal ? <Modal closeModal={() => setOpenModal(false)} /> : null}
    </div>
  );
}
