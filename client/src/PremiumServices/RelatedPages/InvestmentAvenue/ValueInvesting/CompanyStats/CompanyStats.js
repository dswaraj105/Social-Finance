import cssClasses from "./CompanyStats.module.css";
import PriceTable from "./PriceTable/PriceTable";
import DataTable from "./DataTable/DataTable";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import ShareHolding from "./ShareHolding/ShareHolding";
import { Grid } from "@material-ui/core";

const CompanyStats = (props) => {

  if (!props.data) {
    return <p>No data</p>;
  }

  return (
    <div className={cssClasses.CompanyStats}>
      <div className={cssClasses.company}> {props.data.name} FACT SHEET</div>
      <div className={cssClasses.header}> {props.data.name} PRICE HISTORY</div>
      <div className={cssClasses.table1}>
        <PriceTable values={props.data['price history']} />
      </div>
      <h4 className={cssClasses.subHeader}> {props.data.name} Finincials</h4>
      <Grid container className={cssClasses.label}>
        <Grid item className={cssClasses.labelitem} sm={7}>
          <div>No. of Months</div>
          <div>Year Ending</div>
        </Grid>
        <Grid item className={cssClasses.labelitem} sm={1}>
          <div>12</div>
          <div>Mar-17*</div>
        </Grid>
        <Grid item className={cssClasses.labelitem} sm={1}>
          <div>12</div>
          <div>Mar-18*</div>
        </Grid>
        <Grid item className={cssClasses.labelitem} sm={1}>
          <div>12</div>
          <div>Mar-19*</div>
        </Grid>
        <Grid item className={cssClasses.labelitem} sm={1}>
          <div>12</div>
          <div>Mar-20*</div>
        </Grid>
        <Grid item className={cssClasses.labelitem} sm={1}>
          <div>12</div>
          <div>Mar-21*</div>
        </Grid>
      </Grid>
      <div className={cssClasses.table2}>
        <DataTable tablename={`${props.data.name} EQUITY SHARE DATA`} values={props.data['equity share data']} /> <br />
        <DataTable tablename={`${props.data.name} INCOME DATA`} values={props.data['income data']} /> <br />
        <DataTable tablename={`${props.data.name} BALANCE SHEET DATA`} values={props.data['balance sheet data']} /> <br />
        <DataTable tablename={`${props.data.name} CASH FLOW`} values={props.data['cash flow']} /> <br />
      </div>
      
      <div className={cssClasses.table3}>
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <ShareHolding values={props.data['share holding']} />
          </Grid>
          <Grid item sm={5}>
            <CompanyInfo values={props.data['company information']} />
          </Grid>
        </Grid>
      </div>
      <br /> <br /> <br /> <br />
    </div>
  );
};

export default CompanyStats;
