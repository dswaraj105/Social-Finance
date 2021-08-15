import { Grid, Paper, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

import cssClasses from "./Bond.module.css";

export default function Bond(props) {
  return (
    <Paper className={cssClasses.Bond} elevation={2}>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <Typography className={cssClasses.cname} variant="button">
            {props.name}
          </Typography>
          <br />
          <Typography variant="overline">Last traded on {props.lasttrade}</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="overline">Coupan</Typography>
          <br />
          <Typography variant="button">{props.rate}</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="overline">Face Value</Typography>
          <br />
          <Typography variant="button">Rs. {props.faceValue}</Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="overline">Time till maturity</Typography>
          <br />
          <Typography variant="button">{props.maturity}</Typography>
        </Grid>
        <Grid item sm={3}>
          <Typography variant="overline">Credit Rating</Typography>
          <br />
          <Typography variant="button">{props.rating}</Typography>
          <StarIcon className={cssClasses.star} />
          <StarIcon className={cssClasses.star} />
          <StarIcon className={cssClasses.star} />
          <StarIcon className={cssClasses.star} />
          <StarIcon className={cssClasses.star} />
        </Grid>
      </Grid>
    </Paper>
  );
}
