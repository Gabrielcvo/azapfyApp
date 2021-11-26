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
  selectCurrentHero: (idx: number) => void;
};

export const HerosContext = createContext({} as HeroContextType);

export function HerosContextProvider(props: HeroContextProviderProps) {
  const [heros, setHeros] = useState<Hero[]>();
  const [currentHero, setCurrentHero] = useState<Hero>();

  function selectCurrentHero(idx: number) {
    setCurrentHero(heros && heros[idx]);
  }

  const loadHero = useCallback(async () => {
    const { data } = await api.get(`/ps/metahumans`);

    setHeros(data);
  }, []);

  useEffect(() => {
    loadHero();
  }, [loadHero]);

  return (
    <HerosContext.Provider value={{ heros, currentHero, selectCurrentHero }}>
      {props.children}
    </HerosContext.Provider>
  );
}
