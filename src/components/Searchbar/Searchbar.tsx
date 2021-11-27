import React, { ChangeEvent, useState } from "react";

import { useHeros } from "../../hooks/useHeros";
import { Hero } from "../../types/types";

type SearchBarProps = {
  placeholder: string;
};

function SearchBar({ placeholder }: SearchBarProps) {
  const { fetchedHeros, handleFilterHeros } = useHeros();
  const [filteredData, setFilteredData] = useState<Hero[]>();
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

  const clearInput = () => {
    setFilteredData([]);
    setSearchHero("");
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
