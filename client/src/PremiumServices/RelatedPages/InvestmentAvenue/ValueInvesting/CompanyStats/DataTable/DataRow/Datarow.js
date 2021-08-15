import { Fragment } from "react";

import Grid from "@material-ui/core/Grid";

import cssClasses from "./Datarow.module.css";

const Datarow = (props) => {
  
  const displayValues = props.valarr.map((val, index) => {
    return (
      <Grid key={index} item className={cssClasses.box} sm={1}>
        {val}
      </Grid>
    );
  });

  return (
    <Fragment>
      <Grid item className={cssClasses.box} sm={6}>
        {props.topic}
      </Grid>
      {displayValues}
      {/* <Grid item className={cssClasses.box} sm={1}>
        Rs
      </Grid>
      <Grid item className={cssClasses.box} sm={1}>
        301.2
      </Grid>
      <Grid item className={cssClasses.box} sm={1}>
        233
      </Grid>
      <Grid item className={cssClasses.box} sm={1}>
        456.66
      </Grid>
      <Grid item className={cssClasses.box} sm={1}>
        169.5
      </Grid>
      <Grid className={cssClasses.box} item sm={1}>
        98.1
      </Grid> */}
    </Fragment>
  );
};

export default Datarow;
