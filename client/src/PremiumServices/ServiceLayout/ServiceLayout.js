import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import cssClasses from "./ServiceLayout.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const ServiceLayout = (props) => {
  const classes = useStyles();

  return (
    <Grid item lg={3} md={6} sm={12}>
      <Paper className={classes.paper} elevation={3}>
        <Typography
          className={cssClasses.topicHeading}
          variant="h5"
          gutterBottom
        >
          {props.header}
        </Typography>
        <br />
        <Divider light />
        <Typography variant="body1" className={cssClasses.content} gutterBottom>
          {props.content}
        </Typography>
        <Link to={props.linkto} style={{ textDecoration: "none" }}>
          <Button className={cssClasses.button}>Learn More</Button>
        </Link>
      </Paper>
    </Grid>
  );
};

export default ServiceLayout;
