import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";

import Bio from "./Components/Bio/Bio";
import Buddies from "./Components/Buddies";
import Topics from "./Components/Topics";
import Posts from './Containers/Posts/Posts';
import jerry from "../static/images/user.jpg"
import UserState from '../store/user-state';

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

export default function Profile() {
  const classes = useStyles();
  const userCTX = useContext(UserState);
  const user = userCTX.user;

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs>
          <Bio 
            name={user? user.name : ""}
            email={user? user.email : ""}
            bio={user? user.bio: ""}
          />
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              height: "50%",
              width: "50%",
              margin: "1%",
              border: "2px solid #2BAE66",
              borderRadius: "20px",
            }}
            src={jerry}
            alt="profile"
          />
          <br />
          <Hidden smDown>
            <Grid container spacing={3}>
              <Grid item xs>
                <Paper
                  className={classes.paper}
                  style={{
                    color: "#2BAE66",
                    fontSize: "1rem",
                    backgroundColor: "#FCF6F5",
                  }}
                >
                  <h4>Followers</h4>{user? user.followers.length: 0}
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper
                  className={classes.paper}
                  style={{
                    color: "#2BAE66",
                    fontSize: "1rem",
                    backgroundColor: "#FCF6F5",
                  }}
                >
                  <h4>Following</h4>{user ? user.following.length: 0}
                </Paper>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item xs>
          <Paper style={prof} className={classes.paper}>
            Financial Buddies
            <Buddies></Buddies>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: "0%" }}>
        <Grid item xs>
          <Paper style={prof} className={classes.paper}>
            <h3>Topics/pages "name" follows</h3>
            <Topics></Topics>
          </Paper>
        </Grid>
        <Grid item sm={8} xs={12}>
            <Posts />
        </Grid>
      </Grid>
    </Container>
  );
}
const prof = {
  border: "1px solid #2BAE66",
  backgroundColor: "#FCF6F5",
  color: "#2BAE66",
};
