import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./style.css";

import data from '../../dummyData.json';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={12} sm={6} >
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom >
          Beginner 😊
        </Typography>
        <Typography variant="h5" component="h2">
          Title descriptor 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        category 
        </Typography>
        <Typography variant="body2" component="p">
            {/* <link href="google.com" > link</link> */}
          <br />
          <Button size="small" onClick={() => console.log('this goes to the resource') } >link to resource </Button>
        </Typography>

      </CardContent>
      <CardActions>
        {/* some kind of conditional here to render 
        if this is in the home page  */}
        <Button size="small" onClick={() => console.log('button clicked') } >Add to Collection</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}