import React from "react";
import MovieControls from "./MovieControls";

function MovieCard({ movie,type }) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt=""
        />
      ) : (
        <div className="filler-poster"></div>
          )}
          <MovieControls type={type} movie={ movie} />
    </div>
  );
}

export default MovieCard;
