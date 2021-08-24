import Typography from "@material-ui/core/Typography";

import Logo from "../../../components/Logo/Logo";

import classes from "./Branding.module.css";

const TopSection = () => {
  return (
    <div className={classes.Branding}>
      <Typography variant="h5" className={classes.top}>Welcome To Internet Of Finance</Typography>
      <div className={classes.LogoContainer}>
        <Logo className={classes.logo} />
        <div className={classes.tagline}>Yay Paiso Ki Baat Hai</div>
      </div>
    </div>
  );
};

export default TopSection;