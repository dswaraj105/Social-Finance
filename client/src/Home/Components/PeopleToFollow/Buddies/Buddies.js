import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Buddies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <Link style={{textDecoration: "none"}} to="/app/peoplesprofile/61c2e254a0d9770016f0952e">
            <ListItemText primary="Swaraj Das" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link style={{textDecoration: "none"}} to="/app/peoplesprofile/61c2e506dbaea7301c9145d1">
            <ListItemText primary="Taral Sharma" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link style={{textDecoration: "none"}} to="/app/peoplesprofile/61c2e94fdbaea7301c9145d4">
            <ListItemText primary="Ayush Jaiswal" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link style={{textDecoration: "none"}} to="/app/peoplesprofile/61c2ebe0c23f2c60d4e24e06">
            <ListItemText primary="Prabhat Reddy" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
