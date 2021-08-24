import { useEffect, useState } from "react";

import { Container, Typography } from "@material-ui/core";

import Nav from "./Nav/Nav";
import Row from "./Row/Row";
import cssClasses from "./MutualFunds.module.css";

const ValueInvesting = () => {
  const [type, setType] = useState("highreturns");
  const [alldata, setAllData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch("/companystats/mutualfunds")
      .then((res) => res.json())
      .then((res) => {
        setAllData(res);

        const newrows = res.filter(data => data.type === 'highreturns');
        setDisplayData(newrows);    
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangemode = (newType) => {
    setType(newType);

    const newrows = alldata.filter(data => data.type === newType);
    setDisplayData(newrows);
  };
  
  const displayDataRows = displayData.map((row, i) => {
    return (
      <Row 
        key={i}
        name={row.name}
        risk={row.risk}
        mode={row.mode}
        stars={row.stars}
        day={row['1day']}
        year={row['1year']}
        year3={row['3year']}
      />
    );
  });

  return (
    <Container>
      <Typography className={cssClasses.header} variant="h4">
        Mutual Funds
      </Typography>
      <Nav type={type} changed={onChangemode} selectedItem={type} />
      {displayDataRows}
    </Container>
  );
};

export default ValueInvesting;
