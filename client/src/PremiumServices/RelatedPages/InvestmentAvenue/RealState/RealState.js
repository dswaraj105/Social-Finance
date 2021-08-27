import { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";

import Nav from "./Nav/Nav";
import Property from "./Property/Property";
import cssClasses from "./RealState.module.css";

// Importing all images
import sale1 from './images/sale1.png';
import sale2 from './images/sale2.png';
import sale3 from './images/sale3.png';
import sale4 from './images/sale4.png';
import sale5 from './images/sale5.png';
import rent1 from './images/rent1.png';
import rent2 from './images/rent2.png';
import rent3 from './images/rent3.png';
import rent4 from './images/rent4.png';
import rent5 from './images/rent5.png';
import csale1 from './images/csale1.png';
import csale2 from './images/csale2.png';
import csale3 from './images/csale3.png';
import csale4 from './images/csale4.png';
import csale5 from './images/csale5.png';
import crent1 from './images/crent1.png';
import crent2 from './images/crent2.png';
import crent3 from './images/crent3.png';
import crent4 from './images/crent4.png';
import crent5 from './images/crent5.png';

const imagesObj = {
  sale1,
  sale2,
  sale3,
  sale4,
  sale5,
  rent1,
  rent2,
  rent3,
  rent4,
  rent5,
  csale1,
  csale2,
  csale3,
  csale4,
  csale5,
  crent1,
  crent2,
  crent3,
  crent4,
  crent5
}

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
        // img={property.imageurl}
        listedby={property.listedby}
        listedon={property.listedon}
        price={property.price}
        rate={property.rate}
        status={property.status}
        img={imagesObj[property.imageurl]}
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
