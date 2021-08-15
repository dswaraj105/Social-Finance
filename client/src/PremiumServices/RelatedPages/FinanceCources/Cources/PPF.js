import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import cssClasses from './Border.module.css'; 

export default function PPF() {
  return (
    <Container>
      <Typography variant="h3">
      Public Provident Fund(PPF)	
      </Typography>
      <br />
      <Typography variant="body1">


      Public Provident are also another saving scheme with better interest rate. The difference from FDs is that the interest rate of Public Provident fund is not dependent on repo rate of RBI. The public provident fund is tax free, which means you don’t have to pay taxes on the interest earned via PPF. The interest rate charge does not differ from banks to banks. All banks offer PPF at same interest rate which is set by government of India.
      </Typography>
      <br />
      <Typography variant="body1">
      PPF are another saving scheme. In PPF an investor is locked up to 15 years normally and keeps on adding money annually with a maximum limit of contribution to Rs, 1,50,000 and a minimum limit of Rs. 500 annually. After 5 years or so, one can break his PPF but that will attract penalty. Before 5 years an investor can only contribute, not withdraw from its PPF account. PPF account is designed more for retirement needs, that’s why such a long time period.  After the end of 15 year tenure, an investor can continue the PPF for another 5 years. 
      </Typography>
      <br />
      <Typography variant="body1">
      PPF rate is set by Government Of India. Currently at the time of writing this book it is 7.10%. 
      </Typography>
      <br />
      <Typography variant="body1">
      Let us study and compare PPF and FD via a table.
      </Typography>
      <br />
        <Grid container className={cssClasses.gridContainer} >
          <Grid item className={cssClasses.border} sm={4}></Grid>
          <Grid item className={cssClasses.border} sm={4}>FD</Grid>
          <Grid item className={cssClasses.border} sm={4}>PPF</Grid>

          <Grid item className={cssClasses.border} sm={4}>Time Period</Grid>
          <Grid item className={cssClasses.border} sm={4}>10 days to 10 years</Grid>
          <Grid item className={cssClasses.border} sm={4}>15 years</Grid>

          <Grid item className={cssClasses.border} sm={4}>Rate of Intrest</Grid>
          <Grid item className={cssClasses.border} sm={4}>5-5.70%</Grid>
          <Grid item className={cssClasses.border} sm={4}>7.10%</Grid>

          <Grid item className={cssClasses.border} sm={4}>Withdrawal before Maturity</Grid>
          <Grid item className={cssClasses.border} sm={4}>Can break anytime with penalty</Grid>
          <Grid item className={cssClasses.border} sm={4}>Lock in period of 5years</Grid>

          <Grid item className={cssClasses.border} sm={4}>Tax Benefit</Grid>
          <Grid item className={cssClasses.border} sm={4}>Tax deduction of 1.5 lakh after 5years</Grid>
          <Grid item className={cssClasses.border} sm={4}>Tax Free</Grid>

          <Grid item className={cssClasses.border} sm={4}>Safety</Grid>
          <Grid item className={cssClasses.border} sm={4}>Bank Backed</Grid>
          <Grid item className={cssClasses.border} sm={4}>Government Backed</Grid>

          <Grid item className={cssClasses.border} sm={4}>Investment Amount</Grid>
          <Grid item className={cssClasses.border} sm={4}>No. Limit </Grid>
          <Grid item className={cssClasses.border} sm={4}>Upto 1.5 lakh maximum Annually</Grid>
        </Grid>
      <br />
      <Typography variant="body1">
      You can take maximum advantage of such saving scheme by using compound interest in your favour. What is compound interest? Its interest on interest. For example if you invest in asset and that asset gave you a return of 8 % and then you again reinvest the principal amount plus the interest you gain back into the asset to earn an interest on the interest. So if at first you earn 8 rupees extra , in the next time, you will earn more than 8 rupees on your interest and it will keep on increasing until unless you are invested compounded. And hence a chain of interest on interest will form. Keep in mind that inflation also works in compound interest so whatever you earn by compound interest in Savings schemes, that will be eroded by inflation. What I mean to say is that if you invest 1000 rupees at 8 % interest rate annually for 10 years at compound interest, then at end of ten years you will have 2,158 rupees. But at the same time, if the inflation rate also stays at 8 % , then you actually have not earned any money. The compound interest on your earnings has just maintained your purchasing power in bank balance. If 10 years before you could buy 10 apples with 1000 rupees, after 10 years of inflation rate same as your earned interest rate, you can buy 10 apples with 2,158 rupees.  Because inflations raise the prices of goods and services as we learned before. Also in FD, when you take out withdrawal after the tenure has ended, government will tax you and so you will lose more rather than gain from saving schemes. And it’s not that inflation rate will stay same every year. What would happen if it rises? Then you will get poorer. What will happen if inflation rates declines and your earning interest is higher than inflation rate (which in India it currently is)? Then yes that’s a condition where you will earn extra money and get rich. 
      </Typography>
      <br />
      <Typography variant="body1">
      So decide for yourself according to your own convenience and financial intelligence whether you want to invest in saving schemes or not. If you decide to invest in saving schemes, do keep an eye on inflation rate of the country you reside in and compare that with the interest rate you are earning from the saving schemes. 
      </Typography>
      <br />
      <Typography variant="body1">
      Saving schemes are guaranteed and risk free investment, but yes that “risk free investment” tag comes at the cost of lower rate of returns. But still saving schemes plays an important role in investment portfolio of a person.
      </Typography>
      <br />
      <Typography variant="body1">
      Let’s move on to the next investment avenue , Insurances.
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </Container>
  );
}
