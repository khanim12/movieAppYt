import React, { createContext, useContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
const GlobalContext = createContext();
const initialState = {
  watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
  watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
};
export const useGlobal = () => useContext(GlobalContext);
function GlobalState({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchList = (id) => {
    dispatch({type:"REMOVE_MOVIE_TO_WATCHLIST",payload:id})
  }
  const addMovieToWatched = (movie) => {
    dispatch({type:"ADD_MOVIE_TO_WATCHED",payload:movie})
  }
  const moveToWatchList = (movie) => {
    dispatch({type:"MOVE_TO_WATCHLIST",payload:movie})
  }

  const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_TO_WATCHED" , payload: id})
  }
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
    localStorage.setItem("watched",JSON.stringify(state.watched))
  },[state])

  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, removeMovieFromWatchList,addMovieToWatchlist,addMovieToWatched,watched:state.watched,moveToWatchList,removeMovieFromWatched}}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
