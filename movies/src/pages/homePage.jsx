//import Grid from "@mui/material/Grid2";
//import Grid2 from "@mui/material/Unstable_Grid2";

import React from "react";
import MovieList from "../components/movieList";
import Grid from "@mui/material/Grid";

const HomePage = (props) => {
  const movies = props.movies;

  return (
    <Grid container>
      <Grid size={12}>
        <h1> HomePage </h1>
      </Grid>
      <Grid container>
        <MovieList movies={movies}></MovieList>
      </Grid>
    </Grid>
  );
};
export default HomePage;
