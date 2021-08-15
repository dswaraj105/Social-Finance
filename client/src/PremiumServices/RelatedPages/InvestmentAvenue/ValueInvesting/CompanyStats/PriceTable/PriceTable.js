import Grid from "@material-ui/core/Grid";

import cssClasses from './PriceTable.module.css';
import Pricerow from "./Pricerow/Pricerow";

const PriceTable = (props) => {

  return (
    <div>
      <Grid className={cssClasses.box} container>
        <Pricerow valarr={props.values.price} name="Price" />
        <Pricerow valarr={props.values['Mkt Cap']} name="Mkt Cap" />
        <Pricerow valarr={props.values.Vol} name="Vol" />
        <Pricerow valarr={props.values['P/E']} name="P/E" />
        <Pricerow valarr={props.values['P/CF']} name="P/CF" />
        <Pricerow valarr={props.values['EPS(TTM)']} name="EPS(TTM)" />
      </Grid>
    </div>
  );
};

export default PriceTable;
