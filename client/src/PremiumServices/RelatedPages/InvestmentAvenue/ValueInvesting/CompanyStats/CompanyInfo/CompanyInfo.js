import { Fragment } from "react";

import Grid from "@material-ui/core/Grid";

import cssClasses from "./CompanyInfo.module.css";

const CompanyInfo = (props) => {

  const topics = Object.keys(props.values);
  const displayRow = topics.map((topic, index) => {
    return (
      <Fragment key={index}>
        <Grid item sm={2} className={cssClasses.box}>
          {topic}
        </Grid>
        <Grid item sm={10} className={cssClasses.box}>
          {props.values[topic]}
        </Grid>
      </Fragment>
    );
  });

  return (
    <Grid container className={cssClasses.mainbox}>
      <Grid item sm={12} className={cssClasses.heading}>
        Company Information
      </Grid>
      {displayRow}
      {/* <Grid item sm={2} className={cssClasses.box}>
        REGD OFF
      </Grid>
      <Grid item sm={10} className={cssClasses.box}>
        Bombay House
      </Grid>

      <Grid item sm={2} className={cssClasses.box}>
        REGD OFF
      </Grid>
      <Grid item sm={10} className={cssClasses.box}>
        Bombay House
      </Grid>

      <Grid item sm={2} className={cssClasses.box}>
        REGD OFF
      </Grid>
      <Grid item sm={10} className={cssClasses.box}>
        Bombay House
      </Grid>

      <Grid item sm={2} className={cssClasses.box}>
        REGD OFF
      </Grid>
      <Grid item sm={10} className={cssClasses.box}>
        Bombay House
      </Grid>

      <Grid item sm={2} className={cssClasses.box}>
        REGD OFF
      </Grid>
      <Grid item sm={10} className={cssClasses.box}>
        Bombay House
      </Grid> */}
    </Grid>
  );
};

export default CompanyInfo;
