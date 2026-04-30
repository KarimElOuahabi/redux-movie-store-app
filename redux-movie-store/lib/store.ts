import { createStore } from "redux";

export type Movie = { name: string; inBasket: boolean; liked: boolean };

export type State = {
  movies: Movie[];
  basket: Movie[];
  likedMovies: Movie[];
};

type Action =
  | { type: "ADD_MOVIE"; payload: Movie }
  | { type: "ADD_TO_BASKET"; payload: Movie }
  | { type: "ADD_TO_LIKED_MOVIES"; payload: Movie };

const initialState: State = {
  movies: [
    { name: "Inception", inBasket: false, liked: false },
    { name: "The Dark Knight", inBasket: false, liked: false },
    { name: "Interstellar", inBasket: false, liked: false },
  ],
  basket: [],
  likedMovies: [],
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "ADD_TO_BASKET": {
      const alreadyInBasket = state.basket.some(
        (m) => m.name === action.payload.name, // compare by value, not reference
      );
      return {
        ...state,
        // flip inBasket flag on the movie in the movies list
        movies: state.movies.map((m) =>
          m.name === action.payload.name ? { ...m, inBasket: !m.inBasket } : m,
        ),
        basket: alreadyInBasket
          ? state.basket.filter((m) => m.name !== action.payload.name)
          : [...state.basket, { ...action.payload, inBasket: true }],
      };
    }

    case "ADD_TO_LIKED_MOVIES": {
      const alreadyLiked = state.likedMovies.some(
        (m) => m.name === action.payload.name,
      );
      return {
        ...state,
        movies: state.movies.map((m) =>
          m.name === action.payload.name ? { ...m, liked: !m.liked } : m,
        ),
        likedMovies: alreadyLiked
          ? state.likedMovies.filter((m) => m.name !== action.payload.name)
          : [...state.likedMovies, { ...action.payload, liked: true }],
      };
    }

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
