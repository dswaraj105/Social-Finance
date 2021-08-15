import { Fragment } from "react";

import Grid from "@material-ui/core/Grid";

import cssClasses from "./Pricerow.module.css";

const Pricerow = (props) => {

  return (
    <Fragment>
      <Grid className={cssClasses.box} item sm={3}>
        {props.name}
      </Grid>
      <Grid item className={cssClasses.box} sm={1}>
        {props.valarr[0]}
      </Grid>
      <Grid item className={cssClasses.box} sm={2}>
        {props.valarr[1]}
      </Grid>
      <Grid item className={cssClasses.box} sm={3}>
        {props.valarr[2]}
      </Grid>
      <Grid item className={cssClasses.box} sm={1}>
        {props.valarr[3]}
      </Grid>
      <Grid item className={cssClasses.box} sm={2}>
        {props.valarr[4]}
      </Grid>
    </Fragment>
  );
};

export default Pricerow;
