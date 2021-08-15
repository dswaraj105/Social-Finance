import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import ServiceLayout from "./ServiceLayout/ServiceLayout";

import cssClasses from "./PremiumServices.module.css";

export default function PremiumServices() {
  return (
    <Container className={cssClasses.container} fixed>
      <Grid container spacing={3}>
        <ServiceLayout
          header="Financial Empowerement Courses"
          content="Financially educate yourself with our fun and engaging animated videos which teaches you everything from what is inflation, what are the different strategies people use to invest in Stock market and in other markets like real estate, etc. Educate yourself about how to utilize money smartly and create a financial independent base for yourself. "
          linkto="/service/cources"
        />
        <ServiceLayout
          header="Invest in all Investment Avenue"
          content="Tired of using different platform for buying different asset class? Now worry no more, buy from our single platform , and the best part? You don’t have to pay different premium fees for buying different asset class from different platform. All in one investment platform – Paissat."
          linkto="/service/investmentavenue"
        />
        <ServiceLayout
          header="Track Investment and Investment Portfolio Management"
          content="Are you making profit or loss? Track your investment asset class and how it is performing. Also with our investment management portfolio, manage your investment bag and maintain liquidity so that you don’t lose a good investing opportunity . Manage your investment bag with debt based , equity based financial instruments or with gold and silver."
          linkto="/service/portfolio"
        />
        <ServiceLayout
          header="Get Exclusive Reports"
          content="Get Exclusive market reports that would help you understand whats happening in finincial markets in easy to understand words"
          linkto="/service/reports"
        />
      </Grid>
    </Container>
  );
}
