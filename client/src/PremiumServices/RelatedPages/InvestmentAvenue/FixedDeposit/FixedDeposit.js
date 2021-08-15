import { useEffect, useState } from "react";

import { Container, Typography } from "@material-ui/core";

import TableHeader from "./TableHeader/TableHeader";
import Row from "./Row/Row";
import cssClasses from "./FixedDeposit.module.css";

const FixedDeposit = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/companystats/fd")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayRows = data.map((row, i) => {
    return (
      <Row key={i} name={row.name} general={row.general} senior={row.senior} />
    );
  });

  return (
    <Container>
      <div className={cssClasses.heading}>
        <Typography variant="h4">Fixed Deposit Interest Rates 2021</Typography>
        <Typography variant="body1">
          Fixed deposit are a safe investment option that guarantees consistent
          interest rates, special interest rates for senior citizens, various
          interest payment options, and no market-related risks, with income tax
          deductions. It is important to compare the latest fixed deposit rates
          among leading banks in the country before opening a new fixed deposit
          or renewing an existing one. Here are the latest fixed deposit rates
          for the year 2021.
        </Typography>
        <br />
        <br />
        <Typography variant="h5">
          Fixed Deposit Interest Rates of Top 10 Banks in India for below Rs.2
          crore
        </Typography>
        <Typography variant="body1">
          Given below are the latest interest rates offered by top banks for
          tenures ranging from 7 days to 10 years as of July 2021.
        </Typography>
      </div>
      <div className={cssClasses.table}>
        <TableHeader />
        {displayRows}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};

export default FixedDeposit;
