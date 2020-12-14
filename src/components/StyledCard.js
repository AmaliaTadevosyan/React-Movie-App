import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 600,
    height: 600,
    marginBottom: 20,
  },
});

export default function StyledCard({ film }) {
  const classes = useStyles();
  return (
    <Grid item>
      <Card key={film.title} className={classes.root}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt={film.title}
            height='340'
            image={film.images["Poster Art"].url}
            title={film.title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {film.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {film.description}
            </Typography>
            <Typography variant='h5' color='textSecondary' component='p'>
              <strong>Program Type</strong>
              <span> {film.programType}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
