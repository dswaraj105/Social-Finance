import { Fragment } from "react";

import Grid from "@material-ui/core/Grid";

import cssClasses from "./ShareHolding.module.css";

const ShareHolding = (props) => {
  
  const topics = Object.keys(props.values);
  const displayRow = topics.map((topic, index) => {
    return (
      <Fragment key={index}>
        <Grid item sm={8} className={cssClasses.box}>
          {topic}
        </Grid>
        <Grid item sm={4} className={cssClasses.box}>
          {props.values[topic]}
        </Grid>
      </Fragment>
    );
  });

  return (
    <Grid container className={cssClasses.mainbox}>
      <Grid item sm={12} className={cssClasses.heading}>
        Share Holding
      </Grid>
      {displayRow}
    </Grid>
  );
};

export default ShareHolding;
