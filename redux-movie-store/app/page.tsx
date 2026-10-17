"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

type Movie = { name: string; inBasket: boolean; liked: boolean };

export default function Home() {
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");
  const movies = useSelector((state: { movies: Movie[] }) => state.movies);

  const basket = useSelector((state: { basket: Movie[] }) => state.basket);
  const likedMovies = useSelector(
    (state: { likedMovies: Movie[] }) => state.likedMovies,
  );

  function handleAddMovie() {
    const newMovie = { name: movieName, inBasket: false, liked: false };
    dispatch({ type: "ADD_MOVIE", payload: newMovie });
    setMovieName("");
  }
  function handleAddToBasket(movie: Movie) {
    dispatch({ type: "ADD_TO_BASKET", payload: movie });
  }
  function handleLikeMovie(movie: Movie) {
    dispatch({ type: "ADD_TO_LIKED_MOVIES", payload: movie });
  }

  return (
    <>
      <div>
        <div>
          <h1>My Movies List</h1>
        </div>
        <input
          type="text"
          placeholder="Enter movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <h2>Movies:</h2>
      <ul>
        {movies.map((movie, index) => (
          <div key={index}>
            <li>{movie.name}</li>
            <button onClick={() => handleAddToBasket(movie)}>
              Add to Basket
            </button>
            <button onClick={() => handleLikeMovie(movie)}>Like</button>
          </div>
        ))}
      </ul>

      <h2>Basket ({basket.length}):</h2>
      <ul>
        {basket.map((movie: Movie, index: number) => (
          <li key={index}>{movie.name}</li>
        ))}
      </ul>

      <h2>Liked Movies ({likedMovies.length}):</h2>
      <ul>
        {likedMovies.map((movie: Movie, index: number) => (
          <li key={index}>{movie.name}</li>
        ))}
      </ul>
    </>
  );
}
