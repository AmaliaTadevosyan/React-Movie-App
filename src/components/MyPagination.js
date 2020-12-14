import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
});

export default function MyPagination({ page, onChange, count }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color='primary'
      />
    </div>
  );
}
