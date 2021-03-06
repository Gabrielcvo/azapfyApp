import {
  ReactNode,
  useCallback,
  useEffect,
  useState,
  createContext,
} from "react";

import { api } from "../services/api/api";

import { Hero } from "../types/types";

type HeroContextProviderProps = {
  children: ReactNode;
};

type HeroContextType = {
  heros: Hero[] | undefined;
  currentHero: Hero | undefined;
  fetchedHeros: Hero[] | undefined;
  selectCurrentHero: (idx: number) => void;
  handleFilterHeros: (filteredHeros: Hero[] | undefined) => void;
};

export const HerosContext = createContext({} as HeroContextType);

export function HerosContextProvider(props: HeroContextProviderProps) {
  const [heros, setHeros] = useState<Hero[]>();
  const [currentHero, setCurrentHero] = useState<Hero>();
  const [fetchedHeros, setFetchedHeros] = useState<Hero[]>();

  function handleFilterHeros(filteredHeros: Hero[] | undefined) {
    setHeros(filteredHeros ? filteredHeros : fetchedHeros);
  }

  function selectCurrentHero(idx: number) {
    setCurrentHero(heros && heros[idx]);
  }

  const loadHero = useCallback(async () => {
    const { data } = await api.get(`/ps/metahumans`);

    setFetchedHeros(data);
    setHeros(data);
  }, []);

  useEffect(() => {
    loadHero();
  }, [loadHero]);

  return (
    <HerosContext.Provider
      value={{
        heros,
        currentHero,
        fetchedHeros,
        selectCurrentHero,
        handleFilterHeros,
      }}
    >
      {props.children}
    </HerosContext.Provider>
  );
}
