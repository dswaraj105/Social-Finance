import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import CourcesTitle from "./CourseTitle/CourcesTitle";

const FinincialEmpowerment = React.lazy(() =>
  import("./Cources/FinincialEmpowerment")
);
const FinincialInteligence = React.lazy(() =>
  import("./Cources/FinincialInteligence")
);
const FinincialLitreacy = React.lazy(() =>
  import("./Cources/FinincialLetracy")
);
const Assets = React.lazy(() => import("./Cources/Assets"));
const StockMarket = React.lazy(() => import("./Cources/StockMarket"));
const Trading = React.lazy(() => import("./Cources/Trading"));
const ValueInvesting = React.lazy(() => import("./Cources/ValueInvesting"));
const Bonds = React.lazy(() => import("./Cources/Bonds"));
const MutualFunds = React.lazy(() => import("./Cources/MutualFund"));
const RealState = React.lazy(() => import("./Cources/RealState"));
const Commodities = React.lazy(() => import("./Cources/Commodities"));
const FixedDeposit = React.lazy(() => import("./Cources/FixedDeposit"));
const PPF = React.lazy(() => import("./Cources/PPF"));
const Insurance = React.lazy(() => import("./Cources/Insurance"));
const Diversification = React.lazy(() => import("./Cources/Diversification"));
const AssetBubble = React.lazy(() => import("./Cources/AssetBubble"));
const ForeignMarketExchange = React.lazy(() =>
  import("./Cources/ForeignMarketExchange")
);
const Crypto = React.lazy(() => import("./Cources/CryptoCurrency"));

const COURCES = [
  "Finincial Empowerment",
  "Finincail Intelegence & Finincial IQ",
  "Finincial Letreacy",
  "Asset And Investment Avenue",
  "Stock Market",
  "Trading",
  "Value Investing",
  "Bond & Bond Yield",
  "Mutual Funds",
  "Real State",
  "Commodities",
  "Fixed Deposit",
  "Public Provident Fund(PPF)",
  "Insurane",
  "Diversification And Investment Philosophy",
  "Asset Bubble",
  "Foreign Market Exchange",
  "Crypto Currency",
];

const FinanceCources = () => {
  const history = useHistory();

  const startCourseHandler = (course, id) => {
    history.push(`/service/cources/${id}`);
  };

  return (
    <Container>
      <Switch>
        <Route path="/service/cources" exact>
          <Typography variant="h3">
            Get Finincally Educated With Paisaat
          </Typography>
          <Typography variant="body1">
            We present you a step by step guide to you to be finincally
            empowered.
          </Typography>
          <CourcesTitle cources={COURCES} courseClicked={startCourseHandler} />
        </Route>
        <Route path="/service/cources/1">
          <FinincialEmpowerment />
        </Route>
        <Route path="/service/cources/2">
          <FinincialInteligence />
        </Route>
        <Route path="/service/cources/3">
          <FinincialLitreacy />
        </Route>
        <Route path="/service/cources/4">
          <Assets />
        </Route>
        <Route path="/service/cources/5">
          <StockMarket />
        </Route>
        <Route path="/service/cources/6">
          <Trading />
        </Route>
        <Route path="/service/cources/7">
          <ValueInvesting />
        </Route>
        <Route path="/service/cources/8">
          <Bonds />
        </Route>
        <Route path="/service/cources/9">
          <MutualFunds />
        </Route>
        <Route path="/service/cources/10">
          <RealState />
        </Route>
        <Route path="/service/cources/11">
          <Commodities />
        </Route>
        <Route path="/service/cources/12">
          <FixedDeposit />
        </Route>
        <Route path="/service/cources/13">
          <PPF />
        </Route>
        <Route path="/service/cources/14">
          <Insurance />
        </Route>
        <Route path="/service/cources/15">
          <Diversification />
        </Route>
        <Route path="/service/cources/16">
          <AssetBubble />
        </Route>
        <Route path="/service/cources/17">
          <ForeignMarketExchange />
        </Route>
        <Route path="/service/cources/18">
          <Crypto />
        </Route>
      </Switch>
    </Container>
  );
};

export default FinanceCources;
