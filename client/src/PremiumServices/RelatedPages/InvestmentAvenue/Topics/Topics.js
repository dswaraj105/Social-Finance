import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Topic from "./Topic/Topic";
import cssClasses from "./Topics.module.css";
import { Hidden } from "@material-ui/core";

const Topics = () => {
  return (
    <Container >
      <Typography className={cssClasses.heading} variant="h2">
        Invest in Various Avenues
      </Typography>
      <Paper elevation={3} className={cssClasses.container}>
        <Grid container spacing={3}>
          <Hidden smDown><Grid item xs={12} md={2} /></Hidden>
          <Grid item xs={12} md={4}><Topic name="Value Investing" linkto="/service/valueinvesting" /></Grid>
          <Grid item xs={12} md={4}><Topic name="Mutual Funds" linkto="/service/mutualfunds" /></Grid>
          <Hidden smDown><Grid item xs={12} md={2} /></Hidden>
          <Grid item xs={12} md={4}><Topic name="Bonds" linkto="/service/bonds" /></Grid>
          <Grid item xs={12} md={4}><Topic name="Fixed Deposit, PPF" linkto="/service/fixeddeposit" /></Grid>
          <Grid item xs={12} md={4}><Topic name="Commodities" linkto="/service/commodities" /></Grid>
          <Hidden smDown><Grid item xs={12} md={2} /></Hidden>
          <Grid item xs={12} md={4}><Topic name="Real State" linkto="/service/realstate" /></Grid>
          <Grid item xs={12} md={4}><Topic name="Cryptocurrency" linkto="/service/cryptocurrency" /></Grid>
          <Hidden smDown><Grid item xs={12} md={2} /></Hidden>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Topics;
