import { Container, Typography } from "@material-ui/core";

import TableHeader from "./TableHeader/TableHeader";
import cssClasses from "./Commodities.module.css";
import img from "./commodities.png";
import { useEffect, useState } from "react";
import Row from "./Row/Row";

const ValueInvesting = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/companystats/commodities")
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayRows = data.map((row, i) => {
    return <Row 
      key={i}
      name={row.name}
      one={row['1_month_change']}
      twelve={row['12_month_change']}
      ytd={row.year_to_date_change}
    />
  });

  return (
    <Container>
      <Typography className={cssClasses.header} variant="h5">
        Commodities Prices
      </Typography>
      <div className={cssClasses.imagecontainer}>
        <img src={img} alt="commodities graph" className={cssClasses.image} />
      </div>
      <div className={cssClasses.table}>
        <TableHeader />
        {displayRows}
      </div>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default ValueInvesting;
