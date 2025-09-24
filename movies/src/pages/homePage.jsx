import React from "react";
//import Grid from "@mui/material/Grid2";
import Grid from "@mui/material/Grid";

const HomePage = (props) => {
  const movies = props.movies;

  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <h1> HomePage </h1>
      </Grid>
    </Grid>
  );
};
export default HomePage;
