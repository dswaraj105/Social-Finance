import { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";

import BondsNav from "./BondsNav/BondsNav";
import Bond from "./Bond/Bond";
import cssClasses from "./Bonds.module.css";

const Bonds = () => {
  const [bondType, setBondType] = useState("all");
  const [allbondsData, setBondsData] = useState([]);
  const [displayBondsData, setDisplayBondsData] = useState([]);

  useEffect(() => {
    fetch("/companystats/bonds")
      .then((res) => res.json())
      .then((res) => {
        setDisplayBondsData(res);
        setBondsData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayBonds = displayBondsData.map((bond, i) => {
    return (
      <Bond
        key={i}
        name={bond.cname}
        rate={bond.couponRate}
        faceValue={bond.faceValue}
        lasttrade={bond.lasttrade}
        maturity={bond.maturity}
        rating={bond.rating}
      />
    );
  });

  const changeBondType = (type) => {

    if(type === 'all'){
      setDisplayBondsData(allbondsData);
      return;
    }
    
    if(bondType !== type) {
      setBondType(type);
      const newset = allbondsData.filter(bond => bond.type === type);
      setDisplayBondsData(newset);
    }
    
  };

  return (
    <Container>
      <Typography className={cssClasses.heading} variant="h5">
        Bonds
      </Typography>
      <BondsNav changed={changeBondType} type={bondType} />
      {displayBonds}
    </Container>
  );
};

export default Bonds;
