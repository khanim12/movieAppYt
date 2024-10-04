import React from "react";
import { useGlobal } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function WatchList() {
  const { watchlist } = useGlobal();
  console.log(watchlist)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Izlenecek filmler</h1> </div>
          {
            watchlist.length > 0 && (
              <div className="movie-grid">
                {
                  watchlist &&  watchlist.map((movie) => (
                    <MovieCard key={movie.id} movie={ movie} type="watchlist" />
                  ))
                }
              </div>
            )
          }
       
      </div>
    </div>
  );
}

export default WatchList;
