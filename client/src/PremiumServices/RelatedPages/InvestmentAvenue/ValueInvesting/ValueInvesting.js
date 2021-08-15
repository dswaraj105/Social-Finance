import { useState } from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import SelectBox from "./SelectBox/SelectBox";
import CompanyStats from "./CompanyStats/CompanyStats";
import cssClasses from "./ValueInvesting.module.css";

const ValueInvesting = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyData, setCompanyData] = useState(null);
  // const [error, setError] = useState(false);

  const handleChange = (event) => {
    setCompanyName(event.target.value);
    fetchCompanyStats(event.target.value)
;  };

  const fetchCompanyStats = (name) => {
    setCompanyData(null);
    fetch(`/companystats/investing/${name}`)
      .then((res) => res.json())
      .then((res) => {

        setCompanyData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Typography variant="h4" className={cssClasses.heading}>
        Seach Company history
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SelectBox handleChange={handleChange} value={companyName} />
      </div>
      {companyData && <CompanyStats data={companyData} />}
      {}
    </Container>
  );
};

export default ValueInvesting;
