import { Hidden } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import Logo from "../../../components/Logo/Logo";

import classes from "./Branding.module.css";

export default function Branding() {
  return (
    <div className={classes.Branding}>
      <Hidden smDown>
      <Typography variant="h5">Welcome To Internet Of Finance</Typography>
      <div className={classes.LogoContainer}>
        <Logo className={classes.logo} />
        <div className={classes.tagline}>Yay Paiso Ki Baat Hai</div>
      </div>
      </Hidden>
      <div className={classes.desc1}>
        Join and be a part of worlds largest and fastest growing community of
        finance
      </div>
      <div className={classes.desc2}>
        Worlds first social media for finance
      </div>
    </div>
  );
}
