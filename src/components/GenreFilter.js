import React from "react";
import "./GenreFilter.css";

function GenreFilter({ genres, onFilterClick }) {

  function handleFilterClick(genre) {
    console.log(`Fitering by ${genre}`);
    onFilterClick(genre);
  }

  return (
    <div className="genre-filter">
      <h2>Filter by Genre:</h2>
      <div className="genre-buttons">
        {genres.map((genre) => (
          <button key={genre} onClick={() => handleFilterClick(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
