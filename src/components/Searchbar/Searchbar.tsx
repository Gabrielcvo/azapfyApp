import React, { ChangeEvent, useState } from "react";

import { useHeros } from "../../hooks/useHeros";

type SearchBarProps = {
  placeholder: string;
};

function SearchBar({ placeholder }: SearchBarProps) {
  const { fetchedHeros, handleFilterHeros } = useHeros();
  const [searchHero, setSearchHero] = useState("");

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    setSearchHero(search);
    const newFilter = fetchedHeros?.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });

    if (search === "") {
      handleFilterHeros(undefined);
    } else {
      handleFilterHeros(newFilter ? newFilter : []);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={searchHero}
          onChange={handleFilter}
        />
      </div>
    </div>
  );
}

export default SearchBar;
