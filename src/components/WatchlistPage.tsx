// src/pages/WatchlistPage.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MovieCard from "../components/MovieCard";
import { Container, Grid, Typography } from "@mui/material";

const WatchlistPage: React.FC = () => {
  const watchlist = useSelector((state: RootState) => state.watchlist.movies);

  return (
    <Container>
      <Typography variant="h4" sx={{ margin: "16px 0" }}>
        Your Watchlist
      </Typography>
      <Grid container spacing={2}>
        {watchlist.length > 0 ? (
          watchlist.map((movie: { id: React.Key | null | undefined; }) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movies={movie} />
            </Grid>
          ))
        ) : (
          <Typography>No movies in your watchlist</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default WatchlistPage;
