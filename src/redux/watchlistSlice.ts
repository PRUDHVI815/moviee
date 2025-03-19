// src/redux/watchlistSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types/Movie";
import { loadWatchlist, saveWatchlist } from "../utils/localStorage";

interface WatchlistState {
  movies: Movie[];
}

const initialState: WatchlistState = {
  movies: loadWatchlist(),
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<Movie>) => {
      const movie = action.payload;
      if (!state.movies.find((m) => m.id === movie.id)) {
        state.movies.push(movie);
        saveWatchlist(state.movies);
      }
    },
    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter((m) => m.id !== action.payload);
      saveWatchlist(state.movies);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
