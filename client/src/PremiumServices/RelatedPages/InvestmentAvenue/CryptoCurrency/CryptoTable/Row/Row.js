import { Grid } from "@material-ui/core";

import cssClasses from "./Row.module.css";

const Row = (props) => {
  return (
    <Grid container className={cssClasses.Row}>
      <Grid className={cssClasses.navitem} item xs={1}>
        {props.num}
      </Grid>
      <Grid
        className={[cssClasses.navitem, cssClasses.left].join(" ")}
        item
        xs={3}
      >
        {props.name} {props.symbol}
      </Grid>
      <Grid className={cssClasses.navitem} item xs={2}>
        {props.price}
      </Grid>
      <Grid className={cssClasses.navitem} item xs={1}>
        {props.day} %
      </Grid>
      <Grid className={cssClasses.navitem} item xs={1}>
        {props.week} %
      </Grid>
      <Grid className={cssClasses.navitem} item xs={2}>
        ${props.marketcap}
      </Grid>
      <Grid className={[cssClasses.navitem].join(" ")} item xs={2}>
        ${props.volume}
      </Grid>
    </Grid>
  );
};

export default Row;
