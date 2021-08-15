import { Grid } from "@material-ui/core"

import cssClasses from './Nav.module.css';

const Nav = () => {
  return (
    <div className={cssClasses.Nav}>
      <Grid container>
        <Grid className={cssClasses.navitem} item xs={1}>#</Grid>
        <Grid className={[cssClasses.navitem, cssClasses.left].join(' ')} item xs={3}>Name</Grid>
        <Grid className={cssClasses.navitem} item xs={2}>Price</Grid>
        <Grid className={cssClasses.navitem} item xs={1}>24h %</Grid>
        <Grid className={cssClasses.navitem} item xs={1}>7d %</Grid>
        <Grid className={cssClasses.navitem} item xs={2}>Market Cap</Grid>
        <Grid className={[cssClasses.navitem, cssClasses.center].join(' ')} item xs={2}>Volume</Grid>
      </Grid>
    </div>
  );
};

export default Nav;