import React, { useState } from "react";
import "../css/search.css";

function Search() {
  const [recipe, setRecipe] = useState("");

  const onRecipeSearch = (event) => {
    setRecipe(event.target.value);
  };

  const onSearchButton = () => {
    alert(`You're searching for ${recipe}`);
  };
  return (
    <form className="search-form">
      <div className="search-form__row">
        <label className="search-form__label"></label>
        <input
          className="search-form__input"
          type="text"
          value={recipe}
          onChange={onRecipeSearch}
        ></input>
        <button className="searchClick" onClick={onSearchButton}>
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
