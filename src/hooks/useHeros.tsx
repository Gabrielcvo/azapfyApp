import { useContext } from "react";

import { HerosContext } from "../contexts/HerosContext";

export const useHeros = () => {
  const herosData = useContext(HerosContext);

  return herosData;
};
