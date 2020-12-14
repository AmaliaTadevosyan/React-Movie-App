import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Loading from "./../Loading/Loading";
import StyledCard from ".././StyledCard";
import { API_URL } from "../../config";
import { handleResponse } from "../../helpers";
import { withRouter } from "react-router-dom";
import MyPagination from ".././MyPagination";
import { Typography } from "@material-ui/core";

const Series = ({ history }) => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const fetchSeries = () => {
    setLoading(true);
    fetch(API_URL)
      .then(handleResponse)
      .then((data) => {
        console.log(data);
        const entries = data.entries;
        const totalSeries = entries.filter(
          (entrie) => entrie.programType === "series"
        );
        const fetchedSeries = totalSeries
          // .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .sort((a, b) => (a.title > b.title ? 1 : -1));

        setLoading(false);
        setSeries(fetchedSeries);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchSeries();
  }, [page]);

  const handlePaginationClick = (event, value) => {
    setPage(value);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Ooops...Something went wrong!</p>;
  }

  return (
    <main>
      <Typography variant='h2' align='center'>
        Series
      </Typography>
      <Grid container spacing={4} justify='center'>
        {series
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((film) => {
            return <StyledCard film={film}></StyledCard>;
          })}
      </Grid>
      <MyPagination
        count={Math.ceil(series.length / itemsPerPage)}
        page={page}
        onChange={handlePaginationClick}
      />
    </main>
  );
};

export default withRouter(Series);
