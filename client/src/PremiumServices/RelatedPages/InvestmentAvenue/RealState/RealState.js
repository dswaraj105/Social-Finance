import { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";

import Nav from "./Nav/Nav";
import Property from "./Property/Property";
import cssClasses from "./RealState.module.css";

const ValueInvesting = () => {
  const [propertyType, setPropertyType] = useState("residential");
  const [mode, setMode] = useState("sale");
  const [allProperties, setAllProperties] = useState([]);
  const [modeProperties, setmodeProperties] = useState([]);

  useEffect(() => {
    fetch("/companystats/properties")
      .then((res) => res.json())
      .then((res) => {
        setAllProperties(res);
        const newp = res.filter(
          (p) => p.mode === "sale" && p.type === "residential"
        );
        // console.log(newp);
        setmodeProperties(newp);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeSelect = (event) => {
    setPropertyType(event.target.value);

    const newp = allProperties.filter(
      (p) => p.mode === mode && p.type === event.target.value
    );

    setmodeProperties(newp);
  };

  const modeChangeHandler = (newmode) => {
    if (mode === newmode) {
      return;
    }

    setMode(newmode);

    const newp = allProperties.filter(
      (p) => p.mode === newmode && p.type === propertyType
    );

    setmodeProperties(newp);
  };

  const displayProperties = modeProperties.map((property, index) => {
    return (
      <Property
        key={index}
        title={property.title}
        location={property.location}
        area={property.area}
        img={property.imageurl}
        listedby={property.listedby}
        listedon={property.listedon}
        price={property.price}
        rate={property.rate}
        status={property.status}
      />
    );
  });

  return (
    <Container>
      <Typography className={cssClasses.heading} variant="h5">
        Best Place to Trade Your Real State
      </Typography>
      <Nav
        handleChange={handleChangeSelect}
        modeChange={modeChangeHandler}
        type={propertyType}
        mode={mode}
      />

      {displayProperties}
    </Container>
  );
};

export default ValueInvesting;
