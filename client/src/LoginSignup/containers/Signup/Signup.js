import React, { Fragment, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";

import useInput from "../../hooks/use-input";
import userState from "../../../store/user-state";

import classes from "./Signup.module.css";

export default function Signup() {
  const userCTX = useContext(userState);
  const history = useHistory();
  const params = useParams();

  const {
    value: enteredName,
    hasError: nameError,
    isValid: nameIsValid,
    valueChangedHandler: nameChangreHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((val) => val.trim() !== "");

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
  } = useInput((val) => val.length > 6);

  const {
    value: reenteredPassword,
    hasError: reEnteredPasswordError,
    isValid: reEnteredPasswordIsValid,
    valueChangedHandler: reENteredPasswordChangeHandler,
    inputBlurHandler: reEnteredPasswordBlurHandler,
  } = useInput((val) => val === enteredPassword);

  // State for agree check
  const [checked, setChecked] = React.useState(false);

  //HAndling event checked Handler
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Form submitting Handler
  const submitFormHandler = (e) => {
    e.preventDefault();

    // MAking every state touched
    nameBlurHandler();
    emailBlurHandler();
    passwordBlurHandler();
    reEnteredPasswordBlurHandler();

    // Checking for input validity
    if (
      nameIsValid &&
      emailIsValid &&
      passwordIsValid &&
      reEnteredPasswordIsValid
    ) {
      if (checked) {
        // Making a post request to the server
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res._id) {
              userCTX.onLogin(res);
              console.log(res);
              localStorage.setItem("username", res.name);
              localStorage.setItem("useremail", res.email);
              localStorage.setItem("userID", res._id);
              history.push("/app/home");
            }
            if (res.msg) {
              console.log("Directing to error signup for", res.msg);
              history.push(`/loginsignup/signup/${res.msg}`);
            }
          })
          .catch((err) => {
            console.log("got err");
            console.log(err);

            // for a 400 error direct to an error page
            // history.push("/error");
          });
      }

      return;
    }

    // Yet to handle front end for incorrect inputs
    console.log("Something is wrong");
  };

  // Fetching info for "Learn More"
  const learnMoreClick = () => {
    console.log("learn more");
    history.push('/app/about');
  };

  let errorDisplay;
  let styles;

  if (params.err) {
    errorDisplay = (
      <div className={classes.errorDiv}>This email is allready used please try a different one</div>
    );

    styles = {
      margin: "auto",
    };
  }

  return (
    <Fragment>
      {errorDisplay}
      <Paper style={styles} elevation={3} className={classes.Signup}>
        <Card className={classes.card} style={{backgroundColor: '#2BAE66', boxShadow: '3px 3px 2px 3px #888'}}>
          <CardContent>
          <Typography variant="h5" color="textSecondary" gutterBottom>
              Don't have an account Yet? 
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Connect With us!
            </Typography>

            <form noValidate autoComplete="off" onSubmit={submitFormHandler}>
              <TextField
                name="name"
                className={classes.input}
                label="Name"
                value={enteredName}
                onChange={nameChangreHandler}
                onBlur={nameBlurHandler}
                error={nameError}
                required
              />
              <TextField
                name="email"
                className={classes.input}
                label="Email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                error={emailError}
                required
              />
              <TextField
                name="password"
                className={classes.input}
                label="Password"
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
                error={passwordHasError}
                required
              />
              <TextField
                name="repassword"
                className={classes.input}
                label="Re-type Password"
                type="password"
                value={reenteredPassword}
                onChange={reENteredPasswordChangeHandler}
                onBlur={reEnteredPasswordBlurHandler}
                error={reEnteredPasswordError}
                required
              />

              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    }
                    label="I agree to all of terms of use"
                    labelPlacement="end"
                  />
                </FormGroup>
              </FormControl>

              <div className={classes.btnsContainer}>
                <Button variant="contained" size="small" type="submit">
                  Signup
                </Button>
                <Button size="small" onClick={learnMoreClick}>
                  Learn More
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Paper>
    </Fragment>
  );
}
