import "./header.scss";
import SearchBar from "../../components/Searchbar/Searchbar";

export function Header() {
  return (
    <div className="home">
      <header className="header">
        <div className="searchBar">
          <SearchBar placeholder="Search Hero" />
        </div>
      </header>
    </div>
  );
}
