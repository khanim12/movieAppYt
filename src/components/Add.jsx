import React, { useState } from "react";
import ResultCart from "./ResultCart";

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  function onChange(e) {
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&include_adult=false&language=en-US&page=1&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results.slice(0,5)));
  }
  return (
    <div>
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
            <div className="titles">
              <h1>Xos geldiniz</h1>
              <h2>
                Milyonlarca film, TV şovu ve keşfedilecek kişi. indi keşfedin.
              </h2>
            </div>
            <div className="input-wrapper">
              <input
                onChange={onChange}
                value={query}
                type="text"
                placeholder="Film,Dizi,Kisi ara ...."
              />
            </div>
            {results && (
              <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id}>{<ResultCart movie={movie} />}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
