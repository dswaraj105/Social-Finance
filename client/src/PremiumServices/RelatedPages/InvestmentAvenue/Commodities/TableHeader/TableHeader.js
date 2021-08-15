import { Grid } from "@material-ui/core";
import cssClasses from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <Grid container>
      <Grid item className={cssClasses.grid} sm={5}>Commodity</Grid>
      <Grid item className={cssClasses.grid} sm={2}>1 Month Change</Grid>
      <Grid item className={cssClasses.grid} sm={2}>12 Month Change</Grid>
      <Grid item className={cssClasses.grid} sm={3}>Year To Date Change</Grid>
    </Grid>
  );
};

export default TableHeader;
