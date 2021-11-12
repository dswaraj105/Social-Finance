import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Posts from "./Containers/Posts/Posts";
import jerry from "../static/images/user.jpg";
import UserState from "../store/user-state";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "250px",
    margin: "20px 0",
  },
  button: {
    backgroundColor: "#086cdf",
    color: "#fff",
    margin: "20px 5px",
    width: "200px",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const userCTX = useContext(UserState);
  const user = userCTX.user;
  const params = useParams();
  const [following, setFollowing] = useState(
    user.following.includes(params.userid)
  );
  localStorage.setItem("searchid", params.userid);

  const followBtnClickHandler = () => {

    fetch("/addfollowing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user._id, follow: params.userid }),
    })
      .then((res) => res.json())
      .then((res) =>{
        if(res.msg === "Done"){
          if(following){
            user.following = user.following.filter(i => i !== params.userid);
          } else {
            user.following.push(params.userid);
          }
          setFollowing((prevState) => !prevState);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <img
            style={{
              height: "200px",
              width: "200px",
              margin: "1%",
              border: "2px solid #2BAE66",
              borderRadius: "20px",
            }}
            src={jerry}
            alt="profile"
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={followBtnClickHandler}
            >
              { following ? 'UnFollow': 'Follow'}
            </Button>
          </div>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Posts />
        </Grid>
      </Grid>
    </Container>
  );
}
