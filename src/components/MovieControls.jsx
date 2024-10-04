import React from "react";
import { useGlobal } from "../context/GlobalState";

function MovieControls({ movie, type }) {
  const { removeMovieFromWatched,moveToWatchList,removeMovieFromWatchList, addMovieToWatched } = useGlobal();
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button onClick={() => addMovieToWatched(movie)} className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button onClick={() => moveToWatchList(movie)} className="ctrl-btn">
            <i className="fa-fw fa fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
