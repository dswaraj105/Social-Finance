import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Topic from "./Topic/Topic";
import cssClasses from "./Topics.module.css";

const Topics = () => {
  return (
    <Container >
      <Typography className={cssClasses.heading} variant="h2">
        Invest in Various Avenues
      </Typography>
      <Paper elevation={3} className={cssClasses.container}>
        <Grid container spacing={3}>
          <Grid item xs={2} />
          <Topic name="Value Investing" linkto="/service/valueinvesting" />
          <Topic name="Mutual Funds" linkto="/service/mutualfunds" />
          <Grid item xs={2} />
          <Topic name="Bonds" linkto="/service/bonds" />
          <Topic name="Fixed Deposit, PPF" linkto="/service/fixeddeposit" />
          <Topic name="Commodities" linkto="/service/commodities" />
          <Grid item xs={2} />
          <Topic name="Real State" linkto="/service/realstate" />
          <Topic name="Cryptocurrency" linkto="/service/cryptocurrency" />
          <Grid item xs={2} />
        </Grid>
      </Paper>
    </Container>
  );
};

export default Topics;
