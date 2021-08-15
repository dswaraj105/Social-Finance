import Typography from "@material-ui/core/Typography";

import Logo from "../../../components/Logo/Logo";

import classes from "./Branding.module.css";

export default function Branding() {
  return (
    <div className={classes.Branding}>
      <Typography variant="h5">Welcome To Internet Of Finance</Typography>
      <div className={classes.LogoContainer}>
        <Logo className={classes.logo} />
        <div className={classes.tagline}>Yay Paiso Ki Baat Hai</div>
      </div>
      <div className={classes.desc1}>
        Join and be a part of worlds largestanf fastest growing community of
        finance
      </div>
      <div className={classes.desc2}>
        Worlds First Social Media for Finnance
      </div>
    </div>
  );
}
