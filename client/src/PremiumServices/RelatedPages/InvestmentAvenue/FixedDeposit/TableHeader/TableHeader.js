import { Grid } from "@material-ui/core";
import cssClasses from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <Grid container>
      <Grid item className={cssClasses.grid} sm={6}>Name of Bank</Grid>
      <Grid item className={cssClasses.grid} sm={3}>For General Citizens (p.a.)</Grid>
      <Grid item className={cssClasses.grid} sm={3}>For Senior Citizens (p.a)</Grid>
    </Grid>
  );
};

export default TableHeader;
