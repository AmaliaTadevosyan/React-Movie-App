import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyledCard from ".././StyledCard";

import { Link } from "react-router-dom";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";
import Loading from "../Loading/Loading";

const Home = () => {
  const [films, setFilms] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFilms = () => {
    setLoading(true);
    fetch(API_URL)
      .then(handleResponse)
      .then((data) => {
        console.log(data);
        const entries = data.entries;

        setLoading(false);
        setFilms(entries);
      })
      .catch((error) => {
        setError(error);
      });
  };

  console.log(films);

  useEffect(() => {
    fetchFilms();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Ooops...Something went wrong!</p>;
  }
  return (
    <div>
      <Typography variant='h2' align='center'>
        Welcome to React Movie App
      </Typography>

      <main>
        <Grid container spacing={4} justify='center'>
          {films.map((film) => {
            return <StyledCard film={film}></StyledCard>;
          })}
        </Grid>
      </main>
    </div>
  );
};

export default Home;
