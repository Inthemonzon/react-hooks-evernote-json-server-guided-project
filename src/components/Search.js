import React, {useState} from "react";

function Search({ onSearchData }) {
  const [searchValue, setSearchValue] = useState("")

  onSearchData(searchValue)

  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" onChange={(event) => setSearchValue(event.target.value)} />
    </div>
  );
}

export default Search;
