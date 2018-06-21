import React from "react";

function Search({ weatherInfo }) {
  return (
    <div className="controls">
      <form className="search" id="search">
        <label className="search__label" htmlFor="search-tf">
          City
        </label>
        <input
          className="search__input"
          id="search-tf"
          name="city"
          placeholder="Enter city name"
          autocomplete="city"
        />
        <button className="btn search__btn">Go</button>
      </form>
    </div>
  );
}

export default Search;
