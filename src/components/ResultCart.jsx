import React from "react";
import { useGlobal } from "../context/GlobalState";

function ResultCart({ movie }) {
  const { watched, watchlist, addMovieToWatchlist } = useGlobal();
  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  const storedMovie = watchlist.find((o) => o.id === movie.id)
    ? true
    : !!storedMovieWatched;
  return (
    <div>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt=""
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>
        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">
              {movie.release_date ? movie.release_date.slice(0, 4) : "-"}
            </h4>
            <h4 className="release-date">
              IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
            </h4>
          </div>
          <div className="controls">
            <button
              disabled={storedMovie}
              onClick={() => addMovieToWatchlist(movie)}
              className="btn"
            >
              Add to WatchList
            </button>
            <button
              disabled={storedMovieWatched}
              onClick={() => addMovieToWatchlist(movie)}
              className="btn"
            >
              Add to Watched
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCart;
