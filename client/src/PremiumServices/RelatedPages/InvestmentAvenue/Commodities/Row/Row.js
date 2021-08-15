import { Grid } from "@material-ui/core";

import cssClasses from './Row.module.css';

const Row = (props) => {
  return (
    <Grid container>
      <Grid item className={cssClasses.grid} sm={5}>{props.name}</Grid>
      <Grid item className={cssClasses.grid} sm={2}>{props.one}%</Grid>
      <Grid item className={cssClasses.grid} sm={2}>{props.twelve}%</Grid>
      <Grid item className={cssClasses.grid} sm={3}>{props.ytd}%</Grid>
    </Grid>
  );
};

export default Row;
