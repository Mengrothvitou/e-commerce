import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      width:260,
      height:200,
      margin:20,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

export default function Dashboard(){
    const classes = useStyles();
    return(
        <>
 <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3> New register</h3>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
          <h3>All Order</h3></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3>Total Sale</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
        </>
    )
}