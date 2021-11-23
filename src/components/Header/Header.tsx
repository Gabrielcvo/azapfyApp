import "./header.scss";

/* import Search from '@material-ui/icons'; */

export function Header() {
  return (
    <div className="home">
      <header className="header">
        <div className="searchBar">
          <input
            className="searchbar_input"
            type="text"
            placeholder="Digite o nome do herói"
            name="hero"
            id="hero"
            autoComplete="off"
          />
        </div>
      </header>
    </div>
  );
}
