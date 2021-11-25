import "./card.scss";

import { api } from "../../services/api/api";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { Hero } from "../types/types";

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
  }, [loadHero]);

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
          <img className="card-image" src={hero.images.sm} alt={hero.name} />
          <h1 className="card-title">{hero.name}</h1>
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

/* export function Card() {
  const [openModal, setOpenModal] = useState(false);
  const [heros, setHeros] = useState<Hero[]>();
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const loadHero = useCallback(async () => {
    const { data } = await api.get(`/ps/metahumans`);

    setHeros(data);
  }, []);

  useEffect(() => {
    loadHero();
  }, [loadHero]);

  return (
    <div className="mainContent">
      
      <Grid container spacing={1}>
        {heros?.map((hero, idx) => (
          <Grid
            item
            lg={2}
            md={3}
            sm={4}
            xs={6}
            onClick={() => {
              setOpenModal(true);
              setCurrentModalIndex(idx);
            }}
          >
            
            <Paper cursor="pointer">
              <img src={hero.images.sm} alt={hero.name} />
              <h1 className="card-title">{hero.name}</h1>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {openModal ? (
        <Modal
          data={heros && heros[currentModalIndex]}
          closeModal={() => setOpenModal(false)}
        />
      ) : null}
    </div>
  );
} */
