import "./card.scss";

import { api } from "../../services/api/api";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";

export type Hero = {
  name: string;
  images: { sm: string };
};

export function Card() {
  const [openModal, setOpenModal] = useState(false);
  const [heros, setHeros] = useState<Hero[]>();
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const loadHero = useCallback(async () => {
    const { data } = await api.get(`/ps/metahumans`);

    setHeros(data);
  }, []);

  useEffect(() => {
    loadHero();
  }, []);

  return (
    <div className="mainContent">
      {heros?.map((hero, idx) => (
        <div
          onClick={() => {
            setOpenModal(true);
            setCurrentModalIndex(idx);
          }}
          className="card"
        >
          <h1 className="card-title">{hero.name}</h1>
          <img src={hero.images.sm} alt={hero.name} />
        </div>
      ))}

      {openModal ? (
        <Modal
          data={heros && heros[currentModalIndex]}
          closeModal={() => setOpenModal(false)}
        />
      ) : null}
    </div>
  );
}
