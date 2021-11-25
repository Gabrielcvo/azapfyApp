import { Card } from "../components/Card/Card";
import { Header } from "../components/Header/Header";
import "../styles/home.scss";

export function Home() {
  return (
    <div className="mainHome">
      <Header />
      <Card />
    </div>
  );
}
