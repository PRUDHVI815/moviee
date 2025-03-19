import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number | null;
}

interface MoviesState {
  watchlist: Movie[];
}

const initialState: MoviesState = {
  watchlist: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<Movie>) => {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist: (state, action: PayloadAction<Movie>) => {
      state.watchlist = state.watchlist.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = movieSlice.actions;
export default movieSlice.reducer;