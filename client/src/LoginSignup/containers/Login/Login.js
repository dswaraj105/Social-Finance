import React, { Fragment, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import useInput from "../../hooks/use-input";
import UserState from "../../../store/user-state";

import classes from "./Login.module.css";

export default function Login() {
  const userCTX = useContext(UserState);
  const history = useHistory();
  const params = useParams();

  const {
    value: enteredEmail,
    hasError: emailError,
    isValid: emailIsValid,
    valueChangedHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((val) => val.includes("@"));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangedHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((val) => val.length > 0);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    emailBlurHandler();
    passwordBlurHandler();

    if (emailIsValid && passwordIsValid) {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res._id) {
            userCTX.onLogin(res);
            localStorage.setItem("username", res.name);
            localStorage.setItem("useremail", res.email);
            localStorage.setItem("userID", res._id);
            history.push("/app/home");
          }
          if (res.msg) {
            history.replace(`/loginsignup/login/${res.msg}`);
          }
        })
        .catch((err) => {
          console.log(err);
          // redirect to an 404 error page
          // history.push('/error')
        });

      return;
    }

    console.log("Something went wrong in user fields or server not working");
  };

  let errorsDisplay;

  if (params.err) {
    errorsDisplay = <div className={classes.errorDiv}>{params.err}</div>;
  }

  return (
    <Fragment>
      {errorsDisplay}
      <Paper elevation={3} className={classes.Login}>
        <Card className={classes.card} style={{backgroundColor: '#2BAE66', boxShadow: '4px 4px 4px 4px #888'}}>
          <CardContent>
            <form noValidate autoComplete="off" onSubmit={formSubmitHandler}>
              <TextField
                className={classes.input}
                id="standard-basic"
                label="Email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                error={emailError}
              />
              <TextField
                className={classes.input}
                label="Password"
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                error={passwordHasError}
              />
              <div className={classes.btnsContainer}>
                <Button variant="contained" size="small" type="submit">
                  Login
                </Button>
                <Button size="small">Forgot Password?</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Paper>
    </Fragment>
  );
}
