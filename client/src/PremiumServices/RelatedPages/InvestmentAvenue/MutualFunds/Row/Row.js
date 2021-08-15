import { Paper, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import cssClasses from "./Row.module.css";

const Row = (props) => {
  return (
    <Paper elevation={2} className={cssClasses.Row}>
      <div>
      <Typography variant="button" className={cssClasses.companyname}>
        {props.name}
      </Typography>
      <br />
      <Typography variant="overline">
        {props.risk}
        <FiberManualRecordIcon className={cssClasses.dot} /> 
        {props.mode}
        <FiberManualRecordIcon className={cssClasses.dot} /> {props.stars} *
      </Typography>
      </div>
      <div className={cssClasses.numbers}>
        <div className={cssClasses.numval}> <div className={cssClasses.bold}>{props.day}%</div> <div>1D</div> </div>
        <div className={cssClasses.numval}> <div className={cssClasses.bold}>{props.year}%</div> <div>1Y</div> </div>
        <div className={cssClasses.numval}> <div className={cssClasses.bold}>{props.year3}%</div> <div>3Y</div> </div>
      </div>
    </Paper>
  );
};

export default Row;
