import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title}</h3>
          <h4>{movie.time}</h4>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <h4>{movie.metascore}</h4>
        </div>
      ))}
    </div>
  );
};

export default Movies;

// title: 'Doctor Strange',
//     time: 115,
//     genres: ['Action', 'Adventure', 'Fantasy'],
//     metascore: 74
