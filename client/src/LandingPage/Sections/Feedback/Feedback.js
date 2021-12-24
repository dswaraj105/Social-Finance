import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "fixed",
    bottom: "10px",
    right: "10px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSddNJ58qnswSa7nd3WOaYzlhCRBmqjRVNsKhbe9cDLD7-GA6A/viewform" target="_blank">
      <div className={classes.root}>
        <Fab variant="extended" color="secondary">
            <NavigationIcon className={classes.extendedIcon} />
            Leave Us A Feedback
        </Fab>
      </div>
    </a>
  );
}
