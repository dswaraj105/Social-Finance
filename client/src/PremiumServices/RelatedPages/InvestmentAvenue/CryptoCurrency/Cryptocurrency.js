import { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";

import Nav from "./Nav/Nav";
import CryptoTable from "./CryptoTable/CryptoTable";
import cssClasses from "./CryptoCurrency.module.css";

const ValueInvesting = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    fetch("/companystats/crypto")
      .then((res) => res.json())
      .then((res) => {
        setCryptoData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Typography className={cssClasses.header} variant="h5">
        CryptoCurrency
      </Typography>
      <Nav />
      <CryptoTable data={cryptoData} />
    </Container>
  );
};

export default ValueInvesting;
