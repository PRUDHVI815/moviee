// src/utils/localStorage.ts
interface Movie {
  id: number;
  title: string;
  // add other properties as needed
}
const WATCHLIST_KEY = "watchlist";

export const loadWatchlist = () => {
  const saved = localStorage.getItem(WATCHLIST_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveWatchlist = (movies: Movie[]) => {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(movies));
};
