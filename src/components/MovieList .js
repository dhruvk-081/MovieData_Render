import React from "react";
import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <>
      <div className="table-content">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
