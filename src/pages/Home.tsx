import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import "../styles/home.scss";

import { HerosContextProvider } from "../contexts/HerosContext";

export function Home() {
  return (
    <HerosContextProvider>
      <Header />
      <Card />
    </HerosContextProvider>
  );
}
