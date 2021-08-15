import { Grid } from "@material-ui/core";

import cssClasses from './Row.module.css';

const Row = (props) => {
  return (
    <Grid container>
      <Grid item className={cssClasses.grid} sm={6}>{props.name}</Grid>
      <Grid item className={cssClasses.grid} sm={3}>{props.general}</Grid>
      <Grid item className={cssClasses.grid} sm={3}>{props.senior}</Grid>
    </Grid>
  );
};

export default Row;
