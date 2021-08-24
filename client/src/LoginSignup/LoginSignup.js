// import { useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';

import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import Branding from "./components/Branding/Branding";
import TopSection from "./components/Branding/TopSection";
import classes from "./LoginSignup.module.css";

import Container from "@material-ui/core/Container";
import { Hidden } from "@material-ui/core";

const LoginSignup = () => {
  return (
    <div className={classes.LoginSignup}>
      <Hidden smUp>
        <TopSection />
      </Hidden>
      <br />
      <Container>
        <div className={classes.topSection}>
          <Login />
        </div>
        <div className={classes.bottomsection}>
          <Signup />
          <Branding />
        </div>
      </Container>
    </div>
  );
};

export default LoginSignup;
