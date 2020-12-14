import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    textDecoration: "none",
    padding: 20,
    color: "#fff",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <ul style={{ display: "flex", justifyContent: "center" }}>
          <Link to='/' className={classes.text}>
            <Typography variant='h5'>Home</Typography>
          </Link>
          <Link to='/series' className={classes.text}>
            <Typography variant='h5'>Series</Typography>
          </Link>
          <Link to='/movies' className={classes.text}>
            <Typography variant='h5'>Movies</Typography>
          </Link>
        </ul>
      </AppBar>
    </div>
  );
}
