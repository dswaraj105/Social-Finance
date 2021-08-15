import { Paper, Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExtensionIcon from "@material-ui/icons/Extension";

import cssClasses from "./Property.module.css";
import img from "./property.png";


const Property = (props) => {
  return (
    <Paper elevation={3} className={cssClasses.Property}>
      <img src={img} alt="property" className={cssClasses.propertyImg} />
      <div className={cssClasses.content}>
        <div>
          <Typography variant="button" display="block">
            {props.title}
          </Typography>
          <Chip
            icon={<LocationOnIcon />}
            variant="outlined"
            label={props.location}
            size="small"
            clickable
            color="primary"
          />
        </div>
        <div className={cssClasses.area}>
          <ExtensionIcon />
          {props.area} Sq. Ft.
          <span className={cssClasses.price}>
            Rs. {props.price} <i>({props.rate} per Sq. Ft.)</i>
          </span>
        </div>
        <div className={cssClasses.listingdesc}>
          <Chip
            variant="outlined"
            size="small"
            label={`Possession ${props.status}`}
          />
          <Chip
            variant="outlined"
            size="small"
            label={`Listed On ${props.listedon}`}
          />
          <Chip
            variant="outlined"
            size="small"
            label={`Listed By ${props.listedby}`}
          />
        </div>
      </div>
    </Paper>
  );
};
export default Property;
